CREATE TABLE books (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(600) NOT NULL,
    cover VARCHAR(600),
    price INT NOT NULL
);

-- Data
INSERT INTO books (title, description, cover, price) 
VALUES ('Harry Potter and the Sorcerer’s Stone', 'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry''s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!', 'https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0', 17);

INSERT INTO books (title, description, cover, price) 
VALUES ('The Fellowship Of The Ring: LOR', 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. Sauron, the Dark Lord, has gathered to him all the Rings of Power—the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring—the ring that rules them all—which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care.', 'https://th.bing.com/th/id/OIP.Qkgw1_4l0GYN-7328loOewHaMS?rs=1&pid=ImgDetMain', 30);

INSERT INTO books (title, description, cover, price) 
VALUES ('Wizard''s First Rule: Sword of Truth', 'Deep in the upper Ven Forest, close to the Boundary, woodsman Richard Cypher is intent on tracking down his father''s killers. Richard has no idea of how far his quest will take him from home, nor that his world, his very beliefs, are about to be shattered... Kahlan Amnell, tormented by treachery and loss, is being hunted, pursued remorselessly by a bloodthirsty tyrant''s assassins. A monstrous evil is about to be unleashed upon the world and she knows her one hope of halting it is to find the last great Wizard...', 'https://th.bing.com/th/id/OIP.nHT4CIygrlsWyX4yEnw6dgAAAA?w=197&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7', 24);
