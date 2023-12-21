USE thaipara;

CREATE TABLE USERS (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  avatar BLOB, 
  password VARCHAR(255) NOT NULL
);

CREATE TABLE ATHLETE (
  id SERIAL PRIMARY KEY,
  uid INT NOT NULL,
  country VARCHAR(5) NOT NULL,
  bib VARCHAR(10) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  date_of_birth DATE NOT NULL,
  coach VARCHAR(100),
  sport_type VARCHAR(100) NOT NULL,
  affiliation VARCHAR(255),
  phone_number VARCHAR(255) NOT NULL,
  disability_class VARCHAR(50),
  equipment VARCHAR(255),
  medicine TEXT,
  FOREIGN KEY (uid) REFERENCES USERS(id)
);

CREATE TABLE SPORT (
  id SERIAL PRIMARY KEY,
  type VARCHAR(100) NOT NULL,
  sub_type VARCHAR(100)
);

CREATE TABLE EVENTS (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  event_class TEXT,
  event_description TEXT,
  event_date_time DATETIME NOT NULL,
  event_gender VARCHAR(10) NOT NULL,
  status VARCHAR(50) NOT NULL,
  event_location VARCHAR(255) NOT NULL,
  sport_id INT NOT NULL,
  FOREIGN KEY (sport_id) REFERENCES SPORT(id)
);

CREATE TABLE COMPETES_IN (
  athlete_id INT NOT NULL,
  event_id INT NOT NULL,
  score JSON,
  FOREIGN KEY (athlete_id) REFERENCES ATHLETE(id),
  FOREIGN KEY (event_id) REFERENCES EVENTS(id)
);

CREATE TABLE TEAMS (
  id INT PRIMARY KEY,
  team_name VARCHAR(255) NOT NULL
);

CREATE TABLE MEMBER_OF (
  team_id INT NOT NULL,
  athlete_id INT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES TEAMS(id),
  FOREIGN KEY (athlete_id) REFERENCES ATHLETE(id)
);

CREATE TABLE PARTICIPATES_IN (
  team_id INT NOT NULL,
  event_id INT NOT NULL,
  score JSON,
  FOREIGN KEY (team_id) REFERENCES TEAMS(id),
  FOREIGN KEY (event_id) REFERENCES EVENTS(id)
);

