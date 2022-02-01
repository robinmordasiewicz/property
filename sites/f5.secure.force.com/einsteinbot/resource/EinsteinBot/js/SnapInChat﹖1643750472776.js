var INVALID_URL_LOCAL = [];
var DOMAIN_LOCAL = '';
if(INVALID_URL){
    INVALID_URL_LOCAL = INVALID_URL;
}
if(DOMAIN){
    DOMAIN_LOCAL = DOMAIN;
}

var nf__load_bot = true;

if (location) {
    if (location.origin && location.origin === DOMAIN_LOCAL) {
        let path = location.pathname;
        if (INVALID_URL_LOCAL && Array.isArray(INVALID_URL_LOCAL) && INVALID_URL_LOCAL.length > 0) {
            for (let i in INVALID_URL_LOCAL) {
                let entry = INVALID_URL_LOCAL[i];

                if (entry && entry !== '') {
                    let pattern = new RegExp(entry);
                    if (path.match(pattern)) {
                        nf__load_bot = false;
                        break;
                    }
                }
            }
        }
    }
}

var initESW = function(gslbBaseURL, settings) {
    let head = document.getElementsByTagName('HEAD')[0];

    let chatStyleLink 	= document.createElement('link');
    chatStyleLink.rel 	= 'stylesheet';
    chatStyleLink.type 	= 'text/css';
    chatStyleLink.href 	= settings.communityURL + '/resource/einsteinBot/css/einsteinBot.css?' + Date.now();
    head.appendChild(chatStyleLink);

    embedded_svc.settings.displayHelpButton = settings.displayCTA;
    embedded_svc.settings.defaultMinimizedText = 'Chat with Codey';
    embedded_svc.settings.chatbotAvatarImgURL = settings.communityURL + "/resource/einsteinBot/img/bot.png";
    embedded_svc.settings.avatarImgURL = settings.communityURL + "/resource/einsteinBot/img/liveAgent.png";
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
    //embedded_svc.settings.loadingText = 'F5 Digital Assisstant'; //(Defaults to Loading)
    //embedded_svc.settings.storageDomain = settings.domain; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
    
    embedded_svc.settings.extraPrechatFormDetails = [
    {
        "label" : "Page URL",
        "value" : location.href && location.href.substring(0,255),
        "displayToAgent" : false,
        "transcriptFields" : ["Page_URL__c"]
    }]
    
    console.log(embedded_svc.settings.extraPrechatFormDetails);
        
    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';
    embedded_svc.init(
        settings.sfURL,
        settings.communityURL,
        gslbBaseURL,
        settings.orgId,
        settings.botName,
        {
            baseLiveAgentContentURL: settings.LACURL,
            deploymentId: settings.depId,
            buttonId: settings.butId,
            baseLiveAgentURL: settings.LAURL,
            eswLiveAgentDevName: settings.eswLiveAgentDevName,
            isOfflineSupportEnabled: false
        }
    );
};

var initChat = function(settings) {
    if(nf__load_bot){
        if (!window.embedded_svc) {
            var s = document.createElement('script');
            s.setAttribute('src', settings.sfURL + '/embeddedservice/5.0/esw.min.js');
            s.onload = function() {
                initESW(null, settings);
            };
            document.body.appendChild(s);
        } else {
            initESW('https://service.force.com', settings);
        }
    }
}

// Wrapper for initChat that can be called from anywhere
var openChat = function() {
    var initInterval = setInterval(function() {
        let btn = document.querySelector(".embeddedServiceHelpButton .uiButton.helpButtonEnabled");
        if (btn) {
            btn.click();
            clearInterval(initInterval);
        }
    }, 500);
}