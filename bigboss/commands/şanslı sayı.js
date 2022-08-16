const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel.send("**🎆 Şanslı Sayını Buluyorum! 🎇**").then(message => {
    var espriler = [
      "🎉 Senin Şanslı Sayın 14 🎲",
      "🎉 Senin Şanslı Sayın 1 🎲",
      "🎉 Senin Şanslı Sayın 2 🎲",
      "🎉 Senin Şanslı Sayın 3 🎲",
      "🎉 Senin Şanslı Sayın 4 🎲",
      "🎉 Senin Şanslı Sayın 5 🎲",
      "🎉 Senin Şanslı Sayın 6 🎲",
      "🎉 Senin Şanslı Sayın 7 🎲",
      "🎉 Senin Şanslı Sayın 8 🎲",
      "🎉 Senin Şanslı Sayın 9 🎲",
      "🎉 Senin Şanslı Sayın 10 🎲",
      "🎰 Senin Şanslı Sayın Yok 😔 ",
      "🎉 Senin Şanslı Sayın 11 🎲",
      "🎉 Senin Şanslı Sayın 12 🎲",
      "🎉 Senin Şanslı Sayın 13 🎲",
      "🎉 Senin Şanslı Sayın 14 🎲",
      "🎉 Senin Şanslı Sayın 15 🎲",
      "🎉 Senin Şanslı Sayın 16 🎲",
      "🎉 Senin Şanslı Sayın 17 🎲",
      "🎰 Senin Şanslı Sayın Yok 😔 ",
      "🎉 Senin Şanslı Sayın 18 🎲",
      "🎉 Senin Şanslı Sayın 19 🎲",
      "🎉 Senin Şanslı Sayın 20 🎲",
      "🎉 Senin Şanslı Sayın 21 🎲",
      "🎉 Senin Şanslı Sayın 22 🎲",
      "🎉 Senin Şanslı Sayın 23 🎲",
      "🎉 Senin Şanslı Sayın 24 🎲",
      "🎉 Senin Şanslı Sayın 25 🎲",
      "🎉 Senin Şanslı Sayın 26 🎲",
      "🎉 Senin Şanslı Sayın 27 🎲",
      "🎉 Senin Şanslı Sayın 28 🎲",
      "🎉 Senin Şanslı Sayın 29 🎲",
      "🎉 Senin Şanslı Sayın 30 🎲",
      "🎉 Senin Şanslı Sayın 31 🎲"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    setTimeout(() => {
    message.edit(`${espri}`)
    }, 3000)
  });
};

module.exports.config = {
    name: "şanslı sayı",
    desc: "senin şanslı sayın",
    aliases: ["şanslısayım", "ş-s"]
}