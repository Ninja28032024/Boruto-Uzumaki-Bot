<div align="center">

# ⚡ Boruto Uzumaki Bot V2.4 ⚡

### Bot de WhatsApp Multifuncional com +150 comandos incluindo Brincadeiras

[![Node.js](https://files.catbox.moe/qe0inc.jpg)](https://nodejs.org/)
[![Node.js Version](https://img.shields.io/badge/Node.js-14%2C%2018%2C%2019%2C%2020%2C%2021%2C%2022%2C%2023%2C%2024%2B-green.svg)](https://nodejs.org/)
[![Baileys](https://img.shields.io/badge/Baileys-Latest-blue.svg)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Desenvolvido por](https://img.shields.io/badge/Desenvolvido%20por-Ninja%20Devs-orange.svg)](https://github.com/NinjaDevs)

</div>

---

## 📋 Sobre o Bot

**Boruto Uzumaki Bot V2.4** é um bot WhatsApp completo e poderoso, desenvolvido com Node.js e a biblioteca Baileys. Inspirado no universo Naruto, o bot oferece mais de 100 comandos organizados em categorias para administração de grupos, diversão, brincadeiras, utilidades, downloads e muito mais!

### ✨ Destaques

- 🎮 **Jogo da Velha** com ranking persistente
- 🤖 **IA Wendel** integrada para conversas inteligentes
- 🛡️ **Sistema AntiLink** com 5 modos diferentes
- 👥 **Gerenciamento completo** de grupos
- 🎵 **Download de músicas e vídeos** do YouTube
- 📊 **Sistema de permissões** (Membro, Admin, Dono)
- 🔄 **Auto-resposta** e mensagens personalizadas
- 📱 **Interface interativa** com botões

---

## 🚀 Comandos de Instalação

### 📱 INSTALAÇÃO PARA TERMUX

```bash
termux-setup-storage
```

> **⚠️ Aviso:** Se o comando acima não funcionar, conceda as permissões manualmente através das configurações do Android. Alguns dispositivos Android são limitados e restringem o acesso às permissões de armazenamento.

```bash
pkg update && pkg upgrade -y
```

```bash
pkg install git nodejs -y
```

```bash
cd /sdcard/
```

```bash
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

```bash
cd Boruto-Uzumaki-Bot
```

```bash
npm start
```



---

### 💻 INSTALAÇÃO PARA WINDOWS (PowerShell)

> **Pré-requisito:** Instale o [Node.js 20+](https://nodejs.org/) antes de prosseguir

```powershell
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

```powershell
cd Boruto-Uzumaki-Bot
```

```powershell
node boruto.js
```

---

### 🖥️ INSTALAÇÃO PARA WINDOWS (Prompt de Comandos)

> **Pré-requisito:** Instale o [Node.js 20+](https://nodejs.org/) antes de prosseguir

```cmd
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

```cmd
cd Boruto-Uzumaki-Bot
```

```cmd
node boruto.js
```

---

### 🐧 INSTALAÇÃO PARA LINUX

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo apt install git nodejs npm -y
```

```bash
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

```bash
cd Boruto-Uzumaki-Bot
```

```bash
npm start
```

---

## 🚧 Solução de Problemas

### Erro ao clonar no Termux: "RPC failed; curl 56 Recv failure"

Este erro ocorre quando há problemas de conexão ao clonar o repositório. Tente as seguintes soluções:

**Opção 1: Aumentar o timeout do git**

```bash
git config --global http.postBuffer 524288000
```

```bash
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

**Opção 2: Usar protocolo SSH (se tiver chave SSH configurada)**

```bash
git clone git@github.com:Ninja28032024/Boruto-Uzumaki-Bot.git
```

**Opção 3: Desabilitar a verificação SSL**

```bash
git config --global http.sslVerify false
```

```bash
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
```

**Opção 4: Tentar novamente com paciência**

Algumas vezes é apenas um problema temporário de conexão. Aguarde alguns minutos e tente novamente.

---

## ⚙️ Configuração

### 1️⃣ Primeira Execução

Na primeira execução, o bot irá:
1. Pedir o número para o bot no terminal
2. Ele vai gerar um código
3. Insira o código no WhatsApp clicando na notificação

### 2️⃣ Configurações Personalizadas

Edite o arquivo `settings/settings.json` para personalizar:

```json
{
  "prefix": "!",
  "botName": "Boruto Bot",
  "botNumber": "NUMERO_DO_BOT@s.whatsapp.net",
  "ownerNumber": "SEU_NUMERO@s.whatsapp.net",
  "ownerName": "Mestre Ninja Tech</>",
  "version": "1.5.0",
  "description": "Bot WhatsApp MultiFuncional com Diveros comandos e sistemas.",
  "wendelAI": {
    "ativo": false,
    "fotoUrl": "https://files.catbox.moe/0ssyj3.jpg"
  }
}
```

---

## 📚 Comandos

### 🎮 BRINCADEIRAS

| Comando | Descrição |
|---------|-----------|
| `!atrapalhado @marcar` | Ver quem é atrapalhado |
| `!bebado @marcar` | Ver quem é bebado |
| `!corcundo @marcar` | Ver quem é corcundo |
| `!corno @marcar` | Ver quem é corno |
| `!dancarino @marcar` | Ver quem é dançarino |
| `!feio @marcar` | Ver quem é feio |
| `!gay @marcar` | Ver quem é gay |
| `!gostoso @marcar` | Ver quem é gostoso |
| `!nerd @marcar` | Ver quem é nerd |
| `!lindo @marcar` | Ver quem é lindo |
| `!rico @marcar` | Ver quem é rico |
| `!sono @marcar` | Ver quem tem sono |
| `!sortudo @marcar` | Ver quem é sortudo |
| `!trovao @marcar` | Trovão |
| `!vesgo @marcar` | Ver quem é vesgo |
| `!wifi @marcar` | WiFi |
| `!beijar @marcar` | Beijar alguém |
| `!cara-coroa <cara/coroa>` | Jogar cara ou coroa |
| `!rankgay` | Ranking gay do grupo |
| `!upload-catbox` | Upload de imagem para Catbox |
| `!somar` | Somar números |

### 🎮 JOGO DA VELHA & RANKING

| Comando | Descrição |
|---------|-----------|
| `!velha @marcar` | Iniciar jogo da velha |
| `!velha-rank` | Ver ranking do jogo |
| `!velha-stats` | Ver estatísticas |
| `!guia-rank` | Guia de ranking |
| `!cancelar-velha` | Cancelar jogo em andamento |
| `!level` | Ver seu nível |
| `!rank` | Ver ranking de XP |
| `!converter-xp` | Converter XP |
| `!patentes` | Ver patentes disponíveis |
| `!doar-xp @marcar <N>` | Doar XP para alguém |

### 💑 RELACIONAMENTOS

| Comando | Descrição |
|---------|-----------|
| `!namorar @marcar` | Enviar pedido de namoro |
| `!casais` | Ver lista de casais do grupo |
| `!casar @marcar` | Casar com alguém |
| `!terminar-namoro` | Terminar namoro |
| `!terminar-casamento` | Terminar casamento |
| `!trair-com @marcar` | Sistema de traição (brincadeira) |

### 🛡️ ADMINISTRADOR

| Comando | Descrição |
|---------|-----------|
| `!ban @marcar` | Banir membro do grupo |
| `!promover @marcar` | Promover a administrador |
| `!rebaixar @marcar` | Remover administrador |
| `!delete` | Deletar mensagem (responder msg) |
| `!marcar <mensagem>` | Marcar todos os membros |
| `!alerta <mensagem>` | Enviar alerta ao grupo |
| `!abrir-fechar-gp 06:00 22:00` | Abrir/fechar grupo por horário |
| `!statushorario` | Ver status do horário |
| `!cancelar-abrir-gp` | Cancelar abertura agendada |
| `!lista-negra 5599...` | Adicionar à lista negra |
| `!del-listanegra 5599...` | Remover da lista negra |
| `!modo-parceria` | Ativar/desativar parcerias |
| `!add-parceria 5511999999999 20` | Adicionar parceria |
| `!del-parceria 5511999999999` | Remover parceria |
| `!parceria-list` | Listar parcerias |
| `!guia-parcerias` | Guia de parcerias |
| `!link-gp` | Obter link do grupo |
| `!redefinir-link` | Redefinir link do grupo |
| `!nomegp <nome novo>` | Alterar nome do grupo |
| `!salvar-nomegp` | Salvar nome atual |
| `!restaurar-nomegp` | Restaurar nome anterior |
| `!msg-tmp <24/7/90/0>` | Definir tempo de mensagens |

### 🛡️ ANTI-LINK (5 Níveis)

| Comando | Descrição |
|---------|-----------|
| `!antilink` | Nível 1 - Apenas apagar |
| `!antilink2` | Nível 2 - Apagar e banir |
| `!antilink3` | Nível 3 - Advertências |
| `!antilink4` | Nível 4 - Aviso por PV |
| `!antilink5` | Nível 5 - Ban + aviso |
| `!manual-antilink` | Guia completo do antilink |

### 🛡️ ANTI-MÍDIA (3 Níveis Cada)

| Comando | Descrição |
|---------|-----------|
| `!antiimg` | Anti-imagem (nível 1) |
| `!antiimg2` | Anti-imagem (nível 2) |
| `!antiimg3` | Anti-imagem (nível 3) |
| `!antivideo` | Anti-vídeo (nível 1) |
| `!antivideo2` | Anti-vídeo (nível 2) |
| `!antivideo3` | Anti-vídeo (nível 3) |
| `!antiaudio` | Anti-áudio (nível 1) |
| `!antiaudio2` | Anti-áudio (nível 2) |
| `!antiaudio3` | Anti-áudio (nível 3) |
| `!antidoc` | Anti-documento (nível 1) |
| `!antidoc2` | Anti-documento (nível 2) |
| `!antidoc3` | Anti-documento (nível 3) |
| `!antifig` | Anti-figurinha (nível 1) |
| `!antifig2` | Anti-figurinha (nível 2) |
| `!antifig3` | Anti-figurinha (nível 3) |
| `!antimsg` | Só áudios permitidos |
| `!bangp` | Bloquear comandos no grupo |

### 🎵 BEM-VINDO

| Comando | Descrição |
|---------|-----------|
| `!bemvindo on/off` | Ativar/desativar boas-vindas |
| `!legendabv <mensagem>` | Definir mensagem de boas-vindas |
| `!infobv` | Manual de boas-vindas |

### 🔓 GERENCIAMENTO DE GRUPO

| Comando | Descrição |
|---------|-----------|
| `!gp-f` | Abrir grupo |
| `!gp-a` | Fechar grupo |

### 👑 MENU DONO

| Comando | Descrição |
|---------|-----------|
| `!enviar-msg` | Sistema interativo de envio |
| `!aceitar` | Aceitar solicitações |
| `!rejeitar` | Rejeitar solicitações |
| `!seradm` | Auto-promover a admin |
| `!totalcmds` | Total de comandos disponíveis |
| `!cancelar-autosair` | Cancelar saída automática |
| `!status-autosair` | Ver status de saída |
| `!auto-sair 5s/m \| 24/12 12:00` | Configurar saída automática |
| `!setprefix` | Alterar prefixo do bot |
| `!wendel-pv` | Configurar IA em privado |
| `!antipv` | Anti-PV (modo 1 - bloquear) |
| `!antipv2` | Anti-PV (modo 2 - avisar) |
| `!antipv3` | Anti-PV (modo 3 - ignorar) |
| `!enviar-planos-sync 5598999...` | Enviar planos |
| `!enviar-site-sync 5598999...` | Enviar site |
| `!enviar-plano10 5598999...` | Enviar plano 10 |
| `!enviar-plano20 5598999...` | Enviar plano 20 |
| `!enviar-plano30 5598999...` | Enviar plano 30 |

### 🎵 DOWNLOAD

| Comando | Descrição |
|---------|-----------|
| `!play <nome>` | Baixar música do YouTube |
| `!tocar <nome>` | Tocar música (alternativo) |
| `!play2 <Nome ou URL>` | Baixar vídeo do YouTube |
| `!play3 <nome>` | Baixar música (modo 3) |

### 👥 MEMBROS

| Comando | Descrição |
|---------|-----------|
| `!somar` | Somar números |
| `!toimg` | Converter figurinha em imagem |
| `!togif` | Converter figurinha em GIF |
| `!rename pacote \| autor` | Renomear figurinha |
| `!rvisu` | Revelar visualização única |
| `!iaedit <prompt>` | Editar imagem com IA |
| `!ping` | Verificar velocidade do bot |
| `!totalcmds` | Total de comandos |
| `!s` | Criar figurinha |
| `!f` | Criar figurinha (alternativo) |
| `!s2` | Criar figurinha (modo 2) |
| `!f2` | Criar figurinha (modo 2) |
| `!gpt <pergunta>` | Usar ChatGPT |

---

## 🎯 Recursos Especiais

### 🎮 Jogo da Velha

Sistema completo de jogo da velha com:
- Partidas entre membros do grupo
- Sistema de ranking persistente
- Estatísticas de vitórias/derrotas/empates
- Interface interativa com botões

### 🤖 IA Wendel

Assistente virtual integrado que:
- Responde perguntas naturalmente
- Mantém contexto de conversação
- Envia fotos quando solicitado
- Funciona em grupos e privado

### 🛡️ Sistema AntiLink

5 níveis de proteção:
1. **Nível 1**: Apenas apagar
2. **Nível 2**: Apagar e banir
3. **Nível 3**: Advertências
4. **Nível 4**: Aviso por PV
5. **Nível 5**: Ban + aviso

### 📱 AntiPV (Anti-Privado)

Proteção contra mensagens privadas:
- **Modo 1**: Bloquear
- **Modo 2**: Avisar
- **Modo 3**: Ignorar

---

## 🔧 Tecnologias

- **Node.js** - Runtime JavaScript
- **Baileys** - Biblioteca WhatsApp Web
- **Chalk** - Colorização de terminal
- **Axios** - Requisições HTTP
- **Sharp** - Processamento de imagens
- **FFmpeg** - Conversão de mídia

---

## 📁 Estrutura do Projeto

```
Boruto-Uzumaki-Bot/
├── boruto.js              # Arquivo principal
├── package.json           # Dependências
├── settings/              # Configurações
│   ├── settings.json      # Config principal
│   └── lib/               # Bibliotecas auxiliares
├── database/              # Banco de dados
│   ├── grupos.json        # Dados de grupos
│   ├── usuarios.json      # Dados de usuários
│   └── tictactoe.json     # Ranking jogo da velha
└── node_modules/          # Dependências instaladas
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

<div align="center">

### 🥷 Ninja Devs

Desenvolvido com ❤️ e ⚡ por **Ninja Devs**

[![GitHub](https://img.shields.io/badge/GitHub-NinjaDevs-black?style=for-the-badge&logo=github)](https://github.com/NinjaDevs)

</div>

---

## 📞 Suporte

Encontrou algum bug ou tem alguma sugestão? 

- 🐛 Abra uma [Issue](https://github.com/Ninja28032024/Boruto-Uzumaki-Bot/issues)
- 💬 Entre em contato pelo WhatsApp

---

## ⚠️ Aviso Legal

Este bot é apenas para fins educacionais. O uso inadequado do bot é de responsabilidade do usuário. Use com moderação e respeite os Termos de Serviço do WhatsApp.

---

<div align="center">

### ⚡ Esse é o poder da nova geração! 🔥

**Boruto Uzumaki Bot V2.4** © 2024 - Ninja Devs

</div>
