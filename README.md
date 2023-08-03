# FastFront - Stock "App"

Esse projeto foi feito para participar da seleção do instituto IATECAM. O front foi feito usando angular e o framework de estilo primeNG. A api foi simulada através do uso do json-server, conforme alinhado com o analista do instituto 'Gabriel Batista'. Espero que esteja do agrado de todos, acabei não conseguindo fazer toda a demanda do desafio por questão de tempo, faltando a parte do dashboard, mas as demais estão funcionais e prontas para teste. Mais uma vez, muito obrigado pela oportunidade de participar do desafio, fico no aguardo dos feedbacks e, se possível, de boas notícias!

## Executando o projeto

Antes de mais nada, processo padrão, instale as dependências do projeto com o `npm install`.

Após instaladas as dependências, para rodar o projeto é simples, basta ir na pasta raiz dele e executar o comando `ng-serve` que irá iniciar o frontend na porta `http://localhost:4200/`.

Para executar a 'api' basta ir na pasta raiz do projeto e executar o comando `json-server --watch db.json`, garanta que está executando o comando pasta raiz de fato, onde está localizado o arquivo `db.json`.

## Observações

O `json-api` simula uma api com o uso de um arquivo json, caso queiram, podem manipular as informações diretamente no arquivo json, mas sempre se mantendo atento ao padrão dos dados. Para login no primeiro momento, já vai um usuário admin padrão, suas informações podem ser vistas no arquivo `db.json` na parte de `user`, mas caso prefira, pode estar criando seu próprio usuário em tempo real.
