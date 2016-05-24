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
-- Name: contactinfo_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE contactinfo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE contactinfo_id_seq OWNER TO root;

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
-- Name: gui_contactinfo; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE gui_contactinfo (
    id integer DEFAULT nextval('contactinfo_id_seq'::regclass) NOT NULL,
    address1 character varying(150),
    address2 character varying(150),
    state character varying(150),
    tollfree character varying(150),
    phone character varying(150),
    fax character varying(150),
    email character varying(150),
    zipcode character varying(20),
    header character varying(150),
    statement character varying(450),
    city character varying(150)
);


ALTER TABLE gui_contactinfo OWNER TO root;

--
-- Name: logo_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE logo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE logo_id_seq OWNER TO root;

--
-- Name: gui_logo; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE gui_logo (
    id integer DEFAULT nextval('logo_id_seq'::regclass) NOT NULL,
    color_id integer,
    width integer DEFAULT 0,
    height integer DEFAULT 0,
    logo character varying(450)
);


ALTER TABLE gui_logo OWNER TO root;

--
-- Name: logocolor_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE logocolor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE logocolor_seq OWNER TO root;

--
-- Name: gui_logocolor; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE gui_logocolor (
    id integer DEFAULT nextval('logocolor_seq'::regclass) NOT NULL,
    color character varying(150),
    code character varying(150)
);


ALTER TABLE gui_logocolor OWNER TO root;

--
-- Name: gui_slide; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE gui_slide (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    text character varying(450) NOT NULL,
    link character varying(350) NOT NULL,
    slide character varying(100) NOT NULL
);


ALTER TABLE gui_slide OWNER TO root;

--
-- Name: gui_slide_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE gui_slide_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE gui_slide_id_seq OWNER TO root;

--
-- Name: gui_slide_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE gui_slide_id_seq OWNED BY gui_slide.id;


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
-- Name: registration_api_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE registration_api_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE registration_api_seq OWNER TO root;

--
-- Name: registration_api_registrationprofile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE registration_api_registrationprofile (
    id integer DEFAULT nextval('registration_api_seq'::regclass) NOT NULL,
    date_joined time with time zone,
    user_id integer,
    activation_key character varying(300)
);


ALTER TABLE registration_api_registrationprofile OWNER TO root;

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
-- Name: services_servicepackage; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE services_servicepackage (
    id integer NOT NULL,
    title character varying(200),
    fees double precision,
    price double precision,
    service_one character varying(200),
    service_one_is_available boolean,
    service_two character varying(200),
    service_two_is_available boolean,
    service_three character varying(200),
    service_three_is_available boolean,
    service_four character varying(200),
    service_four_is_available boolean,
    service_five character varying(200),
    service_five_is_available boolean,
    service_six character varying(200),
    service_six_is_available boolean,
    service_seven character varying(200),
    service_seven_is_available boolean,
    service_eight character varying(200),
    service_eight_is_available boolean,
    service_nine character varying(200),
    service_nine_is_available boolean,
    service_ten character varying(200),
    service_ten_is_available boolean,
    service_eleven character varying(200),
    service_eleven_is_available boolean,
    service_twelve character varying(200),
    service_twelve_is_available boolean,
    service_thirteen character varying(200),
    service_thirteen_is_available boolean,
    service_fourteen character varying(200),
    service_fourteen_is_available boolean,
    service_fifteen character varying(200),
    service_fifteen_is_available boolean,
    service_sixteen character varying(200),
    service_sixteen_is_available boolean,
    service_seventeen character varying(200),
    service_seventeen_is_available boolean,
    service_eighteen character varying(200),
    service_eighteen_is_available boolean,
    service_nineteen character varying(200),
    service_nineteen_is_available boolean,
    service_twenty character varying(200),
    service_twenty_is_available boolean,
    service_twentyone character varying(200),
    service_twentyone_is_available boolean,
    service_twentytwo character varying(200),
    service_twentytwo_is_available boolean
);


ALTER TABLE services_servicepackage OWNER TO root;

--
-- Name: services_servicepackage_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE services_servicepackage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE services_servicepackage_id_seq OWNER TO root;

--
-- Name: services_servicepackage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE services_servicepackage_id_seq OWNED BY services_servicepackage.id;


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
-- Name: users_advantage_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_advantage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_advantage_id_seq OWNER TO root;

--
-- Name: users_advantage; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_advantage (
    id integer DEFAULT nextval('users_advantage_id_seq'::regclass) NOT NULL,
    title character varying(140),
    section_one character varying(500),
    section_two character varying(500),
    section_three character varying(500)
);


ALTER TABLE users_advantage OWNER TO root;

--
-- Name: users_advantagelink_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_advantagelink_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_advantagelink_id_seq OWNER TO root;

--
-- Name: users_advantagelink; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_advantagelink (
    id integer DEFAULT nextval('users_advantagelink_id_seq'::regclass) NOT NULL,
    advantage_id integer,
    title character varying(140),
    link character varying(500)
);


ALTER TABLE users_advantagelink OWNER TO root;

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
-- Name: users_milestone; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE users_milestone (
    id integer NOT NULL,
    title character varying(140),
    year character varying(100),
    body character varying(500)
);


ALTER TABLE users_milestone OWNER TO root;

