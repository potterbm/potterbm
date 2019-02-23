module.exports = `
  DROP TABLE IF EXISTS users;

  CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    photo text NULL,
    winnings INTEGER NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO users (first_name, last_name, winnings, email, password, photo)
  VALUES
    ('Daniel', 'Negreanu', 11177829, 'daniel@negreanu.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=1'),
    ('Erik', 'Seidel', 7111969, 'erik@seidel.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=2'),
    ('Antonio', 'Esfandiari', 21179246, 'antonio@esfandiari.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=3'),
    ('Fedor', 'Holz', 11945275, 'fedor@holz.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=4'),
    ('Phil', 'Ivey', 7345833, 'phil@ivey.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=5'),
    ('John', 'Juanda', 6103680, 'john@juanda.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=6'),
    ('Sam', 'Trickett', 13748398, 'sam@trickett.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=7'),
    ('Bryn', 'Kenney', 5045293, 'bryn@kenney.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=8'),
    ('Donald', 'Knuth', 12345678, 'donald@knuth.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=8'),
    ('Edsger', 'Dijkstra', 676787898, 'edsger@dijkstra.com', '$2a$04$DMq4FEFqnxAy19eVW/Ix/u0Gw..y4dKm8U5geeHxVHgjQIBFR.hhG', 'http://i.pravatar.cc/300?img=9');
`;
