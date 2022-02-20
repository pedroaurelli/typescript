# TypeScript!!
- Superset para o javascript
- adiciona funções ao javascript como a `declaração de tipos`
- pode ser utilizado com frameworks/libs
- precisa ser compilado em javascript. ou seja, não executamos TS
- desenvolvido pela Microsoft

## Por que TypeScript?
- adiciona confiabilidade ao programa com os tipos. o código só sera compilado e executado se estiver tudo como predefinido nos tipos
- com TS podemos verificar erros antes da execução do código, ou seja, no desenvolvimento

## Instalação do TypeScript
1 - ter instalado um gerenciador de pacotes (NPM OU YARN) <br/>

2 - ` npm i -g typescript ` instalação global do TS

3 - `tsc -v` para verificar a versão instalada

4 - Inicializando compilação

  4.1 - `tsc -w` compilação automatica
  
  4.2 - `tsc --init` inicializar o projeto TS, irá criar um arquivo de configuração

### Opicional. em frameworks essa config é gerada automaticamente

5 - no arquivo `tsconfig.json`, mudar o `"rootDir": "local onde esta desenvolvendo"` <br/>
`"outDir": "local onde vai sair o código compilado"`
