<table align="center"><tr><td align="center" width="9999">
<h1 align="center">
    <img alt="Ajudaaí" title="#Ajudaaí" src="https://www.significadofacil.com/wp-content/uploads/2019/04/business-1000x500.jpg" />
</h1>

<h4 align="center"> 
	 Backend - Ajudaaí 🚀<br> v0.2 <br><br> 🚧 em construção... 🚧
</h4>

<p align="center">
  <img alt="Language count" src="https://img.shields.io/badge/Linguagens-2-green">
  
  <img alt="Node version" src="https://img.shields.io/badge/Node-16.15.0%20LTS-green">
  
  <img alt="Docker Suporte" src="https://img.shields.io/badge/Docker-Partial-yellow">
  
  <img alt="License" src="https://img.shields.io/badge/license-CC%20BY--NC--SA%203.0-brightgreen">
  
</p>

<p align="center">
 <a href="#hammer_and_wrench-tecnologias">Tecnologias</a> •
 <a href="#triangular_flag_on_post-próximas-implementações">A Seguir</a> • 
 <a href="#rocket-como-executar-o-projeto">Iniciando</a> • 
 <a href="#pré-requisitos">Pré-requisitos</a> • 
 <a href="#game_die-rodando-o-backend-docker">Servidor com Docker</a> •
 <a href="#game_die-rodando-o-backend-local">Servidor Local</a> •
 <a href="#memo-licença">Licença</a> •
 <a href="#autor">Autor</a>
</p>
</td></tr></table>

## 💻 Sobre o projeto
<table align="center"><tr><td align="center" width="9999">
<h3 align="center"> 
  <b>Ajudaaí</b>
</h3>
</td></tr></table>

Desde os primórdios, a comunicação é um processo social básico que permite a troca de informações entre dois ou mais indivíduos. Porém, é uma tarefa árdua devido a complexidade que pode se tornar, principalmente no ramo empresarial. Uma falha de comunicação pode atrasar um projeto, entregar algo que não era necessário e até mesmo perder o cliente.

Com base nisso e na vivência como desenvolvedor, nasceu a ideia do sistema Ajudaaí. O intuito deste é, melhorar a comunicação de impeditivos e possibilitar o auxílio seja de um colega da área, o Product Owner (PO), Coordenador e até mesmo o Gerente. <br>Com essa exaltação de problema, todo o time estará ciente e poderão auxiliar para que o processo caminhe mais rapidamente. <br>(E claro, estamos falando de uma ideia inicial. Nada impede que seja estendido à diversas áreas da empresa e isso transforme a velocidade de resolução ainda mais.)

Mas ok, você deve se perguntar o que difere isso de um ticket(chamado) normalmente utilizado.

Então, se liga neste exemplo a seguir:

Eu como desenvolvedor, recebi um projeto para construir uma interface onde será possível cadastrar e consultar alguns clientes dessa mesma empresa. Pois bem, com o desenvolvimento iniciado, o computador corporativo parou de funcionar.
 
<b>(Alerta!! Agora, o projeto estará parado devido ao impedimento de equipamento)</b><br>
Comumente, será aberto um chamado informado o problema. Após chegar no SLA (Acordo de Nível de Serviço) da equipe que cuida deste problema, agendará com você a entrega da máquina para que verifiquem e concerte. Após isso, será respondido que ficou pronta e pode buscar. 

E não está errado esse processo, é necessário esse controle pois pode ser grande o número de serviços recebidos para resolução. Mas, e o projeto que iniciamos e está parado agora? Como está o cliente em relação a isso?

E então, entra nosso novo sistema. O processo de chamados continua normalmente, porém com a adição deste novo alerta, toda a equipe/área estará ciente e por exemplo, a PO ou o Gestor poderá negociar diretamente com a outra área responsável uma prioridade do serviço uma vez que impacta uma entrega que possa ser um importante solucionador de problema para o cliente.

