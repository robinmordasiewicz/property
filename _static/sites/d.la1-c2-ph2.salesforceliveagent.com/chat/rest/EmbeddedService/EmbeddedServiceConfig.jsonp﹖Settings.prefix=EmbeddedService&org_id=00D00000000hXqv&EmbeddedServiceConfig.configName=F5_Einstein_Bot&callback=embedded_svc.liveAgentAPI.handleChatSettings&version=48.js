/**/embedded_svc.liveAgentAPI.handleChatSettings({"messages":[{"type":"EmbeddedServiceConfig", "message":{"labels":[{"labelValue":"Codey - Digital Assistant","sectionName":"LiveAgentChatWindow","labelName":"WaitingStateHeaderText"},{"labelValue":"When you click End Chat, your chat session will end. Don’t worry, you can still save your chat’s transcript after you have ended the session.","sectionName":"MessageOverlay","labelName":"ChatStateBody"},{"labelValue":"Thanks for chatting with us","sectionName":"LiveAgentChatWindow","labelName":"ChatStateHeaderGreeting"},{"labelValue":"Hey, are you still there","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningQuestion"},{"labelValue":"? Please type your question below. If I don't hear from you, I'll close the chat in a few minutes.","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningRequest"},{"labelValue":"Hello!","sectionName":"LiveAgentChatWindow","labelName":"WaitingGreeting"},{"labelValue":"Connecting...","sectionName":"LiveAgentChatWindow","labelName":"WaitingMessage"},{"labelValue":"Codey - Digital Assistant","sectionName":"LiveAgentSidebarApp","labelName":"LiveChat"},{"labelValue":"Codey - Digital Assistant","sectionName":"LiveAgentChatWindow","labelName":"ChatEnd"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Contact_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Lead_FirstName"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Lead_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Contact_FirstName"}],"embeddedServiceConfig":{"areGuestUsersAllowed":false,"embeddedServiceBranding":{"navBarColor":"#1D9CD3","navBarTextColor":"#ffffff","width":320,"font":"ProximaNova","secondaryColor":"#1D9CD3","secondaryNavBarColor":"#1D9CD3","contrastInvertedColor":"#ffffff","height":600,"primaryColor":"#1D9CD3","contrastPrimaryColor":"#333333"},"deploymentFeature":"LiveAgent","isEnabled":true,"embeddedServiceCustomComponents":[{"customComponentType":"LA_ChatHeader","customComponent":"einsteinBotChatHeader","feature":"LiveAgent","namespacePrefix":"c"},{"customComponentType":"LA_PlainTextChatMessage","customComponent":"einsteinBotChatMessage","feature":"LiveAgent","namespacePrefix":"ebcm"}],"embeddedServiceLiveAgent":{"fontSize":"Medium","enabled":true,"fullName":"EmbeddedServiceLiveAgent_Parent04I1T000000TN1eUAG_171e2ee8aee","embeddedServiceQuickActions":[{"quickActionDefinition":"Snapins_Contact_PrechatQuickAction_08h1T000000TN1e_1588650216292","order":1,"quickActionType":"Prechat","quickActionInfo":"{\"layoutItems\":[[{\"label\":\"Name\",\"required\":true,\"fields\":[{\"type\":\"string\",\"name\":\"Name\",\"label\":\"Full Name\",\"value\":null,\"length\":121,\"extraTypeInfo\":\"personname\",\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Email\",\"required\":false,\"fields\":[{\"type\":\"email\",\"name\":\"Email\",\"label\":\"Email\",\"value\":null,\"length\":80,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null]],\"targetSobjectType\":\"Contact\",\"targetRecordTypeId\":null,\"targetParentField\":null,\"type\":\"Create\",\"name\":\"Snapins_Contact_PrechatQuickAction_08h1T000000TN1e_1588650216292\",\"label\":\"Snapins_Contact_PrechatQuickAction_08h1T000000TN1e_1588650216292\"}"},{"quickActionDefinition":"Snapins_Case_PrechatQuickAction_08h1T000000TN1e_1588650216721","order":2,"quickActionType":"Prechat","quickActionInfo":"{\"layoutItems\":[[{\"label\":\"Subject\",\"required\":false,\"fields\":[{\"type\":\"string\",\"name\":\"Subject\",\"label\":\"Subject\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Web Email\",\"required\":false,\"fields\":[{\"type\":\"email\",\"name\":\"SuppliedEmail\",\"label\":\"Email Address\",\"value\":null,\"length\":80,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null]],\"targetSobjectType\":\"Case\",\"targetRecordTypeId\":null,\"targetParentField\":null,\"type\":\"Create\",\"name\":\"Snapins_Case_PrechatQuickAction_08h1T000000TN1e_1588650216721\",\"label\":\"Snapins_Case_PrechatQuickAction_08h1T000000TN1e_1588650216721\"}"}],"liveChatDeployment":"5721T000000Xfzl","liveChatButton":"5731T000000XgLt","isQueuePositionEnabled":false,"isOfflineCaseEnabled":false,"prechatEnabled":false,"scenario":"Service"},"embeddedServiceLayouts":[],"siteUrl":"https://f5.secure.force.com/einsteinbot","shouldHideAuthDialog":false,"embeddedServiceFlows":[]},"customizations":[],"standardLabels":[{"labelValue":"Close dialog","sectionName":"LiveAgentSidebarApp","labelName":"Close"},{"labelValue":"Minimize chat","sectionName":"LiveAgentSidebarApp","labelName":"Minimize"},{"labelValue":"End of Dialog","sectionName":"LiveAgentSidebarApp","labelName":"EndOfDialog"},{"labelValue":"Expand the chat","sectionName":"LiveAgentSidebarApp","labelName":"MinimizedContainerAssistiveText"},{"labelValue":"Agent","sectionName":"LiveAgentChatWindow","labelName":"ChatWindowAgent"},{"labelValue":"Type your message...","sectionName":"LiveAgentChatWindow","labelName":"InputTextPlaceholder"},{"labelValue":"Agent is Typing","sectionName":"LiveAgentChatWindow","labelName":"AgentTypingUpdate"},{"labelValue":"Send","sectionName":"LiveAgentChatWindow","labelName":"Send"},{"labelValue":"Chat started at {0}","sectionName":"LiveAgentChatWindow","labelName":"ChatStartTime"},{"labelValue":"Chat started with {0}","sectionName":"LiveAgentTransfer","labelName":"MessageAreaTransferred"},{"labelValue":"File Transfer Canceled","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferCanceled"},{"labelValue":"File Transfer Succeeded","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferSuccess"},{"labelValue":"File Transfer Failed","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferFailure"},{"labelValue":"File Transfer Requested","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferRequested"},{"labelValue":"Transfer failed","sectionName":"LiveAgentFileTransfer","labelName":"TransferFailed"},{"labelValue":"Thanks for chatting with us. Ask me anything.","sectionName":"LiveAgentChatWindow","labelName":"ChatStateHeaderGreeting"},{"labelValue":"Save Transcript","sectionName":"LiveAgentChatWindow","labelName":"SaveTranscript"},{"labelValue":"Upload a file","sectionName":"LiveAgentFileTransfer","labelName":"FileUpload"},{"labelValue":"Upload this file","sectionName":"LiveAgentFileTransfer","labelName":"UploadFile"},{"labelValue":"Select a file under {0}mb","sectionName":"LiveAgentFileTransfer","labelName":"SelectNewFile"},{"labelValue":"File transfer requested. Press the upload a file button.","sectionName":"LiveAgentFileTransfer","labelName":"UsePreviousElementToUploadFile"},{"labelValue":"Remove this file.","sectionName":"LiveAgentFileTransfer","labelName":"RemoveFile"},{"labelValue":"{0} Messages","sectionName":"LiveAgentChatWindow","labelName":"MessageNotification"},{"labelValue":"1 Message","sectionName":"LiveAgentChatWindow","labelName":"SingleMessageNotification"},{"labelValue":"{0} says...","sectionName":"LiveAgentChatWindow","labelName":"AgentSaysNotification"},{"labelValue":"Still there?","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutMinimizedWarning"},{"labelValue":"Chat ended","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutMinimizedEndChat"},{"labelValue":"Chat Ended","sectionName":"LiveAgentChatWindow","labelName":"ChatEnd"},{"labelValue":"Chat Ended by Agent","sectionName":"LiveAgentChatWindow","labelName":"ChatEndAgent"},{"labelValue":"Chat Ended from Lost Connection","sectionName":"LiveAgentChatWindow","labelName":"ChatEndConnection"},{"labelValue":"Close Chat","sectionName":"LiveAgentChatWindow","labelName":"ChatButtonClose"},{"labelValue":"Give Feedback","sectionName":"LiveAgentChatWindow","labelName":"PostChatButton"},{"labelValue":"Chat ended due to timeout","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutEndChatMessage"},{"labelValue":"Please wait. Reconnecting","sectionName":"LiveAgentChatWindow","labelName":"ReconnectingChasitorIssue"},{"labelValue":"Reconnecting","sectionName":"LiveAgentChatWindow","labelName":"ReconnectingMinimizedMessage"},{"labelValue":"Are you still there?","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningQuestion"},{"labelValue":"We're transferring your chat to another agent.","sectionName":"LiveAgentTransfer","labelName":"BannerInProgressTransfer"},{"labelValue":"Transferring","sectionName":"LiveAgentTransfer","labelName":"MinimizedInProgressTransfer"},{"labelValue":"You’re chatting with {0}","sectionName":"LiveAgentTransfer","labelName":"BannerTransferred"},{"labelValue":"Reconnected. You’re chatting with {0}","sectionName":"LiveAgentTransfer","labelName":"BannerReconnected"},{"labelValue":"End chat?","sectionName":"MessageOverlay","labelName":"ChatStateHeader"},{"labelValue":"Don't worry, after the chat ends, you can save the transcript. Click Save Transcript at the bottom of the chat window.","sectionName":"MessageOverlay","labelName":"ChatStateBody"},{"labelValue":"Go Back","sectionName":"MessageOverlay","labelName":"ChatStateResume"},{"labelValue":"Confirm End Chat","sectionName":"MessageOverlay","labelName":"ChatStateEnd"},{"labelValue":"Contact Us","sectionName":"LiveAgentOfflineSupport","labelName":"HeaderText"},{"labelValue":"Something went wrong","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogTitle"},{"labelValue":"Offline support isn’t working right now. Please try again later.","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogBody"},{"labelValue":"Got It","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogButton"},{"labelValue":"Submit","sectionName":"LiveAgentOfflineSupport","labelName":"SupportFormButton"},{"labelValue":"Offline Support Image","sectionName":"LiveAgentOfflineSupport","labelName":"BannerAltText"},{"labelValue":"Case submitted","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogTitle"},{"labelValue":"We logged your case. You’ll hear back from us soon.","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogBody"},{"labelValue":"Done","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogButton"},{"labelValue":"Post-Chat","sectionName":"LiveAgentSidebarApp","labelName":"PostChat"},{"labelValue":"Chat","sectionName":"LiveAgentSidebarApp","labelName":"LiveChat"},{"labelValue":"Prechat Image","sectionName":"LiveAgentPrechat","labelName":"BannerAltText"},{"labelValue":"Start Chatting","sectionName":"LiveAgentPrechat","labelName":"StartChat"},{"labelValue":"This field is required.","sectionName":"LiveAgentPrechat","labelName":"FieldError"},{"labelValue":"Hello, {0}!","sectionName":"LiveAgentChatWindow","labelName":"WaitingGreeting"},{"labelValue":"Guest","sectionName":"LiveAgentChatWindow","labelName":"WaitingDefaultName"},{"labelValue":"An agent is on the way.","sectionName":"LiveAgentChatWindow","labelName":"WaitingMessage"},{"labelValue":"Cancel Chat Request","sectionName":"LiveAgentChatWindow","labelName":"WaitingCancelChatRequest"},{"labelValue":"Hang in there.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMessageFirstLine"},{"labelValue":"You're number {0} in line.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMessageSecondLine"},{"labelValue":"You're up next!","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionZeroMessage"},{"labelValue":"Connecting...","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionConnectingMessage"},{"labelValue":"99+","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxNumber"},{"labelValue":"Hang in there.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxMessageFirstLine"},{"labelValue":"An agent is on the way.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxMessageSecondLine"},{"labelValue":"Waiting","sectionName":"LiveAgentChatWindow","labelName":"MinimizedWaitingMessage"},{"labelValue":"Place in line:","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionMessage"},{"labelValue":"You're next!","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionZeroMessage"},{"labelValue":"Place in line for support:","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionAssistiveMessage"},{"labelValue":"You're next in line for support!","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionZeroAssistiveMessage"},{"labelValue":"Agents Offline","sectionName":"MessageOverlay","labelName":"ErrorNoAgentTitle"},{"labelValue":"No agents are available.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentHeader"},{"labelValue":"We can't chat right now.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentBodyApology"},{"labelValue":"Chat blocked","sectionName":"MessageOverlay","labelName":"ErrorBlockedTitleAndHeader"},{"labelValue":"It looks like an agent has blocked your chats.","sectionName":"MessageOverlay","labelName":"ErrorBlockedBody"},{"labelValue":"OK","sectionName":"MessageOverlay","labelName":"ErrorBlockedCloseButton"},{"labelValue":"Connection Issues","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionTitle"},{"labelValue":"There is a connection issue","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionHeader"},{"labelValue":"Hmm, looks like there's no connection.","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionBodyApology"},{"labelValue":"Start a New Chat","sectionName":"MessageOverlay","labelName":"ErrorTryAgainButton"},{"labelValue":"Leave Chat","sectionName":"MessageOverlay","labelName":"ErrorExitChatButton"},{"labelValue":"Leave?","sectionName":"MessageOverlay","labelName":"WaitingStateHeader"},{"labelValue":"No one is available to chat. Try again later.","sectionName":"MessageOverlay","labelName":"WaitingStateBodyApology"},{"labelValue":"Leave","sectionName":"MessageOverlay","labelName":"WaitingStateLeave"},{"labelValue":"Continue to Wait","sectionName":"MessageOverlay","labelName":"WaitingStateContinue"},{"labelValue":" Please send a message within {0}m {1}s or this chat will time out.","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningRequest"},{"labelValue":"Try again later.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentBodyRequest"},{"labelValue":"Try reconnecting or come back later.","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionBodyRequest"},{"labelValue":"If you leave now, you’ll lose your place in line to chat.","sectionName":"MessageOverlay","labelName":"WaitingStateBodyWarning"},{"labelValue":"Be careful…","sectionName":"MessageOverlay","labelName":"CloseSessionWarningTitle"},{"labelValue":"If you close, leave, or refresh this tab, you could lose your chat.","sectionName":"MessageOverlay","labelName":"CloseSessionWarningBody"},{"labelValue":"Go Back","sectionName":"MessageOverlay","labelName":"CloseSessionWarningButton"},{"labelValue":"Choose one of the following options","sectionName":"LiveAgentChatWindow","labelName":"ChooseOption"},{"labelValue":"Waiting Screen Image","sectionName":"LiveAgentChatWindow","labelName":"WaitingBannerAssistiveText"},{"labelValue":"Group Chat","sectionName":"LiveAgentGroupChat","labelName":"HeaderTitle"},{"labelValue":"You are chatting with {0} people","sectionName":"LiveAgentGroupChat","labelName":"ExtendedHeaderGreeting"},{"labelValue":"{0} joined the chat","sectionName":"LiveAgentGroupChat","labelName":"AgentJoinedChatSystemMessage"},{"labelValue":"{0} left the chat","sectionName":"LiveAgentGroupChat","labelName":"AgentLeftChatSystemMessage"},{"labelValue":"Group Chat","sectionName":"LiveAgentGroupChat","labelName":"MinimizedStateMessage"},{"labelValue":"Transferring...","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionTransferringMessage"},{"labelValue":"Conversation Ended by Bot","sectionName":"LiveAgentChatWindow","labelName":"ChatEndChatbot"},{"labelValue":"Enter Message","sectionName":"LiveAgentChatWindow","labelName":"InputTextAssistiveText"},{"labelValue":"Waiting to Chat","sectionName":"LiveAgentChatWindow","labelName":"WaitingStateHeaderText"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Contact_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Lead_FirstName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Contact_FirstName"},{"labelValue":"First Name","sectionName":"Global_Entity","labelName":"first_name"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Lead_LastName"},{"labelValue":"Last Name","sectionName":"Global_Entity","labelName":"last_name"}],"timestamp":1643749845873,"errors":[{"source":"SCRT","errorMessage":"Invalid Language param 'null' sent in the request, using Guest User language instead.","errorCode":"ESW_ERROR_001"}],"additionalSettings":{"isSelfServiceEnabled":false,"htmlDirection":"ltr","eswFilesVersion":"1630076500","auraJarVersion":"1.3437.234.20","liveAgentContentUrl":"https://c.la1-c2-ph2.salesforceliveagent.com/content","maxLiveChatFileSize":5242880,"isEssentialsEdition":false,"latestChasitorVersion":"53.0","labelsLanguage":"en-US"}}}]});