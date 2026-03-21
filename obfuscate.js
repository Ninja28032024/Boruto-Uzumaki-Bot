const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Configuração de ofuscação idêntica ao Tenku Ofuscator
const OBFUSCATION_OPTIONS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: false,
  shuffleStringArray: true,
  simplify: true,
  splitStrings: true,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 0.75,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayThreshold: 0.75,
  target: 'browser',
  transformObjectKeys: true,
  unicodeEscapeSequence: false
};

// Cores para output no console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

// Função para obfuscar um arquivo
function obfuscateFile(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    
    console.log(`${colors.blue}[PROCESSANDO]${colors.reset} ${path.relative(process.cwd(), filePath)}`);
    
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, OBFUSCATION_OPTIONS).getObfuscatedCode();
    
    // Sobrescrever o arquivo original
    fs.writeFileSync(filePath, obfuscatedCode, 'utf8');
    
    const originalSize = code.length;
    const obfuscatedSize = obfuscatedCode.length;
    const percentChange = ((obfuscatedSize - originalSize) / originalSize * 100).toFixed(2);
    
    console.log(`${colors.green}[✓ SUCESSO]${colors.reset} ${path.relative(process.cwd(), filePath)}`);
    console.log(`  Tamanho original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Tamanho ofuscado: ${(obfuscatedSize / 1024).toFixed(2)} KB`);
    console.log(`  Variação: ${percentChange > 0 ? '+' : ''}${percentChange}%\n`);
    
    return true;
  } catch (error) {
    console.log(`${colors.red}[✗ ERRO]${colors.reset} ${path.relative(process.cwd(), filePath)}`);
    console.log(`  Erro: ${error.message}\n`);
    return false;
  }
}

// Função para encontrar todos os arquivos .js em um diretório
function findJSFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        // Ignorar node_modules e diretórios ocultos
        if (entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
          walkDir(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        files.push(fullPath);
      }
    });
  }
  
  walkDir(dir);
  return files;
}

// Função principal
function main() {
  console.log(`${colors.yellow}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.yellow}║        BORUTO BOT - SCRIPT DE OFUSCAÇÃO DE CÓDIGO          ║${colors.reset}`);
  console.log(`${colors.yellow}║     Utilizando Configuração Tenku Ofuscator v3.0.0        ║${colors.reset}`);
  console.log(`${colors.yellow}╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);
  
  const projectRoot = process.cwd();
  const borutoPath = path.join(projectRoot, 'boruto.js');
  const libPath = path.join(projectRoot, 'settings', 'lib');
  
  // Verificar se os arquivos/diretórios existem
  if (!fs.existsSync(borutoPath)) {
    console.log(`${colors.red}[ERRO]${colors.reset} Arquivo boruto.js não encontrado em ${projectRoot}\n`);
    process.exit(1);
  }
  
  if (!fs.existsSync(libPath)) {
    console.log(`${colors.red}[ERRO]${colors.reset} Diretório settings/lib não encontrado\n`);
    process.exit(1);
  }
  
  console.log(`${colors.blue}[AVISO]${colors.reset} Este script irá SOBRESCREVER os arquivos originais!\n`);
  console.log(`${colors.blue}[INFO]${colors.reset} Configuração de Ofuscação:`);
  console.log(`  - Compactação: ${OBFUSCATION_OPTIONS.compact}`);
  console.log(`  - Control Flow Flattening: ${OBFUSCATION_OPTIONS.controlFlowFlattening} (threshold: ${OBFUSCATION_OPTIONS.controlFlowFlatteningThreshold})`);
  console.log(`  - Dead Code Injection: ${OBFUSCATION_OPTIONS.deadCodeInjection} (threshold: ${OBFUSCATION_OPTIONS.deadCodeInjectionThreshold})`);
  console.log(`  - String Array: ${OBFUSCATION_OPTIONS.stringArray} (encoding: ${OBFUSCATION_OPTIONS.stringArrayEncoding.join(', ')})`);
  console.log(`  - Identificadores: ${OBFUSCATION_OPTIONS.identifierNamesGenerator}\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Ofuscar boruto.js
  console.log(`${colors.yellow}[ETAPA 1/2]${colors.reset} Ofuscando boruto.js\n`);
  if (obfuscateFile(borutoPath)) {
    successCount++;
  } else {
    errorCount++;
  }
  
  // Ofuscar arquivos em settings/lib
  console.log(`${colors.yellow}[ETAPA 2/2]${colors.reset} Ofuscando arquivos em settings/lib\n`);
  const libFiles = findJSFiles(libPath);
  
  if (libFiles.length === 0) {
    console.log(`${colors.yellow}[AVISO]${colors.reset} Nenhum arquivo .js encontrado em settings/lib\n`);
  } else {
    libFiles.forEach(filePath => {
      if (obfuscateFile(filePath)) {
        successCount++;
      } else {
        errorCount++;
      }
    });
  }
  
  // Resumo final
  console.log(`${colors.yellow}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.yellow}║                    RESUMO DA OFUSCAÇÃO                     ║${colors.reset}`);
  console.log(`${colors.yellow}╚════════════════════════════════════════════════════════════╝${colors.reset}`);
  console.log(`${colors.green}Arquivos Processados com Sucesso: ${successCount}${colors.reset}`);
  console.log(`${colors.red}Arquivos com Erro: ${errorCount}${colors.reset}\n`);
  
  if (errorCount === 0) {
    console.log(`${colors.green}✓ Ofuscação concluída com sucesso!${colors.reset}`);
    console.log(`${colors.blue}[INFO]${colors.reset} Todos os arquivos foram ofuscados no local.\n`);
  } else {
    console.log(`${colors.red}✗ Ofuscação concluída com ${errorCount} erro(s)${colors.reset}\n`);
    process.exit(1);
  }
}

// Executar script
main();