E isso é só a ideia inicial. Nada impede que esse impeditivo, após informado, o Gestor aprove e vá diretamente a informação para a outra área priorizar. As possibilidades são grandes, você decide como pode funcionar no seu ambiente. (:

<b>A proposta deste projeto é</b>
- Melhoria de comunicação entre os integrantes da equipe;
- Maior agilidade e auxílio na resolução de impedimentos;
- Possibilidade de melhoria de comunicação entre áreas de uma mesma empresa;
- Possibilidade de levantar estudos de quantidade de impedimentos, SLA, tempo ocioso... dentre outros.

## :hammer_and_wrench: Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [AdonisJs 5](https://adonisjs.com/)
- [TypeScript](https://eslint.org/)
- [Japa](https://japa.dev//)
- [Pino](https://getpino.io/#/)
- [Prettier](https://prettier.io/)
- [Swagger](https://swagger.io/)

## :triangular_flag_on_post: Próximas Implementações

Lista das próximas features a serem implementadas:

- [ ] Hash da senha do usuário;
- [ ] Bouncer nas rotas de update;
- [ ] Controller dos helps;
- [ ] Logs com Pino;
- [ ] Testes Unitários;
- [ ] Node com Docker;
- [ ] Documentação com Swagger;
- [ ] Update README;
- [ ] E muito mais por vir!!!

## :rocket: Como executar o projeto

1. Backend (Docker)
2. Backend (Local)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs].<br>
Caso queira, pode-se utilizar também o [Docker](https://eslint.org/) (neste caso, não é necessário instalar o Nodejs).<br>
Além disso, é bom ter um editor para trabalhar com o código como o [VSCode][vscode]

### :game_die: Rodando o Backend (Docker)

```bash
# Certifique-se de instalar e configurar o Docker e o GIT em seu computador antes de continuar.

# Clone este repositório
$ git clone https://github.com/devBertini/backend_ajudaai

# Acesse a pasta do projeto no terminal/cmd
$ cd backend_ajudaai

# Ao finalizar, caso esteja utilizando o VSCode, digite o comando 
$ code.
# para abrir o projeto ou abra manualmente onde foi clonado em seu computador.

# Na raiz do projeto, edite as variáveis "MYSQL_ROOT_PASSWORD" e "MYSQL_DATABASE" 
# que estão dentro do arquivo docker-compose.yml conforme gostaria de utilizar.

# Faça uma cópia do arquivo .env.example para .env

# Dentro do arquivo .env, coloca as mesmas informações na parte "MySQL Database" que colocou na etapa anterior

# Ainda no mesmo arquivo, insira suas credenciais para envio de email na parte "Mail SMTP"

# Rode a imagem do Docker
$ docker-compose up

# Após isso, o Docker irá fazer o download das imagens (caso já não as possua) e instalará as dependências do projeto.

# Ao finalizar a etapa anterior:
# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
# O Banco de Dados iniciará na porta:3306 - acesse através do seu gerenciador de Banco de Dados.

# !!! Atenção !!!

#para executar comandos dentro de um container, é necessário utilizar a seguinte estrutura de comandos:
$ docker-compose run app command

#Onde "app" é o container, no nosso caso, backend. e o comando é o que quer executar.

# Com tudo configurado e rodando corretamente você pode inicializar os testes automatizados.

# Utiliza o terminal e digite:
$ docker-compose run backend node ace test

# Após isso, irá rodar todos os testes cadastrados.
```

### :game_die: Rodando o Backend (Local)

```bash
# Certifique-se de possuir instalado o Node.js na versão 16.15.0 LTS, GIT
# e um Banco de Dados MySQL já configurado para utilizar no projeto.

# Clone este repositório
$ git clone https://github.com/devBertini/backend_ajudaai

# Acesse a pasta do projeto no terminal/cmd
$ cd backend_ajudaai

# Rode o comando:
$ npm i

# Ao finalizar, caso esteja utilizando o VSCode, digite o comando 
$ code.
# para abrir o projeto ou abra manualmente onde foi clonado em seu computador.

# Faça uma cópia do arquivo .env.example para .env

# Dentro do arquivo .env, coloca na parte "MySQL Database" as informações correspondentes ao seu Banco de Dados MySQL

# Ainda no mesmo arquivo, insira as suas credenciais para envio de email na parte "Mail SMTP"

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Ao finalizar a etapa anterior:
# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# Com tudo configurado e rodando corretamente você pode inicializar os testes automatizados.

# Utiliza o terminal e digite:
$ node ace test

# Após isso, irá rodar todos os testes cadastrados.
```

## :memo: Licença

Este projeto esta sobe a licença CC BY-NC-SA 3.0 BR <br>(Creative Commons: Atribuição-NãoComercial-CompartilhaIgual 3.0 Brasil). <br><img alt="License" src="https://img.shields.io/badge/license-CC%20BY--NC--SA%203.0-brightgreen">

## Autor

<a href="https://www.linkedin.com/in/claudio-bertini/">
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQEZhXVdeCTaFw/profile-displayphoto-shrink_800_800/0/1612052000695?e=1660176000&v=beta&t=7URS9MoA1BAVQYPPA7SBMybXhzEQ5UPsav9jLCuJXD0" width="100px;" alt=""/>
 <br />
</a>

Feito com :weight_lifting_man: por <a href="https://www.linkedin.com/in/claudio-bertini/" title="Linkedin"><b>Claudio Bertini Batista</b></a> 👋🏽 Entre em contato!
<br>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/claudio-bertini/)](https://www.linkedin.com/in/claudio-bertini/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:claudiobertini.comp@gmail.com)](mailto:claudiobertini.comp@gmail.com)

[nodejs]: https://nodejs.org/
[vscode]: https://code.visualstudio.com/
