const menuDono = (prefix, botName, sender) => { 
	
// NÃO APAGUE ESSE ${prefix}, ${botName} nem ${sender} - ISSO SÃO DEFINIÇÕES QUE ESTÃO PUXANDO DO settings.json

return `
╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *MENU DO DONO*
▢ ⌁ 👤 User: *${sender.split("@")[0]}*
▢ ⌁ ⚡ Status: *Online*
▢ ⌁ 🔥 Bot: *${botName}*
▢ ⌁ 📌 Prefixo: *${prefix}*
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 👑 *COMANDOS EXCLUSIVOS*
▢ ⌁ ${prefix}enviar-msg (sistema interativo)
▢ ⌁ ${prefix}aceitar (aceitar solicitações)
▢ ⌁ ${prefix}rejeitar (rejeitar solicitações)
▢ ⌁ ${prefix}seradm (auto-promover)
▢ ⌁ ${prefix}totalcmds (total de comandos)
▢ ⌁ ${prefix}cancelar-velha (forçar cancelamento)
▢ ⌁ ${prefix}cancelar-autosair
▢ ⌁ ${prefix}status-autosair
▢ ⌁ ${prefix}auto-sair 5s/m | 24/12 12:00
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🤖 *INTELIGÊNCIA ARTIFICIAL*
▢ ⌁ ${prefix}wendel-ai (ativar/desativar IA)
▢ ⌁ ${prefix}wendel-pv (config IA privado)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-PV (PROTEÇÃO PRIVADO)*
▢ ⌁ ${prefix}antipv (modo 1 - bloquear)
▢ ⌁ ${prefix}antipv2 (modo 2 - avisar)
▢ ⌁ ${prefix}antipv3 (modo 3 - ignorar)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 📤 *ENVIOS PERSONALIZADOS*
▢ ⌁ ${prefix}enviar-planos-sync wa.me/5592...
▢ ⌁ ${prefix}enviar-site-sync wa.me/5592...
▢ ⌁ ${prefix}enviar-plano10 wa.me/5592...
▢ ⌁ ${prefix}enviar-plano20 wa.me/5592...
▢ ⌁ ${prefix}enviar-plano30 wa.me/5592...
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

⚡ *Ei, não subestime a nova geração!* 🔥
`;

};

module.exports = { menuDono };
