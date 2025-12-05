const menuDownload = (prefix, botName, sender) => {
 
// NÃO APAGUE ESSE ${prefix}, ${botName} nem ${sender} - ISSO SÃO DEFINIÇÕES QUE ESTÃO PUXANDO DO settings.json

	return `
╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *MENU DE DOWNLOAD*
▢ ⌁ 👤 User: *${sender.split("@")[0]}*
▢ ⌁ ⚡ Status: *Online*
▢ ⌁ 🔥 Bot: *${botName}*
▢ ⌁ 📌 Prefixo: *${prefix}*
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🎵 *DOWNLOADS DE MÚSICA*
▢ ⌁ ${prefix}play (nome da música)
▢ ⌁ ${prefix}tocar (nome da música)
▢ ⌁ ${prefix}play2 (Nome ou URL)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 📝 *COMO USAR*
▢ ⌁ Digite ${prefix}play seguido do nome
▢ ⌁ Exemplo: ${prefix}play Naruto OP 1
▢ ⌁ O bot vai buscar e enviar o áudio!
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

⚡ *Relaxa, eu dou conta!* 🔥
`;
};

module.exports = { menuDownload };
