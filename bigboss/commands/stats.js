const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()
.setTitle(client.user.username+" Bot İstatistik")
.setColor("PURPLE*")
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.addField("Toplam Sunucu", `\`${client.guilds.cache.size}\``)
.addField("Toplam Kullanıcı", `\`${client.users.cache.size}\``)
.addField("Toplam Kanal", `\`${client.channels.cache.size}\``)
.addField("Bellek Kullanımı",`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(cse)
message.react("📊")
}
module.exports.conf = {
aliases: ["i"]
}

module.exports.config = {
    name: "stats",
    desc: "istatislik",
    aliases: ["stats"]
}