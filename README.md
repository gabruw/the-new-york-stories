# My Universal React Project

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
| ios		| expo start --ios          | Executa a aplicação no emulador iOS       |
| android	| expo start --android      | Executa a aplicação no emulador Android   |
| eject     | expo eject                | Remove as dependências de compilação      |
| test      | jest                      | Executa os testes                         |
| lint      | eslint .                  | Executa o ESLint                          |
