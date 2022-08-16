module.exports = {
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
            .setTitle('Avatarınız aşağıda bulunmaktadır.')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
        .setTitle('Belirtilen kullanıcının avatarı aşağıda verilmiştir.')
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed)
        }
    }
}

module.exports.config = {
    name: "avatar",
    desc: "avatar komutu",
    aliases: ["avatar", "av"]
}