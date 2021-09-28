USE `lovelace-2147685-rafael-machado`;

CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   salary FLOAT NOT NULL DEFAULT 100000,
   birth_date DATE NOT NULL,
   gender VARCHAR(6) NOT NULL
);


CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);

SET SQL_SAFE_UPDATES = 0;

select * from Actor;

select * from Movie;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

1-a] ALTER TABLE Actor DROP COLUMN salary;

-- Apaga a coluna salary

b] ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

-- Nome da coluna gender passa a ser sex - continua campo com 6 caracteres

c] ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

-- Mantem o nome gender, altera número de caracteres de 6 para 255 (strings)

d] ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


2-a]  Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET name = "Tom Hanks"
WHERE id = "003"

b] Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c] Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET 
name = "Juliana Ewbanks",
birth_date = "2001-02-10",
salary = 600000,
gender = "female"
WHERE id = "005";

d] Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

UPDATE Actor
SET nickname = "JULIANA PAES"
WHERE id = "101";

Error Code: 1054. Unknown column 'nickname' in 'field list'

Se eu der um SET name com id 101, não dá erro. Simplesmente não modifica nada.












