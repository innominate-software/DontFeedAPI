-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: dontfeeddb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `discord` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,NULL,'dewie@dontfeed.gg',NULL,NULL,'CTO','Dewie'),(2,NULL,'email@example.com','Janethan-Doerty',5555555555,'Don\'t Feed Rep.','Janethan Doerty'),(3,'JohnathanDiscord#0000','email@example.com','Johnathan-Doe',5555555555,'League Coordinator','Johnathan Doe');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'DOTA2'),(2,'LEAGUEOFLEGENDS'),(3,'OVERWATCH'),(4,'SMASH'),(5,'MADDEN');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leagues`
--

DROP TABLE IF EXISTS `leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leagues` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` date DEFAULT NULL,
  `duration` int NOT NULL,
  `end_date` date DEFAULT NULL,
  `format` varchar(255) DEFAULT NULL,
  `last_updated` date DEFAULT NULL,
  `logo_file_path` varchar(255) DEFAULT NULL,
  `match_frequency` varchar(255) DEFAULT NULL,
  `max_teams` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `platform` varchar(255) DEFAULT NULL,
  `reward` varchar(255) DEFAULT NULL,
  `rules` mediumtext,
  `season` int NOT NULL,
  `stage` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `game_id` bigint DEFAULT NULL,
  `tournament_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ip3mfd1fg0kl2jqep6fvp76ly` (`name`),
  KEY `FKe0x4tho1o0fycagab9blc2rig` (`game_id`),
  KEY `FKm498kausibu2kgphg4daqy5mj` (`tournament_id`),
  CONSTRAINT `FKe0x4tho1o0fycagab9blc2rig` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  CONSTRAINT `FKm498kausibu2kgphg4daqy5mj` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'2021-02-09',4,'2020-12-06','PREDETERMINED','2021-02-09',NULL,'2-3|w',10,'EPIC League Season 2 Division 1','1','pc','0',NULL,1,'COMPLETED','2020-11-12',1,1);
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leagues_contacts`
--

DROP TABLE IF EXISTS `leagues_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leagues_contacts` (
  `league_id` bigint NOT NULL,
  `contact_id` bigint NOT NULL,
  KEY `FKi0osgx0ngyw4lut2x9b50vayk` (`contact_id`),
  KEY `FKno84s96ay7tpo534m1waas5ji` (`league_id`),
  CONSTRAINT `FKi0osgx0ngyw4lut2x9b50vayk` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`),
  CONSTRAINT `FKno84s96ay7tpo534m1waas5ji` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues_contacts`
--

LOCK TABLES `leagues_contacts` WRITE;
/*!40000 ALTER TABLE `leagues_contacts` DISABLE KEYS */;
INSERT INTO `leagues_contacts` VALUES (1,1),(1,2),(1,3);
/*!40000 ALTER TABLE `leagues_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `duration` varchar(255) DEFAULT NULL,
  `game_match_id` bigint NOT NULL,
  `match_date_time` datetime(6) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `victor` char(1) DEFAULT NULL,
  `game_id` bigint DEFAULT NULL,
  `league_id` bigint DEFAULT NULL,
  `team_a_id` bigint DEFAULT NULL,
  `team_b_id` bigint DEFAULT NULL,
  `tournament_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoq8ddvttyuandns5h0h0oq20t` (`game_id`),
  KEY `FK23dnop04r2pfj2wvo21vakpph` (`league_id`),
  KEY `FKmrgum5di41ywbw87fdecijmvs` (`team_a_id`),
  KEY `FKntr6m7io9k4xcxgn7prtyojko` (`team_b_id`),
  KEY `FKeeniokyjgo5k6rmhjujatn27i` (`tournament_id`),
  CONSTRAINT `FK23dnop04r2pfj2wvo21vakpph` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`),
  CONSTRAINT `FKeeniokyjgo5k6rmhjujatn27i` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`),
  CONSTRAINT `FKmrgum5di41ywbw87fdecijmvs` FOREIGN KEY (`team_a_id`) REFERENCES `teams` (`id`),
  CONSTRAINT `FKntr6m7io9k4xcxgn7prtyojko` FOREIGN KEY (`team_b_id`) REFERENCES `teams` (`id`),
  CONSTRAINT `FKoq8ddvttyuandns5h0h0oq20t` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,'31:04',5697904719,'2020-11-12 07:00:00.000000','21-4','A',1,1,6,4,NULL),(2,'31:31',5697990407,'2020-11-12 07:30:00.000000','38-13','A',1,1,6,4,NULL),(3,'33:05',5698169969,'2020-11-12 10:00:00.000000','21-6','A',1,1,5,3,NULL),(4,'32:22',5698249237,'2020-11-12 10:30:00.000000','30-13','A',1,1,3,5,NULL),(5,'43:05',5698334608,'2020-11-12 11:00:00.000000','21-44','B',1,1,5,3,NULL),(6,'42:49',5698406070,'2020-11-12 13:30:00.000000','18-41','B',1,1,10,9,NULL),(7,'38:03',5698482378,'2020-11-12 14:00:00.000000','24-17','A',1,1,10,9,NULL),(8,'33:09',5698533899,'2020-11-12 14:30:00.000000','27-15','A',1,1,9,10,NULL),(9,'47:42',5699211149,'2020-11-13 19:00:00.000000','18-36','B',1,1,5,8,NULL),(10,'54:03',5699329676,'2020-11-13 07:30:00.000000','25-39','B',1,1,8,5,NULL),(11,'37:44',5699462428,'2020-11-13 08:00:00.000000','12-28','B',1,1,5,8,NULL),(12,'33:53',5699563205,'2020-11-13 11:00:00.000000','13-27','B',1,1,9,1,NULL),(13,'57:18',5699651124,'2020-11-13 11:30:00.000000','21-30','B',1,1,1,9,NULL),(14,'43:24',5699755725,'2020-11-13 12:00:00.000000','20-35','A',1,1,1,9,NULL),(15,'49:18',5699838648,'2020-11-13 15:00:00.000000','51-47','B',1,1,4,2,NULL),(16,'31:19',5699908260,'2020-11-13 15:30:00.000000','12-33','B',1,1,2,4,NULL),(17,'43:05',5699951330,'2020-11-13 16:00:00.000000','32-41','B',1,1,4,2,NULL),(18,'26:23',5700696941,'2020-11-14 07:00:00.000000','24-5','A',1,1,3,10,NULL),(19,'44:31',5700787504,'2020-11-14 07:30:00.000000','14-25','B',1,1,3,10,NULL),(20,'27:49',5700908938,'2020-11-14 08:00:00.000000','10-25','B',1,1,10,3,NULL),(21,'36:12',5701003534,'2020-11-14 10:00:00.000000','33-15','A',1,1,8,1,NULL),(22,'36:55',5701110699,'2020-11-14 10:30:00.000000','28-16','A',1,1,8,1,NULL),(23,'27:32',5701237473,'2020-11-14 13:00:00.000000','32-7','A',1,1,7,9,NULL),(24,'41:35',5701312634,'2020-11-14 13:30:00.000000','52-23','A',1,1,9,7,NULL),(25,'40:31',5701389891,'2020-11-14 14:00:00.000000','28-33','B',1,1,7,9,NULL),(26,'37:05',5702298513,'2020-11-15 07:00:00.000000','40-8','A',1,1,10,5,NULL),(27,'32:48',5702403505,'2020-11-15 07:30:00.000000','26-20','A',1,1,10,5,NULL),(28,'27:17',5702587597,'2020-11-15 10:00:00.000000','32-15','A',1,1,3,2,NULL),(29,'34:13',5702667669,'2020-11-15 10:30:00.000000','18-28','B',1,1,3,2,NULL),(30,'39:30',5702753170,'2020-11-15 11:00:00.000000','12-32','B',1,1,2,3,NULL),(31,'42:17',5702837666,'2020-11-15 13:30:00.000000','23-46','B',1,1,7,4,NULL),(32,'36:08',5702907793,'2020-11-15 14:00:00.000000','46-29','A',1,1,7,4,NULL),(33,'48:07',5702966052,'2020-11-15 14:30:00.000000','44-31','A',1,1,7,4,NULL),(34,'39:10',5707450820,'2020-11-19 07:00:00.000000','23-27','B',1,1,6,10,NULL),(35,'36:52',5707552571,'2020-11-19 07:30:00.000000','5-28','B',1,1,10,6,NULL),(36,'29:02',5707647524,'2020-11-19 08:00:00.000000','10-27','B',1,1,10,6,NULL),(37,'28:59',5707732884,'2020-11-19 10:30:00.000000','5-30','B',1,1,8,9,NULL),(38,'31:55',5707802862,'2020-11-19 11:00:00.000000','13-3','A',1,1,8,9,NULL),(39,'42:51',5707875036,'2020-11-19 11:30:00.000000','29-13','A',1,1,8,9,NULL),(40,'25:18',5707958710,'2020-11-19 13:30:00.000000','36-14','A',1,1,7,2,NULL),(41,'24:19',5708013328,'2020-11-19 14:00:00.000000','7-34','B',1,1,2,7,NULL),(42,'23:39',5708788689,'2020-11-20 07:00:00.000000','37-7','A',1,1,8,4,NULL),(43,'33:20',5708879443,'2020-11-20 07:30:00.000000','23-30','B',1,1,4,8,NULL),(44,'40:12',5709074886,'2020-11-20 10:00:00.000000','28-44','B',1,1,10,7,NULL),(45,'29:40',5709175139,'2020-11-20 10:30:00.000000','34-16','A',1,1,7,10,NULL),(46,'36:16',5709297134,'2020-11-20 13:00:00.000000','28-15','A',1,1,1,5,NULL),(47,'40:01',5709373359,'2020-11-20 13:30:00.000000','24-20','A',1,1,1,5,NULL),(48,'30:57',5710307397,'2020-11-21 07:00:00.000000','10-26','B',1,1,9,6,NULL),(49,'33:10',5710405168,'2020-11-21 07:30:00.000000','17-25','B',1,1,9,6,NULL),(50,'37:09',5710596968,'2020-11-21 10:00:00.000000','41-20','A',1,1,2,8,NULL),(51,'30:30',5710714434,'2020-11-21 10:30:00.000000','14-35','B',1,1,8,2,NULL),(52,'27:15',5710841746,'2020-11-21 13:00:00.000000','28-23','A',1,1,1,10,NULL),(53,'30:48',5710916467,'2020-11-21 13:30:00.000000','8-30','B',1,1,10,1,NULL),(54,'26:19',5711908374,'2020-11-22 07:00:00.000000','11-23','B',1,1,3,4,NULL),(55,'46:25',5712001132,'2020-11-22 07:30:00.000000','21-38','B',1,1,3,4,NULL),(56,'39:13',5712204428,'2020-11-22 10:00:00.000000','24-33','B',1,1,2,5,NULL),(57,'33:44',5712300201,'2020-11-22 10:30:00.000000','28-9','A',1,1,5,2,NULL),(58,'34:28',5712426048,'2020-11-22 13:00:00.000000','12-37','B',1,1,7,6,NULL),(59,'31:23',5712495020,'2020-11-22 13:30:00.000000','36-11','A',1,1,6,7,NULL),(60,'54:57',5717512265,'2020-11-26 07:00:00.000000','41-34','A',1,1,10,2,NULL),(61,'39:10',5717651850,'2020-11-26 07:30:00.000000','18-29','B',1,1,10,2,NULL),(62,'25:38',5717752241,'2020-11-26 08:00:00.000000','8-29','B',1,1,2,10,NULL),(63,'23:07',5717842177,'2020-11-26 10:00:00.000000','23-5','A',1,1,6,8,NULL),(64,'37:46',5717905633,'2020-11-26 10:30:00.000000','23-11','A',1,1,8,6,NULL),(65,'20:03',5717987182,'2020-11-26 11:00:00.000000','23-3','A',1,1,8,6,NULL),(66,'29:48',5718045399,'2020-11-26 13:00:00.000000','12-19','B',1,1,1,4,NULL),(67,'42:37',5718100700,'2020-11-26 13:30:00.000000','31-41','B',1,1,1,4,NULL),(68,'26:12',5718867054,'2020-11-27 07:00:00.000000','9-31','B',1,1,6,5,NULL),(69,'32:14',5718953479,'2020-11-27 07:30:00.000000','47-12','A',1,1,6,5,NULL),(70,'42:23',5719053905,'2020-11-27 08:00:00.000000','25-28','B',1,1,6,5,NULL),(71,'30:11',5719172639,'2020-11-27 10:00:00.000000','22-11','A',1,1,8,10,NULL),(72,'19:32',5719255554,'2020-11-27 10:30:00.000000','35-6','A',1,1,10,8,NULL),(73,'37:39',5719311104,'2020-11-27 11:00:00.000000','41-20','A',1,1,8,10,NULL),(74,'41:57',5719385924,'2020-11-27 13:00:00.000000','39-20','A',1,1,7,3,NULL),(75,'42:45',5719463509,'2020-11-27 13:30:00.000000','34-20','A',1,1,3,7,NULL),(76,'39:42',5719528063,'2020-11-27 14:00:00.000000','17-35','B',1,1,3,7,NULL),(77,'38:16',5720377704,'2020-11-28 07:00:00.000000','23-18','A',1,1,2,9,NULL),(78,'40:16',5720490283,'2020-11-28 07:30:00.000000','21-27','B',1,1,2,9,NULL),(79,'43:21',5720625730,'2020-11-28 08:00:00.000000','19-19','B',1,1,9,2,NULL),(80,'29:24',5720751536,'2020-11-28 10:00:00.000000','9-28','B',1,1,5,4,NULL),(81,'32:16',5720824621,'2020-11-28 10:30:00.000000','15-52','B',1,1,4,5,NULL),(82,'41:06',5720907285,'2020-11-28 11:00:00.000000','23-24','A',1,1,5,4,NULL),(83,'42-09',5720991949,'2020-11-28 13:00:00.000000','33-24','A',1,1,1,7,NULL),(84,'38-48',5721059871,'2020-11-28 13:30:00.000000','15-30','B',1,1,7,1,NULL),(85,'29:41',5721959830,'2020-11-29 07:00:00.000000','7-26','B',1,1,9,4,NULL),(86,'31:54',5722059715,'2020-11-29 07:30:00.000000','30-14','A',1,1,4,9,NULL),(87,'1:12:09',5722245646,'2020-11-29 10:00:00.000000','54-28','A',1,1,6,3,NULL),(88,'53:06',5722374437,'2020-11-29 10:30:00.000000','35-37','B',1,1,6,3,NULL),(89,'36:40',5722475575,'2020-11-29 11:00:00.000000','25-14','A',1,1,6,3,NULL),(90,'35:41',5722550436,'2020-11-29 13:00:00.000000','27-14','A',1,1,2,1,NULL),(91,'58-22',5722603859,'2020-11-29 13:30:00.000000','33-23','A',1,1,1,2,NULL),(92,'34:45',5722670839,'2020-11-29 14:00:00.000000','40-12','A',1,1,1,2,NULL),(93,'32:10',5727175984,'2020-12-03 07:00:00.000000','16-34','B',1,1,9,3,NULL),(94,'34:56',5727278588,'2020-12-03 07:30:00.000000','16-26','B',1,1,9,3,NULL),(95,'44:29',5727433880,'2020-12-03 10:00:00.000000','23-28','B',1,1,8,7,NULL),(96,'36:14',5727522909,'2020-12-03 10:30:00.000000','25-34','B',1,1,7,8,NULL),(97,'42:56',5727599112,'2020-12-03 11:00:00.000000','33-16','A',1,1,7,8,NULL),(98,'34:24',5727679934,'2020-12-03 13:00:00.000000','12-30','B',1,1,1,6,NULL),(99,'26:09',5727737175,'2020-12-03 13:30:00.000000','9-18','B',1,1,1,6,NULL),(100,'34:26',5728443806,'2020-12-04 07:00:00.000000','33-13','A',1,1,3,8,NULL),(101,'1:07:28',5728550889,'2020-12-04 07:30:00.000000','46-29','A',1,1,8,3,NULL),(102,'22:39',5728707412,'2020-12-04 08:00:00.000000','17-3','A',1,1,3,8,NULL),(103,'18:56',5728794521,'2020-12-04 10:00:00.000000','3-25','B',1,1,9,5,NULL),(104,'23:56',5728856731,'2020-12-04 10:30:00.000000','4-23','B',1,1,9,5,NULL),(105,'32:26',5728941095,'2020-12-04 13:00:00.000000','29-6','A',1,1,6,2,NULL),(106,'29:53',5729008683,'2020-12-04 13:30:00.000000','34-11','A',1,1,2,6,NULL),(107,'37:34',5729063013,'2020-12-04 14:00:00.000000','34-12','A',1,1,6,2,NULL),(108,'19:35',5729904344,'2020-12-05 07:00:00.000000','26-8','A',1,1,4,10,NULL),(109,'28:11',5729981250,'2020-12-05 07:30:00.000000','38-18','A',1,1,4,10,NULL),(110,'52:19',5730199396,'2020-12-05 10:00:00.000000','23-17','A',1,1,3,1,NULL),(111,'29:04',5730323398,'2020-12-05 10:30:00.000000','22-8','A',1,1,3,1,NULL),(112,'39:28',5730443377,'2020-12-05 13:00:00.000000','21-41','B',1,1,7,5,NULL),(113,'22:57',5730524224,'2020-12-05 13:30:00.000000','26-12','A',1,1,7,5,NULL),(114,'33:00',5730579204,'2020-12-05 14:00:00.000000','4-31','B',1,1,7,5,NULL),(115,'29:35',5731247508,'2020-12-06 04:00:00.000000','10-30','B',1,1,9,10,NULL),(116,'35:36',5731322801,'2020-12-06 05:00:00.000000','27-34','B',1,1,2,10,NULL),(117,'30:50',5731591475,'2020-12-06 08:00:00.000000','47-11','A',1,1,5,4,NULL),(118,'33:44',5731696332,'2020-12-06 09:00:00.000000','32-13','A',1,1,1,7,NULL),(119,'37:09',5731808826,'2020-12-06 10:00:00.000000','51-25','A',1,1,7,4,NULL),(120,'23:42',5731892503,'2020-12-06 11:00:00.000000','23-5','A',1,1,1,5,NULL),(121,'28:43',5731974411,'2020-12-06 12:00:00.000000','35-19','A',1,1,7,5,NULL),(122,'31:42',5732042559,'2020-12-06 13:00:00.000000','8-40','B',1,1,7,1,NULL),(123,'36:43',5734398152,'2020-12-08 10:00:00.000000','32-43','B',1,NULL,7,5,1),(124,'24:21',5734483925,'2020-12-08 10:30:00.000000','17-9','A',1,NULL,7,5,1),(125,'29:51',5734546159,'2020-12-08 11:00:00.000000','10-52','B',1,NULL,7,5,1),(126,'33:03',5735682801,'2020-12-09 10:00:00.000000','21-8','A',1,NULL,6,1,1),(127,'27:58',5735760986,'2020-12-09 10:30:00.000000','8-26','B',1,NULL,1,6,1),(128,'35:28',5735883875,'2020-12-09 13:00:00.000000','22-11','A',1,NULL,8,3,1),(129,'24:23',5735952462,'2020-12-09 13:30:00.000000','25-6','A',1,NULL,3,8,1),(130,'41:05',5736003261,'2020-12-09 14:00:00.000000','33-16','A',1,NULL,8,3,1),(131,'40:49',5736907272,'2020-12-10 10:00:00.000000','26-26','B',1,NULL,1,5,1),(132,'51:25',5736994258,'2020-12-10 10:30:00.000000','36-37','B',1,NULL,1,5,1),(133,'33:22',5737101375,'2020-12-10 13:00:00.000000','23-25','B',1,NULL,3,4,1),(134,'34:02',5737164359,'2020-12-10 13:30:00.000000','33-18','B',1,NULL,3,4,1),(135,'31:40',5738152882,'2020-12-11 10:00:00.000000','40-17','A',1,NULL,5,4,1),(136,'35:22',5738227338,'2020-12-11 10:30:00.000000','40-19','A',1,NULL,4,5,1),(137,'25:42',5738304060,'2020-12-11 11:00:00.000000','34-20','A',1,NULL,4,5,1),(138,'46:31',5738370031,'2020-12-11 13:00:00.000000','26-10','A',1,NULL,6,8,1),(139,'49:06',5738455698,'2020-12-11 13:30:00.000000','16-44','B',1,NULL,8,6,1),(140,'23:42',5739703063,'2020-12-12 11:30:00.000000','7-26','B',1,NULL,8,4,1),(141,'37:02',5739768507,'2020-12-12 12:00:00.000000','27-44','B',1,NULL,8,4,1),(142,'25:33',5739850226,'2020-12-12 12:30:00.000000','16-37','B',1,NULL,8,4,1),(143,'42:04',5741196339,'2020-12-13 11:30:00.000000','47-10','A',1,NULL,6,4,1),(144,'36:21',5741276508,'2020-12-13 12:00:00.000000','18-32','B',1,NULL,6,4,1),(145,'18:27',5741350591,'2020-12-13 12:30:00.000000','4-20','B',1,NULL,6,4,1),(146,'39:09',5741395474,'2020-12-13 13:00:00.000000','16-38','B',1,NULL,4,6,1),(147,'43:20',5741450550,'2020-12-13 13:30:00.000000','28-11','A',1,NULL,6,4,1);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` date DEFAULT NULL,
  `logo_file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `team_info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'2021-02-22',NULL,'Team Secret','1',NULL),(2,'2021-02-22',NULL,'Alliance','1',NULL),(3,'2021-02-22',NULL,'Natus Vincere','1',NULL),(4,'2021-02-22',NULL,'OG','1',NULL),(5,'2021-02-22',NULL,'Team Liquid','1',NULL),(6,'2021-02-22',NULL,'Virtus.pro','1',NULL),(7,'2021-02-22',NULL,'Team Nigma','1',NULL),(8,'2021-02-22',NULL,'Vikin.gg','1',NULL),(9,'2021-02-22',NULL,'mudgolems','1',NULL),(10,'2021-02-22',NULL,'Just-_-Error','1',NULL);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams_leagues`
--

DROP TABLE IF EXISTS `teams_leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams_leagues` (
  `team_id` bigint NOT NULL,
  `league_id` bigint NOT NULL,
  KEY `FKfucxjkr7xb2ceuitn9fntutci` (`league_id`),
  KEY `FKngtnfj47xx3m8pma7xj4y99qc` (`team_id`),
  CONSTRAINT `FKfucxjkr7xb2ceuitn9fntutci` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`),
  CONSTRAINT `FKngtnfj47xx3m8pma7xj4y99qc` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams_leagues`
--

LOCK TABLES `teams_leagues` WRITE;
/*!40000 ALTER TABLE `teams_leagues` DISABLE KEYS */;
INSERT INTO `teams_leagues` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1);
/*!40000 ALTER TABLE `teams_leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams_matches`
--

DROP TABLE IF EXISTS `teams_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams_matches` (
  `team_id` bigint NOT NULL,
  `match_id` bigint NOT NULL,
  KEY `FK8eqnhrirr8wft3nfpqxbremtk` (`match_id`),
  KEY `FKkhauh5xa7f81o6spggdu6e41r` (`team_id`),
  CONSTRAINT `FK8eqnhrirr8wft3nfpqxbremtk` FOREIGN KEY (`match_id`) REFERENCES `matches` (`id`),
  CONSTRAINT `FKkhauh5xa7f81o6spggdu6e41r` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams_matches`
--

LOCK TABLES `teams_matches` WRITE;
/*!40000 ALTER TABLE `teams_matches` DISABLE KEYS */;
INSERT INTO `teams_matches` VALUES (6,1),(4,1),(6,2),(4,2),(5,3),(3,3),(3,4),(5,4),(5,5),(3,5),(10,6),(9,6),(10,7),(9,7),(9,8),(10,8),(5,9),(8,9),(8,10),(5,10),(5,11),(8,11),(9,12),(1,12),(1,13),(9,13),(1,14),(9,14),(4,15),(2,15),(2,16),(4,16),(4,17),(2,17),(3,18),(10,18),(3,19),(10,19),(10,20),(3,20),(8,21),(1,21),(8,22),(1,22),(7,23),(9,23),(9,24),(7,24),(7,25),(9,25),(10,26),(5,26),(10,27),(5,27),(3,28),(2,28),(3,29),(2,29),(2,30),(3,30),(7,31),(4,31),(7,32),(4,32),(7,33),(4,33),(6,34),(10,34),(10,35),(6,35),(10,36),(6,36),(8,37),(9,37),(8,38),(9,38),(8,39),(9,39),(7,40),(2,40),(2,41),(7,41),(8,42),(4,42),(4,43),(8,43),(10,44),(7,44),(7,45),(10,45),(1,46),(5,46),(1,47),(5,47),(9,48),(6,48),(9,49),(6,49),(2,50),(8,50),(8,51),(2,51),(1,52),(10,52),(10,53),(1,53),(3,54),(4,54),(3,55),(4,55),(2,56),(5,56),(5,57),(2,57),(7,58),(6,58),(6,59),(7,59),(10,60),(2,60),(10,61),(2,61),(2,62),(10,62),(6,63),(8,63),(8,64),(6,64),(8,65),(6,65),(1,66),(4,66),(1,67),(4,67),(6,68),(5,68),(6,69),(5,69),(6,70),(5,70),(8,71),(10,71),(10,72),(8,72),(8,73),(10,73),(7,74),(3,74),(3,75),(7,75),(3,76),(7,76),(2,77),(9,77),(2,78),(9,78),(9,79),(2,79),(5,80),(4,80),(4,81),(5,81),(5,82),(4,82),(1,83),(7,83),(7,84),(1,84),(9,85),(4,85),(4,86),(9,86),(6,87),(3,87),(6,88),(3,88),(6,89),(3,89),(2,90),(1,90),(1,91),(2,91),(1,92),(2,92),(9,93),(3,93),(9,94),(3,94),(8,95),(7,95),(7,96),(8,96),(7,97),(8,97),(1,98),(6,98),(1,99),(6,99),(3,100),(8,100),(8,101),(3,101),(3,102),(8,102),(9,103),(5,103),(9,104),(5,104),(6,105),(2,105),(2,106),(6,106),(6,107),(2,107),(4,108),(10,108),(4,109),(10,109),(3,110),(1,110),(3,111),(1,111),(7,112),(5,112),(7,113),(5,113),(7,114),(5,114),(9,115),(10,115),(2,116),(10,116),(5,117),(4,117),(1,118),(7,118),(7,119),(4,119),(1,120),(5,120),(7,121),(5,121),(7,122),(1,122),(7,123),(5,123),(7,124),(5,124),(7,125),(5,125),(6,126),(1,126),(1,127),(6,127),(8,128),(3,128),(3,129),(8,129),(8,130),(3,130),(1,131),(5,131),(1,132),(5,132),(3,133),(4,133),(3,134),(4,134),(5,135),(4,135),(4,136),(5,136),(4,137),(5,137),(6,138),(8,138),(8,139),(6,139),(8,140),(4,140),(8,141),(4,141),(8,142),(4,142),(6,143),(4,143),(6,144),(4,144),(6,145),(4,145),(4,146),(6,146),(6,147),(4,147);
/*!40000 ALTER TABLE `teams_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams_tournaments`
--

DROP TABLE IF EXISTS `teams_tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams_tournaments` (
  `team_id` bigint NOT NULL,
  `tournament_id` bigint NOT NULL,
  KEY `FK24s810yw359703h577ys1iiw4` (`tournament_id`),
  KEY `FKn2bkst9dp1wdy7heg8nt2ao10` (`team_id`),
  CONSTRAINT `FK24s810yw359703h577ys1iiw4` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`),
  CONSTRAINT `FKn2bkst9dp1wdy7heg8nt2ao10` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams_tournaments`
--

LOCK TABLES `teams_tournaments` WRITE;
/*!40000 ALTER TABLE `teams_tournaments` DISABLE KEYS */;
INSERT INTO `teams_tournaments` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1);
/*!40000 ALTER TABLE `teams_tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournaments`
--

DROP TABLE IF EXISTS `tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournaments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bracket` varchar(255) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `format` varchar(255) DEFAULT NULL,
  `last_updated` date DEFAULT NULL,
  `logo_file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `reward` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `game_id` bigint DEFAULT NULL,
  `league_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_toqueen5yq82q1kyuo8x9u7rh` (`name`),
  KEY `FKk8huhgsk5r59hdsg8y9ek3df8` (`game_id`),
  KEY `FKqmntnj2or3nfgt9q60tkwx8yq` (`league_id`),
  CONSTRAINT `FKk8huhgsk5r59hdsg8y9ek3df8` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  CONSTRAINT `FKqmntnj2or3nfgt9q60tkwx8yq` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,NULL,'2021-02-22','2020-12-13','DOUBLEELIMINATION','2021-02-22',NULL,'EPIC League Season 2 Division 1','1','0','2020-12-08',1,1);
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `birth_date` date DEFAULT NULL,
  `date_joined` date DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `last_updated` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profile_pic_file_path` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'1995-03-03','2021-01-29','email@dontfeed.gg','Lasse','Urpalainen','2021-01-29','1',NULL,'MATUMBAMAN'),(2,'2000-09-28','2021-01-29','email@dontfeed.gg','Michał','Jankowski','2021-01-29','1',NULL,'Nisha'),(3,'1997-08-05','2021-01-29','email@dontfeed.gg','Ludwig','Wåhlberg','2021-01-29','1',NULL,'Tai'),(4,'1994-10-17','2021-01-29','email@dontfeed.gg','Yazied','Jaradat','2021-01-29','1',NULL,'YapzOr'),(5,'1990-03-06','2021-01-29','email@dontfeed.gg','Clement','Ivanov','2021-01-29','1',NULL,'Puppey'),(6,'1997-05-27','2021-01-29','email@dontfeed.gg','Nikolay','Nikolov','2021-01-29','1',NULL,'Nikobaby'),(7,'1995-05-31','2021-01-29','email@dontfeed.gg','Linus','Blomdin','2021-01-29','1',NULL,'LIMPP'),(8,'1992-04-01','2021-01-29','email@dontfeed.gg','Gustav','Magnusson','2021-01-29','1',NULL,'S4'),(9,'1994-04-24','2021-01-29','email@dontfeed.gg','Simon','Haag','2021-01-29','1',NULL,'Handsken'),(10,'1995-09-24','2021-01-29','email@dontfeed.gg','Artsiom','Barshak','2021-01-29','1',NULL,'fng'),(11,'2000-08-11','2021-01-29','email@dontfeed.gg','Alik','Vorobey','2021-01-29','1',NULL,'V-Tune'),(12,'1997-04-13','2021-01-29','email@dontfeed.gg','Bogdan','Vasilenko','2021-01-29','1',NULL,'Iceberg'),(13,'1996-08-05','2021-01-29','email@dontfeed.gg','Viktor','Nigrini','2021-01-29','1',NULL,'GeneRal'),(14,'1993-12-14','2021-01-29','email@dontfeed.gg','Vladimir','Nikogosian','2021-01-29','1',NULL,'RodjER'),(15,'1991-03-06','2021-01-29','email@dontfeed.gg','Andrii','Bondarenko','2021-01-29','1',NULL,'ALWAYSWANNAFLY'),(16,'1996-06-03','2021-01-29','email@dontfeed.gg','Yeik','Nai Zheng','2021-01-29','1',NULL,'midone'),(17,'1998-04-14','2021-01-29','email@dontfeed.gg','Topias','Taavitsainen','2021-01-29','1',NULL,'Topson'),(18,'1992-05-11','2021-01-29','email@dontfeed.gg','Sébastien','Debs','2021-01-29','1',NULL,'Ceb'),(19,'1995-06-12','2021-01-29','email@dontfeed.gg','Martin','Sazdov','2021-01-29','1',NULL,'Saksa'),(20,'1993-10-08','2021-01-29','email@dontfeed.gg','Johan','Sundstein','2021-01-29','1',NULL,'N0tail'),(21,'1999-07-26','2021-01-29','email@dontfeed.gg','Michael','Vu','2021-01-29','1',NULL,'miCKe'),(22,'1995-09-27','2021-01-29','email@dontfeed.gg','Max','Bröcker','2021-01-29','1',NULL,'qojqva'),(23,'1998-04-10','2021-01-29','email@dontfeed.gg','Samuel','Svahn','2021-01-29','1',NULL,'Boxi'),(24,'1998-07-04','2021-01-29','email@dontfeed.gg','Tommy','Le','2021-01-29','1',NULL,'Taiga'),(25,'1994-06-18','2021-01-29','email@dontfeed.gg','Aydin','Sarkohi','2021-01-29','1',NULL,'iNSaNiA'),(26,'2002-05-16','2021-01-29','email@dontfeed.gg','Egor','Grigorenko','2021-01-29','1',NULL,'Nightfall'),(27,'2001-08-23','2021-01-29','email@dontfeed.gg','Danil','Skutin','2021-01-29','1',NULL,'gpk'),(28,'2000-01-08','2021-01-29','email@dontfeed.gg','Dmitry','Dorokhin','2021-01-29','1',NULL,'DM'),(29,'2002-02-04','2021-01-29','email@dontfeed.gg','Vitalie','Melnic','2021-01-29','1',NULL,'Save-'),(30,'2002-04-12','2021-01-29','email@dontfeed.gg','illias','Ganeev','2021-01-29','1',NULL,'Kingslayer'),(31,'1997-06-20','2021-01-29','email@dontfeed.gg','Amer','Al-Barkawi','2021-01-29','1',NULL,'Miracle-'),(32,'1995-03-06','2021-01-29','email@dontfeed.gg','Aliwi','Omar','2021-01-29','1',NULL,'w33'),(33,'1995-01-20','2021-01-29','email@dontfeed.gg','Ivan','Ivanov','2021-01-29','1',NULL,'MinD_ContRoL'),(34,'1995-06-17','2021-01-29','email@dontfeed.gg','Maroun','Merhej','2021-01-29','1',NULL,'GH'),(35,'1992-10-28','2021-01-29','email@dontfeed.gg','Kuro','Takhasomi','2021-01-29','1',NULL,'KuroKy'),(36,'1999-10-18','2021-01-29','email@dontfeed.gg','Indji','Lub','2021-01-29','1',NULL,'Shad'),(37,'2000-05-02','2021-01-29','email@dontfeed.gg','Miroslav','Bičan','2021-01-29','1',NULL,'BOOM'),(38,'1996-12-20','2021-01-29','email@dontfeed.gg','Tobias','Buchner','2021-01-29','1',NULL,'Tobi'),(39,'2000-06-28','2021-01-29','email@dontfeed.gg','Adam','Moroz','2021-01-29','1',NULL,'Aramis'),(40,'1999-07-03','2021-01-29','email@dontfeed.gg','Melchior','Hillenkamp','2021-01-29','1',NULL,'Seleri'),(41,'1998-09-12','2021-01-29','email@dontfeed.gg','Oliver','Lepko','2021-01-29','1',NULL,'Skiter'),(42,'1996-12-10','2021-01-29','email@dontfeed.gg','Duško','Boranijaševic','2021-01-29','1',NULL,'BoraNija'),(43,'1997-04-17','2021-01-29','email@dontfeed.gg','Neta','Shapira','2021-01-29','1',NULL,'33'),(44,'1995-06-23','2021-01-29','email@dontfeed.gg','Milan','Kozomara','2021-01-29','1',NULL,'MiLAN'),(45,'1993-02-24','2021-01-29','email@dontfeed.gg','Adrian','Trinks','2021-01-29','1',NULL,'Fata'),(46,'1999-04-25','2021-01-29','email@dontfeed.gg','Roman','Kushnarev','2021-01-29','1',NULL,'RAMZES666'),(47,'1999-02-13','2021-01-29','email@dontfeed.gg','Syed Sumail','Hassan','2021-01-29','1',NULL,'SumaiL'),(48,'1997-09-04','2021-01-29','email@dontfeed.gg','Vladimir','Minenko','2021-01-29','1',NULL,'No[o]ne'),(49,'1998-12-02','2021-01-29','email@dontfeed.gg','Bakyt','Emilzhanov','2021-01-29','1',NULL,'Zayac'),(50,'1990-08-07','2021-01-29','email@dontfeed.gg','Alexey','Berezin','2021-01-29','1',NULL,'Solo');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_games`
--

DROP TABLE IF EXISTS `users_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_games` (
  `user_id` bigint NOT NULL,
  `game_id` bigint NOT NULL,
  KEY `FKj02ehjgkwhp5dqqe8iskk6f8t` (`game_id`),
  KEY `FKk70xanxxbjs1yuum23xcmvohi` (`user_id`),
  CONSTRAINT `FKj02ehjgkwhp5dqqe8iskk6f8t` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  CONSTRAINT `FKk70xanxxbjs1yuum23xcmvohi` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_games`
--

LOCK TABLES `users_games` WRITE;
/*!40000 ALTER TABLE `users_games` DISABLE KEYS */;
INSERT INTO `users_games` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1);
/*!40000 ALTER TABLE `users_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_leagues`
--

DROP TABLE IF EXISTS `users_leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_leagues` (
  `user_id` bigint NOT NULL,
  `league_id` bigint NOT NULL,
  KEY `FKno0mrvrh90a0lao3tib4p5ema` (`league_id`),
  KEY `FK5q79fp6tjbc6a9307xiipcfmt` (`user_id`),
  CONSTRAINT `FK5q79fp6tjbc6a9307xiipcfmt` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKno0mrvrh90a0lao3tib4p5ema` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_leagues`
--

LOCK TABLES `users_leagues` WRITE;
/*!40000 ALTER TABLE `users_leagues` DISABLE KEYS */;
INSERT INTO `users_leagues` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1);
/*!40000 ALTER TABLE `users_leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_teams`
--

DROP TABLE IF EXISTS `users_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_teams` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_joined` date DEFAULT NULL,
  `date_left` date DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `team_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK31k9hhkcp7fiugrk2lu7vq9jo` (`user_id`),
  KEY `FKh5yx5pc8x6mv9ohqfh18tw6es` (`team_id`),
  CONSTRAINT `FK31k9hhkcp7fiugrk2lu7vq9jo` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKh5yx5pc8x6mv9ohqfh18tw6es` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_teams`
--

LOCK TABLES `users_teams` WRITE;
/*!40000 ALTER TABLE `users_teams` DISABLE KEYS */;
INSERT INTO `users_teams` VALUES (1,'2021-02-22',NULL,1,1),(2,'2021-02-22',NULL,2,1),(3,'2021-02-22',NULL,3,1),(4,'2021-02-22',NULL,4,1),(5,'2021-02-22',NULL,5,1),(6,'2021-02-22',NULL,6,2),(7,'2021-02-22',NULL,7,2),(8,'2021-02-22',NULL,8,2),(9,'2021-02-22',NULL,9,2),(10,'2021-02-22',NULL,10,2),(11,'2021-02-22',NULL,11,3),(12,'2021-02-22',NULL,12,3),(13,'2021-02-22',NULL,13,3),(14,'2021-02-22',NULL,14,3),(15,'2021-02-22',NULL,15,3),(16,'2021-02-22',NULL,16,4),(17,'2021-02-22',NULL,17,4),(18,'2021-02-22',NULL,18,4),(19,'2021-02-22',NULL,19,4),(20,'2021-02-22',NULL,20,4),(21,'2021-02-22',NULL,21,5),(22,'2021-02-22',NULL,22,5),(23,'2021-02-22',NULL,23,5),(24,'2021-02-22',NULL,24,5),(25,'2021-02-22',NULL,25,5),(26,'2021-02-22',NULL,26,6),(27,'2021-02-22',NULL,27,6),(28,'2021-02-22',NULL,28,6),(29,'2021-02-22',NULL,29,6),(30,'2021-02-22',NULL,30,6),(31,'2021-02-22',NULL,31,7),(32,'2021-02-22',NULL,32,7),(33,'2021-02-22',NULL,33,7),(34,'2021-02-22',NULL,34,7),(35,'2021-02-22',NULL,35,7),(36,'2021-02-22',NULL,36,8),(37,'2021-02-22',NULL,37,8),(38,'2021-02-22',NULL,38,8),(39,'2021-02-22',NULL,39,8),(40,'2021-02-22',NULL,40,8),(41,'2021-02-22',NULL,41,9),(42,'2021-02-22',NULL,42,9),(43,'2021-02-22',NULL,43,9),(44,'2021-02-22',NULL,44,9),(45,'2021-02-22',NULL,45,9),(46,'2021-02-22',NULL,46,10),(47,'2021-02-22',NULL,47,10),(48,'2021-02-22',NULL,48,10),(49,'2021-02-22',NULL,49,10),(50,'2021-02-22',NULL,50,10);
/*!40000 ALTER TABLE `users_teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_tournaments`
--

DROP TABLE IF EXISTS `users_tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_tournaments` (
  `user_id` bigint NOT NULL,
  `tournament_id` bigint NOT NULL,
  KEY `FKf6yobsbgvn0353wn3mamdguge` (`tournament_id`),
  KEY `FK18wahv5hl1lqvg4ce8yvqr0la` (`user_id`),
  CONSTRAINT `FK18wahv5hl1lqvg4ce8yvqr0la` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKf6yobsbgvn0353wn3mamdguge` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_tournaments`
--

LOCK TABLES `users_tournaments` WRITE;
/*!40000 ALTER TABLE `users_tournaments` DISABLE KEYS */;
INSERT INTO `users_tournaments` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1);
/*!40000 ALTER TABLE `users_tournaments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-10 16:13:12
