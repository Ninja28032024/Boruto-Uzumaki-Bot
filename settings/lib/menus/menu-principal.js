const menuPrincipal = (prefix, botName, sender, ownerNumber) => {
  
// NÃO APAGUE ESSE ${prefix}, ${botName}, ${sender} nem ${ownerNumber} - ISSO SÃO DEFINIÇÕES QUE ESTÃO PUXANDO DO settings.json
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *BORUTO BOT*
▢ ⌁ User: *${sender.split("@")[0]}*
▢ ⌁ Status: *Online*
▢ ⌁ Bot: *${botName}*
▢ ⌁ Dono: *${ownerNumber}*
▢ ⌁ Prefixo: *${prefix}*
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *🔥 MEMBROS & JOGOS*
▢ ⌁ ${prefix}velha @marcar
▢ ⌁ ${prefix}velha-rank
▢ ⌁ ${prefix}velha-stats
▢ ⌁ ${prefix}guia-rank
▢ ⌁ ${prefix}cancelar-velha
▢ ⌁ ${prefix}toimg (marca fig)
▢ ⌁ ${prefix}togif (marca fig)
▢ ⌁ ${prefix}rename pacote | autor
▢ ⌁ ${prefix}rvisu (revela visu)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 📚 *MENUS*
▢ ⌁ ${prefix}menu-adm
▢ ⌁ ${prefix}menu-dono
▢ ⌁ ${prefix}menu-download
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ ℹ️ *INFOS & UTILIDADES*
▢ ⌁ ${prefix}ping
▢ ⌁ ${prefix}totalcmds
▢ ⌁ ${prefix}s (criar figurinha)
▢ ⌁ ${prefix}f (criar figurinha)
▢ ⌁ ${prefix}s2 (criar figurinha)
▢ ⌁ ${prefix}f2 (criar figurinha)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ADMINISTRAÇÃO*
▢ ⌁ ${prefix}ban @marcar
▢ ⌁ ${prefix}promover @marcar
▢ ⌁ ${prefix}rebaixar @marcar
▢ ⌁ ${prefix}delete (responder msg)
▢ ⌁ ${prefix}marcar <mensagem>
▢ ⌁ ${prefix}alerta <mensagem>
▢ ⌁ ${prefix}!abrir-fechar-gp 06:00 22:00
▢ ⌁ ${prefix}!statushorario
▢ ⌁ ${prefix}!cancelar-abrir-gp
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
▢ ╭═══⊷ 🔗 *GERENCIAMENTO DE GRUPO*
▢ ⌁ ${prefix}link-gp
▢ ⌁ ${prefix}redefinir-link
▢ ⌁ ${prefix}nomegp <nome novo>
▢ ⌁ ${prefix}salvar-nomegp
▢ ⌁ ${prefix}restaurar-nomegp
▢ ⌁ ${prefix}msg-tmp <24/7/90/0>
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-LINK (5 NÍVEIS)*
▢ ⌁ ${prefix}antilink (nível 1)
▢ ⌁ ${prefix}antilink2 (nível 2)
▢ ⌁ ${prefix}antilink3 (nível 3)
▢ ⌁ ${prefix}antilink4 (nível 4)
▢ ⌁ ${prefix}antilink5 (nível 5)
▢ ⌁ ${prefix}manual-antilink (ajuda)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🛡️ *ANTI-MÍDIA (3 NÍVEIS CADA)*
▢ ⌁ ${prefix}antiimg (anti-imagem)
▢ ⌁ ${prefix}antivideo (anti-vídeo)
▢ ⌁ ${prefix}antiaudio (anti-áudio)
▢ ⌁ ${prefix}antidoc (anti-documento)
▢ ⌁ ${prefix}antifig (anti-figurinha)
▢ ⌁ ${prefix}antimsg (só áudios)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 🎵 *DOWNLOAD*
▢ ⌁ ${prefix}play (nome da música)
▢ ⌁ ${prefix}tocar (nome da música)
▢ ⌁ ${prefix}play2 (Nome ou URL)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ 💬 *IAs*
▢ ⌁ ${prefix}gpt (pergunta)
▢ ⌁ ${prefix}wendel-ai (ativar IA)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

⚡ *Esse é o poder da nova geração!* 🔥
`;
};

module.exports = { menuPrincipal };
