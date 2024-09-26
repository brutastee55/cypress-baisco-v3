## :memo: Descrição
Curso de automação cypress com o básico da ferramenta

## :books: Pré-requisitos
Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

* git (versão 2.33.0)
* Node.js (versão v16.17.0)
* NPM (versão 8.15.0)
* <b>Obs.:</b> Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas citados acima.

* <b>Obs. 2:</b> Ao instalar o Node.js o NPM é instalado automaticamente.

* <b>Obs. 3:</b> Para verificar as versões do git, Node.js e NPM instaladas em seu computador, execute o comando git --version && node --version && npm --version no seu terminal de linha de comando.

## Clonando o projeto 🐑
Abra o navegador, acesse a URL https://github.com/brutastee55/desafio-qa, clique no botão Code, escolha uma opção de clone (HTTPS ou SSH), copie o link de clone do projeto, e em seu terminal de linha de comando (em uma pasta onde você armazene seus projetos de software), execute o comando <b>git clone [cole-o-link-copiado-aqui].</b>

Após o clone do projeto, acesse o diretório recém clonado (ex.: cd desafio-qa).

Dentro do diretório desafio-qa você terá os sub-diretórios .git/ (diretório oculto), cypress/, e os arquivos .gitignore (arquivo oculto), cypress.json, package-lock.json, package.json e README.md.

## Instalação das dependências de desenvolvimento
Com o projeto clonado a partir do GitHub, é hora de instalarmos suas depedências de desenvolvimento.

Visto que tais dependências já estão listadas no arquivo package.json, basta executar o comando <b>npm install</b> na raiz do projeto.

## Executando os testes
Estando na raiz do projeto Execute o comando <b>npm run cypress:open</b> para abrir o cypress, caso queira rodar no seu terminal de linha de comando basta executar <b>npm run cypress:run</b>

## Evidencias
No fim da execução dos testes será criado um relatório que fica na pasta <b>cypress/reports/MultipleReport</b> basta abrir o arquivo <b>index.html</b> para ter o detalhe da automação 

## :wrench: Tecnologias utilizadas
ºNode.js v16.17.0\
ºNPM 8.15.0\
ºCypress-cucumber-preprocessor 4.3.1\
ºCypress 3.6.0\
ºMultiple-cucumber-html-reporter 3.0.1


## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/brutastee55">
        <img src="https://gitlab.com/uploads/-/system/user/avatar/4485003/avatar.png?width=400" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>
          <b>Bruno Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
* Concluído
