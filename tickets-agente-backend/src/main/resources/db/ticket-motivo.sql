-- Table: public.motivos

-- DROP TABLE public.motivos;

CREATE TABLE public.motivos
(
    motivo_id integer NOT NULL DEFAULT nextval('motivos_motivo_id_seq'::regclass),
    descripcion character varying COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone,
    update timestamp with time zone,
    enabled boolean,
    archived boolean,
    CONSTRAINT motivos_pkey PRIMARY KEY (motivo_id)
)

TABLESPACE pg_default;

ALTER TABLE public.motivos
    OWNER to postgres;