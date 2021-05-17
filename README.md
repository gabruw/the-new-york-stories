
# The New York Stories

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.io/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 📝 Resumo
Esta é a The New York Stories, uma aplicação que consome a API do *The New York Times*.

## 💻 Features
- [X] Top Stories

## 📖 Requisitos

- É necessário possuir o `expo` e `expo-cli` instalado de forma global: [Expo](https://docs.expo.io/get-started/installation/)
- Instale os pacotes através do comando `yarn install` ou `npm install`
  - Se a execução for feita em um iOS nativo, execute `npx pod-install`

## 🚀 Execução

Para executa-lo, é necessário criar um arquivo `.env` na pasta matriz do projeto. Este arquivo deve conter a API Key que será utilizada para o acesso do conteúdo: `API_KEY=<key_value>` 

Este projeto pode ser executado no seu browser ou através do Expo Client:
  - iOS: [iTunes](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
 
Os seguintes comandos são suportados pela aplicação: 

| Comando   | Script                    | Efeito                                    |             
|-----------|---------------------------|-------------------------------------------|
| start     | expo start                | Executa a aplicação pelo Expo             |
| web       | expo start --web          | Executa a aplicação no navegador          |
| ios		    | expo start --ios          | Executa a aplicação no emulador iOS       |
| android	  | expo start --android      | Executa a aplicação no emulador Android   |
| eject     | expo eject                | Remove as dependências de compilação      |
| test      | jest                      | Executa os testes                         |
| lint      | eslint .                  | Executa o ESLint                          |

## 🏯 Arquitetura
A arquitetura foi desenvovida levando em consideração os princípios do S.O.L.I.D. apresentados por Robert C. Martin. Os limites arquiteturais foram definidos para enfatizar o S.R.P. (Single Responsibility Principle) e L.S.P. (Liskov Substitution Principle). Dessa forma, é possível que novos módulos sejam acoplados ao código sem que haja necessidade de alterar os demais componentes.

## 💬 Esclarecimentos

### Se o componente *TabsNavigator* conseguiria deduzir quais são suas sub-rotas, porque não chama-lo direto na *Route Factory*?
O limite arquitetural do sistema parte do pressuposto que nem todas as *main routes* teram sub-rotas ou serão apresentadas desta forma. A repetição ou não dessa declaração deve ser algo a ser levado para as proximas telas se necessário.

### Porque não utilizar o *navigation* para as sub-rotas?
A ideia foi de agrupar estas abas em páginas separadamente. Utilizar as sub-rotas fora da *Route Factory* foi um limite imposto para, principalmente, diferenciar os tipos de rota do sistema.

### Porque utilizar *SVG Components* ao invés do proprio SVG?
Os *SVG Components* são mais maleaveis e menos custosos de customizar que os proprios SVG.

## 🧮 Pirâmide de Testes

### Unidade
Os testes de unidade (ou testes unitários) são responsáveis por testar a menor unidade de código. Este teste é independente de iterações com outras partes do código, possuindo um maior número, menos acoplada e mais rápida de se executar.

### Integração
Os testes de integração são responsáveis por criar a iteração de duas ou mais unidades. Este tipo possui o objetivo de testar funcionalidades do sistema, possuindo uma quantidade maior que os E2E e menor que os de unidade. 

### E2E (end-to-end)
Os testes E2E (ponta-a-ponta) são os testes mais fragilizados do sistema. Com o intuito de simular as ações tomadas em um cenário real, como preenchimento de formulários, navegações e cliques. Estes testes são os que possuem a menor quantidade, são os mais lentos e mais acoplados possíveis.

![Pirâmide de Testes](https://i.imgur.com/FAvhRTT.png)
