const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.commands;
client.prefix = "!"

client.on('ready', async () => {
    console.log(`Botun olan  ${client.user.tag} artık aktif!`);
    client.commands = await setCommands()
    client.user.setActivity('My Coder ItsVuennx#0001')
  });

client.on("ready", async () => {
    const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    let dolar = 0
      const cskanal = "1009033262682865764" //kurun atılacağı mesajın id yazın "" içine.
      if(cskanal){
        if(client.channels.cache.get(cskanal)){
           client.channels.cache.get(cskanal).send("Dolar Kuru 10 Saniye İçinde Yükleniyor...").then(async msg => {
             
    setInterval(() => {
        csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
        const json = await r.json();
        const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
        if (dolarobj.SATIS > dolar) {
           msg.edit(`Dolar Arttı Şimdi: **1 Dolar = ${dolarobj.SATIS}TL**`)
            dolar = dolarobj.SATIS
        }
        else if (dolarobj.SATIS < dolar) {
            msg.edit(`Dolar **${dolar-dolarobj.SATIS}TL'den** Düştü Şimdi **1 Dolar = ${dolarobj.SATIS}TL**`)
            dolar = dolarobj.SATIS
        } 
          else if (dolarobj.SATIS === dolar){
            msg.edit(`Güncel Dolar Kuru: **${dolarobj.SATIS}TL**`)
            dolar = dolarobj.SATIS
          }
    })
    }, 10000)
           })
        }}
    })

client.on('guildMemberRemove', member => {
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
    girişçıkış.send(` ${member} Aramızdan Ayrıldı Tekrar Görüşmek Dileğiyle😕`);
});

client.on('guildMemberAdd', member => {
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
    girişçıkış.send(` ${member} Aramıza Katıldı Hoş geldin Reis👋🏻`);
  });

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleyküm Selam Kral Hoşgeldin! Çay mı Kahve mi?');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'çay') {
      msg.channel.send('Güzel seçim buyur 🍵');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'kahve') {
      msg.channel.send('Güzel seçim buyur ☕️');
    }
  });

client.on("guildMemberAdd", member => {
    try {
    let role = member.guild.roles.cache.find(role => role.name === 'ÜYE')
    member.roles.add(role);
  } catch(e) {
    console.log(e)
  }
  });

async function setCommands() {
    commandFiles = fs.readdirSync('./commands')
    let commands = new Discord.Collection();
    commandFiles.forEach((v, i) => {
        let file = require(`./commands/${v}`)
        commands.set(v, {
            name: file.config.name,
            desc: file.config.desc,
            aliases: file.config.aliases,
            run: file.run  
        })   
    })

    return commands;
}

client.on("message", (message) => {
    if  (
        message.content.startsWith(client.prefix) && 
        (message.content.split(' ')[0] != client.prefix && message.content != client.prefix) &&
        client.commands.find(v => (v.name == (message.content.split(' ')[0].replace("!", "") || message.content.replace("!", ""))) || (v.aliases.includes(message.content.split(' ')[0].replace("!", "") || message.content.replace("!", ""))))
    ) {
        let command = client.commands.find(v => (v.name == (message.content.split(' ')[0].replace("!", "") || message.content.replace("!", ""))) || (v.aliases.includes(message.content.split(' ')[0].replace("!", "") || message.content.replace("!", ""))))

        args = message.content.split(" ")
        args = args.slice(1, args.length) 
        command.run(client, message, args)
    }
})

client.login('MTAwOTAyNjQwMDg1MTg1NzQ5OA.GdTMlb.xzYqay0MqqIh4TvxnxiTPkQEtglRD6vko8Tlbc');