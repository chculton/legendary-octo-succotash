CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    abbreviation VARCHAR(2) UNIQUE NOT NULL
);

INSERT INTO states (abbreviation) VALUES
('AK'), ('AL'), ('AR'), ('AZ'), ('CA'), ('CO'), ('CT'), ('DE'), ('FL'), ('GA'),
('HI'), ('IA'), ('ID'), ('IL'), ('IN'), ('KS'), ('KY'), ('LA'), ('MA'), ('MD'),
('ME'), ('MI'), ('MN'), ('MO'), ('MS'), ('MT'), ('NC'), ('ND'), ('NE'), ('NH'),
('NJ'), ('NM'), ('NV'), ('NY'), ('OH'), ('OK'), ('OR'), ('PA'), ('RI'), ('SC'),
('SD'), ('TN'), ('TX'), ('UT'), ('VA'), ('VT'), ('WA'), ('WI'), ('WV'), ('WY');

CREATE TABLE contact_methods (
    id SERIAL PRIMARY KEY,
    method VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO contact_methods (method) VALUES
('Cell'), ('Text'), ('Email'), ('Mail');

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    line1 VARCHAR(255) NOT NULL,
    line2 VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state_id INT REFERENCES states(id) NOT NULL,
    zip VARCHAR(10) NOT NULL
);

CREATE TABLE businesses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address_id INT REFERENCES addresses(id),
    number_of_employees INT,
    description TEXT
);

CREATE TABLE constituents (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone varchar(10),
    birthday DATE,
    preferred_contact_method_id INT REFERENCES contact_methods(id),
    additional_comments TEXT,
    address_id INT REFERENCES addresses(id),
    business_id INT REFERENCES businesses(id)
);