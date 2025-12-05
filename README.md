<div align="center">

![Banner](banner.png)

# ⚡ Boruto Uzumaki Bot ⚡

### Bot WhatsApp Multifuncional com +60 Comandos

[![Node.js](https://img.shields.io/badge/Node.js-20,21,22-green.svg)](https://nodejs.org/)
[![Baileys](https://img.shields.io/badge/Baileys-Latest-blue.svg)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Desenvolvido por](https://img.shields.io/badge/Desenvolvido%20por-Ninja%20Devs-orange.svg)](https://github.com/NinjaDevs)

</div>

---

## 📋 Sobre o Bot

**Boruto Uzumaki Bot** é um bot WhatsApp completo e poderoso, desenvolvido com Node.js e a biblioteca Baileys. Inspirado no universo Naruto, o bot oferece mais de 60 comandos organizados em categorias para administração de grupos, diversão, utilidades, downloads e muito mais!

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

## 🚀 Instalação

### 📱 INSTALAÇÃO PARA TERMUX

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

> **Nota:** Se deseja usar Node.js 20 especificamente no Termux, execute o comando abaixo:

```bash
export N_PREFIX=$HOME/.n && npm install -g n && n 20
```

Se mesmo assim não funcionar, faça o download do Nodejs20 [clicando aqui](https://www.mediafire.com/file/gb02m1zay11t6ff/node-v20.19.6-win-arm64.zip/file), e siga com os comandos abaixo em ordem.

```bash
cd ..
```

```bash
cd Download
```

```bash
tar -xf node-v20.19.6-linux-arm64.tar.xz
```
> **AVISO:** Aguarde na tela, pois a extração é silenciosa. Só execute o próximo comando após o símbolo de dólar `$` reaparecer.

```bash
mkdir -p $PREFIX/local
mv node-v20.19.6-linux-arm64 $PREFIX/local/
```

```bash
ln -sf $PREFIX/local/node-v20.19.6-linux-arm64/bin/node $PREFIX/bin/node
ln -sf $PREFIX/local/node-v20.19.6-linux-arm64/bin/npm $PREFIX/bin/npm
ln -sf $PREFIX/local/node-v20.19.6-linux-arm64/bin/npx $PREFIX/bin/npx
```

```bash
pkg install proot-distro
proot-distro install debian
proot-distro login debian
```

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```

```bash
cd /sdcard/Boruto-Uzumaki-Bot
```

```bash
npm start
```
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
  "ownerNumber": "5511999999999",
  "botName": "Boruto Bot",
  "prefix": "!",
  "autoRead": true,
  "antiPV": false
}
```

---

## 📚 Comandos

### 🔥 Membros & Jogos

| Comando | Descrição |
|---------|-----------|
| `!velha @marcar` | Iniciar jogo da velha |
| `!velha-rank` | Ver ranking do jogo |
| `!velha-stats` | Ver estatísticas |
| `!guia-rank` | Guia de ranking |
| `!cancelar-velha` | Cancelar jogo em andamento |
| `!toimg` | Converter figurinha em imagem |
| `!togif` | Converter figurinha em GIF |
| `!rename pacote \| autor` | Renomear figurinha |
| `!rvisu` | Revelar visualizações |

### 📚 Menus

| Comando | Descrição |
|---------|-----------|
| `!menu-adm` | Menu de administração |
| `!menu-dono` | Menu do dono |
| `!menu-download` | Menu de downloads |

### ℹ️ Infos & Utilidades

| Comando | Descrição |
|---------|-----------|
| `!ping` | Verificar velocidade do bot |
| `!totalcmds` | Total de comandos disponíveis |
| `!s` | Criar figurinha |
| `!f` | Criar figurinha (alternativo) |
| `!s2` | Criar figurinha (modo 2) |
| `!f2` | Criar figurinha (modo 2) |

### 🛡️ Administração

| Comando | Descrição |
|---------|-----------|
| `!ban @marcar` | Remover membro do grupo |
| `!promover @marcar` | Promover a admin |
| `!rebaixar @marcar` | Remover admin |
| `!delete` | Deletar mensagem (responder) |
| `!marcar <mensagem>` | Marcar todos |
| `!alerta <mensagem>` | Enviar alerta |
| `!abrir-fechar-gp HH:MM HH:MM` | Abrir/fechar grupo por horário |
| `!statushorario` | Ver status do horário |
| `!cancelar-abrir-gp` | Cancelar abertura agendada |
| `!lista-negra 5599...` | Adicionar à lista negra |
| `!del-listanegra 5599...` | Remover da lista negra |
| `!modo-parceria` | Ativar/desativar parcerias |
| `!add-parceria 55119... 20` | Adicionar parceria |
| `!del-parceria 55119...` | Remover parceria |
| `!parceria-list` | Listar parcerias |
| `!guia-parcerias` | Guia de parcerias |

### 🔗 Gerenciamento de Grupo

| Comando | Descrição |
|---------|-----------|
| `!link-gp` | Obter link do grupo |
| `!redefinir-link` | Redefinir link do grupo |
| `!nomegp <nome novo>` | Alterar nome do grupo |
| `!salvar-nomegp` | Salvar nome atual |
| `!restaurar-nomegp` | Restaurar nome anterior |
| `!msg-tmp <24/7/90/0>` | Definir tempo de mensagens |

### 🛡️ Anti-Link (5 Níveis)

| Comando | Descrição |
|---------|-----------|
| `!antilink` | Nível 1 - Apenas apagar |
| `!antilink2` | Nível 2 - Apagar e banir |
| `!antilink3` | Nível 3 - Advertências |
| `!antilink4` | Nível 4 - Aviso por PV |
| `!antilink5` | Nível 5 - Ban + aviso |
| `!manual-antilink` | Guia completo |

### 🛡️ Anti-Mídia (3 Níveis Cada)

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

### 🎵 Downloads

| Comando | Descrição |
|---------|-----------|
| `!play <música>` | Baixar música do YouTube |
| `!tocar <música>` | Tocar música (alternativo) |
| `!play2 <URL ou nome>` | Baixar vídeo do YouTube |

### 💬 IAs

| Comando | Descrição |
|---------|-----------|
| `!gpt <pergunta>` | Usar ChatGPT |
| `!wendel-ai` | Ativar/desativar IA Wendel |

### 👑 Comandos do Dono

| Comando | Descrição |
|---------|-----------|
| `!enviar-msg` | Sistema interativo de envio |
| `!aceitar` | Aceitar solicitações |
| `!rejeitar` | Rejeitar solicitações |
| `!seradm` | Auto-promover a admin |
| `!totalcmds` | Total de comandos |
| `!cancelar-autosair` | Cancelar saída automática |
| `!status-autosair` | Ver status de saída |
| `!auto-sair 5s/m \| 24/12 12:00` | Configurar saída automática |
| `!wendel-pv` | Configurar IA em privado |
| `!antipv` | Anti-PV (modo 1 - bloquear) |
| `!antipv2` | Anti-PV (modo 2 - avisar) |
| `!antipv3` | Anti-PV (modo 3 - ignorar) |
| `!enviar-planos-sync wa.me/...` | Enviar planos |
| `!enviar-site-sync wa.me/...` | Enviar site |
| `!enviar-plano10 wa.me/...` | Enviar plano 10 |
| `!enviar-plano20 wa.me/...` | Enviar plano 20 |
| `!enviar-plano30 wa.me/...` | Enviar plano 30 |
| `!bangp` | Bloquear comandos no grupo |

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

**Boruto Uzumaki Bot** © 2024 - Ninja Devs

</div>