--
-- Name: users_milestone_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE users_milestone_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_milestone_id_seq OWNER TO root;

--
-- Name: users_milestone_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE users_milestone_id_seq OWNED BY users_milestone.id;


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

ALTER TABLE ONLY gui_slide ALTER COLUMN id SET DEFAULT nextval('gui_slide_id_seq'::regclass);


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

ALTER TABLE ONLY services_servicepackage ALTER COLUMN id SET DEFAULT nextval('services_servicepackage_id_seq'::regclass);


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

ALTER TABLE ONLY users_milestone ALTER COLUMN id SET DEFAULT nextval('users_milestone_id_seq'::regclass);


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
160	Can add Milestone	54	add_milestone
161	Can change Milestone	54	change_milestone
162	Can delete Milestone	54	delete_milestone
163	Can add Slide	55	add_slide
164	Can change Slide	55	change_slide
165	Can delete Slide	55	delete_slide
166	Can add Advantage	56	add_advantage
167	Can change Advantage	56	change_advantage
168	Can delete Advantage	56	delete_advantage
169	Can add Advantage Link	57	add_advantagelink
170	Can change Advantage Link	57	change_advantagelink
171	Can delete Advantage Link	57	delete_advantagelink
172	Can add Logo Color	58	add_logocolor
173	Can change Logo Color	58	change_logocolor
174	Can delete Logo Color	58	delete_logocolor
175	Can add Logo	59	add_logo
176	Can change Logo	59	change_logo
177	Can delete Logo	59	delete_logo
178	Can add Contanct Info	60	add_contactinfo
179	Can change Contanct Info	60	change_contactinfo
180	Can delete Contanct Info	60	delete_contactinfo
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('auth_permission_id_seq', 180, true);


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: root
--

COPY auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
5	!xAhssA0JvBuCRsL07Pd3HBhuiZ8PZvtXq4He8p1H	2016-05-12 22:42:09.22769-05	f	allseeingeye1003	Dmitry	Roitman	allseeingeye1003@gmail.com	f	t	2016-05-07 10:06:35.270635-05
6	!Yvcnipc7K8SYqTHTJADhv952bsZTvXanT7VTHAiZ	2016-05-20 22:18:31.952458-05	f	allseeingeye1004	Dmitry	Roitman	allseeingeye1004@gmail.com	f	t	2016-05-20 22:18:31.695756-05
1	pbkdf2_sha256$24000$hwovpPLLMdwz$EKCmLhEwAG+RRI4PRgbVwaIM0zhezEMuvR9vmskB84w=	2016-05-23 22:19:19.961937-05	t	root	Dmitry	Roitman	dmitryro@gmail.com	t	t	2016-05-01 14:53:03.030068-05
4	!6gvA9pxC8zbYLa5ZNn285uZtbfzDxlr8cXoSLF5s	2016-05-14 18:00:00.528341-05	f	dmitry	Dmitry	Roitman	dmitry@artrevolution.com	f	t	2016-05-02 12:27:11.881876-05
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

