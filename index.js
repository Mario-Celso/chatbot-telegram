const TelegramBot = require('node-telegram-bot-api');

const token = '1076025324:AAFj2QKmgieFAZo-SHPHStZ2uKEfGhiyC4Q';

const bot = new TelegramBot(token , {
    polling:true
})

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Thank you for message.')
});