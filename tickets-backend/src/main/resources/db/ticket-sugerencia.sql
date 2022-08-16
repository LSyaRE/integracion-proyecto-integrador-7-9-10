-- Table: public.sugerencia

-- DROP TABLE IF EXISTS public.sugerencia;

CREATE TABLE IF NOT EXISTS public.sugerencia
(
    sugerencia_id integer NOT NULL DEFAULT nextval('sugerencia_sugerencia_id_seq'::regclass),
    motivo character varying COLLATE pg_catalog."default",
    sugerenci character varying COLLATE pg_catalog."default",
    created timestamp with time zone,
    updated timestamp with time zone,
    enable boolean,
    archive boolean,
    CONSTRAINT sugerencia_pkey PRIMARY KEY (sugerencia_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.sugerencia
    OWNER to postgres;