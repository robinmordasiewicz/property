/**
 * MDN Object.assign polyfill
 * @copyright Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
 *
 */
if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object')
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
            }
            return to
        }, writable: !0, configurable: !0
    })
}

/**
 * Munchkin Cross-Domain Client Logic
 * @version v1 2020-02-27
 * @author swhiteman
 *
 */
window.MunchkinXD = {
    MESSAGE_NS : "1.3.6.1.4.1.26100.messages.simpledto.munchkin",
    PRODUCT_NAME: "Munchkin XD",
    Util: {
        /**
         * Mini value-equals wrapper
         *
         * @param obj1 {Object}
         * @param obj2 {Object}
         * @param keySet {Array}
         * @returns {boolean}
         */
        objectValsEqual: function (obj1, obj2, keySet) {
            keySet = keySet || Object.keys(obj1).concat(Object.keys(obj2));
            return keySet.every(function (key) {
                return obj1[key] === obj2[key];
            });
        },

        locationFromHref: function (href) {
            const loc = document.createElement("a");
            loc.href = href;
            return loc;
        },

        /**
         * Browsers have different habits with well-known ports - some suppress, some show
         * this forces to always show
         *
         * @param loc {Location}
         * @returns {Location}
         */
        normalizeLocationProps: function (loc) {
            const wkpByProtocol = {
                "http:": "80",
                "https:": "443"
            };
            loc.explicitPort = loc.port || wkpByProtocol[loc.protocol] || "";
            loc.explicitOrigin = [loc.protocol, "//", loc.hostname, ":", loc.explicitPort].join("");
            return loc;
        },

        /**
         * Find a Location in a bunch of norm'd Locations
         * offers an explicit origin match *plus* the ability to match a cookie-like leading dot in hostname
         * so ("https://www.codepen.io",["https://.codepen.io"]) is true
         *
         * @param url {Location|String}
         * @param allowedOrigins {Array}
         * @returns {boolean}
         */
        isOriginAllowed: function (url, allowedOrigins) {
            const matchableLoc = url instanceof Location ? url : MunchkinXD.Util.locationFromHref(url);
            MunchkinXD.Util.normalizeLocationProps(matchableLoc);

            return allowedOrigins.some(function (originMask) {
                const maskLoc = MunchkinXD.Util.locationFromHref(originMask);
                MunchkinXD.Util.normalizeLocationProps(maskLoc);

                const exactMatchComponents = ["protocol", "explicitPort"]; // these are always strict equals

                if (/^\./.test(maskLoc.hostname)) { // endsWith mode
                    return MunchkinXD.Util.objectValsEqual(matchableLoc, maskLoc, exactMatchComponents) &&
                        maskLoc.hostname === matchableLoc.hostname.slice(-maskLoc.hostname.length);
                } else { // equals mode
                    return maskLoc.explicitOrigin === matchableLoc.explicitOrigin;
                }
            });

        },

        /**
         * parse innards of data block into live XML doc
         *
         * @param scriptStor {String} - CSS selector
         * @returns {Document}
         */
        xmlDocFromScript: function (scriptStor) {
            const fieldsRaw = document.querySelector(scriptStor).text;
            return (new DOMParser).parseFromString(fieldsRaw, "application/xml");
        },


        /**
         * Window.stop() is *sometimes* allowed to work XD, but differs even b/t versions of same browser!
         * n.b. we ignore frequently cited IE alternative `execCommand` b/c it *never* works XD
         *
         * @param iframeEl {Element}
         * @void
         **/
        stopInProgIFrame: function (iframeEl) {
            try {
                iframeEl.contentWindow.stop && iframeEl.contentWindow.stop();
            } catch (e) {
            }
        }

    },
    /**
     * The `send` side runs in a Marketo LP
     * It first parses a specially constructed XML string inside a <script> data block to deal with Marketo's insistence on HTML-encoding tokens
     * then it finds the JSON stored in a {{lead.token}}, hydrates it into a JS object, and `postMessage`-s it to the parent receiver
     *
     * @param options {Object}
     */
    send : function(options){
        const defaults = {
            xmlCollectionName: "mktoRelayFields_01",
            xmlFieldName: "munchkinTokenListJSON__c",
            allowedOrigins: []
        };

        options = Object.assign(defaults, options);

        const fieldsDoc = MunchkinXD.Util.xmlDocFromScript(".dto-xml[data-field-collection='"+ options.xmlCollectionName + "']"),
            munchkinTokenJSON = fieldsDoc.documentElement.querySelector("mktoField[inputName='" + options.xmlFieldName + "']").textContent,
            munchkinTokenObj = JSON.parse(munchkinTokenJSON);

        const refLoc = MunchkinXD.Util.locationFromHref(document.referrer);
        MunchkinXD.Util.normalizeLocationProps(refLoc);

        if (MunchkinXD.Util.isOriginAllowed(refLoc,options.allowedOrigins) && munchkinTokenObj) {
            if ( window.parent !== window.self ) {
                window.parent.postMessage(
                    {
                        oid: MunchkinXD.MESSAGE_NS,
                        payload: munchkinTokenObj
                    },
                    refLoc.explicitOrigin
                )
            }
        }

    },
    /**
     * The `receive` side runs in an "API consumer" page - that's a Marketo LP *or* an external website
     * Opens multiple hidden IFRAMEs, one for each private domain (with a Marketo Domain Alias) that may have an existing associated session
     * When it receives a non-empty postMessage payload, w/an identifying OID, and only if it's from a valid origin
     * it then passes that payload into Munchkin.munchkinFunction("associateLead")
     *
     * @param options {Object}
     */
    receive: function (options) {
        const defaults = {
            endpoints: [],
            lastAttemptAgeSS: 3600,
            allowedOrigins: [],
            startupLog: true,
            ongoingLogs: true
        };

        options = Object.assign(defaults, options);

        const lastAttemptTS = sessionStorage["munchkinXDLastAttemptTS"],
            lastAttemptIsFresh = (new Date().getTime() - lastAttemptTS) < (options.lastAttemptAgeSS * 1000);

        const arrayify = getSelection.call.bind([].slice),
            emptyFn = function () {
            },
            abstractLog = function (level, prefix, message) {
                console[level].apply(console, arrayify(arguments).slice(1));
            },
            log = {
                term: options.ongoingLogs ? abstractLog.bind(console, "log", MunchkinXD.PRODUCT_NAME + ": ") : emptyFn
            };

        if (options.startupLog) {
            console.log(MunchkinXD.PRODUCT_NAME + ": ", "Effective options", JSON.stringify(options, null, 2));
        }

        let isTokenReceived = false;

        if (lastAttemptIsFresh) {
            log.term("Last attempt is fresh, min delay is",options.lastAttemptAgeSS,"seconds")
            return;
        }

        const siblingIframes = options.endpoints.map(function (ep) {
            const iframeEl = document.createElement("iframe");
            iframeEl.src = ep;
            iframeEl.style.display = "none";
            return iframeEl;
        });

        window.addEventListener("message", function (e) {
                if (e.data.oid === MunchkinXD.MESSAGE_NS && !isTokenReceived) {
                    log.term("Inspecting message from claimed sibling.", JSON.stringify(e.data, null, 2))

                    if (MunchkinXD.Util.isOriginAllowed(e.origin, options.allowedOrigins)) {
                        log.term("Message from valid sibling, continuing.");
                        sessionStorage["munchkinXDLastAttemptTS"] = new Date().getTime();

                        if (e.data.payload.token && e.data.payload.email) {
                            log.term("Token has expected properties, continuing.")

                            isTokenReceived = true;

                            if (window.Munchkin) {
                                log.term("Running associateLead.");
                                Munchkin.munchkinFunction("associateLead", {"Email": e.data.payload.email}, e.data.payload.token);
                            } else {
                                log.term("Ready to run associateLead, though Munchkin object not present.");
                            }

                            /* good faith effort to stop additional loads once we have an answer */
                            siblingIframes.forEach(MunchkinXD.Util.stopInProgIFrame);
                        } else {
                            log.term("Token missing one or more expected properties.")
                        }
                    } else {
                        log.term("Message not from valid sibling!");
                    }
                }
            }
        )
        ;

        siblingIframes.forEach(function (iframeEl) {
            document.body.appendChild(iframeEl);
        });

    }
};