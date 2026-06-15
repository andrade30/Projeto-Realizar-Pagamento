# Projeto Realizar Pagamento

## Objetivo

Este projeto tem como objetivo demonstrar a implementação de testes unitários utilizando JavaScript, Mocha e Node Assert, bem como a integração contínua através do GitHub Actions.

Além da execução automatizada dos testes, o projeto também gera relatórios de execução utilizando o Mochawesome e realiza análise estática de código com ESLint.

---

# Tecnologias Utilizadas

* JavaScript (ES Modules)
* Node.js
* Mocha
* Node Assert
* Mochawesome
* ESLint
* GitHub Actions

---

# Estrutura do Projeto

```text
.
├── .github
│   └── workflows
│       └── ci-quality.yml
├── src
│   └── realizarPagamento.js
├── test
│   └── realizarPagamento.test.js
├── mochawesome-report
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Implementação dos Testes Unitários

Os testes unitários foram desenvolvidos utilizando o framework Mocha juntamente com a biblioteca nativa Assert do Node.js.

Os cenários implementados validam:

* Pagamentos acima de R$ 100 classificados como categoria "cara".
* Pagamentos de até R$ 100 classificados como categoria "padrão".
* Retorno do pagamento mais recente registrado no sistema.

A abordagem utilizada segue o padrão Arrange, Act e Assert (AAA), proporcionando maior clareza e manutenção dos testes.

Exemplo:

```javascript
// Arrange
const servicoDePagamento = new ServicoDePagamento();

// Act
servicoDePagamento.pagar('0987-7656-3475', 'Apple', 150.00);

// Assert
assert.equal(ultimoPagamento.categoria, 'cara');
```

---

# Relatórios de Teste

O projeto utiliza o Mochawesome como reporter do Mocha.

A execução dos testes gera automaticamente relatórios em formato:

* HTML
* JSON

Os relatórios são armazenados no diretório:

```text
mochawesome-report/
```

Para executar os testes:

```bash
npm test
```

---

# Análise Estática de Código

Foi configurado o ESLint para garantir a qualidade e padronização do código-fonte.

As principais regras configuradas são:

* Uso obrigatório de ponto e vírgula.
* Utilização de aspas simples.

Execução:

```bash
npm run lint
```

Benefícios:

* Identificação antecipada de problemas de código.
* Padronização da base de código.
* Integração com o processo de CI.

---

# Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions.

Arquivo:

```text
.github/workflows/ci-quality.yml
```

Objetivos da pipeline:

* Automatizar validações de qualidade.
* Executar testes unitários.
* Gerar relatórios.
* Disponibilizar artefatos de execução.

---

# Gatilhos da Pipeline

## Execução por Push

A pipeline é executada automaticamente sempre que alterações são enviadas para a branch principal.

```yaml
push:
  branches:
    - main
```

---

## Execução Manual

Permite que a pipeline seja executada sob demanda através da interface do GitHub.

```yaml
workflow_dispatch:
```

---

## Execução Agendada

A pipeline também pode ser executada automaticamente em horários pré-definidos através do recurso de agendamento do GitHub Actions.

schedule:
  # Executa a cada 5 minutos
  - cron: '*/5 * * * *'

A expressão acima executa a pipeline a cada 5 minutos, todos os dias da semana.

Observação

O GitHub Actions utiliza o fuso horário UTC para agendamentos. Como a execução está configurada em intervalos de 5 minutos, o fuso horário não impacta a frequência das execuções, apenas o horário exibido nos logs e no histórico das execuções.

Estrutura da expressão cron
*/5 * * * *
 │  │ │ │ │
 │  │ │ │ └── Segunda a Sexta
 │  │ │ └──── Todos os meses
 │  │ └────── Todos os dias do mês
 │  └──────── Todas as horas
 └────────── A cada 5 minutos

Importante

O GitHub Actions não garante que a execução ocorrerá exatamente no minuto programado. Em horários de maior utilização da plataforma, podem ocorrer pequenos atrasos na inicialização do workflow.

---

# Fluxo de Execução da Pipeline

```text
Checkout do código
        ↓
Instalação das dependências
        ↓
Análise estática com ESLint
        ↓
Execução dos testes unitários
        ↓
Geração do relatório Mochawesome
        ↓
Publicação do relatório como artefato
```

---

# Conceitos de CI/CD Aplicados

## Continuous Integration (CI)

A integração contínua foi aplicada para garantir que cada alteração enviada ao repositório seja automaticamente validada.

Benefícios:

* Feedback rápido.
* Detecção antecipada de falhas.
* Maior confiabilidade das entregas.

---

## Quality Gate

O ESLint atua como uma camada de validação de qualidade.

Caso sejam encontrados problemas de padronização ou boas práticas, a execução da pipeline é interrompida.

---

## Test Automation

Os testes unitários são executados automaticamente em cada execução da pipeline, garantindo que alterações não introduzam regressões.

---

## Artifact Management

Após a execução dos testes, os relatórios gerados pelo Mochawesome são publicados como artefatos da pipeline.

Configuração:

```yaml
uses: actions/upload-artifact@v4
```

Benefícios:

* Histórico de execuções.
* Evidências de testes.
* Facilidade para auditorias e análises.

---

# Como Executar Localmente

## Instalação das dependências

```bash
npm install
```

## Executar análise estática

```bash
npm run lint
```

## Executar testes

```bash
npm test
```

---

# Resultado Esperado

Ao final da execução:

* Todos os testes devem ser aprovados.
* O relatório Mochawesome deve ser gerado.
* O GitHub Actions deve publicar o relatório como artefato.
* A qualidade do código deve ser validada pelo ESLint.

---

# Autor

Alessandro Andrade |
QA Engineer
