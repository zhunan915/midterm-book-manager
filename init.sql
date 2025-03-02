CREATE DATABASE IF NOT EXISTS test;

USE test;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    cover VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO books (title, description, price, cover) VALUES
('Naruto', 'A ninja story', 10.99, 'https://www.giantbomb.com/a/uploads/square_medium/16/164924/2345829-naruto_gokucostume.jpg'),
('One Pounch man', 'One pounch man', 9.99, 'https://ogre.natalie.mu/media/news/comic/2024/0229/OPM3_herovisual01_saitama_web.jpg'),
('Bleach', 'Soul reaper tale', 8.99, 'https://i.pinimg.com/236x/c4/20/f3/c420f37013bc577cd5f28d2150b602ed.jpg');