-- Table: public.modulo

-- DROP TABLE public.modulo;

CREATE TABLE public.modulo
(
    modulo_id integer NOT NULL DEFAULT nextval('modulo_modulo_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default",
    url character varying COLLATE pg_catalog."default",
    created timestamp with time zone,
    updated timestamp with time zone,
    enabled boolean,
    archive boolean,
    CONSTRAINT modulo_pkey PRIMARY KEY (modulo_id)
)

TABLESPACE pg_default;

ALTER TABLE public.modulo
    OWNER to postgres;