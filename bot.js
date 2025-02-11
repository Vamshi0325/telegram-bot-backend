const { Telegraf } = require('telegraf');
require('dotenv').config();

// Replace with your Telegram Bot Token
const bot = new Telegraf(process.env.BOT_TOKEN);

// Handle '/start' command
bot.start((ctx) => {
    console.log('Bot started...');

    // If you want to check for a start parameter (deep linking), you can do:
    const startPayload = ctx.startPayload; // e.g., /start open
    if (startPayload === 'open') {
        // You might handle any custom logic here if needed
        console.log('Start payload indicates direct open of the mini app');
    }

    // Telegram bot message with inline keyboard containing the mini app button
    ctx.reply('Welcome! Click below to open the mini app inside Telegram:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Mini App',
                        web_app: { url: 'https://telegram-bot-rosy-six.vercel.app/' }, // Web App configuration
                    },
                ],
            ],
        },
    });
});

// Handle '/help' command
bot.help((ctx) => {
    ctx.reply('Send /start to begin!');
});

// Handle any text message
bot.on('text', (ctx) => {
    console.log('Received a message:', ctx.message.text);
    ctx.reply('You said: ' + ctx.message.text);
});

// Start the bot
bot.launch()
    .then(() => {
        console.log('Bot is running successfully...');
    })
    .catch((error) => {
        console.error('Failed to launch bot:', error);
    });

// Gracefully shut down the bot
process.once('SIGINT', () => {
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
});
