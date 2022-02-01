let startHash = window.location.hash;

let startTarget = startHash.substring(1, startHash.length);

window.global_clicked = false;

$(window).on("load", function () {
    if (startTarget.length > 0) {
        if ($("#" + startTarget).length > 0) {
            scrollToTarget($("#" + startTarget), false);
        }
    }

    if (findGetParameter("section") != null) {
        let xfName = findGetParameter("section");
        if ($("[data-section='" + xfName + "']").length > 0) {
            scrollToTarget($("[data-section='" + xfName + "']"), false);
        }
    } else if (typeof $("link[rel=canonical]").attr("href") != "undefined") {
        let url = location.href.split('?')[0];
        if (
            $("link[rel=canonical]").attr("href").length > 0 &&
            $("link[rel=canonical]").attr("href").length < url.length
        ) {
            // it is to support dispatcher url to scroll on page load, like: .../hub/campain/page/xf~~variant that is eqivalent to: .../hub/campain/page?section=xf~~variant
          
            let section = url.replace(
                $("link[rel=canonical]").attr("href"),
                ""
            );

            if (section.startsWith("/")) {
                if (
                    $("[data-section='" + section.replace("/", "") + "']")
                        .length > 0
                ) {
                    scrollToTarget(
                        $("[data-section='" + section.replace("/", "") + "']"),
                        true
                    );
                }
            }
        }
    }
});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];

    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });

    return result;
}

function scrollToTarget(target, isdispatcher) {
    if (
        $(window).scrollTop() > target.offset().top + 10 ||
        $(window).scrollTop() < target.offset().top - 10
    ) {
        window.global_clicked = true;
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: target.offset().top - 70,
                },
                {
                    duration: 300,
                    step: function (now, fx) {
                        // Where is the target now located on the page?
                        // i.e. its location will change as images etc. are lazy loaded
                        var newOffset = target.offset().top;

                        // If where we were originally planning to scroll to is not
                        // the same as the new offset (newOffset) then change where
                        // the animation is scrolling to (fx.end).
                        if (fx.end !== newOffset) fx.end = newOffset;
                        setTimeout(function () {
                            window.global_clicked = false;
                        }, 200);
                    },
                }
            );
    }

    if (startTarget.length > 0) {
        history.pushState(
            {
                section: startTarget,
            },
            "",
            location.pathname +
                removeURLParameter(location.search, "section") +
                "#" +
                startTarget
        );
    } else {
        if (isdispatcher) {
            history.pushState(
                {
                    section: startTarget,
                },
                "",
                location.pathname +
                    removeURLParameter(location.search, "section")
            );
        } else {
            history.pushState(
                {
                    section: startTarget,
                },
                "",
                location.pathname + location.search
            );
        }
    }
}

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split("?");
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + "=";
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0; ) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
    }
    return url;
}