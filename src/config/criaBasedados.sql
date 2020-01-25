--drop table if exists clientes;
--tdrop sequence if exists clientes_seq;

/*
CREATE SEQUENCE clientes_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE clientes_seq
  OWNER TO postgres;
*/

drop table if exists cliente;
CREATE TABLE cliente
(
  --id integer NOT NULL DEFAULT nextval('clientes_seq'::regclass),
  id SERIAL PRIMARY KEY,
  nome character varying(255) not null,
  dataNascimento timestamp,
  whatsapp character varying(15) NOT NULL,
  facebook varchar(255),
  instagram varchar(255),
  CPF varchar(14),
  data_cadastro timestamp,
  endereco varchar(255),
  situacao_regular boolean,
  email varchar(255)
--  CONSTRAINT cliente_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE cliente
  OWNER TO postgres;




INSERT INTO cliente
(nome, dataNascimento,whatsapp, facebook,
  instagram,
  CPF,
  data_cadastro,
  endereco,
  situacao_regular,
  email)
VALUES(
--select nextval('clientes_seq'),
'Fulana',
'1975-08-30',
'11 9999-9999',
'facebook.com/fulana',
'instagram.com/fulana',
'999.999.999-99',
now(),
'R. Tal, n. tal - bairro tal, cidade tal',
true,
'fulana@gmail.com' );


DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario
(
  --id integer NOT NULL DEFAULT nextval('clientes_seq'::regclass),
  id_usuario SERIAL PRIMARY KEY,
  nome character varying(255) not null,
  email character varying(255) not null,
  senha character varying(10) not null,
  privilegioAdm boolean
)
WITH (
  OIDS=FALSE
);
ALTER TABLE usuario
  OWNER TO postgres;




INSERT INTO usuario
(nome, email, senha, privilegioAdm)
VALUES(
'Emmanuel',
'emmanuel.oliveira3@gmail.com',
'123',
true),
(
'Pérola',
'passeiodospoetas@gmail.com',
'123',
false);
