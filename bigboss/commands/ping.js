module.exports = {
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Gecikme Süreniz Hesaplanıyor...')
        .setColor("RANDOM")
        .addField('Bot Pingi:', client.ws.ping + ' ms')
        .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp} ms `)
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "gecikme süresi",
    desc: "ping hesaplama",
    aliases: ["ping", "ms", "gecikme"]
}