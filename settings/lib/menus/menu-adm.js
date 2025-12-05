const menuAdm = (prefix, botName, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, ${botName} nem ${sender} - ISSO SÃO DEFINIÇÕES QUE ESTÃO PUXANDO DO settings.json

	return `
╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *MENU DE ADMIN*
▢ ⌁ 👤 User: *${sender.split("@")[0]}*
▢ ⌁ ⚡ Status: *Online*
▢ ⌁ 🔥 Bot: *${botName}*
▢ ⌁ 📌 Prefixo: *${prefix}*
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *MODERAÇÃO*
▢ ⌁ ${prefix}ban @marcar
▢ ⌁ ${prefix}promover @marcar
▢ ⌁ ${prefix}rebaixar @marcar
▢ ⌁ ${prefix}marcar <mensagem>
▢ ⌁ ${prefix}alerta <mensagem>
▢ ⌁ ${prefix}delete (responder msg)
▢ ⌁ ${prefix}cancelar-velha
▢ ⌁ ${prefix}lista-negra 5599...
▢ ⌁ ${prefix}del-listanegra 5599...
▢ ⌁ ${prefix}modo-parceria (ativa/desativa)
▢ ⌁ ${prefix}add-parceria 5511999999999 20
▢ ⌁ ${prefix}del-parceria 5511999999999
▢ ⌁ ${prefix}parceria-list
▢ ⌁ ${prefix}guia-parcerias
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🔗 *DADOS DO GP*
▢ ⌁ ${prefix}link-gp
▢ ⌁ ${prefix}redefinir-link
▢ ⌁ ${prefix}nomegp <nome novo>
▢ ⌁ ${prefix}salvar-nomegp
▢ ⌁ ${prefix}restaurar-nomegp
▢ ⌁ ${prefix}msg-tmp <24/7/90/0>
▢ ⌁ ${prefix}!abrir-fechar-gp 06:00 22:00
▢ ⌁ ${prefix}!statushorario
▢ ⌁ ${prefix}!cancelar-abrir-gp
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-LINK (5 NÍVEIS)*
▢ ⌁ ${prefix}antilink (nível 1 - apagar)
▢ ⌁ ${prefix}antilink2 (nível 2 - banir)
▢ ⌁ ${prefix}antilink3 (nível 3 - advertências)
▢ ⌁ ${prefix}antilink4 (nível 4 - aviso PV)
▢ ⌁ ${prefix}antilink5 (nível 5 - ban + aviso)
▢ ⌁ ${prefix}manual-antilink (guia completo)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-IMAGEM*
▢ ⌁ ${prefix}antiimg (nível 1)
▢ ⌁ ${prefix}antiimg2 (nível 2)
▢ ⌁ ${prefix}antiimg3 (nível 3)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-VÍDEO*
▢ ⌁ ${prefix}antivideo (nível 1)
▢ ⌁ ${prefix}antivideo2 (nível 2)
▢ ⌁ ${prefix}antivideo3 (nível 3)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-ÁUDIO*
▢ ⌁ ${prefix}antiaudio (nível 1)
▢ ⌁ ${prefix}antiaudio2 (nível 2)
▢ ⌁ ${prefix}antiaudio3 (nível 3)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-DOCUMENTO*
▢ ⌁ ${prefix}antidoc (nível 1)
▢ ⌁ ${prefix}antidoc2 (nível 2)
▢ ⌁ ${prefix}antidoc3 (nível 3)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-FIGURINHA*
▢ ⌁ ${prefix}antifig (nível 1)
▢ ⌁ ${prefix}antifig2 (nível 2)
▢ ⌁ ${prefix}antifig3 (nível 3)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-MENSAGEM*
▢ ⌁ ${prefix}antimsg (só áudios permitidos)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🔒 *MODERAÇÃO AVANÇADA*
▢ ⌁ ${prefix}bangp (bloquear comandos no grupo)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

⚡ *Esse é o poder da nova geração!* 🔥
`;
};

module.exports = { menuAdm };
