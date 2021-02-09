

CREATE TABLE table_settings(
id INT PRIMARY KEY AUTO_INCREMENT,
TABLE_NAME VARCHAR(100) NOT NULL,
updates BOOLEAN NOT NULL DEFAULT TRUE,
adds BOOLEAN NOT NULL DEFAULT TRUE,
deletes BOOLEAN NOT NULL DEFAULT TRUE,
READ_ONLY BOOLEAN NOT NULL DEFAULT FALSE,
ACTIVE BOOLEAN NOT NULL DEFAULT TRUE,
created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE table_settings ADD source_id VARCHAR(100) NOT NULL;


SELECT * FROM table_settings;


CREATE TABLE table_fields
(
id INT PRIMARY KEY AUTO_INCREMENT,
TABLE_NAME VARCHAR(100) NOT NULL,
field_name VARCHAR(100) NOT NULL,
data_type VARCHAR(100) NOT NULL,
size INT ,
FOREIGN KEY ( field_name) REFERENCES table_datatypes(NAME)
);

ALTER TABLE table_fields ADD ( primary_key BOOLEAN NOT NULL DEFAULT FALSE);

ALTER TABLE table_fields ADD ( 
show_field BOOLEAN NOT NULL DEFAULT FALSE,
editable BOOLEAN NOT NULL DEFAULT FALSE,
mandatory BOOLEAN NOT NULL DEFAULT FALSE,
default_value VARCHAR(100));

ALTER TABLE table_fields ADD ( 
display_name VARCHAR(100),COMMENT VARCHAR(100) ,searchable BOOLEAN NOT NULL DEFAULT FALSE,
scan BOOLEAN NOT NULL DEFAULT FALSE);

CREATE TABLE table_datatypes ( id INT NOT NULL, NAME VARCHAR(100) NOT NULL, UNIQUE(NAME));
SELECT * FROM table_datatypes;

ALTER TABLE table_fields ADD( 
ACTIVE BOOLEAN NOT NULL DEFAULT TRUE,
created_by INT NOT NULL, 
created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
modified_by INT NOT NULL, 
modified_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );

SELECT * FROM table_fields;