const dialogFlow = require('dialogflow');
const configs = require('./mario-bot-jgahjn-9083560c9909.json');

const sessionClient = new dialogFlow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
});

async function sendMessage(chatId, message){
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId)
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }

    const responses = await sessionClient.detectIntent(request)
    const result = responses[0].queryResult;

    console.log(JSON.stringify(result, null,2))
}

sendMessage('12938123', 'oi');
