-- Table: public.roles

-- DROP TABLE public.roles;

CREATE TABLE IF NOT EXISTS public.roles
(
    rol_id integer NOT NULL DEFAULT nextval('roles_rol_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    admin boolean,
    created timestamp without time zone,
    updated timestamp without time zone,
    enable boolean,
    archived boolean,
    modulo integer,
    CONSTRAINT roles_pkey PRIMARY KEY (rol_id)
)

TABLESPACE pg_default;

ALTER TABLE public.roles
    OWNER to postgres;