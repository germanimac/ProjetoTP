const { TranslateDocumentConstants } = require('ibm-watson/language-translator/v3');

module.exports.index = function (app, req, res) {
    res.render('index');
};
module.exports.obras = function (app, req, res) {
    res.render('obras');
};
module.exports.adaptacoes = function (app, req, res) {
    res.render('adaptacoes');
};
module.exports.perguntas = function (app, req, res) {
    res.render('perguntas');
};
module.exports.ibmWatson = function (app, req, res) {
    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');
    

    var texto = req.body.text;
    var languageDetected;
    var textTranslated;

    const languageTranslator = new LanguageTranslatorV3({
      version: '2018-05-01',
      authenticator: new IamAuthenticator({
        apikey: 'su6gN_4jwFoudv1K_aMpoDsHn_9P9jzPIN7fsHASVeGd',
      }),
      serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/1825a686-764d-4f3c-90ad-b72e6829f4e3',
    });
    
    const identifyParams = {
        text: texto
    };


    const translateParams = {
        text: texto,
        modelId: 'en-pt',
     };
          
        languageTranslator.translate(translateParams)
            .then(translationResult => {
              //console.log(JSON.stringify(translationResult, null, 2));
              textTranslated = translationResult.result.translations[0].translation;

              const ibmWatson = require('../lib/ibmWatsonCredentials');

              //recupera mensagem de texto e contexto da conversa
              var { text, contextDialog } = req.body;
              text = textTranslated;
              context = JSON.parse(contextDialog);

              const params = {
                  input: { text },
                  workspaceId: 'be62aa94-9e4e-451a-9944-6b772c070c80',
                  context
              };
              //envia os dados ao serviço e retorna mensagem 
              ibmWatson.assistant.message(
                  params,
                  function(err, response){
                      if(err) res.json({ status: 'ERRO', data: err.toString() });
                      else res.json({ status:'OK', data: response });
                  }
              );
            })
            .catch(err => {
              console.log('error:', err);
        }
    );
};
    
   
   






