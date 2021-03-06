--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.1
-- Dumped by pg_dump version 9.5.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: account_emailaddress; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE account_emailaddress (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    verified boolean NOT NULL,
    "primary" boolean NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE account_emailaddress OWNER TO root;

--
-- Name: account_emailaddress_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE account_emailaddress_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE account_emailaddress_id_seq OWNER TO root;

--
-- Name: account_emailaddress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE account_emailaddress_id_seq OWNED BY account_emailaddress.id;


--
-- Name: account_emailconfirmation; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE account_emailconfirmation (
    id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    sent timestamp with time zone,
    key character varying(64) NOT NULL,
    email_address_id integer NOT NULL
);


ALTER TABLE account_emailconfirmation OWNER TO root;

--
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE account_emailconfirmation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE account_emailconfirmation_id_seq OWNER TO root;

--
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE account_emailconfirmation_id_seq OWNED BY account_emailconfirmation.id;


--
-- Name: admin_tools_dashboard_preferences; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE admin_tools_dashboard_preferences (
    id integer NOT NULL,
    data text NOT NULL,
    dashboard_id character varying(100) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE admin_tools_dashboard_preferences OWNER TO root;

--
-- Name: admin_tools_dashboard_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE admin_tools_dashboard_preferences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE admin_tools_dashboard_preferences_id_seq OWNER TO root;

--
-- Name: admin_tools_dashboard_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE admin_tools_dashboard_preferences_id_seq OWNED BY admin_tools_dashboard_preferences.id;


--
-- Name: admin_tools_menu_bookmark; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE admin_tools_menu_bookmark (
    id integer NOT NULL,
    url character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE admin_tools_menu_bookmark OWNER TO root;

--
-- Name: admin_tools_menu_bookmark_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE admin_tools_menu_bookmark_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE admin_tools_menu_bookmark_id_seq OWNER TO root;

--
-- Name: admin_tools_menu_bookmark_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE admin_tools_menu_bookmark_id_seq OWNED BY admin_tools_menu_bookmark.id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE auth_group OWNER TO root;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_id_seq OWNER TO root;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_group_id_seq OWNED BY auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_group_permissions OWNER TO root;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_permissions_id_seq OWNER TO root;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_group_permissions_id_seq OWNED BY auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE auth_permission OWNER TO root;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_permission_id_seq OWNER TO root;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_permission_id_seq OWNED BY auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(30) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE auth_user OWNER TO root;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE auth_user_groups OWNER TO root;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_groups_id_seq OWNER TO root;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_user_groups_id_seq OWNED BY auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_id_seq OWNER TO root;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_user_id_seq OWNED BY auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_user_user_permissions OWNER TO root;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_user_permissions_id_seq OWNER TO root;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE auth_user_user_permissions_id_seq OWNED BY auth_user_user_permissions.id;


--
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE authtoken_token OWNER TO root;

--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE django_admin_log OWNER TO root;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_admin_log_id_seq OWNER TO root;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_admin_log_id_seq OWNED BY django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE django_content_type OWNER TO root;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_content_type_id_seq OWNER TO root;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_content_type_id_seq OWNED BY django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE django_migrations OWNER TO root;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_migrations_id_seq OWNER TO root;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_migrations_id_seq OWNED BY django_migrations.id;


--
-- Name: django_redirect; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_redirect (
    id integer NOT NULL,
    site_id integer NOT NULL,
    old_path character varying(200) NOT NULL,
    new_path character varying(200) NOT NULL
);


ALTER TABLE django_redirect OWNER TO root;

--
-- Name: django_redirect_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_redirect_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_redirect_id_seq OWNER TO root;

--
-- Name: django_redirect_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_redirect_id_seq OWNED BY django_redirect.id;


--
-- Name: django_rq_jobs_job; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_rq_jobs_job (
    id integer NOT NULL,
    task character varying(200) NOT NULL,
    args character varying(255),
    schedule_type character varying(1) NOT NULL,
    repeats smallint NOT NULL,
    next_run timestamp with time zone,
    last_run timestamp with time zone,
    rq_id character varying(64),
    rq_origin character varying(64)
);


ALTER TABLE django_rq_jobs_job OWNER TO root;

--
-- Name: django_rq_jobs_job_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_rq_jobs_job_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_rq_jobs_job_id_seq OWNER TO root;

--
-- Name: django_rq_jobs_job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_rq_jobs_job_id_seq OWNED BY django_rq_jobs_job.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE django_session OWNER TO root;

--
-- Name: django_site; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE django_site (
    id integer NOT NULL,
    domain character varying(100) NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE django_site OWNER TO root;

--
-- Name: django_site_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE django_site_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_site_id_seq OWNER TO root;

--
-- Name: django_site_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE django_site_id_seq OWNED BY django_site.id;


--
-- Name: metaprop_contactmetaprop; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE metaprop_contactmetaprop (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    address1 character varying(150) NOT NULL,
    address2 character varying(150),
    city character varying(150) NOT NULL,
    zip character varying(20) NOT NULL,
    state character varying(20) NOT NULL,
    phone character varying(20) NOT NULL,
    fax character varying(20) NOT NULL,
    hours character varying(200) NOT NULL,
    days character varying(200) NOT NULL,
    note character varying(1500)
);


ALTER TABLE metaprop_contactmetaprop OWNER TO root;

--
-- Name: metaprop_contactmetaprop_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE metaprop_contactmetaprop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE metaprop_contactmetaprop_id_seq OWNER TO root;

--
-- Name: metaprop_contactmetaprop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE metaprop_contactmetaprop_id_seq OWNED BY metaprop_contactmetaprop.id;


--
-- Name: metaprop_metaprop; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE metaprop_metaprop (
    id integer NOT NULL,
    title character varying(140) NOT NULL,
    keywords character varying(1600) NOT NULL,
    description text NOT NULL,
    author character varying(140) NOT NULL,
    analytics character varying(60) NOT NULL
);


ALTER TABLE metaprop_metaprop OWNER TO root;

--
-- Name: metaprop_metaprop_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE metaprop_metaprop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE metaprop_metaprop_id_seq OWNER TO root;

--
-- Name: metaprop_metaprop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE metaprop_metaprop_id_seq OWNED BY metaprop_metaprop.id;


--
-- Name: metaprop_profilemetaprop; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE metaprop_profilemetaprop (
    id integer NOT NULL,
    title character varying(150),
    email character varying(254) NOT NULL,
    from_email character varying(254) NOT NULL,
    to_email character varying(254) NOT NULL,
    to_email_secondary character varying(254) NOT NULL,
    to_email_third character varying(254) NOT NULL,
    smtp_server character varying(150) NOT NULL,
    smtp_port character varying(10) NOT NULL,
    user_name character varying(200) NOT NULL,
    password character varying(200) NOT NULL,
    message character varying(2500)
);


ALTER TABLE metaprop_profilemetaprop OWNER TO root;

--
-- Name: metaprop_profilemetaprop_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE metaprop_profilemetaprop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE metaprop_profilemetaprop_id_seq OWNER TO root;

--
-- Name: metaprop_profilemetaprop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE metaprop_profilemetaprop_id_seq OWNED BY metaprop_profilemetaprop.id;


--
-- Name: oauth2_provider_accesstoken; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE oauth2_provider_accesstoken (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    expires timestamp with time zone NOT NULL,
    scope text NOT NULL,
    application_id integer NOT NULL,
    user_id integer
);


ALTER TABLE oauth2_provider_accesstoken OWNER TO root;

--
-- Name: oauth2_provider_accesstoken_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE oauth2_provider_accesstoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE oauth2_provider_accesstoken_id_seq OWNER TO root;

--
-- Name: oauth2_provider_accesstoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE oauth2_provider_accesstoken_id_seq OWNED BY oauth2_provider_accesstoken.id;


--
-- Name: oauth2_provider_application; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE oauth2_provider_application (
    id integer NOT NULL,
    client_id character varying(100) NOT NULL,
    redirect_uris text NOT NULL,
    client_type character varying(32) NOT NULL,
    authorization_grant_type character varying(32) NOT NULL,
    client_secret character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    user_id integer NOT NULL,
    skip_authorization boolean NOT NULL
);


ALTER TABLE oauth2_provider_application OWNER TO root;

--
-- Name: oauth2_provider_application_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE oauth2_provider_application_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE oauth2_provider_application_id_seq OWNER TO root;

--
-- Name: oauth2_provider_application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE oauth2_provider_application_id_seq OWNED BY oauth2_provider_application.id;


--
-- Name: oauth2_provider_grant; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE oauth2_provider_grant (
    id integer NOT NULL,
    code character varying(255) NOT NULL,
    expires timestamp with time zone NOT NULL,
    redirect_uri character varying(255) NOT NULL,
    scope text NOT NULL,
    application_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE oauth2_provider_grant OWNER TO root;

--
-- Name: oauth2_provider_grant_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE oauth2_provider_grant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE oauth2_provider_grant_id_seq OWNER TO root;

--
-- Name: oauth2_provider_grant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE oauth2_provider_grant_id_seq OWNED BY oauth2_provider_grant.id;


--
-- Name: oauth2_provider_refreshtoken; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE oauth2_provider_refreshtoken (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    access_token_id integer NOT NULL,
    application_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE oauth2_provider_refreshtoken OWNER TO root;

--
-- Name: oauth2_provider_refreshtoken_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE oauth2_provider_refreshtoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE oauth2_provider_refreshtoken_id_seq OWNER TO root;

--
-- Name: oauth2_provider_refreshtoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE oauth2_provider_refreshtoken_id_seq OWNED BY oauth2_provider_refreshtoken.id;


--
-- Name: registration_registrationprofile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE registration_registrationprofile (
    id integer NOT NULL,
    activation_key character varying(40) NOT NULL,
    user_id integer NOT NULL,
    activated boolean NOT NULL
);


ALTER TABLE registration_registrationprofile OWNER TO root;

--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE registration_registrationprofile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE registration_registrationprofile_id_seq OWNER TO root;

--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE registration_registrationprofile_id_seq OWNED BY registration_registrationprofile.id;


--
-- Name: social_auth_association; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE social_auth_association (
    id integer NOT NULL,
    server_url character varying(255) NOT NULL,
    handle character varying(255) NOT NULL,
    secret character varying(255) NOT NULL,
    issued integer NOT NULL,
    lifetime integer NOT NULL,
    assoc_type character varying(64) NOT NULL
);


ALTER TABLE social_auth_association OWNER TO root;

--
-- Name: social_auth_association_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE social_auth_association_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_association_id_seq OWNER TO root;

--
-- Name: social_auth_association_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE social_auth_association_id_seq OWNED BY social_auth_association.id;


--
-- Name: social_auth_code; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE social_auth_code (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    code character varying(32) NOT NULL,
    verified boolean NOT NULL
);


ALTER TABLE social_auth_code OWNER TO root;

--
-- Name: social_auth_code_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE social_auth_code_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_code_id_seq OWNER TO root;

--
-- Name: social_auth_code_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE social_auth_code_id_seq OWNED BY social_auth_code.id;


--
-- Name: social_auth_nonce; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE social_auth_nonce (
    id integer NOT NULL,
    server_url character varying(255) NOT NULL,
    "timestamp" integer NOT NULL,
    salt character varying(65) NOT NULL
);


ALTER TABLE social_auth_nonce OWNER TO root;

--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE social_auth_nonce_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_nonce_id_seq OWNER TO root;

--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE social_auth_nonce_id_seq OWNED BY social_auth_nonce.id;


--
-- Name: social_auth_usersocialauth; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE social_auth_usersocialauth (
    id integer NOT NULL,
    provider character varying(32) NOT NULL,
    uid character varying(255) NOT NULL,
    extra_data text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE social_auth_usersocialauth OWNER TO root;

--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE social_auth_usersocialauth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_usersocialauth_id_seq OWNER TO root;

--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE social_auth_usersocialauth_id_seq OWNED BY social_auth_usersocialauth.id;


--
-- Name: socialaccount_socialaccount; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE socialaccount_socialaccount (
    id integer NOT NULL,
    provider character varying(30) NOT NULL,
    uid character varying(191) NOT NULL,
    last_login timestamp with time zone NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    extra_data text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE socialaccount_socialaccount OWNER TO root;

--
-- Name: socialaccount_socialaccount_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE socialaccount_socialaccount_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE socialaccount_socialaccount_id_seq OWNER TO root;

--
-- Name: socialaccount_socialaccount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE socialaccount_socialaccount_id_seq OWNED BY socialaccount_socialaccount.id;


--
-- Name: socialaccount_socialapp; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE socialaccount_socialapp (
    id integer NOT NULL,
    provider character varying(30) NOT NULL,
    name character varying(40) NOT NULL,
    client_id character varying(191) NOT NULL,
    secret character varying(191) NOT NULL,
    key character varying(191) NOT NULL
);


ALTER TABLE socialaccount_socialapp OWNER TO root;

--
-- Name: socialaccount_socialapp_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE socialaccount_socialapp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE socialaccount_socialapp_id_seq OWNER TO root;

--
-- Name: socialaccount_socialapp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE socialaccount_socialapp_id_seq OWNED BY socialaccount_socialapp.id;


--
-- Name: socialaccount_socialapp_sites; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE socialaccount_socialapp_sites (
    id integer NOT NULL,
    socialapp_id integer NOT NULL,
    site_id integer NOT NULL
);


ALTER TABLE socialaccount_socialapp_sites OWNER TO root;

--
-- Name: socialaccount_socialapp_sites_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE socialaccount_socialapp_sites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE socialaccount_socialapp_sites_id_seq OWNER TO root;

--
-- Name: socialaccount_socialapp_sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE socialaccount_socialapp_sites_id_seq OWNED BY socialaccount_socialapp_sites.id;


--
-- Name: socialaccount_socialtoken; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE socialaccount_socialtoken (
    id integer NOT NULL,
    token text NOT NULL,
    token_secret text NOT NULL,
    expires_at timestamp with time zone,
    account_id integer NOT NULL,
    app_id integer NOT NULL
);


ALTER TABLE socialaccount_socialtoken OWNER TO root;

--
-- Name: socialaccount_socialtoken_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE socialaccount_socialtoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE socialaccount_socialtoken_id_seq OWNER TO root;

--
-- Name: socialaccount_socialtoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE socialaccount_socialtoken_id_seq OWNED BY socialaccount_socialtoken.id;


--
-- Name: tasks_tasklog; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE tasks_tasklog (
    id integer NOT NULL,
    username character varying(128),
    job character varying(128),
    show_id integer,
    is_complete boolean NOT NULL,
    user_id integer,
    session_key character varying(200)
);


ALTER TABLE tasks_tasklog OWNER TO root;

--
-- Name: tasks_tasklog_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE tasks_tasklog_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tasks_tasklog_id_seq OWNER TO root;

--
-- Name: tasks_tasklog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE tasks_tasklog_id_seq OWNED BY tasks_tasklog.id;


--
-- Name: tastypie_apiaccess; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE tastypie_apiaccess (
    id integer NOT NULL,
    identifier character varying(255) NOT NULL,
    url character varying(255) NOT NULL,
    request_method character varying(10) NOT NULL,
    accessed integer NOT NULL,
    CONSTRAINT tastypie_apiaccess_accessed_check CHECK ((accessed >= 0))
);


ALTER TABLE tastypie_apiaccess OWNER TO root;

--
-- Name: tastypie_apiaccess_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE tastypie_apiaccess_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tastypie_apiaccess_id_seq OWNER TO root;

--
-- Name: tastypie_apiaccess_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE tastypie_apiaccess_id_seq OWNED BY tastypie_apiaccess.id;


--
-- Name: tastypie_apikey; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE tastypie_apikey (
    id integer NOT NULL,
    key character varying(128) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE tastypie_apikey OWNER TO root;

--
-- Name: tastypie_apikey_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE tastypie_apikey_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tastypie_apikey_id_seq OWNER TO root;

--
-- Name: tastypie_apikey_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE tastypie_apikey_id_seq OWNED BY tastypie_apikey.id;


--
-- Name: user_aboutus_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE user_aboutus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_aboutus_id_seq OWNER TO root;

--
-- Name: users_aboutus; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_aboutus (
    id integer NOT NULL,
    title character varying(150),
    subtitle character varying(150),
    body character varying(1050),
    avatar character varying(250)
);


ALTER TABLE users_aboutus OWNER TO root;

--
-- Name: users_aboutus_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_aboutus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_aboutus_id_seq OWNER TO root;

--
-- Name: users_aboutus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_aboutus_id_seq OWNED BY users_aboutus.id;


--
-- Name: users_address; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_address (
    id integer NOT NULL,
    address1 character varying(250),
    address2 character varying(250),
    city character varying(250),
    country character varying(200),
    postal_zip character varying(20),
    state_province_id integer
);


ALTER TABLE users_address OWNER TO root;

--
-- Name: users_address_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_address_id_seq OWNER TO root;

--
-- Name: users_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_address_id_seq OWNED BY users_address.id;


--
-- Name: users_contact; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_contact (
    id integer NOT NULL,
    name character varying(250),
    time_contacted timestamp with time zone NOT NULL,
    phone character varying(250),
    email character varying(250),
    message character varying(450)
);


ALTER TABLE users_contact OWNER TO root;

--
-- Name: users_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_contact_id_seq OWNER TO root;

--
-- Name: users_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_contact_id_seq OWNED BY users_contact.id;


--
-- Name: users_facebookprofile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_facebookprofile (
    id integer NOT NULL,
    about_me text,
    facebook_id bigint,
    access_token text,
    facebook_name character varying(255),
    facebook_profile_url text,
    website_url text,
    blog_url text,
    date_of_birth date,
    gender character varying(1),
    raw_data text,
    facebook_open_graph boolean,
    new_token_required boolean NOT NULL,
    image character varying(255),
    username character varying(140) NOT NULL,
    email character varying(200),
    first_name character varying(140) NOT NULL,
    last_name character varying(140) NOT NULL,
    time_created date,
    profile_picture character varying(250) NOT NULL,
    is_new boolean NOT NULL,
    is_cleared boolean NOT NULL,
    profile_id integer,
    user_id integer
);


ALTER TABLE users_facebookprofile OWNER TO root;

--
-- Name: users_facebookprofile_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_facebookprofile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_facebookprofile_id_seq OWNER TO root;

--
-- Name: users_facebookprofile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_facebookprofile_id_seq OWNED BY users_facebookprofile.id;


--
-- Name: users_googleplusprofile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_googleplusprofile (
    id integer NOT NULL,
    google_id character varying(140) NOT NULL,
    username character varying(140) NOT NULL,
    email character varying(100),
    first_name character varying(140) NOT NULL,
    last_name character varying(140) NOT NULL,
    time_created date,
    profile_image_path character varying(200),
    activation_key character varying(140) NOT NULL,
    is_new boolean NOT NULL,
    is_cleared boolean NOT NULL,
    profile_id integer
);


ALTER TABLE users_googleplusprofile OWNER TO root;

--
-- Name: users_googleplusprofile_friends; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_googleplusprofile_friends (
    id integer NOT NULL,
    googleplusprofile_id integer NOT NULL,
    socialfriend_id integer NOT NULL
);


ALTER TABLE users_googleplusprofile_friends OWNER TO root;

--
-- Name: users_googleplusprofile_friends_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_googleplusprofile_friends_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_googleplusprofile_friends_id_seq OWNER TO root;

--
-- Name: users_googleplusprofile_friends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_googleplusprofile_friends_id_seq OWNED BY users_googleplusprofile_friends.id;


--
-- Name: users_googleplusprofile_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_googleplusprofile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_googleplusprofile_id_seq OWNER TO root;

--
-- Name: users_googleplusprofile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_googleplusprofile_id_seq OWNED BY users_googleplusprofile.id;


--
-- Name: users_group; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_group (
    id integer NOT NULL
);


ALTER TABLE users_group OWNER TO root;

--
-- Name: users_group_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_group_id_seq OWNER TO root;

--
-- Name: users_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_group_id_seq OWNED BY users_group.id;


--
-- Name: users_profile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_profile (
    id integer NOT NULL,
    first_name character varying(250),
    last_name character varying(250),
    email character varying(250),
    username character varying(250),
    date_joined timestamp with time zone NOT NULL,
    profile_image_path character varying(250),
    phone character varying(250),
    is_new boolean,
    is_avatar_processed boolean NOT NULL,
    is_avatar_transfered boolean NOT NULL,
    is_signature_customized boolean NOT NULL,
    is_online boolean NOT NULL,
    is_cleared boolean NOT NULL,
    is_facebook_signup_used boolean NOT NULL,
    is_google_signup_used boolean NOT NULL,
    is_twitter_signup_used boolean NOT NULL,
    is_linkedin_signup_used boolean NOT NULL,
    is_username_customized boolean NOT NULL,
    is_user_avatar boolean NOT NULL,
    is_google_avatar boolean NOT NULL,
    is_facebook_avatar boolean NOT NULL,
    is_twitter_avatar boolean NOT NULL,
    address_id integer,
    user_id integer NOT NULL
);


ALTER TABLE users_profile OWNER TO root;

--
-- Name: users_profile_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_profile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_profile_id_seq OWNER TO root;

--
-- Name: users_profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_profile_id_seq OWNED BY users_profile.id;


--
-- Name: users_socialfriend; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_socialfriend (
    id integer NOT NULL,
    username character varying(250),
    full_name character varying(250),
    first_name character varying(250),
    last_name character varying(250),
    email character varying(250),
    date_connected date,
    profile_picture character varying(250)
);


ALTER TABLE users_socialfriend OWNER TO root;

--
-- Name: users_socialfriend_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_socialfriend_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_socialfriend_id_seq OWNER TO root;

--
-- Name: users_socialfriend_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_socialfriend_id_seq OWNED BY users_socialfriend.id;


--
-- Name: users_socialmedium; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_socialmedium (
    id integer NOT NULL,
    medium character varying(20),
    code character varying(20),
    description character varying(200)
);


ALTER TABLE users_socialmedium OWNER TO root;

--
-- Name: users_socialmedium_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_socialmedium_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_socialmedium_id_seq OWNER TO root;

--
-- Name: users_socialmedium_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_socialmedium_id_seq OWNED BY users_socialmedium.id;


--
-- Name: users_stateprovince; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_stateprovince (
    id integer NOT NULL,
    name character varying(50),
    abbreviation character varying(10)
);


ALTER TABLE users_stateprovince OWNER TO root;

--
-- Name: users_stateprovince_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_stateprovince_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_stateprovince_id_seq OWNER TO root;

--
-- Name: users_stateprovince_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_stateprovince_id_seq OWNED BY users_stateprovince.id;


--
-- Name: users_teammember; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_teammember (
    id integer NOT NULL,
    email character varying(100),
    first_name character varying(140) NOT NULL,
    last_name character varying(140) NOT NULL,
    title character varying(140) NOT NULL,
    avatar character varying(100) NOT NULL,
    user_id integer,
    is_partner boolean DEFAULT false,
    is_associate boolean DEFAULT false,
    phone character varying(20),
    username character varying(100),
    bio character varying(1500)
);


ALTER TABLE users_teammember OWNER TO root;

--
-- Name: users_teammember_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_teammember_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_teammember_id_seq OWNER TO root;

--
-- Name: users_teammember_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_teammember_id_seq OWNED BY users_teammember.id;


--
-- Name: users_token; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_token (
    token character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE users_token OWNER TO root;

--
-- Name: users_useractivation; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_useractivation (
    id integer NOT NULL,
    activation_key character varying(250),
    date_used timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE users_useractivation OWNER TO root;

--
-- Name: users_useractivation_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_useractivation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_useractivation_id_seq OWNER TO root;

--
-- Name: users_useractivation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_useractivation_id_seq OWNED BY users_useractivation.id;


--
-- Name: users_usersession; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_usersession (
    id integer NOT NULL,
    username character varying(200),
    remote_ip character varying(20),
    session_key character varying(200),
    time_in timestamp with time zone NOT NULL,
    time_out timestamp with time zone,
    time_online_hours integer,
    time_online_minutes integer,
    time_online_seconds integer,
    time_online_total character varying(200),
    time_online_delta double precision,
    date_visited date,
    user_id integer NOT NULL
);


ALTER TABLE users_usersession OWNER TO root;

--
-- Name: users_usersession_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_usersession_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_usersession_id_seq OWNER TO root;

--
-- Name: users_usersession_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_usersession_id_seq OWNED BY users_usersession.id;


--
-- Name: utils_logger; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE utils_logger (
    id integer NOT NULL,
    log character varying(400),
    "time" timestamp with time zone NOT NULL
);


ALTER TABLE utils_logger OWNER TO root;

--
-- Name: utils_logger_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE utils_logger_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE utils_logger_id_seq OWNER TO root;

--
-- Name: utils_logger_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE utils_logger_id_seq OWNED BY utils_logger.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailaddress ALTER COLUMN id SET DEFAULT nextval('account_emailaddress_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailconfirmation ALTER COLUMN id SET DEFAULT nextval('account_emailconfirmation_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_dashboard_preferences ALTER COLUMN id SET DEFAULT nextval('admin_tools_dashboard_preferences_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_menu_bookmark ALTER COLUMN id SET DEFAULT nextval('admin_tools_menu_bookmark_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group ALTER COLUMN id SET DEFAULT nextval('auth_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('auth_group_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_permission ALTER COLUMN id SET DEFAULT nextval('auth_permission_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user ALTER COLUMN id SET DEFAULT nextval('auth_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_groups ALTER COLUMN id SET DEFAULT nextval('auth_user_groups_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('auth_user_user_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_admin_log ALTER COLUMN id SET DEFAULT nextval('django_admin_log_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_content_type ALTER COLUMN id SET DEFAULT nextval('django_content_type_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_migrations ALTER COLUMN id SET DEFAULT nextval('django_migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_redirect ALTER COLUMN id SET DEFAULT nextval('django_redirect_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_rq_jobs_job ALTER COLUMN id SET DEFAULT nextval('django_rq_jobs_job_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_site ALTER COLUMN id SET DEFAULT nextval('django_site_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_contactmetaprop ALTER COLUMN id SET DEFAULT nextval('metaprop_contactmetaprop_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_metaprop ALTER COLUMN id SET DEFAULT nextval('metaprop_metaprop_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_profilemetaprop ALTER COLUMN id SET DEFAULT nextval('metaprop_profilemetaprop_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_accesstoken ALTER COLUMN id SET DEFAULT nextval('oauth2_provider_accesstoken_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_application ALTER COLUMN id SET DEFAULT nextval('oauth2_provider_application_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_grant ALTER COLUMN id SET DEFAULT nextval('oauth2_provider_grant_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken ALTER COLUMN id SET DEFAULT nextval('oauth2_provider_refreshtoken_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY registration_registrationprofile ALTER COLUMN id SET DEFAULT nextval('registration_registrationprofile_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_association ALTER COLUMN id SET DEFAULT nextval('social_auth_association_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_code ALTER COLUMN id SET DEFAULT nextval('social_auth_code_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_nonce ALTER COLUMN id SET DEFAULT nextval('social_auth_nonce_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_usersocialauth ALTER COLUMN id SET DEFAULT nextval('social_auth_usersocialauth_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialaccount ALTER COLUMN id SET DEFAULT nextval('socialaccount_socialaccount_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp ALTER COLUMN id SET DEFAULT nextval('socialaccount_socialapp_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp_sites ALTER COLUMN id SET DEFAULT nextval('socialaccount_socialapp_sites_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialtoken ALTER COLUMN id SET DEFAULT nextval('socialaccount_socialtoken_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY tasks_tasklog ALTER COLUMN id SET DEFAULT nextval('tasks_tasklog_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apiaccess ALTER COLUMN id SET DEFAULT nextval('tastypie_apiaccess_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apikey ALTER COLUMN id SET DEFAULT nextval('tastypie_apikey_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_aboutus ALTER COLUMN id SET DEFAULT nextval('users_aboutus_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_address ALTER COLUMN id SET DEFAULT nextval('users_address_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_contact ALTER COLUMN id SET DEFAULT nextval('users_contact_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_facebookprofile ALTER COLUMN id SET DEFAULT nextval('users_facebookprofile_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile ALTER COLUMN id SET DEFAULT nextval('users_googleplusprofile_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile_friends ALTER COLUMN id SET DEFAULT nextval('users_googleplusprofile_friends_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_group ALTER COLUMN id SET DEFAULT nextval('users_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_profile ALTER COLUMN id SET DEFAULT nextval('users_profile_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_socialfriend ALTER COLUMN id SET DEFAULT nextval('users_socialfriend_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_socialmedium ALTER COLUMN id SET DEFAULT nextval('users_socialmedium_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_stateprovince ALTER COLUMN id SET DEFAULT nextval('users_stateprovince_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_teammember ALTER COLUMN id SET DEFAULT nextval('users_teammember_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_useractivation ALTER COLUMN id SET DEFAULT nextval('users_useractivation_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_usersession ALTER COLUMN id SET DEFAULT nextval('users_usersession_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY utils_logger ALTER COLUMN id SET DEFAULT nextval('utils_logger_id_seq'::regclass);


--
-- Data for Name: account_emailaddress; Type: TABLE DATA; Schema: public; Owner: root
--

COPY account_emailaddress (id, email, verified, "primary", user_id) FROM stdin;
\.


--
-- Name: account_emailaddress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('account_emailaddress_id_seq', 1, false);


--
-- Data for Name: account_emailconfirmation; Type: TABLE DATA; Schema: public; Owner: root
--

COPY account_emailconfirmation (id, created, sent, key, email_address_id) FROM stdin;
\.


--
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('account_emailconfirmation_id_seq', 1, false);


--
-- Data for Name: admin_tools_dashboard_preferences; Type: TABLE DATA; Schema: public; Owner: root
--

COPY admin_tools_dashboard_preferences (id, data, dashboard_id, user_id) FROM stdin;
\.


--
-- Name: admin_tools_dashboard_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('admin_tools_dashboard_preferences_id_seq', 1, false);


--
-- Data for Name: admin_tools_menu_bookmark; Type: TABLE DATA; Schema: public; Owner: root
--

COPY admin_tools_menu_bookmark (id, url, title, user_id) FROM stdin;
\.


--
-- Name: admin_tools_menu_bookmark_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('admin_tools_menu_bookmark_id_seq', 1, false);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can add permission	2	add_permission
5	Can change permission	2	change_permission
6	Can delete permission	2	delete_permission
7	Can add group	3	add_group
8	Can change group	3	change_group
9	Can delete group	3	delete_group
10	Can add user	4	add_user
11	Can change user	4	change_user
12	Can delete user	4	delete_user
13	Can add content type	5	add_contenttype
14	Can change content type	5	change_contenttype
15	Can delete content type	5	delete_contenttype
16	Can add session	6	add_session
17	Can change session	6	change_session
18	Can delete session	6	delete_session
19	Can add site	7	add_site
20	Can change site	7	change_site
21	Can delete site	7	delete_site
22	Can add redirect	8	add_redirect
23	Can change redirect	8	change_redirect
24	Can delete redirect	8	delete_redirect
25	Can add bookmark	9	add_bookmark
26	Can change bookmark	9	change_bookmark
27	Can delete bookmark	9	delete_bookmark
28	Can add dashboard preferences	10	add_dashboardpreferences
29	Can change dashboard preferences	10	change_dashboardpreferences
30	Can delete dashboard preferences	10	delete_dashboardpreferences
31	Can add job	11	add_job
32	Can change job	11	change_job
33	Can delete job	11	delete_job
34	Can add facebook user	12	add_facebookuser
35	Can change facebook user	12	change_facebookuser
36	Can delete facebook user	12	delete_facebookuser
37	Can add facebook like	13	add_facebooklike
38	Can change facebook like	13	change_facebooklike
39	Can delete facebook like	13	delete_facebooklike
40	Can add facebook profile	14	add_facebookprofile
41	Can change facebook profile	14	change_facebookprofile
42	Can delete facebook profile	14	delete_facebookprofile
43	Can add open graph share	15	add_opengraphshare
44	Can change open graph share	15	change_opengraphshare
45	Can delete open graph share	15	delete_opengraphshare
46	Can add user social auth	16	add_usersocialauth
47	Can change user social auth	16	change_usersocialauth
48	Can delete user social auth	16	delete_usersocialauth
49	Can add nonce	17	add_nonce
50	Can change nonce	17	change_nonce
51	Can delete nonce	17	delete_nonce
52	Can add association	18	add_association
53	Can change association	18	change_association
54	Can delete association	18	delete_association
55	Can add code	19	add_code
56	Can change code	19	change_code
57	Can delete code	19	delete_code
58	Can add registration profile	20	add_registrationprofile
59	Can change registration profile	20	change_registrationprofile
60	Can delete registration profile	20	delete_registrationprofile
61	Can add Token	21	add_token
62	Can change Token	21	change_token
63	Can delete Token	21	delete_token
64	Can add registration profile	22	add_registrationprofile
65	Can change registration profile	22	change_registrationprofile
66	Can delete registration profile	22	delete_registrationprofile
67	Can add api access	23	add_apiaccess
68	Can change api access	23	change_apiaccess
69	Can delete api access	23	delete_apiaccess
70	Can add api key	24	add_apikey
71	Can change api key	24	change_apikey
72	Can delete api key	24	delete_apikey
73	Can add email address	25	add_emailaddress
74	Can change email address	25	change_emailaddress
75	Can delete email address	25	delete_emailaddress
76	Can add email confirmation	26	add_emailconfirmation
77	Can change email confirmation	26	change_emailconfirmation
78	Can delete email confirmation	26	delete_emailconfirmation
79	Can add social application	27	add_socialapp
80	Can change social application	27	change_socialapp
81	Can delete social application	27	delete_socialapp
82	Can add social account	28	add_socialaccount
83	Can change social account	28	change_socialaccount
84	Can delete social account	28	delete_socialaccount
85	Can add social application token	29	add_socialtoken
86	Can change social application token	29	change_socialtoken
87	Can delete social application token	29	delete_socialtoken
88	Can add application	30	add_application
89	Can change application	30	change_application
90	Can delete application	30	delete_application
91	Can add grant	31	add_grant
92	Can change grant	31	change_grant
93	Can delete grant	31	delete_grant
94	Can add access token	32	add_accesstoken
95	Can change access token	32	change_accesstoken
96	Can delete access token	32	delete_accesstoken
97	Can add refresh token	33	add_refreshtoken
98	Can change refresh token	33	change_refreshtoken
99	Can delete refresh token	33	delete_refreshtoken
100	Can add State or Province	34	add_stateprovince
101	Can change State or Province	34	change_stateprovince
102	Can delete State or Province	34	delete_stateprovince
103	Can add Address	35	add_address
104	Can change Address	35	change_address
105	Can delete Address	35	delete_address
106	Can add Profile	36	add_profile
107	Can change Profile	36	change_profile
108	Can delete Profile	36	delete_profile
109	Can add Session	37	add_usersession
110	Can change Session	37	change_usersession
111	Can delete Session	37	delete_usersession
112	Can add Social Medium	38	add_socialmedium
113	Can change Social Medium	38	change_socialmedium
114	Can delete Social Medium	38	delete_socialmedium
115	Can add Social Friend	39	add_socialfriend
116	Can change Social Friend	39	change_socialfriend
117	Can delete Social Friend	39	delete_socialfriend
118	Can add group	40	add_group
119	Can change group	40	change_group
120	Can delete group	40	delete_group
121	Can add token	41	add_token
122	Can change token	41	change_token
123	Can delete token	41	delete_token
124	Can add User Contact	42	add_contact
125	Can change User Contact	42	change_contact
126	Can delete User Contact	42	delete_contact
127	Can add Facebook Profile	43	add_facebookprofile
128	Can change Facebook Profile	43	change_facebookprofile
129	Can delete Facebook Profile	43	delete_facebookprofile
130	Can add Google Plus Profile	44	add_googleplusprofile
131	Can change Google Plus Profile	44	change_googleplusprofile
132	Can delete Google Plus Profile	44	delete_googleplusprofile
133	Can add Team Member	45	add_teammember
134	Can change Team Member	45	change_teammember
135	Can delete Team Member	45	delete_teammember
136	Can add contact meta property	46	add_contactmetaprop
137	Can change contact meta property	46	change_contactmetaprop
138	Can delete contact meta property	46	delete_contactmetaprop
139	Can add profile meta property	47	add_profilemetaprop
140	Can change profile meta property	47	change_profilemetaprop
141	Can delete profile meta property	47	delete_profilemetaprop
142	Can add meta property	48	add_metaprop
143	Can change meta property	48	change_metaprop
144	Can delete meta property	48	delete_metaprop
145	Can add logger	49	add_logger
146	Can change logger	49	change_logger
147	Can delete logger	49	delete_logger
148	Can add Service Package	50	add_servicepackage
149	Can change Service Package	50	change_servicepackage
150	Can delete Service Package	50	delete_servicepackage
151	Can add TaskLog	51	add_tasklog
152	Can change TaskLog	51	change_tasklog
153	Can delete TaskLog	51	delete_tasklog
154	Can add User Activation	52	add_useractivation
155	Can change User Activation	52	change_useractivation
156	Can delete User Activation	52	delete_useractivation
157	Can add about us	53	add_aboutus
158	Can change about us	53	change_aboutus
159	Can delete about us	53	delete_aboutus
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_permission_id_seq', 159, true);


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$24000$hwovpPLLMdwz$EKCmLhEwAG+RRI4PRgbVwaIM0zhezEMuvR9vmskB84w=	2016-05-02 00:14:12.488772-05	t	root	Dmitry	Roitman	dmitryro@gmail.com	t	t	2016-05-01 14:53:03.030068-05
3	pbkdf2_sha256$24000$K0MwQF0ROuyn$0vbErb8oz5SF14GUrYzZ/2a1kk2iPdaIcUL/sn0S45o=	\N	f	3	Dmitry			f	t	2016-05-01 22:49:39.866795-05
2	!YMt3hBWIwqgtWXAGwaYhiiTtOCWOLA3eUNuhvJqF	2016-05-01 23:04:44.906966-05	f	DmitryRoitman	Dmitry	Roitman		f	t	2016-05-01 15:29:16.764304-05
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_user_id_seq', 3, true);


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_user_user_permissions_id_seq', 1, false);


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: root
--

COPY authtoken_token (key, created, user_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2016-05-01 15:09:44.461246-05	2	Profile object	1	Added.	36	1
2	2016-05-01 15:28:09.507163-05	2	Profile object	3		36	1
3	2016-05-01 16:01:18.892353-05	3	TeamMember object	1	Added.	45	1
4	2016-05-01 16:22:00.386005-05	4	TeamMember object	1	Added.	45	1
5	2016-05-01 16:42:04.452715-05	4	TeamMember object	2	Changed avatar.	45	1
6	2016-05-01 16:42:32.000816-05	4	TeamMember object	2	No fields changed.	45	1
7	2016-05-01 16:42:35.48195-05	4	TeamMember object	2	No fields changed.	45	1
8	2016-05-01 16:43:36.365592-05	5	TeamMember object	1	Added.	45	1
9	2016-05-01 16:53:40.532999-05	6	TeamMember object	1	Added.	45	1
10	2016-05-01 19:06:53.871502-05	6	TeamMember object	2	Changed avatar.	45	1
11	2016-05-01 19:06:56.920429-05	6	TeamMember object	2	No fields changed.	45	1
12	2016-05-01 23:57:46.641898-05	1	About Us	1	Added.	53	1
13	2016-05-02 00:04:34.446755-05	1	About Us	2	Changed avatar.	53	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_admin_log_id_seq', 13, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	sites	site
8	redirects	redirect
9	menu	bookmark
10	dashboard	dashboardpreferences
11	django_rq_jobs	job
12	django_facebook	facebookuser
13	django_facebook	facebooklike
14	django_facebook	facebookprofile
15	django_facebook	opengraphshare
16	default	usersocialauth
17	default	nonce
18	default	association
19	default	code
20	registration	registrationprofile
21	authtoken	token
22	registration_api	registrationprofile
23	tastypie	apiaccess
24	tastypie	apikey
25	account	emailaddress
26	account	emailconfirmation
27	socialaccount	socialapp
28	socialaccount	socialaccount
29	socialaccount	socialtoken
30	oauth2_provider	application
31	oauth2_provider	grant
32	oauth2_provider	accesstoken
33	oauth2_provider	refreshtoken
34	users	stateprovince
35	users	address
36	users	profile
37	users	usersession
38	users	socialmedium
39	users	socialfriend
40	users	group
41	users	token
42	users	contact
43	users	facebookprofile
44	users	googleplusprofile
45	users	teammember
46	metaprop	contactmetaprop
47	metaprop	profilemetaprop
48	metaprop	metaprop
49	utils	logger
50	services	servicepackage
51	tasks	tasklog
52	users	useractivation
53	users	aboutus
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_content_type_id_seq', 53, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2016-05-01 14:39:36.564049-05
2	auth	0001_initial	2016-05-01 14:39:36.693199-05
3	account	0001_initial	2016-05-01 14:39:36.792914-05
4	account	0002_email_max_length	2016-05-01 14:39:36.83554-05
5	admin	0001_initial	2016-05-01 14:39:36.889299-05
6	admin	0002_logentry_remove_auto_add	2016-05-01 14:39:36.930547-05
7	contenttypes	0002_remove_content_type_name	2016-05-01 14:39:37.08614-05
8	auth	0002_alter_permission_name_max_length	2016-05-01 14:39:37.130303-05
9	auth	0003_alter_user_email_max_length	2016-05-01 14:39:37.18471-05
10	auth	0004_alter_user_username_opts	2016-05-01 14:39:37.223549-05
11	auth	0005_alter_user_last_login_null	2016-05-01 14:39:37.273565-05
12	auth	0006_require_contenttypes_0002	2016-05-01 14:39:37.276426-05
13	auth	0007_alter_validators_add_error_messages	2016-05-01 14:39:37.319805-05
14	authtoken	0001_initial	2016-05-01 14:39:37.372268-05
15	authtoken	0002_auto_20160226_1747	2016-05-01 14:39:37.683839-05
16	dashboard	0001_initial	2016-05-01 14:39:37.780639-05
17	default	0001_initial	2016-05-01 14:39:38.047777-05
18	default	0002_add_related_name	2016-05-01 14:39:38.122964-05
19	default	0003_alter_email_max_length	2016-05-01 14:39:38.152204-05
20	django_rq_jobs	0001_initial	2016-05-01 14:39:38.182898-05
21	django_rq_jobs	0002_auto_20150721_1255	2016-05-01 14:39:38.210321-05
22	django_rq_jobs	0003_auto_20150729_1103	2016-05-01 14:39:38.234633-05
23	menu	0001_initial	2016-05-01 14:39:38.287814-05
24	oauth2_provider	0001_initial	2016-05-01 14:39:38.575254-05
25	oauth2_provider	0002_08_updates	2016-05-01 14:39:38.854943-05
26	sites	0001_initial	2016-05-01 14:39:38.886777-05
27	redirects	0001_initial	2016-05-01 14:39:38.937288-05
28	registration	0001_initial	2016-05-01 14:39:39.004544-05
29	registration	0002_registrationprofile_activated	2016-05-01 14:39:39.072376-05
30	registration	0003_migrate_activatedstatus	2016-05-01 14:39:39.097827-05
31	sessions	0001_initial	2016-05-01 14:39:39.136211-05
32	sites	0002_alter_domain_unique	2016-05-01 14:39:39.170305-05
33	socialaccount	0001_initial	2016-05-01 14:39:39.542594-05
34	socialaccount	0002_token_max_lengths	2016-05-01 14:39:39.870874-05
35	socialaccount	0003_extra_data_default_dict	2016-05-01 14:39:39.946996-05
36	tastypie	0001_initial	2016-05-01 14:39:40.206096-05
37	users	0001_initial	2016-05-01 14:51:10.60537-05
38	tasks	0001_initial	2016-05-01 14:54:09.850178-05
39	metaprop	0001_initial	2016-05-01 15:33:07.389684-05
40	utils	0001_initial	2016-05-01 18:39:54.460966-05
41	default	0004_auto_20160423_0400	2016-05-01 23:30:02.189586-05
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_migrations_id_seq', 41, true);


--
-- Data for Name: django_redirect; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_redirect (id, site_id, old_path, new_path) FROM stdin;
\.


--
-- Name: django_redirect_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_redirect_id_seq', 1, false);


--
-- Data for Name: django_rq_jobs_job; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_rq_jobs_job (id, task, args, schedule_type, repeats, next_run, last_run, rq_id, rq_origin) FROM stdin;
\.


--
-- Name: django_rq_jobs_job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_rq_jobs_job_id_seq', 1, false);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Data for Name: django_site; Type: TABLE DATA; Schema: public; Owner: root
--

COPY django_site (id, domain, name) FROM stdin;
1	example.com	example.com
\.


--
-- Name: django_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_site_id_seq', 1, true);


--
-- Data for Name: metaprop_contactmetaprop; Type: TABLE DATA; Schema: public; Owner: root
--

COPY metaprop_contactmetaprop (id, title, address1, address2, city, zip, state, phone, fax, hours, days, note) FROM stdin;
\.


--
-- Name: metaprop_contactmetaprop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('metaprop_contactmetaprop_id_seq', 1, false);


--
-- Data for Name: metaprop_metaprop; Type: TABLE DATA; Schema: public; Owner: root
--

COPY metaprop_metaprop (id, title, keywords, description, author, analytics) FROM stdin;
\.


--
-- Name: metaprop_metaprop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('metaprop_metaprop_id_seq', 1, false);


--
-- Data for Name: metaprop_profilemetaprop; Type: TABLE DATA; Schema: public; Owner: root
--

COPY metaprop_profilemetaprop (id, title, email, from_email, to_email, to_email_secondary, to_email_third, smtp_server, smtp_port, user_name, password, message) FROM stdin;
\.


--
-- Name: metaprop_profilemetaprop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('metaprop_profilemetaprop_id_seq', 1, false);


--
-- Data for Name: oauth2_provider_accesstoken; Type: TABLE DATA; Schema: public; Owner: root
--

COPY oauth2_provider_accesstoken (id, token, expires, scope, application_id, user_id) FROM stdin;
\.


--
-- Name: oauth2_provider_accesstoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('oauth2_provider_accesstoken_id_seq', 1, false);


--
-- Data for Name: oauth2_provider_application; Type: TABLE DATA; Schema: public; Owner: root
--

COPY oauth2_provider_application (id, client_id, redirect_uris, client_type, authorization_grant_type, client_secret, name, user_id, skip_authorization) FROM stdin;
\.


--
-- Name: oauth2_provider_application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('oauth2_provider_application_id_seq', 1, false);


--
-- Data for Name: oauth2_provider_grant; Type: TABLE DATA; Schema: public; Owner: root
--

COPY oauth2_provider_grant (id, code, expires, redirect_uri, scope, application_id, user_id) FROM stdin;
\.


--
-- Name: oauth2_provider_grant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('oauth2_provider_grant_id_seq', 1, false);


--
-- Data for Name: oauth2_provider_refreshtoken; Type: TABLE DATA; Schema: public; Owner: root
--

COPY oauth2_provider_refreshtoken (id, token, access_token_id, application_id, user_id) FROM stdin;
\.


--
-- Name: oauth2_provider_refreshtoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('oauth2_provider_refreshtoken_id_seq', 1, false);


--
-- Data for Name: registration_registrationprofile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY registration_registrationprofile (id, activation_key, user_id, activated) FROM stdin;
\.


--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('registration_registrationprofile_id_seq', 1, false);


--
-- Data for Name: social_auth_association; Type: TABLE DATA; Schema: public; Owner: root
--

COPY social_auth_association (id, server_url, handle, secret, issued, lifetime, assoc_type) FROM stdin;
\.


--
-- Name: social_auth_association_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('social_auth_association_id_seq', 1, false);


--
-- Data for Name: social_auth_code; Type: TABLE DATA; Schema: public; Owner: root
--

COPY social_auth_code (id, email, code, verified) FROM stdin;
\.


--
-- Name: social_auth_code_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('social_auth_code_id_seq', 1, false);


--
-- Data for Name: social_auth_nonce; Type: TABLE DATA; Schema: public; Owner: root
--

COPY social_auth_nonce (id, server_url, "timestamp", salt) FROM stdin;
\.


--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('social_auth_nonce_id_seq', 1, false);


--
-- Data for Name: social_auth_usersocialauth; Type: TABLE DATA; Schema: public; Owner: root
--

COPY social_auth_usersocialauth (id, provider, uid, extra_data, user_id) FROM stdin;
4	twitter	69765978	{"access_token": {"oauth_token_secret": "BCZ6JC0wj3YJSA7GMYop5f67acPYnA9TYAC4hZP3r1pQC", "oauth_token": "69765978-RKH5JGy8B6ZVlBgPjgaAmQn74WJLtC12TjH9DFTCm", "x_auth_expires": "0", "user_id": "69765978", "screen_name": "dmitryro"}, "id": 69765978}	3
3	facebook	249146515434688	{"access_token": "EAAL0bRhVKz0BAKgaDmTOQPOJUbA04ZAjzTa6YDHXlIFddGSe27SLwHgCbuUKWUrKYwDwAroHNbcceK8qGqU2uZBM5JFAPuIPdbZAFm3pbqcoMpqplGcxAKZAnVif5Y4Hyxs4S6pZA5IeLznqGpRtUasdZAOq3mENVe4pLHOSnNAQZDZD", "expires": null, "id": "249146515434688"}	2
2	facebook	10153762251382880	{"access_token": "EAAL0bRhVKz0BAL3AVFOgLcWm5447QlZAS0H9lcccVm3WCZBNzqNNspWqwWI2Feiexb50QR1l9DpF0fNk01ZChraEGeJcCfRneRz277LMUUzLYxk9NNQ6x3Bwf5K30QZC4bPftc0wzDqHcsnyCeI8LM56dRlibpUZD", "expires": null, "id": "10153762251382880"}	2
1	google-oauth2	dmitryro@gmail.com	{"token_type": "Bearer", "access_token": "ya29.CjLWAuUQpKykgCPHivSDmRwwpjLqQWHeo1QhZR6rGsaV8sCP9nVJt9TQAA5npFI1SxoR5A", "expires": 3600}	1
\.


--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('social_auth_usersocialauth_id_seq', 4, true);


--
-- Data for Name: socialaccount_socialaccount; Type: TABLE DATA; Schema: public; Owner: root
--

COPY socialaccount_socialaccount (id, provider, uid, last_login, date_joined, extra_data, user_id) FROM stdin;
\.


--
-- Name: socialaccount_socialaccount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('socialaccount_socialaccount_id_seq', 1, false);


--
-- Data for Name: socialaccount_socialapp; Type: TABLE DATA; Schema: public; Owner: root
--

COPY socialaccount_socialapp (id, provider, name, client_id, secret, key) FROM stdin;
\.


--
-- Name: socialaccount_socialapp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('socialaccount_socialapp_id_seq', 1, false);


--
-- Data for Name: socialaccount_socialapp_sites; Type: TABLE DATA; Schema: public; Owner: root
--

COPY socialaccount_socialapp_sites (id, socialapp_id, site_id) FROM stdin;
\.


--
-- Name: socialaccount_socialapp_sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('socialaccount_socialapp_sites_id_seq', 1, false);


--
-- Data for Name: socialaccount_socialtoken; Type: TABLE DATA; Schema: public; Owner: root
--

COPY socialaccount_socialtoken (id, token, token_secret, expires_at, account_id, app_id) FROM stdin;
\.


--
-- Name: socialaccount_socialtoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('socialaccount_socialtoken_id_seq', 1, false);


--
-- Data for Name: tasks_tasklog; Type: TABLE DATA; Schema: public; Owner: root
--

COPY tasks_tasklog (id, username, job, show_id, is_complete, user_id, session_key) FROM stdin;
1	root	new_profile_notification	\N	f	1	\N
2	DmitryRoitman	new_profile_notification	\N	f	2	\N
4	root	google_profile_created	\N	t	1	\N
3	DmitryRoitman	facebook_profile_created	\N	t	2	\N
5	DmitryRoitman	facebook_profile_created	\N	f	2	\N
6	DmitryRoitman	facebook_profile_created	\N	f	2	\N
7	DmitryRoitman	facebook_profile_created	\N	f	2	\N
8	DmitryRoitman	facebook_profile_created	\N	f	2	\N
9	DmitryRoitman	facebook_profile_created	\N	f	2	\N
10	DmitryRoitman	facebook_profile_created	\N	f	2	\N
11	DmitryRoitman	facebook_profile_created	\N	f	2	\N
12	DmitryRoitman	facebook_profile_created	\N	f	2	\N
13	dmitryro	new_profile_notification	\N	f	3	\N
14	DmitryRoitman	facebook_profile_created	\N	f	2	\N
\.


--
-- Name: tasks_tasklog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('tasks_tasklog_id_seq', 14, true);


--
-- Data for Name: tastypie_apiaccess; Type: TABLE DATA; Schema: public; Owner: root
--

COPY tastypie_apiaccess (id, identifier, url, request_method, accessed) FROM stdin;
\.


--
-- Name: tastypie_apiaccess_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('tastypie_apiaccess_id_seq', 1, false);


--
-- Data for Name: tastypie_apikey; Type: TABLE DATA; Schema: public; Owner: root
--

COPY tastypie_apikey (id, key, created, user_id) FROM stdin;
\.


--
-- Name: tastypie_apikey_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('tastypie_apikey_id_seq', 1, false);


--
-- Name: user_aboutus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('user_aboutus_id_seq', 1, false);


--
-- Data for Name: users_aboutus; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_aboutus (id, title, subtitle, body, avatar) FROM stdin;
1	About Us	Grinberg and Segal Family Law Division	The Law Offices of Grinberg & Segal, PLLC, Family Law Division is an family law firm based in New York. Our firm consists of experienced lawyers dedicated to assisting individuals to navigate the tangle of the United States family laws. Our office is located in Manhattan, New York, but we handle immigration matters throughout the United States. Our firm's objective is to provide you with personalized attention and professional service toward achieving your goals.	avatars/gas2.jpg
\.


--
-- Name: users_aboutus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_aboutus_id_seq', 1, true);


--
-- Data for Name: users_address; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_address (id, address1, address2, city, country, postal_zip, state_province_id) FROM stdin;
\.


--
-- Name: users_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_address_id_seq', 1, false);


--
-- Data for Name: users_contact; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_contact (id, name, time_contacted, phone, email, message) FROM stdin;
\.


--
-- Name: users_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_contact_id_seq', 1, false);


--
-- Data for Name: users_facebookprofile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_facebookprofile (id, about_me, facebook_id, access_token, facebook_name, facebook_profile_url, website_url, blog_url, date_of_birth, gender, raw_data, facebook_open_graph, new_token_required, image, username, email, first_name, last_name, time_created, profile_picture, is_new, is_cleared, profile_id, user_id) FROM stdin;
1	\N	10153762251382880	\N	\N	\N	\N	\N	\N	\N	\N	\N	f		DmitryRoitman		Dmitry	Roitman	\N		t	f	2	\N
\.


--
-- Name: users_facebookprofile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_facebookprofile_id_seq', 1, true);


--
-- Data for Name: users_googleplusprofile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_googleplusprofile (id, google_id, username, email, first_name, last_name, time_created, profile_image_path, activation_key, is_new, is_cleared, profile_id) FROM stdin;
\.


--
-- Data for Name: users_googleplusprofile_friends; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_googleplusprofile_friends (id, googleplusprofile_id, socialfriend_id) FROM stdin;
\.


--
-- Name: users_googleplusprofile_friends_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_googleplusprofile_friends_id_seq', 1, false);


--
-- Name: users_googleplusprofile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_googleplusprofile_id_seq', 1, false);


--
-- Data for Name: users_group; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_group (id) FROM stdin;
\.


--
-- Name: users_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_group_id_seq', 1, false);


--
-- Data for Name: users_profile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_profile (id, first_name, last_name, email, username, date_joined, profile_image_path, phone, is_new, is_avatar_processed, is_avatar_transfered, is_signature_customized, is_online, is_cleared, is_facebook_signup_used, is_google_signup_used, is_twitter_signup_used, is_linkedin_signup_used, is_username_customized, is_user_avatar, is_google_avatar, is_facebook_avatar, is_twitter_avatar, address_id, user_id) FROM stdin;
1	Dmitry	Roitman	dmitryro@gmail.com	root	2016-05-01 15:46:23.156927-05	https://lh6.googleusercontent.com/-vym7DjqsWAk/AAAAAAAAAAI/AAAAAAAAASo/x-5ZZkEEVeo/photo.jpg?sz=200	\N	t	f	f	f	f	f	f	f	f	f	f	f	t	f	f	\N	1
2	Dmitry	Roitman		DmitryRoitman	2016-05-01 15:29:16.793288-05	http://graph.facebook.com/249146515434688/picture?type=large	\N	t	f	f	f	f	f	t	f	f	f	f	f	f	t	f	\N	2
\.


--
-- Name: users_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_profile_id_seq', 2, true);


--
-- Data for Name: users_socialfriend; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_socialfriend (id, username, full_name, first_name, last_name, email, date_connected, profile_picture) FROM stdin;
\.


--
-- Name: users_socialfriend_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_socialfriend_id_seq', 1, false);


--
-- Data for Name: users_socialmedium; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_socialmedium (id, medium, code, description) FROM stdin;
\.


--
-- Name: users_socialmedium_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_socialmedium_id_seq', 1, false);


--
-- Data for Name: users_stateprovince; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_stateprovince (id, name, abbreviation) FROM stdin;
\.


--
-- Name: users_stateprovince_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_stateprovince_id_seq', 1, false);


--
-- Data for Name: users_teammember; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_teammember (id, email, first_name, last_name, title, avatar, user_id, is_partner, is_associate, phone, username, bio) FROM stdin;
3	dmitryro@gmail.com	D	R	Developer	avatars/dmitryro_mqF1xvP.jpg	\N	f	f	2343234234	dmitryro	\N
5	info@myattorneyusa.com	Eliza	Grinberg	Eliza Grinberg ESQ.	avatars/eliza_grinberg.jpg	\N	t	f	212 202 0342	elizaginberg	Eliza Grinberg is a founding partner at the Law Offices of Grinberg & Segal, PLLC, with over 16 years experience in all areas of Family Law. Ms. Grinberg is an experienced and well-respected attorney, who has successfully represented matrimonial clients in New York, New Jersey, Connecticut, Pennsylvania, Colorado, Illinois, Florida, Ohio and Texas.
4	info@myattorneyusa.com	Alexander J	Segal	A.J.Segal ESQ.	avatars/segal_full.jpg	\N	t	f	212 202 0325	ajsegal	Immigration attorney Alexander J. Segal has made it his life???s mission to help immigrants in need. Mr. Segal founded The Law Offices of Grinberg & Segal, PLLC with immigration attorney Eliza Grinberg to provide immigrants with a law firm that is dedicated to protecting their rights. Attorney Segal has extensive experience representing clients in virtually every area of family law.
6	info@myattorneyusa.com	Wendy	Barlow	Wendy Barlow, Esq.	avatars/wendy2.jpg	\N	t	f	212 202 0342	wendy	Wendy Barlow is an associate attorney at The Law Offices of Grinberg & Segal, PLLC Ms. Barlow has over five (5) years of experience in family law working first as a law clerk and currently as an attorney. She is admitted to practice law in the State of New York, but has represented clients throughout the United States with their legal issues. Working in a small law firm over the past five (5) years has allowed Ms. Barlow to gain valuable family law experience. This experience allows her to successfully represent clients before the courts throghout the United States and assist in actions before the courts.
\.


--
-- Name: users_teammember_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_teammember_id_seq', 6, true);


--
-- Data for Name: users_token; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_token (token, created, user_id) FROM stdin;
\.


--
-- Data for Name: users_useractivation; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_useractivation (id, activation_key, date_used, user_id) FROM stdin;
\.


--
-- Name: users_useractivation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_useractivation_id_seq', 1, false);


--
-- Data for Name: users_usersession; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_usersession (id, username, remote_ip, session_key, time_in, time_out, time_online_hours, time_online_minutes, time_online_seconds, time_online_total, time_online_delta, date_visited, user_id) FROM stdin;
\.


--
-- Name: users_usersession_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_usersession_id_seq', 1, false);


--
-- Data for Name: utils_logger; Type: TABLE DATA; Schema: public; Owner: root
--

COPY utils_logger (id, log, "time") FROM stdin;
1	WE GOT SOME ERRORglobal name 'User' is not defined	2016-05-01 18:39:59.87817-05
2	WE GOT SOME ERRORglobal name 'User' is not defined	2016-05-01 18:40:02.490316-05
3	WE GOT SOME ERRORglobal name 'User' is not defined	2016-05-01 20:06:01.984682-05
4	LET US TRY CREATING A NEW PROFILE	2016-05-01 22:49:39.916751-05
5	IN CREATE PROFILE - PROFILE DOES NOT EXIST	2016-05-01 22:49:39.927929-05
\.


--
-- Name: utils_logger_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('utils_logger_id_seq', 5, true);


--
-- Name: account_emailaddress_email_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailaddress
    ADD CONSTRAINT account_emailaddress_email_key UNIQUE (email);


--
-- Name: account_emailaddress_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailaddress
    ADD CONSTRAINT account_emailaddress_pkey PRIMARY KEY (id);


--
-- Name: account_emailconfirmation_key_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailconfirmation
    ADD CONSTRAINT account_emailconfirmation_key_key UNIQUE (key);


--
-- Name: account_emailconfirmation_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailconfirmation
    ADD CONSTRAINT account_emailconfirmation_pkey PRIMARY KEY (id);


--
-- Name: admin_tools_dashboard_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_dashboard_preferences
    ADD CONSTRAINT admin_tools_dashboard_preferences_pkey PRIMARY KEY (id);


--
-- Name: admin_tools_dashboard_preferences_user_id_74da8e56_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_dashboard_preferences
    ADD CONSTRAINT admin_tools_dashboard_preferences_user_id_74da8e56_uniq UNIQUE (user_id, dashboard_id);


--
-- Name: admin_tools_menu_bookmark_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_menu_bookmark
    ADD CONSTRAINT admin_tools_menu_bookmark_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions_group_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission_content_type_id_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_user_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_user_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- Name: authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- Name: django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type_app_label_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_app_label_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_redirect_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_redirect
    ADD CONSTRAINT django_redirect_pkey PRIMARY KEY (id);


--
-- Name: django_redirect_site_id_ac5dd16b_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_redirect
    ADD CONSTRAINT django_redirect_site_id_ac5dd16b_uniq UNIQUE (site_id, old_path);


--
-- Name: django_rq_jobs_job_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_rq_jobs_job
    ADD CONSTRAINT django_rq_jobs_job_pkey PRIMARY KEY (id);


--
-- Name: django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: django_site_domain_a2e37b91_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_site
    ADD CONSTRAINT django_site_domain_a2e37b91_uniq UNIQUE (domain);


--
-- Name: django_site_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_site
    ADD CONSTRAINT django_site_pkey PRIMARY KEY (id);


--
-- Name: metaprop_contactmetaprop_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_contactmetaprop
    ADD CONSTRAINT metaprop_contactmetaprop_pkey PRIMARY KEY (id);


--
-- Name: metaprop_metaprop_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_metaprop
    ADD CONSTRAINT metaprop_metaprop_pkey PRIMARY KEY (id);


--
-- Name: metaprop_profilemetaprop_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY metaprop_profilemetaprop
    ADD CONSTRAINT metaprop_profilemetaprop_pkey PRIMARY KEY (id);


--
-- Name: oauth2_provider_accesstoken_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_accesstoken
    ADD CONSTRAINT oauth2_provider_accesstoken_pkey PRIMARY KEY (id);


--
-- Name: oauth2_provider_application_client_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_application
    ADD CONSTRAINT oauth2_provider_application_client_id_key UNIQUE (client_id);


--
-- Name: oauth2_provider_application_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_application
    ADD CONSTRAINT oauth2_provider_application_pkey PRIMARY KEY (id);


--
-- Name: oauth2_provider_grant_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_grant
    ADD CONSTRAINT oauth2_provider_grant_pkey PRIMARY KEY (id);


--
-- Name: oauth2_provider_refreshtoken_access_token_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken
    ADD CONSTRAINT oauth2_provider_refreshtoken_access_token_id_key UNIQUE (access_token_id);


--
-- Name: oauth2_provider_refreshtoken_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken
    ADD CONSTRAINT oauth2_provider_refreshtoken_pkey PRIMARY KEY (id);


--
-- Name: registration_registrationprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationprofile_pkey PRIMARY KEY (id);


--
-- Name: registration_registrationprofile_user_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationprofile_user_id_key UNIQUE (user_id);


--
-- Name: social_auth_association_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_association
    ADD CONSTRAINT social_auth_association_pkey PRIMARY KEY (id);


--
-- Name: social_auth_code_email_801b2d02_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_code
    ADD CONSTRAINT social_auth_code_email_801b2d02_uniq UNIQUE (email, code);


--
-- Name: social_auth_code_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_code
    ADD CONSTRAINT social_auth_code_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce_server_url_f6284463_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_server_url_f6284463_uniq UNIQUE (server_url, "timestamp", salt);


--
-- Name: social_auth_usersocialauth_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_pkey PRIMARY KEY (id);


--
-- Name: social_auth_usersocialauth_provider_e6b5e668_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_provider_e6b5e668_uniq UNIQUE (provider, uid);


--
-- Name: socialaccount_socialaccount_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialaccount
    ADD CONSTRAINT socialaccount_socialaccount_pkey PRIMARY KEY (id);


--
-- Name: socialaccount_socialaccount_provider_fc810c6e_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialaccount
    ADD CONSTRAINT socialaccount_socialaccount_provider_fc810c6e_uniq UNIQUE (provider, uid);


--
-- Name: socialaccount_socialapp_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp
    ADD CONSTRAINT socialaccount_socialapp_pkey PRIMARY KEY (id);


--
-- Name: socialaccount_socialapp_sites_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp_sites
    ADD CONSTRAINT socialaccount_socialapp_sites_pkey PRIMARY KEY (id);


--
-- Name: socialaccount_socialapp_sites_socialapp_id_71a9a768_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp_sites
    ADD CONSTRAINT socialaccount_socialapp_sites_socialapp_id_71a9a768_uniq UNIQUE (socialapp_id, site_id);


--
-- Name: socialaccount_socialtoken_app_id_fca4e0ac_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialtoken
    ADD CONSTRAINT socialaccount_socialtoken_app_id_fca4e0ac_uniq UNIQUE (app_id, account_id);


--
-- Name: socialaccount_socialtoken_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialtoken
    ADD CONSTRAINT socialaccount_socialtoken_pkey PRIMARY KEY (id);


--
-- Name: tasks_tasklog_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY tasks_tasklog
    ADD CONSTRAINT tasks_tasklog_pkey PRIMARY KEY (id);


--
-- Name: tastypie_apiaccess_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apiaccess
    ADD CONSTRAINT tastypie_apiaccess_pkey PRIMARY KEY (id);


--
-- Name: tastypie_apikey_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apikey
    ADD CONSTRAINT tastypie_apikey_pkey PRIMARY KEY (id);


--
-- Name: tastypie_apikey_user_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apikey
    ADD CONSTRAINT tastypie_apikey_user_id_key UNIQUE (user_id);


--
-- Name: users_aboutus_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_aboutus
    ADD CONSTRAINT users_aboutus_pkey PRIMARY KEY (id);


--
-- Name: users_address_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_address
    ADD CONSTRAINT users_address_pkey PRIMARY KEY (id);


--
-- Name: users_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_contact
    ADD CONSTRAINT users_contact_pkey PRIMARY KEY (id);


--
-- Name: users_facebookprofile_facebook_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_facebookprofile
    ADD CONSTRAINT users_facebookprofile_facebook_id_key UNIQUE (facebook_id);


--
-- Name: users_facebookprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_facebookprofile
    ADD CONSTRAINT users_facebookprofile_pkey PRIMARY KEY (id);


--
-- Name: users_facebookprofile_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_facebookprofile
    ADD CONSTRAINT users_facebookprofile_profile_id_key UNIQUE (profile_id);


--
-- Name: users_googleplusprofile_frie_googleplusprofile_id_23027e5f_uniq; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile_friends
    ADD CONSTRAINT users_googleplusprofile_frie_googleplusprofile_id_23027e5f_uniq UNIQUE (googleplusprofile_id, socialfriend_id);


--
-- Name: users_googleplusprofile_friends_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile_friends
    ADD CONSTRAINT users_googleplusprofile_friends_pkey PRIMARY KEY (id);


--
-- Name: users_googleplusprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile
    ADD CONSTRAINT users_googleplusprofile_pkey PRIMARY KEY (id);


--
-- Name: users_googleplusprofile_profile_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile
    ADD CONSTRAINT users_googleplusprofile_profile_id_key UNIQUE (profile_id);


--
-- Name: users_group_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_group
    ADD CONSTRAINT users_group_pkey PRIMARY KEY (id);


--
-- Name: users_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_profile
    ADD CONSTRAINT users_profile_pkey PRIMARY KEY (id);


--
-- Name: users_profile_user_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_profile
    ADD CONSTRAINT users_profile_user_id_key UNIQUE (user_id);


--
-- Name: users_socialfriend_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_socialfriend
    ADD CONSTRAINT users_socialfriend_pkey PRIMARY KEY (id);


--
-- Name: users_socialmedium_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_socialmedium
    ADD CONSTRAINT users_socialmedium_pkey PRIMARY KEY (id);


--
-- Name: users_stateprovince_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_stateprovince
    ADD CONSTRAINT users_stateprovince_pkey PRIMARY KEY (id);


--
-- Name: users_teammember_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_teammember
    ADD CONSTRAINT users_teammember_pkey PRIMARY KEY (id);


--
-- Name: users_teammember_user_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_teammember
    ADD CONSTRAINT users_teammember_user_id_key UNIQUE (user_id);


--
-- Name: users_token_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_token
    ADD CONSTRAINT users_token_pkey PRIMARY KEY (token);


--
-- Name: users_useractivation_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_useractivation
    ADD CONSTRAINT users_useractivation_pkey PRIMARY KEY (id);


--
-- Name: users_usersession_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_usersession
    ADD CONSTRAINT users_usersession_pkey PRIMARY KEY (id);


--
-- Name: utils_logger_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY utils_logger
    ADD CONSTRAINT utils_logger_pkey PRIMARY KEY (id);


--
-- Name: account_emailaddress_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX account_emailaddress_e8701ad4 ON account_emailaddress USING btree (user_id);


--
-- Name: account_emailaddress_email_03be32b2_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX account_emailaddress_email_03be32b2_like ON account_emailaddress USING btree (email varchar_pattern_ops);


--
-- Name: account_emailconfirmation_6f1edeac; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX account_emailconfirmation_6f1edeac ON account_emailconfirmation USING btree (email_address_id);


--
-- Name: account_emailconfirmation_key_f43612bd_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX account_emailconfirmation_key_f43612bd_like ON account_emailconfirmation USING btree (key varchar_pattern_ops);


--
-- Name: admin_tools_dashboard_preferences_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX admin_tools_dashboard_preferences_e8701ad4 ON admin_tools_dashboard_preferences USING btree (user_id);


--
-- Name: admin_tools_menu_bookmark_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX admin_tools_menu_bookmark_e8701ad4 ON admin_tools_menu_bookmark USING btree (user_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_group_name_a6ea08ec_like ON auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_0e939a4f; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_group_permissions_0e939a4f ON auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_8373b171; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_group_permissions_8373b171 ON auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_417f1b1c; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_permission_417f1b1c ON auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_0e939a4f; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_user_groups_0e939a4f ON auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_user_groups_e8701ad4 ON auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_8373b171; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_user_user_permissions_8373b171 ON auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_user_user_permissions_e8701ad4 ON auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX auth_user_username_6821ab7c_like ON auth_user USING btree (username varchar_pattern_ops);


--
-- Name: authtoken_token_key_10f0b77e_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX authtoken_token_key_10f0b77e_like ON authtoken_token USING btree (key varchar_pattern_ops);


--
-- Name: django_admin_log_417f1b1c; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_admin_log_417f1b1c ON django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_admin_log_e8701ad4 ON django_admin_log USING btree (user_id);


--
-- Name: django_redirect_91a0b591; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_redirect_91a0b591 ON django_redirect USING btree (old_path);


--
-- Name: django_redirect_9365d6e7; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_redirect_9365d6e7 ON django_redirect USING btree (site_id);


--
-- Name: django_redirect_old_path_c6cc94d3_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_redirect_old_path_c6cc94d3_like ON django_redirect USING btree (old_path varchar_pattern_ops);


--
-- Name: django_session_de54fa62; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_session_de54fa62 ON django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_session_session_key_c0390e0f_like ON django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: django_site_domain_a2e37b91_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX django_site_domain_a2e37b91_like ON django_site USING btree (domain varchar_pattern_ops);


--
-- Name: oauth2_provider_accesstoken_6bc0a4eb; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_accesstoken_6bc0a4eb ON oauth2_provider_accesstoken USING btree (application_id);


--
-- Name: oauth2_provider_accesstoken_94a08da1; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_accesstoken_94a08da1 ON oauth2_provider_accesstoken USING btree (token);


--
-- Name: oauth2_provider_accesstoken_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_accesstoken_e8701ad4 ON oauth2_provider_accesstoken USING btree (user_id);


--
-- Name: oauth2_provider_accesstoken_token_8af090f8_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_accesstoken_token_8af090f8_like ON oauth2_provider_accesstoken USING btree (token varchar_pattern_ops);


--
-- Name: oauth2_provider_application_9d667c2b; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_application_9d667c2b ON oauth2_provider_application USING btree (client_secret);


--
-- Name: oauth2_provider_application_client_id_03f0cc84_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_application_client_id_03f0cc84_like ON oauth2_provider_application USING btree (client_id varchar_pattern_ops);


--
-- Name: oauth2_provider_application_client_secret_53133678_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_application_client_secret_53133678_like ON oauth2_provider_application USING btree (client_secret varchar_pattern_ops);


--
-- Name: oauth2_provider_application_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_application_e8701ad4 ON oauth2_provider_application USING btree (user_id);


--
-- Name: oauth2_provider_grant_6bc0a4eb; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_grant_6bc0a4eb ON oauth2_provider_grant USING btree (application_id);


--
-- Name: oauth2_provider_grant_c1336794; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_grant_c1336794 ON oauth2_provider_grant USING btree (code);


--
-- Name: oauth2_provider_grant_code_49ab4ddf_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_grant_code_49ab4ddf_like ON oauth2_provider_grant USING btree (code varchar_pattern_ops);


--
-- Name: oauth2_provider_grant_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_grant_e8701ad4 ON oauth2_provider_grant USING btree (user_id);


--
-- Name: oauth2_provider_refreshtoken_6bc0a4eb; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_refreshtoken_6bc0a4eb ON oauth2_provider_refreshtoken USING btree (application_id);


--
-- Name: oauth2_provider_refreshtoken_94a08da1; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_refreshtoken_94a08da1 ON oauth2_provider_refreshtoken USING btree (token);


--
-- Name: oauth2_provider_refreshtoken_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_refreshtoken_e8701ad4 ON oauth2_provider_refreshtoken USING btree (user_id);


--
-- Name: oauth2_provider_refreshtoken_token_d090daa4_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX oauth2_provider_refreshtoken_token_d090daa4_like ON oauth2_provider_refreshtoken USING btree (token varchar_pattern_ops);


--
-- Name: social_auth_code_c1336794; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX social_auth_code_c1336794 ON social_auth_code USING btree (code);


--
-- Name: social_auth_code_code_a2393167_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX social_auth_code_code_a2393167_like ON social_auth_code USING btree (code varchar_pattern_ops);


--
-- Name: social_auth_usersocialauth_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX social_auth_usersocialauth_e8701ad4 ON social_auth_usersocialauth USING btree (user_id);


--
-- Name: socialaccount_socialaccount_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX socialaccount_socialaccount_e8701ad4 ON socialaccount_socialaccount USING btree (user_id);


--
-- Name: socialaccount_socialapp_sites_9365d6e7; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX socialaccount_socialapp_sites_9365d6e7 ON socialaccount_socialapp_sites USING btree (site_id);


--
-- Name: socialaccount_socialapp_sites_fe95b0a0; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX socialaccount_socialapp_sites_fe95b0a0 ON socialaccount_socialapp_sites USING btree (socialapp_id);


--
-- Name: socialaccount_socialtoken_8a089c2a; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX socialaccount_socialtoken_8a089c2a ON socialaccount_socialtoken USING btree (account_id);


--
-- Name: socialaccount_socialtoken_f382adfe; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX socialaccount_socialtoken_f382adfe ON socialaccount_socialtoken USING btree (app_id);


--
-- Name: tastypie_apikey_3c6e0b8a; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX tastypie_apikey_3c6e0b8a ON tastypie_apikey USING btree (key);


--
-- Name: tastypie_apikey_key_17b411bb_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX tastypie_apikey_key_17b411bb_like ON tastypie_apikey USING btree (key varchar_pattern_ops);


--
-- Name: users_address_a6bc93e8; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_address_a6bc93e8 ON users_address USING btree (state_province_id);


--
-- Name: users_googleplusprofile_friends_20192155; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_googleplusprofile_friends_20192155 ON users_googleplusprofile_friends USING btree (socialfriend_id);


--
-- Name: users_googleplusprofile_friends_6cdfe629; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_googleplusprofile_friends_6cdfe629 ON users_googleplusprofile_friends USING btree (googleplusprofile_id);


--
-- Name: users_profile_ea8e5d12; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_profile_ea8e5d12 ON users_profile USING btree (address_id);


--
-- Name: users_token_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_token_e8701ad4 ON users_token USING btree (user_id);


--
-- Name: users_token_token_8d431dd8_like; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_token_token_8d431dd8_like ON users_token USING btree (token varchar_pattern_ops);


--
-- Name: users_usersession_e8701ad4; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX users_usersession_e8701ad4 ON users_usersession USING btree (user_id);


--
-- Name: account_em_email_address_id_5b7f8c58_fk_account_emailaddress_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailconfirmation
    ADD CONSTRAINT account_em_email_address_id_5b7f8c58_fk_account_emailaddress_id FOREIGN KEY (email_address_id) REFERENCES account_emailaddress(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: account_emailaddress_user_id_2c513194_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY account_emailaddress
    ADD CONSTRAINT account_emailaddress_user_id_2c513194_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: admin_tools_dashboard_preferen_user_id_8f768e6c_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_dashboard_preferences
    ADD CONSTRAINT admin_tools_dashboard_preferen_user_id_8f768e6c_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: admin_tools_menu_bookmark_user_id_0382e410_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY admin_tools_menu_bookmark
    ADD CONSTRAINT admin_tools_menu_bookmark_user_id_0382e410_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permiss_permission_id_84c5c92e_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permiss_permission_id_84c5c92e_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permiss_content_type_id_2f476e4b_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permiss_content_type_id_2f476e4b_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_per_permission_id_1fbb5f2c_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_per_permission_id_1fbb5f2c_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: authtoken_token_user_id_35299eff_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_content_type_id_c4bce8eb_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_content_type_id_c4bce8eb_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_redirect_site_id_c3e37341_fk_django_site_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY django_redirect
    ADD CONSTRAINT django_redirect_site_id_c3e37341_fk_django_site_id FOREIGN KEY (site_id) REFERENCES django_site(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oaut_access_token_id_775e84e8_fk_oauth2_provider_accesstoken_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken
    ADD CONSTRAINT oaut_access_token_id_775e84e8_fk_oauth2_provider_accesstoken_id FOREIGN KEY (access_token_id) REFERENCES oauth2_provider_accesstoken(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth2_provider_accesstoken_user_id_6e4c9a65_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_accesstoken
    ADD CONSTRAINT oauth2_provider_accesstoken_user_id_6e4c9a65_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth2_provider_application_user_id_79829054_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_application
    ADD CONSTRAINT oauth2_provider_application_user_id_79829054_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth2_provider_grant_user_id_e8f62af8_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_grant
    ADD CONSTRAINT oauth2_provider_grant_user_id_e8f62af8_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken
    ADD CONSTRAINT oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth_application_id_2d1c311b_fk_oauth2_provider_application_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_refreshtoken
    ADD CONSTRAINT oauth_application_id_2d1c311b_fk_oauth2_provider_application_id FOREIGN KEY (application_id) REFERENCES oauth2_provider_application(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth_application_id_81923564_fk_oauth2_provider_application_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_grant
    ADD CONSTRAINT oauth_application_id_81923564_fk_oauth2_provider_application_id FOREIGN KEY (application_id) REFERENCES oauth2_provider_application(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: oauth_application_id_b22886e1_fk_oauth2_provider_application_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY oauth2_provider_accesstoken
    ADD CONSTRAINT oauth_application_id_b22886e1_fk_oauth2_provider_application_id FOREIGN KEY (application_id) REFERENCES oauth2_provider_application(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: registration_registrationprofi_user_id_5fcbf725_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationprofi_user_id_5fcbf725_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: socialacc_account_id_951f210e_fk_socialaccount_socialaccount_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialtoken
    ADD CONSTRAINT socialacc_account_id_951f210e_fk_socialaccount_socialaccount_id FOREIGN KEY (account_id) REFERENCES socialaccount_socialaccount(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: socialaccou_socialapp_id_97fb6e7d_fk_socialaccount_socialapp_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp_sites
    ADD CONSTRAINT socialaccou_socialapp_id_97fb6e7d_fk_socialaccount_socialapp_id FOREIGN KEY (socialapp_id) REFERENCES socialaccount_socialapp(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: socialaccount_soc_app_id_636a42d7_fk_socialaccount_socialapp_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialtoken
    ADD CONSTRAINT socialaccount_soc_app_id_636a42d7_fk_socialaccount_socialapp_id FOREIGN KEY (app_id) REFERENCES socialaccount_socialapp(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: socialaccount_socialaccount_user_id_8146e70c_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialaccount
    ADD CONSTRAINT socialaccount_socialaccount_user_id_8146e70c_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: socialaccount_socialapp_site_site_id_2579dee5_fk_django_site_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY socialaccount_socialapp_sites
    ADD CONSTRAINT socialaccount_socialapp_site_site_id_2579dee5_fk_django_site_id FOREIGN KEY (site_id) REFERENCES django_site(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: tastypie_apikey_user_id_8c8fa920_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY tastypie_apikey
    ADD CONSTRAINT tastypie_apikey_user_id_8c8fa920_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: use_googleplusprofile_id_ebc59b91_fk_users_googleplusprofile_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile_friends
    ADD CONSTRAINT use_googleplusprofile_id_ebc59b91_fk_users_googleplusprofile_id FOREIGN KEY (googleplusprofile_id) REFERENCES users_googleplusprofile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_addr_state_province_id_560a8286_fk_users_stateprovince_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_address
    ADD CONSTRAINT users_addr_state_province_id_560a8286_fk_users_stateprovince_id FOREIGN KEY (state_province_id) REFERENCES users_stateprovince(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_facebookprofile_profile_id_53331739_fk_users_profile_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_facebookprofile
    ADD CONSTRAINT users_facebookprofile_profile_id_53331739_fk_users_profile_id FOREIGN KEY (profile_id) REFERENCES users_profile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_googlep_socialfriend_id_33e515dd_fk_users_socialfriend_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile_friends
    ADD CONSTRAINT users_googlep_socialfriend_id_33e515dd_fk_users_socialfriend_id FOREIGN KEY (socialfriend_id) REFERENCES users_socialfriend(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_googleplusprofile_profile_id_0c56f5b7_fk_users_profile_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_googleplusprofile
    ADD CONSTRAINT users_googleplusprofile_profile_id_0c56f5b7_fk_users_profile_id FOREIGN KEY (profile_id) REFERENCES users_profile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_profile_address_id_bb4c9ea7_fk_users_address_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_profile
    ADD CONSTRAINT users_profile_address_id_bb4c9ea7_fk_users_address_id FOREIGN KEY (address_id) REFERENCES users_address(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_profile_user_id_2112e78d_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_profile
    ADD CONSTRAINT users_profile_user_id_2112e78d_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_teammember_user_id_d5276cd7_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_teammember
    ADD CONSTRAINT users_teammember_user_id_d5276cd7_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_token_user_id_af964690_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_token
    ADD CONSTRAINT users_token_user_id_af964690_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_usersession_user_id_2873d35e_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_usersession
    ADD CONSTRAINT users_usersession_user_id_2873d35e_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