SELECT pg_catalog.setval('auth_user_id_seq', 6, true);


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
-- Name: contactinfo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('contactinfo_id_seq', 1, false);


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
14	2016-05-04 21:41:15.997582-05	1	Period One	1	Added.	54	1
15	2016-05-04 21:41:36.862982-05	2	Period Two	1	Added.	54	1
16	2016-05-04 21:44:49.665696-05	3	Period Three	1	Added.	54	1
17	2016-05-04 21:45:24.343621-05	4	Period Four	1	Added.	54	1
18	2016-05-06 20:35:21.807694-05	4	Profile object	2	Changed is_cleared and is_facebook_signup_used.	36	1
19	2016-05-06 20:40:06.026676-05	1	About Us	2	No fields changed.	53	1
20	2016-05-06 20:44:04.581422-05	6	TeamMember object	2	No fields changed.	45	1
21	2016-05-07 23:58:41.922416-05	1	ProfileMetaProp object	1	Added.	47	1
22	2016-05-08 00:03:49.234912-05	1	ProfileMetaProp object	2	Changed from_email and user_name.	47	1
23	2016-05-15 22:31:31.79607-05	1	Why Choose Us	1	Added.	56	1
24	2016-05-15 22:32:21.864512-05	1	How it all started	1	Added.	57	1
25	2016-05-15 22:32:45.260424-05	2	Early Years	1	Added.	57	1
26	2016-05-15 22:33:02.404662-05	3	Recognition	1	Added.	57	1
27	2016-05-15 22:33:17.238999-05	4	Latest Developments	1	Added.	57	1
28	2016-05-15 23:32:27.541843-05	2	Family Law	1	Added.	55	1
29	2016-05-15 23:41:19.390938-05	2	Child Custody	1	Added.	55	1
30	2016-05-15 23:42:26.5694-05	3	Property Division	1	Added.	55	1
31	2016-05-15 23:43:33.675731-05	4	Spousal Support	1	Added.	55	1
32	2016-05-15 23:45:32.04126-05	5	Agreements	1	Added.	55	1
33	2016-05-17 21:06:53.282562-05	3	3	3		4	1
34	2016-05-17 21:07:17.992472-05	2	DmitryRoitman	3		4	1
35	2016-05-17 21:08:42.876085-05	2	DmitryRoitman	3		4	1
36	2016-05-17 23:27:30.200407-05	1	Family Law	2	Changed text.	55	1
37	2016-05-17 23:27:30.405689-05	1	Family Law	2	No fields changed.	55	1
38	2016-05-18 01:06:33.065058-05	1	Family Law	2	Changed text.	55	1
39	2016-05-18 01:15:31.780973-05	5	Contested Divorce	2	Changed title and text.	55	1
40	2016-05-20 09:20:11.616513-05	2	Child Custody	2	Changed text.	55	1
41	2016-05-20 09:34:03.022478-05	2	Child Custody	2	Changed text.	55	1
42	2016-05-20 09:38:07.210329-05	3	Property Division	2	Changed text.	55	1
43	2016-05-20 09:39:31.381465-05	5	Contested Divorce	2	Changed text.	55	1
44	2016-05-20 09:42:33.539055-05	4	Spousal Support	2	Changed text.	55	1
45	2016-05-23 22:20:14.805792-05	1	LogoColor object	1	Added.	58	1
46	2016-05-23 22:20:27.487437-05	2	LogoColor object	1	Added.	58	1
47	2016-05-23 22:20:38.549306-05	3	LogoColor object	1	Added.	58	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_admin_log_id_seq', 47, true);


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
45	users	teammember
46	metaprop	contactmetaprop
47	metaprop	profilemetaprop
48	metaprop	metaprop
49	utils	logger
50	services	servicepackage
51	tasks	tasklog
52	users	useractivation
53	users	aboutus
54	users	milestone
55	gui	slide
56	users	advantage
57	users	advantagelink
58	gui	logocolor
59	gui	logo
60	gui	contactinfo
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_content_type_id_seq', 60, true);


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
42	gui	0001_initial	2016-05-15 08:53:01.735166-05
43	django_rq_jobs	0004_auto_20160515_2320	2016-05-15 22:29:58.875666-05
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('django_migrations_id_seq', 43, true);


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
7al14q0t53q3ua92mjurzxallw1hs7q9	MDY4ODk1MGVlZjUxNTYxZWVkNTY3YzMyMzMzZGUzOGU3ZWY3ODNjODp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiIxM3AyRndJUkxPOXR2MXN2WHU0dWI2cmJ1OUlYOFBnZyIsIl9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwibmV4dCI6Ii8ifQ==	2016-05-24 21:10:59.740781-05
w8g53eyfs16dp4sln2b093eykxco71m7	NDhlNzNjYjgyNTNlYmZkMTI4NDU0ZWI5YWQ5ZDQ5NDZlNTJlYzEzYzp7Il9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=	2016-05-24 23:25:47.040169-05
7t6844i1sdzdshs5jbhhqu7founu4azs	ZGUxNTc3ZTI4MWJkZmFlZjFlNTIwM2ZhNjlkMDZhNDFhMTgzZDA1ZDp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiIzSXY0T2JFMGh2Q2tnTUFPeXdUYXBkSHZ1MEQ2Skx0QSIsIl9hdXRoX3VzZXJfaWQiOiIxIiwic29jaWFsX2F1dGhfbGFzdF9sb2dpbl9iYWNrZW5kIjoiZ29vZ2xlLW9hdXRoMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6InNvY2lhbC5iYWNrZW5kcy5nb29nbGUuR29vZ2xlT0F1dGgyIiwibmV4dCI6Ii8iLCJfYXV0aF91c2VyX2hhc2giOiJkMmI4NzlmMTg5YzFiMjE3NmJjNDcyZTljNjRiMGRiY2VhNzA1NzdlIn0=	2016-05-25 01:02:54.801221-05
y334eepbb4f6gtucctvjejya0ckkr57b	NGZmMDk2MDk5YjZiOWU3MTcwMTJmODJjMmI3MjE4MmE5NzMxZDc0OTp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJqMUpHenRFN1RGZk1mb2JUUTV5Z05hY0k4T3R5Y2F5UiJ9	2016-05-25 04:52:27.729586-05
9zo7qzkg6hoepcbl68xk55f0unjsaati	YjgwNzY5OWE0NThmZDg4NWYyNjAzODZiYjhiY2VkODA1MTZhNmE4Yzp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJRbDN6N3dmdUNhRzgxRWtDeVVyOEZlV3ROVzJhUEwxdCIsIm5leHQiOiIvbG9naW4vbGlua2VkaW4vIn0=	2016-05-25 05:04:58.996686-05
4y7m5m1qzslpa5n1ohxbgesxbao0ehij	ZGNkOGY5YzhlZmEwZjE0NGY0N2NmNjk2NjhmZmYzMzFiZTVhYzNkNDp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJ0d0pRaHN0NTh2dFVUWXhMbnYycnVTNGE0b1k3Z0V5OSIsIl9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIiwibmV4dCI6Ii8ifQ==	2016-05-27 09:17:36.116924-05
pm9tn9lu2pp34vkfs3ao7s7mg0ukeyd5	MTEzYWI4YzgzMjYwODMyNTJkNzg4NmFlY2U2NzcxNWJlNjYxYTRjYTp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJjdEtiRjZMeTBEbjBWYUhSN3EwdDV4emF4Nkx0Zzh4UCIsIl9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIiwibmV4dCI6Ii8ifQ==	2016-05-27 09:33:04.545535-05
sfosc2lowrt7itwpaoyl148d1yvw5xf8	NDhlNzNjYjgyNTNlYmZkMTI4NDU0ZWI5YWQ5ZDQ5NDZlNTJlYzEzYzp7Il9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=	2016-05-27 11:12:51.261899-05
xzpsxd0hytl1fwcf2968dgx05s1k7ktw	NDA4MDFmOGJhNDdkNDUxMTA2ZTkxMDE3NTI0Y2Y0NDc3OTIyYmEzMDp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJpRXQ3RFNEWndQaEo2S3FVS2JQMGxRRHpRVFp4Y2owciIsIm5leHQiOiIvIn0=	2016-05-27 21:26:27.969073-05
7vmsb2jxb5eb7xhwjnv3omewb4iblmnf	MTk5MDMzNDdiYjM3MjVlYjZhZjNmMzJiOWZlZGU5YjFhNmJhZDYxMjp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJTYUpDUE1FZFg0WFhSYktrd2swQnd1czVvTGtyRGVMNiIsIl9hdXRoX3VzZXJfaWQiOiI2Iiwic29jaWFsX2F1dGhfbGFzdF9sb2dpbl9iYWNrZW5kIjoiZ29vZ2xlLW9hdXRoMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6InNvY2lhbC5iYWNrZW5kcy5nb29nbGUuR29vZ2xlT0F1dGgyIiwibmV4dCI6Ii8iLCJfYXV0aF91c2VyX2hhc2giOiIzNzg2MzExOTMwNDQ0NDllNTE1MWY3ZTg0YjkwYTY5OWU5MDVkYzM0In0=	2016-05-27 22:18:31.961345-05
4wi28mig7q2n0d8kv7jq9ks2yyxxbhql	NjFiMGZlM2ZmZmRkZjk2MmZmNDA0YmI5NWUwYTExOTk0YTc5Nzc3Zjp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJJS2pxTHhDU3h0UjduZFE1T2xUY2dtYnhHMXNtc0hiYSIsIm5leHQiOiIvIn0=	2016-05-29 21:42:49.366486-05
ua4fci462yokkfcszykf7wxsvi4xo9n0	OGMwNmVhM2ZjNmZhMDlkZDM2ODI3ZGEzNjJjNzk3MzczMjZiNmRiYTp7ImZhY2Vib29rX3N0YXRlIjoiYXlPUW9IR0FWWWlkS1o1SXBaUk5TODNxaXlLMkUyUHEiLCJuZXh0IjoiLyJ9	2016-05-29 21:42:51.644773-05
l34oevz43nka9rfybvmmzht98sxf6muy	ZGJkYjIwMzZjMjEyOGUwYTBkNjdkZmNkNmI5ZmVlZDc5OTJhNzI3Yzp7InR3aXR0ZXJfc3RhdGUiOiJ0S0dxTk1QRlNZT2pWQTFvWE11NWtRT3lOTm9MRHJPYyIsInR3aXR0ZXJ1bmF1dGhvcml6ZWRfdG9rZW5fbmFtZSI6WyJvYXV0aF90b2tlbj1mQ0JLWlFBQUFBQUF1Mm5OQUFBQlZOdC1aTEUmb2F1dGhfdG9rZW5fc2VjcmV0PVJHcVVsdnpCRFlhODFiV0tTRFdoRXZLSzRUVktxRkxZJm9hdXRoX2NhbGxiYWNrX2NvbmZpcm1lZD10cnVlIl0sIm5leHQiOiIvIn0=	2016-05-29 21:42:54.424838-05
8nnkjhqfibz2eutfb13v3tb38vcmt1p6	MGY0OWZmNDg4ODk3YzZlMjBhYmZkOWMyNDA5MDlhNzRhZDY5Yzc0ZTp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiIyTVRId0p0eEh2STQ3cUF3NVFhMVh5YXY5b0dCT1lVSyIsIm5leHQiOiIvbG9naW4vbGlua2VkaW4vIn0=	2016-05-29 21:43:12.759527-05
vdthw5uafrhk1bwyo6slg1szgqclvilv	ZjExMDZkYTZjMmZjNWU4YjcxY2RjODU1YzY5YmM3MDdiNTRjNzQ3Yzp7ImZhY2Vib29rX3N0YXRlIjoiSUxKNWV3ajhXSVE2SDlnOWFBTjJVcDg1Q29MZzVxeWwiLCJuZXh0IjoiL2xvZ2luL2xpbmtlZGluLyJ9	2016-05-29 21:43:14.899323-05
4i9fbp5lkihe06o40z0p8jssxul8arg3	MDNmODE3MWM5MzU5YmZlM2QzNmE3NTE3OTBjNDUyZWI5ZTFmYzg3Zjp7InR3aXR0ZXJfc3RhdGUiOiJyU21kUmppckRMSk8zSnFjdmdTUmwwbVQwN2JpZVp4VSIsInR3aXR0ZXJ1bmF1dGhvcml6ZWRfdG9rZW5fbmFtZSI6WyJvYXV0aF90b2tlbj0tMmRlUXdBQUFBQUF1Mm5OQUFBQlZOdC12dUUmb2F1dGhfdG9rZW5fc2VjcmV0PUVnVFpZazczaldPRjdMRzVQYnA4QnY5bWYxUXVMYWoyJm9hdXRoX2NhbGxiYWNrX2NvbmZpcm1lZD10cnVlIl0sIm5leHQiOiIvbG9naW4vbGlua2VkaW4vIn0=	2016-05-29 21:43:17.456254-05
oy1b1eq417k1ju5brgu9bqfby0n52l0v	Y2NkMTg3Nzc2ZDA4MGQxNGRmZTJiODMxMGFmNWY3OGM2MmUzMDcwZTp7Imdvb2dsZS1vYXV0aDJfc3RhdGUiOiJ4Q29EdFlKbDNpTWFRelh5MHhFSmpkSXVFeWxINTdSZyIsIm5leHQiOiIvbG9naW4vbGlua2VkaW4vaW5kZXgtNS5odG1sIn0=	2016-05-29 21:43:27.215555-05
5hq8s83lrzu4ntlcg39ypz8pnc6mk14o	YTUxZWU1MjliZmRjOTBhOTViMGM5YTJhNGUyZjY3YTQ5MjQ2MDc2OTp7ImZhY2Vib29rX3N0YXRlIjoicnhRVXRJZTVQVlhlVTUxc0FtNUl1UFQ5ekd3MktpUFUiLCJuZXh0IjoiL2xvZ2luL2xpbmtlZGluL2luZGV4LTUuaHRtbCJ9	2016-05-29 21:43:29.383214-05
rtmtl722fpygilsbhfpydbfu3qd8xhnv	NjhkMjJmMTM3ZWQ1ZDAxZmE4MjY4YjVjMTllZTVjNjdmZjcwNDkwMjp7InR3aXR0ZXJfc3RhdGUiOiJkNUxpNEFraEFJcjRpcklHS1VZMGJKbjJDaWw2OGhqYiIsInR3aXR0ZXJ1bmF1dGhvcml6ZWRfdG9rZW5fbmFtZSI6WyJvYXV0aF90b2tlbj1JOGJUNFFBQUFBQUF1Mm5OQUFBQlZOdC05eUEmb2F1dGhfdG9rZW5fc2VjcmV0PXBSUkdkRDdhQ296aW96YTEweWJrbXljWkp5TlNrUXBoJm9hdXRoX2NhbGxiYWNrX2NvbmZpcm1lZD10cnVlIl0sIm5leHQiOiIvbG9naW4vbGlua2VkaW4vaW5kZXgtNS5odG1sIn0=	2016-05-29 21:43:31.862756-05
q55m85k6lay80gk9kiv5dpa4f6v8a2g5	NDhlNzNjYjgyNTNlYmZkMTI4NDU0ZWI5YWQ5ZDQ5NDZlNTJlYzEzYzp7Il9hdXRoX3VzZXJfaGFzaCI6ImQyYjg3OWYxODljMWIyMTc2YmM0NzJlOWM2NGIwZGJjZWE3MDU3N2UiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=	2016-05-30 22:19:19.973156-05
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
-- Data for Name: gui_contactinfo; Type: TABLE DATA; Schema: public; Owner: root
--

COPY gui_contactinfo (id, address1, address2, state, tollfree, phone, fax, email, zipcode, header, statement, city) FROM stdin;
\.


--
-- Data for Name: gui_logo; Type: TABLE DATA; Schema: public; Owner: root
--

COPY gui_logo (id, color_id, width, height, logo) FROM stdin;
\.


--
-- Data for Name: gui_logocolor; Type: TABLE DATA; Schema: public; Owner: root
--

COPY gui_logocolor (id, color, code) FROM stdin;
1	GREEN	GR
2	BLUE	BL
3	RED	RD
\.


--
-- Data for Name: gui_slide; Type: TABLE DATA; Schema: public; Owner: root
--

COPY gui_slide (id, title, text, link, slide) FROM stdin;
1	Family Law	Family Law Division - Start your process today with the leading lawyers. Few of life's challenges create greater stress than the prospect or reality of divorce. Family law problems outside of divorce can also profoundly impact your relationships, children, finances and overall future. These factors make your choice of an attorney absolutely critical.	http://divorcesus.com	slides/slide_one.jpg
2	Child Custody	Child Custody is a is a significant family law issue in many divorce and paternity cases .You really ought to be talking to a  lawyer in person about your child custody situation. Don’t make decisions about child custody without having information from an objective and informed source. You really, really ought to consider sitting down with a lawyer. This is too important not to.	http://divorcesus.com	slides/slide_two.jpg
3	Property Division	Property Division.   If you and your spouse can not determine how to divide property that is jointly owned, the courts will divide property under one of two basic schemes: community property or equitable distribution. (By the way, debts are divided according to the same principles). Let our lawyers guarantee you to achieve the best agreement for all parties of the process.	http://divorcesus.com	slides/slide_three.jpg
5	Contested Divorce	A Contested Divorce is a lawsuit like any other. The process involves pleadings (complaint and answer), discovery, motions, often a temporary hearing, mediation, and potentially a trial. Domestic trials are usually before the judge.  Only a judge can determine custody.  However, either party can request that a jury make an alimony or property division decision.	http://divorcesus.com	slides/slide_five.jpg
4	Spousal Support	Alimony, also called Spousal Support, is a regular payment one spouse makes to the other spouse to provide financial support during and/or after a divorce. The spouses may agree to the amount and duration of alimony, or the court may order it if the spouses can’t agree. In Pennsylvania, there are three types of support orders the court can make: spousal support, alimony pendente lite, and alimony.	http://divorcesus.com	slides/slide_four.jpg
\.


--
-- Name: gui_slide_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('gui_slide_id_seq', 5, true);


--
-- Name: logo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('logo_id_seq', 1, false);


--
-- Name: logocolor_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('logocolor_seq', 3, true);


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
1	email	dmitryro@gmail.com	dmitryro@gmail.com	dmitryro@gmail.com	allseeingeye1001@gmail.com	allseeingeye1002@gmail.com	smtp.gmail.com	587	dmitryro@gmail.com	nu45edi1	
\.


--
-- Name: metaprop_profilemetaprop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('metaprop_profilemetaprop_id_seq', 1, true);


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
-- Data for Name: registration_api_registrationprofile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY registration_api_registrationprofile (id, date_joined, user_id, activation_key) FROM stdin;
\.


--
-- Name: registration_api_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('registration_api_seq', 1, false);


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
-- Data for Name: services_servicepackage; Type: TABLE DATA; Schema: public; Owner: root
--

COPY services_servicepackage (id, title, fees, price, service_one, service_one_is_available, service_two, service_two_is_available, service_three, service_three_is_available, service_four, service_four_is_available, service_five, service_five_is_available, service_six, service_six_is_available, service_seven, service_seven_is_available, service_eight, service_eight_is_available, service_nine, service_nine_is_available, service_ten, service_ten_is_available, service_eleven, service_eleven_is_available, service_twelve, service_twelve_is_available, service_thirteen, service_thirteen_is_available, service_fourteen, service_fourteen_is_available, service_fifteen, service_fifteen_is_available, service_sixteen, service_sixteen_is_available, service_seventeen, service_seventeen_is_available, service_eighteen, service_eighteen_is_available, service_nineteen, service_nineteen_is_available, service_twenty, service_twenty_is_available, service_twentyone, service_twentyone_is_available, service_twentytwo, service_twentytwo_is_available) FROM stdin;
\.


--
-- Name: services_servicepackage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('services_servicepackage_id_seq', 1, false);


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
8	google-oauth2	allseeingeye1003@gmail.com	{"token_type": "Bearer", "access_token": "ya29.CjLhAgzzXCkp7hfsFa4BDBhvf_i_YOGMMM8lij7jGhJi-MeSjQaspBOus2s0QGi9nsrH0A", "expires": 3599}	5
5	google-oauth2	dmitry@artrevolution.com	{"token_type": "Bearer", "access_token": "ya29.CjLiArhYo2MW2_mXY8esCadR82rHSOn8qD9_XcNYfODZZO21CkJZVh7Pe9gp9UHIgbDUww", "expires": 3599}	4
1	google-oauth2	dmitryro@gmail.com	{"token_type": "Bearer", "access_token": "ya29.CjLmAvnmbDZ1Yq1xsMwRuC6TCBrGx6rqyG_EGj13ihuTe5P9FrCeRzHUZ8zwyGg4EUEojg", "expires": 3598}	1
9	google-oauth2	allseeingeye1004@gmail.com	{"token_type": "Bearer", "access_token": "ya29.CjHpAtYpOc57iJl20WbSy0nYtyvzomg5sqodJ3eGqnUpf4DNeW5f0WONY1lZlLTY7-RF", "expires": 3600, "refresh_token": "1/pqH4c9hXDKEYY6aSD9mGi6FTq9HzTI56QJrnrC33bbkMEudVrK5jSpoR30zcRFq6"}	6
\.


--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('social_auth_usersocialauth_id_seq', 9, true);


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
24	\N	sending_user_email	\N	f	4	\N
25	\N	sending_user_email	\N	f	5	\N
26	\N	sending_user_email	\N	f	6	\N
15	dmitry	new_profile_notification	\N	f	4	\N
3	DmitryRoitman	facebook_profile_created	\N	t	2	\N
5	DmitryRoitman	facebook_profile_created	\N	f	2	\N
20	allseeingeye1003	google_profile_created	\N	t	5	\N
6	DmitryRoitman	facebook_profile_created	\N	f	2	\N
21	\N	sending_user_email	\N	f	1	\N
22	\N	sending_user_email	\N	f	2	\N
7	DmitryRoitman	facebook_profile_created	\N	f	2	\N
8	DmitryRoitman	facebook_profile_created	\N	f	2	\N
9	DmitryRoitman	facebook_profile_created	\N	f	2	\N
16	dmitry	google_profile_created	\N	t	4	\N
27	\N	sending_user_email	\N	f	7	\N
10	DmitryRoitman	facebook_profile_created	\N	f	2	\N
11	DmitryRoitman	facebook_profile_created	\N	f	2	\N
12	DmitryRoitman	facebook_profile_created	\N	f	2	\N
28	DmitryRoitman	facebook_profile_created	\N	f	2	\N
13	dmitryro	new_profile_notification	\N	f	3	\N
14	DmitryRoitman	facebook_profile_created	\N	f	2	\N
17	DmitryRoitman	facebook_profile_created	\N	f	2	\N
18	DmitryRoitman	facebook_profile_created	\N	f	2	\N
19	allseeingeye1003	new_profile_notification	\N	f	5	\N
23	\N	sending_user_email	\N	f	3	\N
4	root	google_profile_created	\N	t	1	\N
29	allseeingeye1004	new_profile_notification	\N	f	6	\N
30	allseeingeye1004	google_profile_created	\N	f	6	\N
\.


--
-- Name: tasks_tasklog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('tasks_tasklog_id_seq', 30, true);


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
-- Data for Name: users_advantage; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_advantage (id, title, section_one, section_two, section_three) FROM stdin;
1	Why Choose Us	Quisque finibus urna in venenatis semper. Do nec vitae mauris eget nibh efficitur porttitor. Praesent urna ipsum, tincidunt et lacus lacinia, venenatis ullamcorper purus. Maur is vel lobortis leo, sed ullamcorper neque. Integer dapibus iaculis nunc vehicula pharetra. In dictum	Quisque finibus urna in venenatis semper. Do nec vitae mauris eget nibh efficitur porttitor. Praesent urna ipsum, tincidunt et lacus lacinia, venenatis ullamcorper purus. Maur is vel lobortis leo, sed ullamcorper neque. Integer dapibus iaculis nunc vehicula pharetra. In dictum	Quisque finibus urna in venenatis semper. Do nec vitae mauris eget nibh efficitur porttitor. Praesent urna ipsum, tincidunt et lacus lacinia, venenatis ullamcorper purus. Maur is vel lobortis leo, sed ullamcorper neque. Integer dapibus iaculis nunc vehicula pharetra. In dictum
\.


--
-- Name: users_advantage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_advantage_id_seq', 1, true);


--
-- Data for Name: users_advantagelink; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_advantagelink (id, advantage_id, title, link) FROM stdin;
1	1	How it all started	http://divorcesus.com
2	1	Early Years	http://divorcesus.com
3	1	Recognition	http://divorcesus.com
4	1	Latest Developments	http://divorcesus.com
\.


--
-- Name: users_advantagelink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_advantagelink_id_seq', 4, true);


--
-- Data for Name: users_contact; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_contact (id, name, time_contacted, phone, email, message) FROM stdin;
1	D	2016-05-07 23:49:57.4182-05	2342342343	dmitryro@gmail.com	asdasdasdasdasdadsda
2	D	2016-05-08 00:07:23.457065-05	234234234223	dmitryro@gmail.com	sdfsdfsdffsfd
3	Django Developer	2016-05-08 01:58:10.424356-05	234234234	dmitryro@gmail.com	sdfsdfsdfsdfsddf
4	adadad	2016-05-09 23:23:04.946181-05	23423423	dmtiryro@gmail.com	sdfsdfsdfsdfsdf
5	adadad	2016-05-09 23:23:05.892388-05	23423423	dmtiryro@gmail.com	sdfsdfsdfsdfsdf
6	d	2016-05-09 23:47:05.367665-05	2342342342	dmtiryro@gmail.com	adasdasdasdass
7	D	2016-05-14 22:39:50.077059-05	23182381283128	dnua@assdasd,xin	asdasdas
\.


--
-- Name: users_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_contact_id_seq', 7, true);


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
-- Data for Name: users_milestone; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_milestone (id, title, year, body) FROM stdin;
1	Period One	1990	Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
2	Period Two	1995	Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
3	Period Three	1998	Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
4	Period Four	2004	Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
\.


--
-- Name: users_milestone_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('users_milestone_id_seq', 4, true);


