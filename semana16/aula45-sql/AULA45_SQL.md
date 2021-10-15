Exercício 1

- O FLOAT foi usado para declarar o salário por causa das casas decimais que podem haver no valor de salário.

- VARCHAR(n) - strings de no máximo n caracteres.

- DATE - representa uma data (YYYY-MM-DD)

- SHOW DATABASES - Só mostra o nome do banco de dados que estamos trabalhando.

- SHOW TABLES - Só mostra o nome da tabela que estamos trabalhando.

- DESCRIBE Actor - mostra a tabela toda com todas as colunas e linhas.

Exercício 2

A) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

B) Entrada duplicada "002" para chave primária. Traduzindo: Essa ID 002 já existe no db!

C) Error Code: 1136. Contagem do número de colunas não bate com valor da tabela.

D) Error Code: 1136. Contagem do número de colunas não bate com valor da tabela.

E) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
- Valor da data está incorreto para a coluna 'birth_date'

F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marty McFly",
  3333000.33,
  "1968-03-18", 
  "male"
);

Exercício 3

a) Escreva uma query que retorne todas as informações das atrizes 
SELECT * from Actor 
WHERE gender = "female"

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT * from Actor 
WHERE gender = "testandogenderinvalido";
// >>> RETORNOU TUDO NULL 

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

Error Code: 1054. Unknown column 'nome' in 'field list'
Coluna "nome" é desconhecida. Ocorreu o erro pois o nome da coluna é name e não nome.






