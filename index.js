const mineflayer = require('mineflayer');
console.log("Connecting to your server...");
const bot = mineflayer.createBot({
  host: 'bonytail.aternos.host',
  port: 61531,
  username: 'AFK_Bot_MSI',
  auth: 'offline',
  version: '1.20.4'
});
bot.on('login', () => console.log("✅ SUCCESS: Logged in!"));
bot.on('spawn', () => console.log("🤖 SUCCESS: Spawned!"));
