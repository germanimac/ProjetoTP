const AssistantV1 = require('ibm-watson/assistant/v1');
const {IamAuthenticator} = require('ibm-watson/auth');

module.exports.assistant = new AssistantV1({
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2020-01-04',
    authenticator: new IamAuthenticator ({ apikey:'eP4ouBeFj_rhqibUuF22DfZHfXTLt3bpzLHAhlJF61si'})

});