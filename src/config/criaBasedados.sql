CREATE SEQUENCE clientes_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE clientes_seq
  OWNER TO postgres;


CREATE TABLE clientes
(
  id integer NOT NULL DEFAULT nextval('clientes_seq'::regclass),
  nome character varying(255) not null,
  idade integer not null,
  whatsapp character varying(15) NOT NULL,
  facebook varchar(255) not null,
  instagram varchar(255),
  CPF varchar(14),
  data_cadastro timestamp,
  endereco varchar(255) not null,
  situacao varchar(1),
  CONSTRAINT clientes_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE clientes
  OWNER TO postgres;


/*
drop table clientes;
drop sequence clientes_seq;

insert into clientes
select nextval('clientes_seq'),
'Fulana',
19,
'11 9999-9999',
'facebook.com/fulana',
'instagram.com/fulana',
'999.999.999-99',
now(),
'R. Tal, n. tal - bairro tal, cidade tal',
'R' 
*/