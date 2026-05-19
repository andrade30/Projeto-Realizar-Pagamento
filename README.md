<<<<<<< HEAD
# Serviço de Pagamento

Uma classe JavaScript para gerenciar pagamentos com categorização automática e consulta do último pagamento realizado.

## 📋 Descrição

`ServicoDePagamento` é uma classe que fornece funcionalidades para:
- **Registrar pagamentos**: Armazena informações de cada transação (código de barras, empresa e valor)
- **Categorizar automaticamente**: Classifica pagamentos como 'cara' (acima de R$ 100) ou 'padrão' (até R$ 100)
- **Consultar último pagamento**: Retorna os detalhes da transação mais recente

## 🎯 Objetivo

Desenvolver uma classe em JavaScript capaz de gerenciar pagamentos, categorizando-os automaticamente conforme seu valor e permitindo a consulta do último pagamento realizado.

## 📋 Regras de Negócio

- Pagamentos são armazenados em uma lista interna
- Cada pagamento possui: código de barras, empresa, valor e categoria
- Pagamentos com valor **maior que R$ 100** são categorizados como **'cara'**
- Pagamentos com valor **até R$ 100** são categorizados como **'padrão'**
- Apenas o último pagamento registrado pode ser consultado

## 🧪 Cenários de Teste

- ✅ Validar categorização correta para pagamentos acima de R$ 100
- ✅ Validar categorização correta para pagamentos até R$ 100
- ✅ Validar que apenas o último pagamento é retornado em múltiplos registros

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+

### Instalação

```bash
npm install
```

## 🧪 Testes

Execute a suíte de testes com:

```bash
npm test
```

Testes cobrem:
- ✅ Categorização de pagamentos acima de R$ 100
- ✅ Categorização de pagamentos até R$ 100
- ✅ Consulta do pagamento mais recente (mesmo com múltiplos registros)

Os relatórios de teste são gerados em `mochawesome-report/`

## 📁 Estrutura do Projeto

```
├── src/
│   └── realizarPagamento.js      # Classe principal
├── test/
│   └── realizarPagamento.test.js # Suite de testes
├── mochawesome-report/           # Relatórios de teste
├── package.json
└── README.md
```

## �️ Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação
- **Node.js** - Runtime JavaScript
- **Mocha** - Framework de testes
- **Node Assert** - Biblioteca de asserções
- **Mochawesome** - Gerador de relatórios HTML para testes

## 📚 Aprendizados

- Uso de classes ES6 e encapsulamento com campos privados (#)
- Implementação de lógica condicional para categorização de dados
- Testes unitários com Mocha e assertions nativas do Node.js
- Geração de relatórios HTML para testes com Mochawesome
- Boas práticas de naming e estrutura de código

## 👤 Autor

**Alessandro Andrade**

Projeto desenvolvido para prática de testes automatizados e lógica de programação em JavaScript.

## 📄 Licença

ISC
=======
# Projeto-Realizar-Pagamento
Projeto de Realizar e Consultar Pagamento com Testes Automatizados
>>>>>>> 8c433890c04355e436de2672c9cb414c6de618d8
