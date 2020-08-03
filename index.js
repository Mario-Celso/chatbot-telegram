const TelegramBot = require('node-telegram-bot-api');
const dialogFlow = require('./dialogFlow')
const youtube = require('./youtube')

const token = '1076025324:AAFj2QKmgieFAZo-SHPHStZ2uKEfGhiyC4Q';

const bot = new TelegramBot(token , {
    polling:true
})

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    
    const response = await dialogFlow.sendMessage(chatId.toString(), msg.text)
   
    let responseText = await youtube.searchVideos(response.text, response.fields.backend.stringValue)

    bot.sendMessage(chatId, responseText)
});