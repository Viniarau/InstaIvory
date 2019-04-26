# InstaIvory

# InstaIvory

Esse projeto desenvolvido na distribuição do Linux - Ubuntu 18.04 foi realizado com auxílio do Curso do Alura de React Native onde foi feito um clone do Instagram.

# Pré-requisitos

- Npm

- Node.js

- Sdk - Android Studio

- Genymotion (Opcional)
- React Native 0.59

## Instalação das dependências
- React Native
Todos os passos dessa configuração estão disponíveis na documentação do React Native, que pode ser acessada através [deste link](https://facebook.github.io/react-native/docs/getting-started.html).
- Node js
Instalando o Node js usando o apt-get no Ubuntu:
``` 
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs 
```
- React Native CLI
````
npm install -g react-native-cli
````
```
Obs: Recomenda-se a utilização do Node Package Manager na versão 4. Você também pode (e é recomendável) utilizar a ferramenta [Yarn](https://yarnpkg.com). Yarn é um gerenciador de pacotes criado também pelo Facebook que já conta com uma série de otimizações para facilitar o gerenciamento das dependências nos seus projetos que usam ferramentas da própria empresa como React, React Native, Jest, Watchman, etc. No Debian ou Ubuntu Linux, você pode instalar o Yarn através do repositório de pacotes Debian. Primeiro precisamos configurar o repositório: `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`. Em seguida digite: `sudo apt-get update && sudo apt-get install yarn`. 
```
- Java

Baixar o JDK [aqui](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
- Android Studio

[Baixe e instale o Android Studio](https://developer.android.com/studio/index.html)
- React Navigation

Instalação e configuração do navegação do React Native
[https://reactnavigation.org/docs/en/getting-started.html](https://reactnavigation.org/docs/en/getting-started.html)
## Criando e rodando o App

Inicializar o App

`npm start`

Neste comando estamos pedindo a ferramenta `react-native` para iniciar um projeto `init` chamado `InstaluraMobile`.
````
react-native init InstaluraMobile
````

