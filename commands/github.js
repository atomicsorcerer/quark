const Discord = require("discord.js");

require("dotenv").config();


function github(msg) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Quark Github Repository')
        .setDescription(`
        Here is the Quark Github [repository](https://github.com/SJTechy/quark)!

        Please star the repo, it really helps!

        If you have any questions, or want to contribute features, please contact \`@CoderSeth#6250\`\ or \`@SJTechy#2722\`\!
        `)
        .setColor("#007ea8");

    msg.channel.send(embed)
}

module.exports = { github };