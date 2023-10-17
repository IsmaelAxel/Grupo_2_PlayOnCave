-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: playoncave_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'featured','2023-10-17 17:34:18','2023-10-17 17:34:18'),(2,'new releases','2023-10-17 17:34:18','2023-10-17 17:34:18'),(3,'best sellers','2023-10-17 17:34:18','2023-10-17 17:34:18');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'DARK SOULS: REMASTERED',8299,0,'Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps.',' Windows 10 64-bit','Windows 7 64-bit, Service Pack 1','Intel Core i5-4570 3.2 GHz / AMD FX-8350 4.2 GHz','Intel Core i5-2300 2.8 GHz / AMD FX-6300, 3.5 GHz','8 GB de RAM','6 GB de RAM','GeForce GTX 660, 2 GB / Radeon HD 7870, 2 GB','GeForce GTX 460, 1 GB / Radeon HD 6870, 1 GB','8 GB de espacio disponible','8 GB de espacio disponible',1,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(2,'EA SPORTS FC™ 24',11999,0,' The World\'s Game: la experiencia futbolística más fiel hasta la fecha con HyperMotionV.','Windows 10 64-bit','Windows 10 64-bit','Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ',' Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ','12 GB de RAM','8 GB de RAM','NVIDIA GeForce GTX 1660 or AMD RX 5600 XT',' NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB','100 GB de espacio disponible','100 GB de espacio disponible',1,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(3,'Forza Horizon 5',11999,50,'Explora los vibrantes paisajes del mundo abierto de México y disfruta de una diversión sin límites al volante de los mejores coches del mundo.','Windows 10 64-bit','Windows 10 64-bit','Intel i5-8400 or AMD Ryzen 5 1500X','Intel i5-4460 or AMD Ryzen 3 1200','16 GB de RAM','8 GB de RAM','NVidia GTX 1070 OR AMD RX 590','NVidia GTX 970 OR AMD RX 470','110 GB de espacio disponible','110 GB de espacio disponible',1,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(4,'Tom Clancy’s Rainbow Six® Extraction',3999,0,'Tom Clancy\'s Rainbow Six® Extraction es un shooter táctico JcE en primera persona cooperativo en el que vosotros y vuestra escuadra os enfrentaréis a una amenaza alienígena en evolución. El trabajo en equipo, las tácticas y una ejecución impecable serán claves para sobrevivir..','Windows 10 (64-bit versions)','Windows 10 (64-bit versions)','AMD Ryzen 5 1600 @ 3.2 GHz, Intel Core i7-4790 @ 3.6 GHz, or better','  AMD Ryzen 3 1200 @ 3.1 GHz, Intel Core i5-4460 @ 3.2 GHz, or better','16 GB de RAM','8 GB de RAM','AMD Radeon RX 580 (8 GB), NVIDIA GeForce GTX 1660 (6 GB), or better','AMD RX560 (4 GB), NVIDIA GeForce GTX 960 (4 GB), or better','72 GB de espacio disponible','72 GB de espacio disponible',1,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(5,'Starfield',11999,0,' Starfield es el primer universo nuevo en más de 25 años de Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4. En este juego de rol de próxima generación ambientado entre las estrellas, podrás hacerte el personaje que desees y explorar con una libertad sin precedentes mientras te embarcas en un viaje épico para desentrañar el mayor misterio de la humanidad.','Windows 10/11 with updates','Windows 10 version 21H1 (10.0.19043)','AMD Ryzen 5 3600X, Intel i5-10600K','AMD Ryzen 5 2600X, Intel Core i7-6800K','16 GB de RAM',' 16 GB de RAM','AMD Radeon RX 6800 XT, NVIDIA GeForce RTX 2080','AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti','125 GB de espacio disponible','125 GB de espacio disponible',2,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(6,'METAL GEAR SOLID Δ: SNAKE EATER',11999,0,'Descubre la historia tras el origen del emblemático agente militar Snake y empieza a desvelar la trama de la legendaria serie METAL GEAR',' Windows 10 (64-bit OS required)',' Windows 10 (64-bit OS required)','AMD Ryzen 5 3600X, Intel i5-10600K','AMD Ryzen 5 2600X, Intel Core i7-6800K','16 GB de RAM',' 16 GB de RAM','AMD Radeon RX 6800 XT, NVIDIA GeForce RTX 2080','AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti','125 GB de espacio disponible','125 GB de espacio disponible',2,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(7,'Cyberpunk 2077',9999,0,'Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.',' Windows 10 (64-bit OS required)',' Windows 10 (64-bit OS required)','Intel Core i7-4790 or AMD Ryzen 3 3200G',' Intel Core i5-3570K or AMD FX-8310',' 12 GB de RAM',' 8 GB de RAM','GTX 1060 6GB / GTX 1660 Super or Radeon RX 590',' NVIDIA GeForce GTX 970 or AMD Radeon RX 470','70 GB de espacio disponible','70 GB de espacio disponible',2,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(8,'Mortal Kombat 1',10999,0,'Mortal Kombat 1 es un próximo videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Games. Será la duodécima entrega principal de la serie Mortal Kombat y una secuela de Mortal Kombat 11. Mortal Kombat 1 será el segundo reinicio suave de la serie, tras Mortal Kombat.','Windows 10/11 de 64 bits',' Windows 10 (64-bit OS required)',' Intel Core i5-8400 o AMD Ryzen 5 3600X',' Intel Core i5-6600 o AMD Ryzen 5 2600/Ryzen 3 3100','8 GB de RAM','8 GB de RAM','GTX 1080 Ti o AMD Radeon RX 5700 XT o Intel Arc A770','NVIDIA GTX 980, AMD Radeon RX 470 o Intel Arc A750','100 GB de espacio disponible','100 GB de espacio disponible',2,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(9,'ELDEN RING',12956,0,'EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.',' Windows 10 (64 bit)/Windows 11 (64 bit)',' Windows 10 (64-bit OS required)',' INTEL CORE I7-8700K or AMD RYZEN 5 3600X',' INTEL CORE I5-8400 or AMD RYZEN 3 3300X','16 GB de RAM','12 GB de RAM',' NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB','NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB','60 GB de espacio disponible','60 GB de espacio disponible',3,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(10,'Resident Evil 4',12956,50,'Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy, uno de los supervivientes del desastre, ha sido enviado a rescatar a la hija del presidente, a quien han secuestrado. Siguiendo su rastro, llega a una apartada población europea, donde sus habitantes sufren un mal terrible. Así comienza esta historia de un arriesgado rescate y terror escalofriante donde se cruzan la vida y la muerte, y el miedo y la catarsis.','Windows 10 (64 bit)/Windows 11 (64 bit)','Windows 10 (64-bit OS required)','AMD Ryzen 5 3600 / Intel Core i7 8700','AMD Ryzen 3 1200 / Intel Core i5-7500','16 GB de RAM','8 GB de RAM','AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070','AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM','68 GB de espacio disponible','68 GB de espacio disponible',3,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(11,'Remnant II',7699,0,'Remnant II es la secuela del juego superventas Remnant: From the Ashes que enfrenta a los supervivientes de la humanidad contra nuevas criaturas mortíferas y jefes divinos en mundos aterradores. Juega por tu cuenta o coopera con dos amigos para explorar las profundidades de lo desconocido y evitar que el mal destruya la propia realidad. Para lograrlo, los jugadores deberán confiar en sus propias habilidades y en las de su equipo para superar los desafíos más difíciles y prevenir la extinción de la humanidad.',' Windows 10 (64-bit OS required)',' Windows 10 (64-bit OS required)','Intel i5-10600k / AMD R5 3600','Intel Core i5-7600 / AMD Ryzen 5 2600','16 GB de RAM','16 GB de RAM','GeForce RTX 2060 / AMD Radeon RX 5700',' GeForce GTX 1650 / AMD Radeon RX 590','80 GB de espacio disponible','80 GB de espacio disponible',3,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(12,'ARMORED CORE',12399,0,'Un nuevo juego de acción inspirado en el concepto de la serie ARMORED CORE que aprovecha el conocimiento adquirido durante el desarrollo de los últimos juegos de acción de FromSoftware.','Windows 10/11',' Windows 10 (64-bit OS required)',' Intel Core i7-7700 | Intel Core i5-10400 or AMD Ryzen 7 2700X | AMD Ryzen 5 3600',' Intel Core i7-4790K | Intel Core i5-8400 or AMD Ryzen 7 1800X | AMD Ryzen 5 2600','12 GB de RAM','12 GB de RAM',' NVIDIA GeForce GTX 1060, 6GB or AMD Radeon RX 590, 8GB or Intel Arc A750, 8GB',' NVIDIA GeForce GTX 1650, 4 GB or AMD Radeon RX 480, 4 GB','60 GB de espacio disponible','60 GB de espacio disponible',3,'2023-10-17 17:34:18','2023-10-17 17:34:18');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_sections`
--

LOCK TABLES `products_sections` WRITE;
/*!40000 ALTER TABLE `products_sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-10-17 17:34:18','2023-10-17 17:34:18'),(2,'user','2023-10-17 17:34:18','2023-10-17 17:34:18');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231016223143-create-category.js'),('20231016223221-create-products.js'),('20231016223257-create-images.js'),('20231016224147-create-section.js'),('20231016224328-create-products-section.js'),('20231016224616-create-roles.js'),('20231016224642-create-users.js'),('20231016224827-create-addresses.js'),('20231016225021-create-orders.js'),('20231016225117-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gaston','Gomez','gaston.miguel.gomez@gmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,'avatar1.png',1,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(2,'Ismael','Callamullo','ismael_callamullo@hotmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,'avatar1.png',1,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(3,'Nahuel','Argandoña','nnahuell.gb@hotmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,'avatar1.png',1,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(4,'Wilson','Carrizo','wolfc777@gmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,'avatar1.png',1,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(5,'Jorge','Olea','jorgitoluisolea@gmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,'avatar1.png',2,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18'),(6,'Berlin','Callamullo','berlin@hotmail.com','$2a$10$v/3XdPzOadY9CBnM1ia88ulju1SV2OMYzLwpupyN6G5fQFSIO./P2',NULL,NULL,2,NULL,'2023-10-17 17:34:18','2023-10-17 17:34:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-17 14:45:40
