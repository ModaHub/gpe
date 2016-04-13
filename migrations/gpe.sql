-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.8.2-beta
-- PostgreSQL version: 9.5
-- Project Site: pgmodeler.com.br
-- Model Author: bouren_n

SET check_function_bodies = false;
-- ddl-end --

-- object: root | type: ROLE --
-- DROP ROLE IF EXISTS root;
CREATE ROLE root WITH 
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	LOGIN
	ENCRYPTED PASSWORD 'etna42'
	IN ROLE postgres;
-- ddl-end --


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: gpe | type: DATABASE --
-- -- DROP DATABASE IF EXISTS gpe;
-- CREATE DATABASE gpe
-- 	ENCODING = 'UTF8'
-- 	OWNER = root
-- ;
-- -- ddl-end --
-- 

-- object: public.aws_storage_class_type | type: TYPE --
-- DROP TYPE IF EXISTS public.aws_storage_class_type CASCADE;
CREATE TYPE public.aws_storage_class_type AS
 ENUM ('STANDARD','STANDARD_IA','REDUCED_REDUNDANCY');
-- ddl-end --
ALTER TYPE public.aws_storage_class_type OWNER TO root;
-- ddl-end --

-- object: public.aws_storage_objects | type: TABLE --
-- DROP TABLE IF EXISTS public.aws_storage_objects CASCADE;
CREATE TABLE public.aws_storage_objects(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	storage_class public.aws_storage_class_type NOT NULL,
	type text NOT NULL,
	size bigint NOT NULL,
	language text,
	md5hash text NOT NULL,
	metadata json,
	amz_website_redirect_location text,
	container_id integer NOT NULL,
	object_level integer NOT NULL,
	object_position int4range NOT NULL,
	CONSTRAINT aws_storage_object_id PRIMARY KEY (id),
	CONSTRAINT aws_storage_object_position_unique UNIQUE (object_position),
	CONSTRAINT aws_storage_object_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.aws_storage_objects OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.aws_storage_objects (name,description,storage_class,type,size,language,md5hash,metadata,amz_website_redirect_location,container_id,object_level,object_position) VALUES ('Folder1','Folder Parent','STANDARD','folder','0','fr_FR','5sd6f1f654dfsg4f65sd15sdf1g5sfd41','{"some": "bullshit"}','','1','0','[0, 5]');
INSERT INTO public.aws_storage_objects (name,description,storage_class,type,size,language,md5hash,metadata,amz_website_redirect_location,container_id,object_level,object_position) VALUES ('Folder2','Folder Fils','STANDARD','folder','0','fr_FR','5sd6f1f654dfsg4f65sd15sdf1g5sfd41','{"some": "bullshit"}','','1','1','[1, 4]');
INSERT INTO public.aws_storage_objects (name,description,storage_class,type,size,language,md5hash,metadata,amz_website_redirect_location,container_id,object_level,object_position) VALUES ('Fichier1','Mon premier fichier','STANDARD','jpg','0','fr_FR','5sd6f1f654dfsg4f65sd15sdf1g5sfd41','{"some": "bullshit"}','','1','2','[2, 3]');
-- ddl-end --

-- object: public.users | type: TABLE --
-- DROP TABLE IF EXISTS public.users CASCADE;
CREATE TABLE public.users(
	id serial NOT NULL,
	login text NOT NULL,
	password text NOT NULL,
	description text,
	fname text,
	lname text,
	email text,
	CONSTRAINT user_id PRIMARY KEY (id)

)WITH ( OIDS = TRUE );
-- ddl-end --
ALTER TABLE public.users OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.users (login,password,description,fname,lname,email) VALUES ('admin','admin','System Admin User','','','');
INSERT INTO public.users (login,password,description,fname,lname,email) VALUES ('toto','toto','toto','to','to','toto@toto');
INSERT INTO public.users (login,password,description,fname,lname,email) VALUES ('tata','tata','tata','ta','ta','tata@tata');
INSERT INTO public.users (login,password,description,fname,lname,email) VALUES ('titi','titi','titi','ti','ti','titi@titi');
INSERT INTO public.users (login,password,description,fname,lname,email) VALUES ('tutu','tutu','tutu','tu','tu','tutu@tutu');
-- ddl-end --

-- object: public.cloud_vendor_type | type: TYPE --
-- DROP TYPE IF EXISTS public.cloud_vendor_type CASCADE;
CREATE TYPE public.cloud_vendor_type AS
 ENUM ('azr','aws');
-- ddl-end --
ALTER TYPE public.cloud_vendor_type OWNER TO root;
-- ddl-end --

-- object: public.azr_storage_containers | type: TABLE --
-- DROP TABLE IF EXISTS public.azr_storage_containers CASCADE;
CREATE TABLE public.azr_storage_containers(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	cache_control text,
	cache_disposition text,
	cache_encoding text,
	expect boolean NOT NULL,
	metadata text,
	storage_id integer NOT NULL,
	CONSTRAINT azr_container_id PRIMARY KEY (id),
	CONSTRAINT azr_storage_container_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.azr_storage_containers OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.azr_storage_containers (name,description,cache_control,cache_disposition,cache_encoding,expect,metadata,storage_id) VALUES ('lel','lel','lel','lel','lel','0','lel','1');
-- ddl-end --

-- object: public.azr_storage_objects | type: TABLE --
-- DROP TABLE IF EXISTS public.azr_storage_objects CASCADE;
CREATE TABLE public.azr_storage_objects(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	azr_blob_type text NOT NULL,
	type text NOT NULL,
	size bigint NOT NULL,
	language text,
	md5hash text NOT NULL,
	metadata text,
	content_disposition text NOT NULL,
	lease_id text,
	lease_duration integer,
	container_id integer NOT NULL,
	object_level integer NOT NULL,
	object_position int4range NOT NULL,
	CONSTRAINT azr_blob_id PRIMARY KEY (id),
	CONSTRAINT azr_storage_blob_position_unique UNIQUE (object_position),
	CONSTRAINT azr_storage_object_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.azr_storage_objects OWNER TO root;
-- ddl-end --

-- object: public.azr_storage_account_type | type: TYPE --
-- DROP TYPE IF EXISTS public.azr_storage_account_type CASCADE;
CREATE TYPE public.azr_storage_account_type AS
 ENUM ('Standard_LRS','Standard_ZRS','Standard_GRS','Standard_RAGRS','Premium_LRS');
-- ddl-end --
ALTER TYPE public.azr_storage_account_type OWNER TO root;
-- ddl-end --

-- object: public.azr_storage_accounts | type: TABLE --
-- DROP TABLE IF EXISTS public.azr_storage_accounts CASCADE;
CREATE TABLE public.azr_storage_accounts(
	id serial NOT NULL,
	signature text NOT NULL,
	name text NOT NULL,
	description text NOT NULL,
	label text NOT NULL,
	location text NOT NULL,
	georeplication boolean NOT NULL,
	names text NOT NULL,
	values text NOT NULL,
	secondaryread boolean NOT NULL,
	type public.azr_storage_account_type NOT NULL,
	CONSTRAINT storage_account_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.azr_storage_accounts OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.azr_storage_accounts (signature,name,description,label,location,georeplication,names,values,secondaryread,type) VALUES ('cldstr1','cldstr1','cldstr1','cldstr1','Europe','1','cldstr1','cldstr1','1','Standard_LRS');
INSERT INTO public.azr_storage_accounts (signature,name,description,label,location,georeplication,names,values,secondaryread,type) VALUES ('cldstr2','cldstr2','cldstr2','cldstr2','Europe','0','cldstr2','cldstr2','0','Standard_ZRS');
-- ddl-end --

-- object: public.azr_cloud_accounts | type: TABLE --
-- DROP TABLE IF EXISTS public.azr_cloud_accounts CASCADE;
CREATE TABLE public.azr_cloud_accounts(
	id serial NOT NULL,
	login text NOT NULL,
	password text NOT NULL,
	azr_subscription_id text NOT NULL,
	azr_storage_account_id integer,
	user_id integer,
	CONSTRAINT azr_cloud_account_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.azr_cloud_accounts OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.azr_cloud_accounts (login,password,azr_subscription_id,azr_storage_account_id,user_id) VALUES ('bouren_n@etna-alternance.net','secret42','680fe13a-97f0-4f03-858c-e61f151f100d','1','1');
-- ddl-end --

-- -- object: public.storage_containers | type: VIEW --
-- -- DROP VIEW IF EXISTS public.storage_containers CASCADE;
-- CREATE VIEW public.storage_containers
-- AS 
-- 
-- SELECT
-- aws_storage_containers.id, aws_storage_containers.name, aws_storage_containers.description, aws_storage_containers.cache_control, aws_storage_containers.cache_disposition, aws_storage_containers.cache_encoding, aws_storage_containers.expect, aws_storage_containers.cors_configuration, '0' AS metadata, aws_storage_containers.amz_storage_class AS storage_type, aws_storage_containers.region, aws_storage_containers.size, 'aws' AS cloud_vendor
-- FROM
-- public.aws_storage_containers
-- UNION ALL
-- SELECT
-- azr_storage_containers.id, azr_storage_containers.name, azr_storage_containers.description, azr_storage_containers.cache_control, azr_storage_containers.cache_disposition, azr_storage_containers.cache_encoding, azr_storage_containers.expect, azr_storage_containers.cors_configuration, azr_storage_containers.metadata, '0'  AS storage_type, '0' AS azr_storage_account_region, '0' AS size,  'azr' AS cloud_vendor
-- FROM 
-- public.azr_storage_containers;
-- -- ddl-end --
-- ALTER VIEW public.storage_containers OWNER TO root;
-- -- ddl-end --
-- 
-- object: public.aws_cloud_accounts | type: TABLE --
-- DROP TABLE IF EXISTS public.aws_cloud_accounts CASCADE;
CREATE TABLE public.aws_cloud_accounts(
	id serial NOT NULL,
	login text NOT NULL,
	password text NOT NULL,
	type text NOT NULL,
	aws_access_key_id text NOT NULL,
	aws_secret_access_key_id text NOT NULL,
	aws_account_id text NOT NULL,
	aws_canonical_user_id text NOT NULL,
	user_id integer,
	CONSTRAINT aws_cloud_account_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.aws_cloud_accounts OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.aws_cloud_accounts (login,password,type,aws_access_key_id,aws_secret_access_key_id,aws_account_id,aws_canonical_user_id,user_id) VALUES ('bouren_n@etna-alternance.net','etna42','root','AKIAIZL4Y6D4JDUPSM5A','RkNkRDBXZ8Midrc6ZnH3N5Iwz+6LIDKx7WEfE9XY','A5472-4984-3702','fa47085858ab564334ea42d468c62785f177627106af3bcfbc13cc2dfbe2e497','1');
-- ddl-end --

-- -- object: public.storage_objects | type: VIEW --
-- -- DROP VIEW IF EXISTS public.storage_objects CASCADE;
-- CREATE VIEW public.storage_objects
-- AS 
-- 
-- SELECT
-- aws_storage_objects.id, aws_storage_objects.name, aws_storage_objects.description, aws_storage_objects.amz_storage_class, aws_storage_objects.type, aws_storage_objects.size, aws_storage_objects.language, aws_storage_objects.md5hash, aws_storage_objects.metadata, aws_storage_objects.container_id, aws_storage_objects.amz_website_redirect_location, '0' AS lease_id, '0' AS lease_duration,'aws' AS cloud_vendor
-- FROM 
-- public.aws_storage_objects
-- UNION ALL
-- SELECT
-- azr_storage_objects.id, azr_storage_objects.name, azr_storage_objects.description, azr_storage_objects.azr_blob_type, azr_storage_objects.type, azr_storage_objects.size, azr_storage_objects.language, azr_storage_objects.md5hash, azr_storage_objects.metadata, azr_storage_objects.container_id,'0' AS amz_website_redirect_location, azr_storage_objects.lease_id, azr_storage_objects.lease_duration,'azr' AS cloud_vendor
-- FROM
-- public.azr_storage_objects;
-- -- ddl-end --
-- ALTER VIEW public.storage_objects OWNER TO root;
-- -- ddl-end --
-- 
-- object: public.groups | type: TABLE --
-- DROP TABLE IF EXISTS public.groups CASCADE;
CREATE TABLE public.groups(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	type text NOT NULL,
	CONSTRAINT group_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.groups OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.groups (name,description,type) VALUES ('sys-admin','Super Administrators Group','Storage');
INSERT INTO public.groups (name,description,type) VALUES ('str-admin','Storage Administration Group','Storage');
INSERT INTO public.groups (name,description,type) VALUES ('net-admin','Network Administration Group','Storage');
-- ddl-end --

-- object: public.link_groups_users | type: TABLE --
-- DROP TABLE IF EXISTS public.link_groups_users CASCADE;
CREATE TABLE public.link_groups_users(
	user_id integer NOT NULL,
	group_id integer NOT NULL,
	CONSTRAINT link_groups_users_pk PRIMARY KEY (user_id,group_id)

);
-- ddl-end --
ALTER TABLE public.link_groups_users OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.link_groups_users (group_id,user_id) VALUES ('1','1');
-- ddl-end --

-- object: public.permissions | type: TABLE --
-- DROP TABLE IF EXISTS public.permissions CASCADE;
CREATE TABLE public.permissions(
	id serial NOT NULL,
	resource_id integer NOT NULL,
	read boolean NOT NULL,
	write boolean NOT NULL,
	delete boolean NOT NULL,
	read_permission boolean NOT NULL,
	write_permission boolean NOT NULL,
	delete_permission boolean NOT NULL,
	CONSTRAINT permission_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.permissions OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.permissions (resource_id,read,write,delete,read_permission,write_permission,delete_permission) VALUES ('1','1','1','1','1','1','1');
INSERT INTO public.permissions (resource_id,read,write,delete,read_permission,write_permission,delete_permission) VALUES ('2','1','1','1','1','1','1');
INSERT INTO public.permissions (resource_id,read,write,delete,read_permission,write_permission,delete_permission) VALUES ('3','1','1','1','1','1','1');
-- ddl-end --

-- object: public.link_groups_permissions | type: TABLE --
-- DROP TABLE IF EXISTS public.link_groups_permissions CASCADE;
CREATE TABLE public.link_groups_permissions(
	group_id integer NOT NULL,
	permission_id integer NOT NULL,
	CONSTRAINT link_groups_permissions_pk PRIMARY KEY (group_id,permission_id)

);
-- ddl-end --
ALTER TABLE public.link_groups_permissions OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.link_groups_permissions (group_id,permission_id) VALUES ('1','1');
-- ddl-end --

-- -- object: public.cloud_accounts | type: VIEW --
-- -- DROP VIEW IF EXISTS public.cloud_accounts CASCADE;
-- CREATE VIEW public.cloud_accounts
-- AS 
-- 
-- SELECT
-- aws_cloud_accounts.id, aws_cloud_accounts.login, aws_cloud_accounts.password, aws_cloud_accounts.aws_account_id, aws_cloud_accounts.aws_canonical_user_id, aws_cloud_accounts.aws_storage_account_id AS storage_account_id, aws_cloud_accounts.user_id, 'aws' AS cloud_vendor
-- FROM
-- public.aws_cloud_accounts
-- UNION ALL
-- SELECT
-- azr_cloud_accounts.id, azr_cloud_accounts.login, azr_cloud_accounts.password, azr_cloud_accounts.azr_subscription_id, '0' AS aws_canonical_user_id, azr_cloud_accounts.azr_storage_account_id AS storage_account_id, azr_cloud_accounts.user_id, 'azr' AS cloud_vendor
-- FROM 
-- public.azr_cloud_accounts;
-- -- ddl-end --
-- ALTER VIEW public.cloud_accounts OWNER TO root;
-- -- ddl-end --
-- 
-- object: public.aws_storage | type: TABLE --
-- DROP TABLE IF EXISTS public.aws_storage CASCADE;
CREATE TABLE public.aws_storage(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	aws_cloud_account_id integer NOT NULL,
	CONSTRAINT aws_storage_id PRIMARY KEY (id),
	CONSTRAINT aws_storage_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.aws_storage OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.aws_storage (name,description,aws_cloud_account_id) VALUES ('storageOne','Depuis mon compte AWS','1');
INSERT INTO public.aws_storage (id,name,description,aws_cloud_account_id) VALUES ('12','storageTwelve','Depuis mon compte AWS','1');
INSERT INTO public.aws_storage (id,name,description,aws_cloud_account_id) VALUES ('13','storageThirteen','Depuis mon compte AWS','1');
-- ddl-end --

-- object: public.azr_storage | type: TABLE --
-- DROP TABLE IF EXISTS public.azr_storage CASCADE;
CREATE TABLE public.azr_storage(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	azr_storage_account_id integer NOT NULL,
	CONSTRAINT azr_storage_id PRIMARY KEY (id),
	CONSTRAINT azr_storage_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.azr_storage OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.azr_storage (name,description,azr_storage_account_id) VALUES ('storageTwo','Mon Second Stockage -> Azure','1');
-- ddl-end --

-- -- object: public.storage | type: VIEW --
-- -- DROP VIEW IF EXISTS public.storage CASCADE;
-- CREATE VIEW public.storage
-- AS 
-- 
-- SELECT
-- aws_storage.id, aws_storage.name, aws_storage.description, aws_storage.aws_storage_account_id, 'aws' AS cloud_vendor
-- FROM
-- public.aws_storage
-- UNION ALL
-- SELECT
-- azr_storage.id, azr_storage.name, azr_storage.description, azr_storage.azr_storage_account_id, 'azr' AS cloud_vendor
-- FROM 
-- public.azr_storage;
-- -- ddl-end --
-- ALTER VIEW public.storage OWNER TO root;
-- -- ddl-end --
-- 
-- object: public.resources | type: TABLE --
-- DROP TABLE IF EXISTS public.resources CASCADE;
CREATE TABLE public.resources(
	id serial NOT NULL,
	item_id integer NOT NULL,
	item_type text NOT NULL,
	CONSTRAINT resource_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.resources OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.resources (item_id,item_type) VALUES ('1','aws_storage');
INSERT INTO public.resources (item_id,item_type) VALUES ('12','aws_storage');
INSERT INTO public.resources (item_id,item_type) VALUES ('13','aws_storage');
-- ddl-end --

-- -- object: public.storage_folders | type: VIEW --
-- -- DROP VIEW IF EXISTS public.storage_folders CASCADE;
-- CREATE VIEW public.storage_folders
-- AS 
-- 
-- SELECT
--    *
-- FROM
--    aws_storage_objects
-- WHERE
--    type = 'folder';
-- -- ddl-end --
-- ALTER VIEW public.storage_folders OWNER TO root;
-- -- ddl-end --
-- 
-- object: public.aws_storage_acl_type | type: TYPE --
-- DROP TYPE IF EXISTS public.aws_storage_acl_type CASCADE;
CREATE TYPE public.aws_storage_acl_type AS
 ENUM ('private','public-read','public-read-write','authenticated-read','aws-exec-read','bucket-owner-read','bucket-owner-full-control');
-- ddl-end --
ALTER TYPE public.aws_storage_acl_type OWNER TO root;
-- ddl-end --

-- object: public.aws_storage_containers | type: TABLE --
-- DROP TABLE IF EXISTS public.aws_storage_containers CASCADE;
CREATE TABLE public.aws_storage_containers(
	id serial NOT NULL,
	name text NOT NULL,
	description text,
	creation_date timestamptz NOT NULL,
	acl public.aws_storage_acl_type NOT NULL,
	storage_class public.aws_storage_class_type NOT NULL,
	region text NOT NULL,
	size bigint NOT NULL,
	cache_control text,
	cache_disposition text,
	cache_encoding text,
	expect boolean NOT NULL,
	request_payment boolean NOT NULL,
	versionning boolean NOT NULL,
	lifecycle_configuration json,
	policy_configuration json,
	notification_configuration json,
	logging_configuration json,
	xregion_replication json,
	tags json,
	storage_id integer NOT NULL,
	CONSTRAINT container_id PRIMARY KEY (id),
	CONSTRAINT aws_storage_container_name_unique UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.aws_storage_containers OWNER TO root;
-- ddl-end --

-- Appended SQL commands --
INSERT INTO public.aws_storage_containers (name,description,creation_date,acl,storage_class,region,size,cache_control,cache_disposition,cache_encoding,expect,request_payment,versionning,lifecycle_configuration,policy_configuration,notification_configuration,logging_configuration,xregion_replication,tags,storage_id) 
VALUES ('monBucket','Mon tout premier',CURRENT_TIMESTAMP,'private','STANDARD','EU','65131561331','Osef','Osef','Osef','1','0','1','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','1');
INSERT INTO public.aws_storage_containers (name,description,creation_date,acl,storage_class,region,size,cache_control,cache_disposition,cache_encoding,expect,request_payment,versionning,lifecycle_configuration,policy_configuration,notification_configuration,logging_configuration,xregion_replication,tags,storage_id) 
VALUES ('mon2Bucket','Mon tout premier',CURRENT_TIMESTAMP,'private','STANDARD','EU','65131561331','Osef','Osef','Osef','1','0','1','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','1');
INSERT INTO public.aws_storage_containers (name,description,creation_date,acl,storage_class,region,size,cache_control,cache_disposition,cache_encoding,expect,request_payment,versionning,lifecycle_configuration,policy_configuration,notification_configuration,logging_configuration,xregion_replication,tags,storage_id) 
VALUES ('mon3Bucket','Mon tout premier',CURRENT_TIMESTAMP,'private','STANDARD','EU','65131561331','Osef','Osef','Osef','1','0','1','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','{"nothing": "oui"}','1');
-- ddl-end --

-- object: public.cors_configuration | type: TABLE --
-- DROP TABLE IF EXISTS public.cors_configuration CASCADE;
CREATE TABLE public.cors_configuration(
	id serial NOT NULL,
	allowed_headers text,
	allowed_methods text NOT NULL,
	allowed_origins text NOT NULL,
	expose_headers text,
	max_age_seconds integer,
	item_id integer,
	CONSTRAINT cors_condiguration_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.cors_configuration OWNER TO root;
-- ddl-end --

-- object: public.aws_permission_configuration | type: TABLE --
-- DROP TABLE IF EXISTS public.aws_permission_configuration CASCADE;
CREATE TABLE public.aws_permission_configuration(
	id serial NOT NULL,
	grantee text NOT NULL,
	grant_full_control boolean,
	grant_read boolean,
	grant_read_acp boolean,
	grant_write_acp boolean,
	item_id integer,
	CONSTRAINT aws_permission_configuration_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.aws_permission_configuration OWNER TO root;
-- ddl-end --

-- object: public.aws_storage_objects_insert | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.aws_storage_objects_insert() CASCADE;
CREATE FUNCTION public.aws_storage_objects_insert ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE LEAKPROOF
	STRICT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
UPDATE aws_storage_objects
SET object_position = int4range(lower(object_position), upper(object_position) + 2, '[)')
WHERE upper(object_position) > lower(NEW.object_position);
RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.aws_storage_objects_insert() OWNER TO root;
-- ddl-end --

-- object: public.aws_storage_objects_delete | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.aws_storage_objects_delete() CASCADE;
CREATE FUNCTION public.aws_storage_objects_delete ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE LEAKPROOF
	STRICT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
UPDATE aws_storage_objects
SET object_position = int4range(lower(object_position), upper(object_position) + 2, '[)')
WHERE upper(object_position) > lower(NEW.object_position);
RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.aws_storage_objects_delete() OWNER TO root;
-- ddl-end --

-- object: shift_object_position_on_insert | type: TRIGGER --
-- DROP TRIGGER IF EXISTS shift_object_position_on_insert ON public.aws_storage_objects CASCADE;
CREATE TRIGGER shift_object_position_on_insert
	BEFORE INSERT 
	ON public.aws_storage_objects
	FOR EACH ROW
	EXECUTE PROCEDURE public.aws_storage_objects_insert();
-- ddl-end --

-- object: shift_object_position_on_delete | type: TRIGGER --
-- DROP TRIGGER IF EXISTS shift_object_position_on_delete ON public.aws_storage_objects CASCADE;
CREATE TRIGGER shift_object_position_on_delete
	AFTER DELETE 
	ON public.aws_storage_objects
	FOR EACH ROW
	EXECUTE PROCEDURE public.aws_storage_objects_delete();
-- ddl-end --

-- object: aws_storage_container_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_storage_objects DROP CONSTRAINT IF EXISTS aws_storage_container_id CASCADE;
ALTER TABLE public.aws_storage_objects ADD CONSTRAINT aws_storage_container_id FOREIGN KEY (container_id)
REFERENCES public.aws_storage_containers (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: azr_storage_id | type: CONSTRAINT --
-- ALTER TABLE public.azr_storage_containers DROP CONSTRAINT IF EXISTS azr_storage_id CASCADE;
ALTER TABLE public.azr_storage_containers ADD CONSTRAINT azr_storage_id FOREIGN KEY (storage_id)
REFERENCES public.azr_storage (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: azr_container_id | type: CONSTRAINT --
-- ALTER TABLE public.azr_storage_objects DROP CONSTRAINT IF EXISTS azr_container_id CASCADE;
ALTER TABLE public.azr_storage_objects ADD CONSTRAINT azr_container_id FOREIGN KEY (container_id)
REFERENCES public.azr_storage_containers (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: user_id | type: CONSTRAINT --
-- ALTER TABLE public.azr_cloud_accounts DROP CONSTRAINT IF EXISTS user_id CASCADE;
ALTER TABLE public.azr_cloud_accounts ADD CONSTRAINT user_id FOREIGN KEY (user_id)
REFERENCES public.users (id) MATCH FULL
ON DELETE SET NULL ON UPDATE NO ACTION;
-- ddl-end --

-- object: azr_storage_account_id | type: CONSTRAINT --
-- ALTER TABLE public.azr_cloud_accounts DROP CONSTRAINT IF EXISTS azr_storage_account_id CASCADE;
ALTER TABLE public.azr_cloud_accounts ADD CONSTRAINT azr_storage_account_id FOREIGN KEY (azr_storage_account_id)
REFERENCES public.azr_storage_accounts (id) MATCH FULL
ON DELETE SET NULL ON UPDATE NO ACTION;
-- ddl-end --

-- object: user_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_cloud_accounts DROP CONSTRAINT IF EXISTS user_id CASCADE;
ALTER TABLE public.aws_cloud_accounts ADD CONSTRAINT user_id FOREIGN KEY (user_id)
REFERENCES public.users (id) MATCH FULL
ON DELETE SET NULL ON UPDATE NO ACTION;
-- ddl-end --

-- object: group_id | type: CONSTRAINT --
-- ALTER TABLE public.link_groups_users DROP CONSTRAINT IF EXISTS group_id CASCADE;
ALTER TABLE public.link_groups_users ADD CONSTRAINT group_id FOREIGN KEY (group_id)
REFERENCES public.groups (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: user_id | type: CONSTRAINT --
-- ALTER TABLE public.link_groups_users DROP CONSTRAINT IF EXISTS user_id CASCADE;
ALTER TABLE public.link_groups_users ADD CONSTRAINT user_id FOREIGN KEY (user_id)
REFERENCES public.users (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: resource_id | type: CONSTRAINT --
-- ALTER TABLE public.permissions DROP CONSTRAINT IF EXISTS resource_id CASCADE;
ALTER TABLE public.permissions ADD CONSTRAINT resource_id FOREIGN KEY (resource_id)
REFERENCES public.resources (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: group_id | type: CONSTRAINT --
-- ALTER TABLE public.link_groups_permissions DROP CONSTRAINT IF EXISTS group_id CASCADE;
ALTER TABLE public.link_groups_permissions ADD CONSTRAINT group_id FOREIGN KEY (group_id)
REFERENCES public.groups (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: permission_id | type: CONSTRAINT --
-- ALTER TABLE public.link_groups_permissions DROP CONSTRAINT IF EXISTS permission_id CASCADE;
ALTER TABLE public.link_groups_permissions ADD CONSTRAINT permission_id FOREIGN KEY (permission_id)
REFERENCES public.permissions (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: aws_cloud_account_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_storage DROP CONSTRAINT IF EXISTS aws_cloud_account_id CASCADE;
ALTER TABLE public.aws_storage ADD CONSTRAINT aws_cloud_account_id FOREIGN KEY (aws_cloud_account_id)
REFERENCES public.aws_cloud_accounts (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: azr_storage_account_id | type: CONSTRAINT --
-- ALTER TABLE public.azr_storage DROP CONSTRAINT IF EXISTS azr_storage_account_id CASCADE;
ALTER TABLE public.azr_storage ADD CONSTRAINT azr_storage_account_id FOREIGN KEY (azr_storage_account_id)
REFERENCES public.azr_storage_accounts (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: aws_storage_id | type: CONSTRAINT --
-- ALTER TABLE public.resources DROP CONSTRAINT IF EXISTS aws_storage_id CASCADE;
ALTER TABLE public.resources ADD CONSTRAINT aws_storage_id FOREIGN KEY (item_id)
REFERENCES public.aws_storage (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: aws_storage_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_storage_containers DROP CONSTRAINT IF EXISTS aws_storage_id CASCADE;
ALTER TABLE public.aws_storage_containers ADD CONSTRAINT aws_storage_id FOREIGN KEY (storage_id)
REFERENCES public.aws_storage (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: cors_configuration_bucket_id | type: CONSTRAINT --
-- ALTER TABLE public.cors_configuration DROP CONSTRAINT IF EXISTS cors_configuration_bucket_id CASCADE;
ALTER TABLE public.cors_configuration ADD CONSTRAINT cors_configuration_bucket_id FOREIGN KEY (item_id)
REFERENCES public.aws_storage_containers (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: cors_configuration_blob_container_id | type: CONSTRAINT --
-- ALTER TABLE public.cors_configuration DROP CONSTRAINT IF EXISTS cors_configuration_blob_container_id CASCADE;
ALTER TABLE public.cors_configuration ADD CONSTRAINT cors_configuration_blob_container_id FOREIGN KEY (item_id)
REFERENCES public.azr_storage_containers (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: aws_permission_configuration_container_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_permission_configuration DROP CONSTRAINT IF EXISTS aws_permission_configuration_container_id CASCADE;
ALTER TABLE public.aws_permission_configuration ADD CONSTRAINT aws_permission_configuration_container_id FOREIGN KEY (item_id)
REFERENCES public.aws_storage_containers (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: aws_permission_configuration_object_id | type: CONSTRAINT --
-- ALTER TABLE public.aws_permission_configuration DROP CONSTRAINT IF EXISTS aws_permission_configuration_object_id CASCADE;
ALTER TABLE public.aws_permission_configuration ADD CONSTRAINT aws_permission_configuration_object_id FOREIGN KEY (item_id)
REFERENCES public.aws_storage_objects (id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --


