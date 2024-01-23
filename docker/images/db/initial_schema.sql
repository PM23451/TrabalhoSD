/* Sample table and data that we can insert once the database is created for the first time */
CREATE TABLE public.users (
	id AUTOINCREMENT,
	username    VARCHAR (100),
	password    VARCHAR(100),
);

INSERT INTO users(username, password) VALUES('13gui13', '123456789');
INSERT INTO users(username, password) VALUES('pm23451', '123456789');