--
-- Data for Name: users_profile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY users_profile (id, first_name, last_name, email, username, date_joined, profile_image_path, phone, is_new, is_avatar_processed, is_avatar_transfered, is_signature_customized, is_online, is_cleared, is_facebook_signup_used, is_google_signup_used, is_twitter_signup_used, is_linkedin_signup_used, is_username_customized, is_user_avatar, is_google_avatar, is_facebook_avatar, is_twitter_avatar, address_id, user_id) FROM stdin;
4	Dmitry	Roitman	dmitry@artrevolution.com	dmitry	2016-05-02 12:27:11.915745-05	http://divorcesus.com/static/images/user_no_avatar.png		t	f	f	f	f	t	t	f	f	f	f	f	t	f	f	\N	4
1	Dmitry	Roitman	dmitryro@gmail.com	root	2016-05-01 15:46:23.156927-05	https://lh6.googleusercontent.com/-vym7DjqsWAk/AAAAAAAAAAI/AAAAAAAAASo/x-5ZZkEEVeo/photo.jpg?sz=200	\N	t	f	f	f	f	f	f	f	f	f	f	f	t	f	f	\N	1
5	Dmitry	Roitman	allseeingeye1003@gmail.com	allseeingeye1003	2016-05-07 10:06:35.30298-05	http://divorcesus.com/static/images/user_no_avatar.png	\N	t	f	f	f	f	f	f	f	f	f	f	f	t	f	f	\N	5
6	Dmitry	Roitman	allseeingeye1004@gmail.com	allseeingeye1004	2016-05-20 22:18:31.729916-05	http://divorcesus.com/static/images/user_no_avatar.png	\N	t	f	f	f	f	f	f	f	f	f	f	f	t	f	f	\N	6
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
4	info@myattorneyusa.com	Alexander J	Segal	A.J.Segal ESQ.	avatars/segal_full.jpg	\N	t	f	212 202 0325	ajsegal	Immigration attorney Alexander J. Segal has made it his life’s mission to help immigrants in need. Mr. Segal founded The Law Offices of Grinberg & Segal, PLLC with immigration attorney Eliza Grinberg to provide immigrants with a law firm that is dedicated to protecting their rights. Attorney Segal has extensive experience representing clients in virtually every area of family law.
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
6	LET US TRY CREATING A NEW PROFILE	2016-05-02 12:27:11.923726-05
7	IN GOOGLE PROFILE CREATION	2016-05-02 12:27:12.398007-05
8	LET US TRY CREATING A NEW PROFILE	2016-05-07 10:06:35.312494-05
9	IN GOOGLE PROFILE CREATION	2016-05-07 10:06:35.490143-05
10	WE ARE SENDING EMAIL IN GET dmitryro@gmail.com	2016-05-07 23:49:57.442951-05
11	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmitryro@gmail.com	2016-05-07 23:49:57.456119-05
12	WE ARE SENDING EMAIL IN GET dmitryro@gmail.com	2016-05-08 00:07:23.47759-05
13	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmitryro@gmail.com	2016-05-08 00:07:23.509209-05
14	WE ARE SENDING EMAIL IN GET dmitryro@gmail.com	2016-05-08 01:58:10.456156-05
15	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmitryro@gmail.com	2016-05-08 01:58:10.476642-05
16	WE ARE SENDING EMAIL IN GET dmtiryro@gmail.com	2016-05-09 23:23:05.041993-05
17	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmtiryro@gmail.com	2016-05-09 23:23:05.056986-05
18	WE ARE SENDING EMAIL IN GET dmtiryro@gmail.com	2016-05-09 23:23:05.907527-05
19	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmtiryro@gmail.com	2016-05-09 23:23:05.948515-05
20	WE ARE SENDING EMAIL IN GET dmtiryro@gmail.com	2016-05-09 23:47:05.39707-05
21	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdmtiryro@gmail.com	2016-05-09 23:47:05.412902-05
22	WE ARE SENDING EMAIL IN GET dnua@assdasd,xin	2016-05-14 22:39:50.12984-05
23	WE ARE IN SIGNAL AND WILL SEND AN EMAIL TOdnua@assdasd,xin	2016-05-14 22:39:50.147189-05
24	LET US TRY CREATING A NEW PROFILE	2016-05-20 22:18:31.738814-05
25	IN GOOGLE PROFILE CREATION	2016-05-20 22:18:31.978062-05
26	WILL TRY TO NOTIFY	2016-05-20 22:18:32.006107-05
27	WILL TRY TO NOTIFY	2016-05-20 22:18:32.014591-05
28	SOME SHIT PREVENTED US FROM SENDING 'User' object has no attribute 'profile'	2016-05-20 22:18:32.028245-05
29	SOME SHIT PREVENTED US FROM SENDING 'User' object has no attribute 'profile'	2016-05-20 22:18:32.039177-05
30	WILL TRY TO NOTIFY	2016-05-20 22:18:32.040132-05
31	SOME SHIT PREVENTED US FROM SENDING 'User' object has no attribute 'profile'	2016-05-20 22:18:32.056046-05
\.


--
-- Name: utils_logger_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('utils_logger_id_seq', 31, true);


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
-- Name: gui_contactinfo_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY gui_contactinfo
    ADD CONSTRAINT gui_contactinfo_pkey PRIMARY KEY (id);


--
-- Name: gui_logo_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY gui_logo
    ADD CONSTRAINT gui_logo_pkey PRIMARY KEY (id);


--
-- Name: gui_logocolor_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY gui_logocolor
    ADD CONSTRAINT gui_logocolor_pkey PRIMARY KEY (id);


--
-- Name: gui_slide_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY gui_slide
    ADD CONSTRAINT gui_slide_pkey PRIMARY KEY (id);


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
-- Name: registration_api_registrationprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY registration_api_registrationprofile
    ADD CONSTRAINT registration_api_registrationprofile_pkey PRIMARY KEY (id);


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
-- Name: services_servicepackage_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY services_servicepackage
    ADD CONSTRAINT services_servicepackage_pkey PRIMARY KEY (id);


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
-- Name: users_advantage_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_advantage
    ADD CONSTRAINT users_advantage_pkey PRIMARY KEY (id);


--
-- Name: users_advantagelink_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_advantagelink
    ADD CONSTRAINT users_advantagelink_pkey PRIMARY KEY (id);


--
-- Name: users_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_contact
    ADD CONSTRAINT users_contact_pkey PRIMARY KEY (id);


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
-- Name: users_milestone_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_milestone
    ADD CONSTRAINT users_milestone_pkey PRIMARY KEY (id);


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
-- Name: gui_logo_logocolor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY gui_logo
    ADD CONSTRAINT gui_logo_logocolor_id_fkey FOREIGN KEY (color_id) REFERENCES gui_logocolor(id);


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
-- Name: users_advantagelink_advantage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY users_advantagelink
    ADD CONSTRAINT users_advantagelink_advantage_id_fkey FOREIGN KEY (advantage_id) REFERENCES users_advantage(id);


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

