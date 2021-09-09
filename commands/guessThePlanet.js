const Discord = require("discord.js");

let planets = [
    { name: "Europa", link: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg" },
    { name: "Saturn", link: "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg" },
    { name: "Jupiter", link: "https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg" },
    { name: "The Moon", link: "https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg" },
    { name: "Mercury", link: "https://i.natgeofe.com/n/c6f7cee9-cde6-44a2-a686-9a80f5bfc1e8/01_mercury_pia15190_orig_4x3.jpg" },
    { name: "Pluto", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/1200px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg" },
    { name: "Mars", link: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" },
    { name: "Callisto", link: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg" },
    { name: "Deimos", link: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Deimos-MRO.jpg" },
    { name: "Phobos", link: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg" },
]

function guessThePlanet(msg) {
    let randNum = Math.floor(Math.random() * planets.length)
    let randNum2 = Math.floor(Math.random() * 4) + 1

    let optionPlanets = planets.filter((_, index) => {
        if (index === randNum) return false

        return true
    }).sort(() => (Math.random() > .5) ? 1 : -1);

    const embed = new Discord.MessageEmbed()
        .setTitle("Guess the Planet (or moon)")
        .setDescription(`
        **A**    \`${randNum2 === 1 ? planets[randNum].name : optionPlanets[0].name}\`
        **B**    \`${randNum2 === 2 ? planets[randNum].name : optionPlanets[1].name}\`
        **C**    \`${randNum2 === 3 ? planets[randNum].name : optionPlanets[2].name}\`
        **D**    \`${randNum2 === 4 ? planets[randNum].name : optionPlanets[3].name}\`
        `)
        .setImage(planets[randNum].link)
        .setColor("#007ea8");

    msg.channel.send(embed)
        .then(message => {
            message.react("🇦");
            message.react("🇧");
            message.react("🇨");
            message.react("🇩");

            message
                .awaitReactions(
                    (reaction, user) =>
                        user.id == msg.author.id &&
                        (reaction.emoji.name == "🇦" ||
                            reaction.emoji.name == "🇧" ||
                            reaction.emoji.name == "🇨" ||
                            reaction.emoji.name == "🇩"),
                    { max: 1, time: 100000 }
                )
                .then((collected) => {
                    if (collected.first().emoji.name == "🇦") {
                        if (randNum2 === 1) {
                            msg.channel.send('✅ Correct! ✅')
                        } else {
                            msg.channel.send('❌ Incorrect. ❌')
                        }
                    }
                    if (collected.first().emoji.name == "🇧") {
                        if (randNum2 === 2) {
                            msg.channel.send('✅ Correct! ✅')
                        } else {
                            msg.channel.send('❌ Incorrect. ❌')
                        }
                    }
                    if (collected.first().emoji.name == "🇨") {
                        if (randNum2 === 3) {
                            msg.channel.send('✅ Correct! ✅')
                        } else {
                            msg.channel.send('❌ Incorrect. ❌')
                        }
                    }
                    if (collected.first().emoji.name == "🇩") {
                        if (randNum2 === 4) {
                            msg.channel.send('✅ Correct! ✅')
                        } else {
                            msg.channel.send('❌ Incorrect. ❌')
                        }
                    }
                })
                .catch((e) => {
                    msg.channel.send(
                        "No reaction after 100 seconds. Operation cancelled."
                    );
                });
        })
}

module.exports = { guessThePlanet }