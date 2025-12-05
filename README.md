<div align="center">

![Banner](banner.png)

# ⚡ Boruto Uzumaki Bot ⚡

### Bot WhatsApp Multifuncional com +60 Comandos

[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
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

### 📱 Termux (Android)

```bash
# Atualizar pacotes
pkg update && pkg upgrade -y

# Instalar dependências
pkg install git nodejs -y

# Clonar repositório
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git

# Entrar no diretório
cd Boruto-Uzumaki-Bot

# Iniciar o bot
npm start
```

### 💻 Windows (PowerShell)

```powershell
# Instalar Node.js 20+ primeiro: https://nodejs.org/

# Clonar repositório
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git

# Entrar no diretório
cd Boruto-Uzumaki-Bot

# Iniciar o bot
node boruto.js
```

### 🖥️ Windows (Prompt de Comandos)

```cmd
REM Instalar Node.js 20+ primeiro: https://nodejs.org/

REM Clonar repositório
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git

REM Entrar no diretório
cd Boruto-Uzumaki-Bot

REM Iniciar o bot
node boruto.js
```

### 🐧 Linux

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependências
sudo apt install git nodejs npm -y

# Clonar repositório
git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git

# Entrar no diretório
cd Boruto-Uzumaki-Bot

# Iniciar o bot
npm start
```

---

## ⚙️ Configuração

### 1️⃣ Primeira Execução

Na primeira execução, o bot irá:
1. Gerar um QR Code no terminal
2. Escanear o QR Code com seu WhatsApp
3. Conectar automaticamente

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

### 👥 Administração (Admins)

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!ban` | Remover membro do grupo | `!ban @membro` |
| `!promover` | Promover a admin | `!promover @membro` |
| `!rebaixar` | Remover admin | `!rebaixar @admin` |
| `!fechar` | Fechar grupo | `!fechar` |
| `!abrir` | Abrir grupo | `!abrir` |
| `!linkgp` | Obter link do grupo | `!linkgp` |
| `!resetlinkgp` | Resetar link do grupo | `!resetlinkgp` |
| `!nomegp` | Alterar nome do grupo | `!nomegp Novo Nome` |
| `!descgp` | Alterar descrição | `!descgp Nova descrição` |
| `!fotogp` | Alterar foto do grupo | `!fotogp` (com imagem) |
| `!marcar` | Marcar todos | `!marcar Mensagem` |
| `!hidetag` | Marcar sem notificar | `!hidetag Mensagem` |
| `!add` | Adicionar membro | `!add 5511999999999` |
| `!antilink` | Ativar/desativar antilink | `!antilink 1` (1-5) |
| `!antifake` | Bloquear DDDs específicos | `!antifake 55` |
| `!bemvindo` | Ativar mensagem de boas-vindas | `!bemvindo 1` |
| `!saiu` | Ativar mensagem de saída | `!saiu 1` |
| `!autosair` | Sair automaticamente | `!autosair 5` (minutos) |
| `!limpar` | Limpar mensagens | `!limpar 10` |

### 🎮 Diversão

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!tictactoe` | Iniciar jogo da velha | `!tictactoe @oponente` |
| `!rank-tictactoe` | Ver ranking | `!rank-tictactoe` |
| `!gay` | Medidor de gay | `!gay @membro` |
| `!feio` | Medidor de feiura | `!feio @membro` |
| `!gado` | Medidor de gado | `!gado @membro` |
| `!casal` | Formar casal | `!casal @membro1 @membro2` |
| `!top5` | Top 5 aleatório | `!top5 gados` |
| `!chance` | Calcular chance | `!chance de chuva` |
| `!caracoroa` | Cara ou coroa | `!caracoroa` |
| `!dado` | Jogar dado | `!dado` |
| `!slot` | Caça-níquel | `!slot` |

### 🎵 Downloads

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!play` | Baixar música do YouTube | `!play Despacito` |
| `!play2` | Baixar vídeo do YouTube | `!play2 Despacito` |
| `!ytmp3` | Download de áudio | `!ytmp3 [link]` |
| `!ytmp4` | Download de vídeo | `!ytmp4 [link]` |
| `!tiktok` | Download do TikTok | `!tiktok [link]` |
| `!instagram` | Download do Instagram | `!instagram [link]` |
| `!facebook` | Download do Facebook | `!facebook [link]` |

### 🛠️ Utilidades

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!sticker` | Criar figurinha | `!sticker` (com imagem) |
| `!toimg` | Converter sticker em imagem | `!toimg` (responder sticker) |
| `!togif` | Converter sticker em GIF | `!togif` (responder sticker) |
| `!translate` | Traduzir texto | `!translate pt Hello` |
| `!clima` | Ver clima | `!clima São Paulo` |
| `!calc` | Calculadora | `!calc 2+2` |
| `!correios` | Rastrear encomenda | `!correios AA123456789BR` |
| `!cep` | Consultar CEP | `!cep 01310-100` |
| `!cpf` | Gerar CPF válido | `!cpf` |
| `!cnpj` | Gerar CNPJ válido | `!cnpj` |

### 🤖 IA & Pesquisa

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!gpt` | ChatGPT | `!gpt Como fazer bolo?` |
| `!ia` | IA Wendel | `!ia Olá` |
| `!google` | Pesquisar no Google | `!google Node.js` |
| `!wikipedia` | Pesquisar na Wikipedia | `!wikipedia Brasil` |
| `!imagem` | Buscar imagens | `!imagem gato` |

### 👑 Dono

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!entrar` | Entrar em grupo | `!entrar [link]` |
| `!sair` | Sair do grupo | `!sair` |
| `!limpar-chat` | Limpar chat | `!limpar-chat` |
| `!bloquear` | Bloquear contato | `!bloquear @user` |
| `!desbloquear` | Desbloquear contato | `!desbloquear @user` |
| `!bc` | Broadcast (todos) | `!bc Mensagem` |
| `!bcgp` | Broadcast (grupos) | `!bcgp Mensagem` |
| `!listablock` | Ver bloqueados | `!listablock` |
| `!listagp` | Ver grupos | `!listagp` |
| `!bangp` | Banir comandos em grupo | `!bangp` |
| `!unbangp` | Desbanir comandos | `!unbangp` |
| `!reiniciar` | Reiniciar bot | `!reiniciar` |
| `!atualizar` | Atualizar bot | `!atualizar` |

### 📊 Informações

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `!menu` | Menu principal | `!menu` |
| `!info` | Informações do bot | `!info` |
| `!ping` | Velocidade do bot | `!ping` |
| `!runtime` | Tempo online | `!runtime` |
| `!listadmin` | Ver admins | `!listadmin` |
| `!listonline` | Ver membros online | `!listonline` |
| `!infogp` | Info do grupo | `!infogp` |
| `!perfil` | Ver perfil | `!perfil @user` |
| `!dono` | Info do dono | `!dono` |

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
1. **Nível 1**: Apenas aviso
2. **Nível 2**: Deletar mensagem
3. **Nível 3**: Deletar + aviso
4. **Nível 4**: Deletar + remover membro
5. **Nível 5**: Deletar + banir permanentemente

### 📱 AntiPV (Anti-Privado)

Proteção contra mensagens privadas:
- **Modo 1**: Apenas aviso
- **Modo 2**: Aviso + bloqueio automático

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
