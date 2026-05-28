const mineflayer = require('mineflayer');

console.log("Connecting to your server...");

const bot = mineflayer.createBot({
  host: 'bonytail.aternos.host',
  port: 61531,
  username: 'AFK_Bot_MSI',
  auth: 'offline',
  version: '1.20.4'
});

const movements = ['forward', 'back', 'left', 'right', 'jump'];

bot.on('login', () => {
  console.log("✅ SUCCESS: Logged in!");
});

bot.on('spawn', () => {
  console.log("🤖 SUCCESS: Spawned and moving!");
  
  // Start anti-AFK movement loop every 4 seconds
  setInterval(() => {
    // Pick a random movement direction
    const randomAction = movements[Math.floor(Math.random() * movements.length)];
    
    // Look in a random direction
    const yaw = Math.random() * Math.PI * 2;
    const pitch = (Math.random() - 0.5) * Math.PI;
    bot.look(yaw, pitch, false);
    
    // Perform the movement for 1 second, then stop
    bot.setControlState(randomAction, true);
    setTimeout(() => {
      bot.setControlState(randomAction, false);
    }, 1000);
    
  }, 4000);
});

bot.on('error', (err) => console.log("⚠️ ERROR:", err.message));
bot.on('kicked', (reason) => console.log("❌ KICKED:", reason));
