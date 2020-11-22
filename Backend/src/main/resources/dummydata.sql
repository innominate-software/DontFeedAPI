-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: dontfeeddb
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Dota 2');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'2020-05-16','Test LeagueProfilePage generated using info on Liquipedia',4,'2020-05-06','PREDETERMINED',NULL,NULL,16,'WePlay! Pushka LeagueProfilePage Season 1: Division 1','2020-04-23',1,1,1);
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `leagues_matches`
--

LOCK TABLES `leagues_matches` WRITE;
/*!40000 ALTER TABLE `leagues_matches` DISABLE KEYS */;
INSERT INTO `leagues_matches` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,25),(1,26),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,36),(1,37),(1,38),(1,39),(1,40),(1,41),(1,42),(1,43),(1,44),(1,45),(1,46),(1,47),(1,48),(1,49),(1,50),(1,51),(1,52),(1,53),(1,54),(1,55),(1,56),(1,57),(1,58),(1,59),(1,60),(1,61),(1,62),(1,63),(1,64),(1,65),(1,66),(1,67),(1,68),(1,69),(1,70),(1,71),(1,72),(1,73),(1,74),(1,75),(1,76),(1,77),(1,78),(1,79),(1,80),(1,81),(1,82),(1,83),(1,84),(1,85),(1,86),(1,87),(1,88),(1,89),(1,90),(1,91),(1,92),(1,93),(1,94),(1,95),(1,96),(1,97),(1,98),(1,99),(1,100),(1,101),(1,102),(1,103),(1,104),(1,105),(1,106);
/*!40000 ALTER TABLE `leagues_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,'34:38','2020-04-23',5374117935,'31:10',1,1,11,8,NULL,11),(2,'32:56','2020-04-23',5374263124,'18:15',1,1,11,8,NULL,11),(3,'37:34','2020-04-23',5374434818,'30:39',1,1,7,6,NULL,6),(4,'29:23','2020-04-23',5374543725,'7:23',1,1,6,7,NULL,7),(5,'39:15','2020-04-23',5374637328,'44:18',1,1,6,7,NULL,6),(6,'29:30','2020-04-24',5375751497,'12:28',1,1,10,13,NULL,13),(7,'32:17','2020-04-24',5375839426,'26:16',1,1,13,10,NULL,13),(8,'51:49','2020-04-24',5375966447,'34:28',1,1,4,6,NULL,6),(9,'44:49','2020-04-24',5376173268,'31:42',1,1,4,6,NULL,6),(10,'33:50','2020-04-24',5376385261,'22:17',1,1,2,5,NULL,2),(11,'38:34','2020-04-24',5376512784,'17:32',1,1,5,2,NULL,2),(12,'36:05','2020-04-25',5377899567,'13:16',1,1,12,11,NULL,11),(13,'40:46','2020-04-25',5378019067,'30:22',1,1,11,12,NULL,11),(14,'49:13','2020-04-25',5378291191,'21:30',1,1,10,8,NULL,8),(15,'32:45','2020-04-25',5378427150,'4:26',1,1,10,8,NULL,8),(16,'21:51','2020-04-25',5378573436,'22:4',1,1,4,5,NULL,4),(17,'25:45','2020-04-25',5378677021,'27:17',1,1,5,4,NULL,5),(18,'33:10','2020-04-25',5378776518,'29:17',1,1,5,4,NULL,5),(19,'35:22','2020-04-26',5380053716,'41:10',1,1,4,1,NULL,4),(20,'25:37','2020-04-26',5380165383,'23:15',1,1,1,4,NULL,1),(21,'1:01:24','2020-04-26',5380279351,'33:54',1,1,1,4,NULL,4),(22,'34:05','2020-04-26',5380496295,'16:35',1,1,12,9,NULL,9),(23,'38:56','2020-04-26',5380635061,'24:33',1,1,9,12,NULL,12),(24,'55:44','2020-04-26',5380766145,'58:34',1,1,9,12,NULL,9),(25,'32:33','2020-04-26',5380947517,'27:16',1,1,2,7,NULL,2),(26,'24:08','2020-04-26',5381042177,'39:13',1,1,2,7,NULL,2),(27,'26:10','2020-04-27',5382073241,'31:14',1,1,1,7,NULL,1),(28,'34:05','2020-04-27',5382162665,'42:20',1,1,7,1,NULL,7),(29,'30:39','2020-04-27',5382273838,'45:15',1,1,1,7,NULL,1),(30,'41:27','2020-04-27',5382419171,'11:31',1,1,13,14,NULL,14),(31,'16:51','2020-04-27',5382580352,'1:15',1,1,13,14,NULL,14),(32,'21:57','2020-04-27',5382707032,'20:7',1,1,12,8,NULL,12),(33,'41:04','2020-04-27',5382794097,'29:10',1,1,8,12,NULL,8),(34,'34:23','2020-04-27',5382950277,'15:26',1,1,12,8,NULL,8),(35,'25:36','2020-04-28',5384029024,'6:26',1,1,1,6,NULL,6),(36,'51:11','2020-04-28',5384104415,'16:32',1,1,1,6,NULL,6),(37,'35:13','2020-04-28',5384275091,'30:14',1,1,13,8,NULL,13),(38,'34:38','2020-04-28',5384431818,'13:42',1,1,13,8,NULL,8),(39,'24:45','2020-04-28',5384545583,'15:2',1,1,8,13,NULL,8),(40,'39:51','2020-04-28',5384718277,'25:33',1,1,3,5,NULL,5),(41,'47:03','2020-04-28',5384829681,'40:35',1,1,3,5,NULL,3),(42,'43:42','2020-04-28',5384960412,'31:48',1,1,3,5,NULL,5),(43,'46:15','2020-04-29',5385890262,'24:36',1,1,12,14,NULL,14),(44,'32:17','2020-04-29',5386009497,'26:19',1,1,12,14,NULL,12),(45,'33:51','2020-04-29',5386134771,'25:17',1,1,12,14,NULL,12),(46,'39:58','2020-04-29',5386270532,'32:10',1,1,11,9,NULL,11),(47,'34:11','2020-04-29',5386416870,'18:25',1,1,11,9,NULL,9),(48,'45:30','2020-04-29',5386416870,'28:14',1,1,11,9,NULL,11),(49,'43:35','2020-04-29',5386692047,'27:36',1,1,3,2,NULL,2),(50,'31:04','2020-04-29',5386795335,'11:40',1,1,2,3,NULL,3),(51,'30:10','2020-04-29',5386876376,'12:44',1,1,3,2,NULL,2),(52,'55:03','2020-04-30',5387746647,'43:37',1,1,7,5,NULL,7),(53,'24:07','2020-04-30',5387888205,'34:10',1,1,5,7,NULL,5),(54,'26:49','2020-04-30',5387980388,'22:5',1,1,5,7,NULL,5),(55,'42:03','2020-04-30',5388124313,'25:19',1,1,4,2,NULL,4),(56,'30:08','2020-04-30',5388272446,'16:8',1,1,2,4,NULL,2),(57,'35:31','2020-04-30',5388403687,'19:29',1,1,2,4,NULL,4),(58,'42:01','2020-04-30',5388537713,'24:25',1,1,8,9,NULL,9),(59,'35:52','2020-04-30',5388652747,'11:30',1,1,9,8,NULL,8),(60,'53:40','2020-04-30',5388748947,'45:8',1,1,8,9,NULL,8),(61,'27:10','2020-05-01',5389817459,'26:14',1,1,11,10,NULL,11),(62,'31:27','2020-05-01',5389915157,'48:15',1,1,11,10,NULL,11),(63,'39:10','2020-05-01',5390066897,'29:21',1,1,12,13,NULL,12),(64,'23:13','2020-05-01',5390204666,'24:11',1,1,13,12,NULL,13),(65,'24:36','2020-05-01',5390328162,'20:11',1,1,12,13,NULL,12),(66,'32:56','2020-05-01',5390454813,'18:44',1,1,3,4,NULL,4),(67,'37:45','2020-05-01',5390578531,'12:54',1,1,3,4,NULL,4),(68,'36:21','2020-05-02',5391893095,'16:37',1,1,14,11,NULL,11),(69,'34:07','2020-05-02',5392010291,'8:28',1,1,11,14,NULL,14),(70,'1:00:24','2020-05-02',5392118014,'37:16',1,1,14,11,NULL,14),(71,'32:25','2020-05-02',5392355050,'11:46',1,1,7,3,NULL,3),(72,'33:42','2020-05-02',5392497012,'12:53',1,1,3,7,NULL,7),(73,'29:20','2020-05-02',5392618545,'24:34',1,1,3,7,NULL,7),(74,'24:50','2020-05-02',5392725411,'21:6',1,1,5,6,NULL,5),(75,'29:19','2020-05-02',5392828652,'36:13',1,1,5,6,NULL,5),(76,'31:18','2020-05-03',5394006768,'42:19',1,1,3,1,NULL,3),(77,'23:51','2020-05-03',5394145163,'6:35',1,1,1,3,NULL,3),(78,'43:55','2020-05-03',5394145163,'17:21',1,1,8,14,NULL,14),(79,'26:57','2020-05-03',5394419936,'9:26',1,1,14,8,NULL,8),(80,'29:08','2020-05-03',5394533495,'9:14',1,1,8,14,NULL,14),(81,'30:48','2020-05-03',5394679663,'11:26',1,1,10,9,NULL,9),(82,'31:45','2020-05-03',5394785696,'21:20',1,1,9,10,NULL,9),(83,'29:37','2020-05-04',5396061787,'29:10',1,1,14,10,NULL,14),(84,'36:41','2020-05-04',5396144940,'50:15',1,1,14,10,NULL,14),(85,'24:55','2020-05-04',5396320618,'6:36',1,1,7,4,NULL,4),(86,'41:47','2020-05-04',5396441960,'38:21',1,1,4,7,NULL,4),(87,'48:59','2020-05-04',5396632616,'23:22',1,1,11,13,NULL,11),(88,'43:59','2020-05-04',5396780792,'26:47',1,1,11,13,NULL,13),(89,'48:57','2020-05-04',5396903693,'20:39',1,1,13,11,NULL,11),(90,'56:02','2020-05-05',5398079892,'41:20',1,1,2,6,NULL,2),(91,'48:37','2020-05-05',5398210311,'29:29',1,1,2,6,NULL,2),(92,'45:00','2020-05-05',5398400229,'44:22',1,1,5,1,NULL,5),(93,'24:15','2020-05-05',5398553417,'32:8',1,1,5,1,NULL,5),(94,'30:16','2020-05-05',5398664384,'40:23',1,1,9,14,NULL,9),(95,'31:12','2020-05-05',5398766390,'18:45',1,1,14,9,NULL,9),(96,'19:50','2020-05-05',5398865840,'22:8',1,1,12,10,NULL,12),(97,'42:43','2020-05-05',5398940793,'26:36',1,1,12,10,NULL,12),(98,'20:48','2020-05-06',5399901962,'31:4',1,1,9,13,NULL,9),(99,'29:42','2020-05-06',5399976098,'24:8',1,1,13,9,NULL,13),(100,'25:40','2020-05-06',5400067902,'10:35',1,1,13,9,NULL,9),(101,'29:30','2020-05-06',5400231523,'27:6',1,1,2,1,NULL,2),(102,'24:44','2020-05-06',5400343456,'38:8',1,1,2,1,NULL,2),(103,'26:30','2020-05-06',5400483542,'8:33',1,1,3,6,NULL,6),(104,'43:41','2020-05-06',5400568305,'39:36',1,1,3,6,NULL,3),(105,'22:10','2020-05-06',5400677251,'27:6',1,1,3,6,NULL,3),(106,'42:34','2020-05-07',5402204871,'48:38',1,1,1,7,NULL,1),(107,'30:22','2020-05-08',5403556371,'12:23',1,NULL,11,6,1,6),(108,'52:23','2020-05-08',5403556371,'39:27',1,NULL,11,6,1,6),(109,'39:13','2020-05-08',5403830614,'34:10',1,NULL,14,5,1,14),(110,'34:50','2020-05-08',5403958999,'11:37',1,NULL,5,14,1,14),(111,'59:07','2020-05-08',5404104229,'25:47',1,NULL,9,4,1,4),(112,'34:46','2020-05-08',5404261360,'38:9',1,NULL,4,9,1,4),(113,'50:25','2020-05-09',5405448379,'25:29',1,NULL,11,9,1,9),(114,'42:19','2020-05-09',5405573632,'16:37',1,NULL,11,9,1,9),(115,'33:06','2020-05-09',5405727918,'26:9',1,NULL,2,8,1,2),(116,'31:51','2020-05-09',5405866989,'12:30',1,NULL,8,2,1,2),(117,'35:51','2020-05-09',5406012245,'32:10',1,NULL,14,6,1,14),(118,'37:34','2020-05-09',5406134410,'17:36',1,NULL,6,14,1,14),(119,'42:42','2020-05-10',5407485947,'26:26',1,NULL,5,8,1,5),(120,'33:47','2020-05-10',5407606145,'25:17',1,NULL,8,5,1,5),(121,'48:25','2020-05-10',5407764028,'40:27',1,NULL,9,6,1,9),(122,'21:49','2020-05-10',5407913452,'20:5',1,NULL,9,6,1,9),(123,'31:26','2020-05-10',5408031242,'35:14',1,NULL,2,4,1,2),(124,'32:18','2020-05-10',5408143396,'19:27',1,NULL,4,2,1,2),(125,'38:46','2020-05-11',5409345502,'39:8',1,NULL,4,5,1,4),(126,'36:14','2020-05-11',5409453940,'26:15',1,NULL,5,4,1,5),(127,'40:06','2020-05-11',5409569580,'40:10',1,NULL,4,5,1,4),(128,'35:38','2020-05-11',5409783750,'32:13',1,NULL,4,9,1,4),(129,'39:39','2020-05-11',5409896513,'8:34',1,NULL,9,4,1,4),(130,'50:17','2020-05-11',5410011536,'18:25',1,NULL,14,2,1,2),(131,'24:57','2020-05-11',5410125989,'9:26',1,NULL,14,2,1,2),(132,'36:15','2020-05-12',5411185196,'31:5',1,NULL,14,4,1,14),(133,'35:53','2020-05-12',5411281598,'14:27',1,NULL,14,4,1,14),(134,'45:31','2020-05-12',5411681016,'34:19',1,NULL,2,14,1,2),(135,'17:54','2020-05-12',5411811640,'3:19',1,NULL,14,2,1,2),(136,'27:10','2020-05-12',5411894214,'35:15',1,NULL,2,14,1,2);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'2020-05-13',NULL,NULL,'TeamProfilePage Nigma',NULL),(2,'2020-05-13',NULL,NULL,'TeamProfilePage Secret',NULL),(3,'2020-05-13',NULL,NULL,'OG',NULL),(4,'2020-05-13',NULL,NULL,'TeamProfilePage Liquid',NULL),(5,'2020-05-13',NULL,NULL,'Alliance',NULL),(6,'2020-05-13',NULL,NULL,'Ninjas in Pyjamas',NULL),(7,'2020-05-13',NULL,NULL,'OG.Seed',NULL),(8,'2020-05-13',NULL,NULL,'Natus Vincere',NULL),(9,'2020-05-13',NULL,NULL,'Virtus.pro',NULL),(10,'2020-05-13',NULL,NULL,'B8',NULL),(11,'2020-05-13',NULL,NULL,'HellRaisers',NULL),(12,'2020-05-13',NULL,NULL,'FlyToMoon',NULL),(13,'2020-05-13',NULL,NULL,'TeamProfilePage Spirit',NULL),(14,'2020-05-13',NULL,NULL,'VP.Prodigy',NULL);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teams_leagues`
--

LOCK TABLES `teams_leagues` WRITE;
/*!40000 ALTER TABLE `teams_leagues` DISABLE KEYS */;
INSERT INTO `teams_leagues` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1);
/*!40000 ALTER TABLE `teams_leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teams_matches`
--

LOCK TABLES `teams_matches` WRITE;
/*!40000 ALTER TABLE `teams_matches` DISABLE KEYS */;
INSERT INTO `teams_matches` VALUES (1,20),(1,21),(1,27),(1,29),(1,35),(1,36),(1,77),(1,106),(2,10),(2,25),(2,26),(2,50),(2,56),(2,57),(2,90),(2,91),(2,101),(2,102),(2,115),(2,123),(2,134),(2,136),(3,40),(3,41),(3,42),(3,49),(3,51),(3,66),(3,67),(3,72),(3,73),(3,76),(3,103),(3,104),(3,105),(4,8),(4,9),(4,16),(4,19),(4,55),(4,86),(4,112),(4,124),(4,125),(4,127),(4,128),(5,11),(5,17),(5,18),(5,53),(5,54),(5,74),(5,75),(5,92),(5,93),(5,110),(5,119),(5,126),(6,4),(6,5),(6,118),(7,3),(7,28),(7,52),(7,71),(7,85),(8,33),(8,39),(8,58),(8,60),(8,78),(8,80),(8,116),(8,120),(9,23),(9,24),(9,59),(9,82),(9,94),(9,98),(9,111),(9,121),(9,122),(9,129),(10,6),(10,14),(10,15),(10,81),(11,1),(11,2),(11,13),(11,46),(11,47),(11,48),(11,61),(11,62),(11,69),(11,87),(11,88),(11,107),(11,108),(11,113),(11,114),(12,12),(12,22),(12,32),(12,34),(12,43),(12,44),(12,45),(12,63),(12,65),(12,96),(12,97),(13,7),(13,30),(13,31),(13,37),(13,38),(13,64),(13,89),(13,99),(13,100),(14,68),(14,70),(14,79),(14,83),(14,84),(14,95),(14,109),(14,117),(14,130),(14,131),(14,132),(14,133),(14,135),(1,19),(1,28),(1,76),(1,92),(1,93),(1,101),(1,102),(2,11),(2,49),(2,51),(2,55),(2,116),(2,124),(2,130),(2,131),(2,135),(3,50),(3,71),(3,77),(4,17),(4,18),(4,20),(4,21),(4,56),(4,57),(4,66),(4,67),(4,85),(4,111),(4,123),(4,126),(4,129),(4,132),(4,133),(5,10),(5,16),(5,40),(5,41),(5,42),(5,52),(5,109),(5,120),(5,125),(5,127),(6,3),(6,8),(6,9),(6,35),(6,36),(6,74),(6,75),(6,90),(6,91),(6,103),(6,104),(6,105),(6,107),(6,108),(6,117),(6,121),(6,122),(7,4),(7,5),(7,25),(7,26),(7,27),(7,29),(7,53),(7,54),(7,72),(7,73),(7,86),(7,106),(8,1),(8,2),(8,14),(8,15),(8,32),(8,34),(8,37),(8,38),(8,59),(8,79),(8,115),(8,119),(9,22),(9,46),(9,47),(9,48),(9,58),(9,60),(9,81),(9,95),(9,99),(9,100),(9,112),(9,113),(9,114),(9,128),(10,7),(10,61),(10,62),(10,82),(10,83),(10,84),(10,96),(10,97),(11,12),(11,68),(11,70),(11,89),(12,13),(12,23),(12,24),(12,33),(12,64),(13,6),(13,39),(13,63),(13,65),(13,87),(13,88),(13,98),(14,30),(14,31),(14,43),(14,44),(14,45),(14,69),(14,78),(14,80),(14,94),(14,110),(14,118),(14,134),(14,136);
/*!40000 ALTER TABLE `teams_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teams_tournaments`
--

LOCK TABLES `teams_tournaments` WRITE;
/*!40000 ALTER TABLE `teams_tournaments` DISABLE KEYS */;
INSERT INTO `teams_tournaments` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1);
/*!40000 ALTER TABLE `teams_tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,NULL,'2020-05-16','2020-05-13','DOUBLEELIMINATION',NULL,'WePlay! Pushka LeagueProfilePage Season 1: Division 1 - tournament','2020-05-08',1,1,NULL);
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tournaments_matches`
--

LOCK TABLES `tournaments_matches` WRITE;
/*!40000 ALTER TABLE `tournaments_matches` DISABLE KEYS */;
INSERT INTO `tournaments_matches` VALUES (1,107),(1,108),(1,109),(1,110),(1,111),(1,112),(1,113),(1,114),(1,115),(1,116),(1,117),(1,118),(1,119),(1,120),(1,121),(1,122),(1,123),(1,124),(1,125),(1,126),(1,127),(1,128),(1,129),(1,130),(1,131),(1,132),(1,133),(1,134),(1,135),(1,136);
/*!40000 ALTER TABLE `tournaments_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'1997-06-20','2020-05-09','user@dontfeed.com','Amer','Al-Barkawi','1','Miracle-'),(2,'1995-03-06','2020-05-09','user@dontfeed.com','Aliwi','Omar','1','w33'),(3,'1995-01-20','2020-05-09','user@dontfeed.com','Ivan','Ivanov','1','MinD_ContRoL'),(4,'1995-06-17','2020-05-09','user@dontfeed.com','Maroun','Merhej','1','GH'),(5,'1992-10-28','2020-05-09','user@dontfeed.com','Kuro','Takhasomi','1','KuroKy'),(6,'1995-03-03','2020-05-09','user@dontfeed.com','Lasse','Urpalainen','1','Matumbaman'),(7,'2000-09-28','2020-05-09','user@dontfeed.com','Michal','Jankowski','1','Nisha'),(8,'1997-08-05','2020-05-09','user@dontfeed.com','Ludwig','Wåhlberg','1','zai'),(9,'1994-10-17','2020-05-09','user@dontfeed.com','Yazied','Jaradat','1','YapzOr'),(10,'1990-03-06','2020-05-09','user@dontfeed.com','Clement','Ivanov','1','Puppey'),(11,'1999-02-13','2020-05-09','user@dontfeed.com','Syed','Hassan','1','SumaiL'),(12,'1996-06-03','2020-05-09','user@dontfeed.com','Yeik','Zheng','1','MidOne'),(13,'1992-05-27','2020-05-09','user@dontfeed.com','Sébastien','Debs','1','Ceb'),(14,'1995-06-12','2020-05-09','user@dontfeed.com','Martin','Sazdov','1','Saksa'),(15,'1993-10-08','2020-05-09','user@dontfeed.com','Johan','Sundstein','1','N0tail'),(16,'1999-07-26','2020-05-09','user@dontfeed.com','Michael','Vu','1','miCKe'),(17,'1995-09-27','2020-05-09','user@dontfeed.com','Maximilian','Bröcker','1','qojqva'),(18,'1998-04-10','2020-05-09','user@dontfeed.com','Samuel','Svahn','1','Boxi'),(19,'1998-07-04','2020-05-09','user@dontfeed.com','Tommy','Lee','1','Taiga'),(20,'1994-06-18','2020-05-09','user@dontfeed.com','Aydin','Sarkohi','1','iNSaNiA'),(21,NULL,'2020-05-09','user@dontfeed.com','Nikolay','Nikolov','1','Nikobaby'),(22,'1995-05-31','2020-05-09','user@dontfeed.com','Linus','Blomdin','1','Limmp'),(23,'1992-04-01','2020-05-09','user@dontfeed.com','Gustav','Magnusson','1','s4'),(24,'1994-04-24','2020-05-09','user@dontfeed.com','Simon','Haag','1','Handsken'),(25,'1995-09-24','2020-05-09','user@dontfeed.com','Artsiom','Barshak','1','fng'),(26,'1997-09-01','2020-05-09','user@dontfeed.com','Charlie','Arat','1','CharlieDota'),(27,'2000-11-10','2020-05-09','user@dontfeed.com','Ondřej','Štarha','1','Supream^'),(28,'2000-10-13','2020-05-09','user@dontfeed.com','Jonáš','Volek','1','SabeRLight-'),(29,'1995-09-03','2020-05-09','user@dontfeed.com','Adrian','Kryeziu','1','Era'),(30,'1997-05-16','2020-05-09','user@dontfeed.com','Akbar','Butaev','1','SoNNeikO'),(31,NULL,'2020-05-09','user@dontfeed.com','Omar','Dabachach','1','Madara'),(32,'1992-12-26','2020-05-09','user@dontfeed.com','Rasmus','Blomdin','1','Chessie'),(33,NULL,'2020-05-09','user@dontfeed.com','Andreas','Ragnemalm','1','Xibbe'),(34,'1994-05-05','2020-05-09','user@dontfeed.com','Zakari','Freedman','1','Zfreek'),(35,NULL,'2020-05-09','user@dontfeed.com','Peetu-Elmeri','Väätäinen','1','Peksu'),(36,'1999-08-08','2020-05-09','user@dontfeed.com','Vladislav','Krystanek','1','Crystallize'),(37,'1998-10-25','2020-05-09','user@dontfeed.com','Idan','Vardanian','1','MagicaL'),(38,'1992-06-30','2020-05-09','user@dontfeed.com','Pavel','Khvastunov','1','9pasha'),(39,'1994-03-09','2020-05-09','user@dontfeed.com','Semion','Krivulya','1','CemaTheSlayer'),(40,'2002-04-12','2020-05-09','user@dontfeed.com','Ilyas','Ganeev','1','illias'),(41,'1999-10-29','2020-05-09','user@dontfeed.com','Igor','Filatov','1','iLTW'),(42,'1997-09-04','2020-05-09','user@dontfeed.com','Vladimir','Mineko','1','No[o]ne'),(43,'1996-09-02','2020-05-09','user@dontfeed.com','Roman','Fominok','1','Resolut1on'),(44,'1998-12-02','2020-05-09','user@dontfeed.com','Bakyt','Emilzhanov','1','Zayac'),(45,'1990-08-07','2020-05-09','user@dontfeed.com','Alexey','Berezin','1','Solo'),(46,'1997-08-21','2020-05-09','user@dontfeed.com','Steve','Ye','1','Xcaliber'),(47,'1989-12-30','2020-05-09','user@dontfeed.com','Danil','Ishutin','1','Dendi'),(48,'1994-08-24','2020-05-09','user@dontfeed.com','Andrey','Kadyk','1','Ghostik'),(49,'1993-08-22','2020-05-09','user@dontfeed.com','Rinat','Abdullin','1','KingR'),(50,'1990-04-23','2020-05-09','user@dontfeed.com','Nikola','Popović','1','LeBronDota'),(51,'1996-11-12','2020-05-09','user@dontfeed.com','Alexander','Levin','1','Nix'),(52,'2000-10-19','2020-05-09','user@dontfeed.com','Arsian','Shadjanov','1','xannii'),(53,'1992-11-16','2020-05-09','user@dontfeed.com','Gleb','Lipatnikov','1','Funn1k'),(54,'1993-12-14','2020-05-09','user@dontfeed.com','Vladimir','Nikogosyan','1','RodjER'),(55,'1997-11-30','2020-05-09','user@dontfeed.com','Yaroslav','Naidenov','1','Miposhka'),(56,'2000-08-11','2020-05-09','user@dontfeed.com','Alik','Vorobey','1','V-Tune'),(57,'1997-04-13','2020-05-09','user@dontfeed.com','Bogdan','Vasylenko','1','Iceberg'),(58,'1996-08-05','2020-05-09','user@dontfeed.com','Victor','Nigrini','1','GeneRaL'),(59,'1997-09-15','2020-05-09','user@dontfeed.com','Ilya','Korobkin','1','ALOHADANCE'),(60,'1991-03-06','2020-05-09','user@dontfeed.com','Andrey','Bondarenko','1','ALWAYSWANNAFLY'),(61,NULL,'2020-05-09','user@dontfeed.com','Anton','Shkredov','1','DyrachYO'),(62,NULL,'2020-05-09','user@dontfeed.com','Egor','Kozlov','1','Ergon'),(63,'1997-03-13','2020-05-09','user@dontfeed.com','Vasily','Shishkin','1','AfterLife'),(64,'1998-08-10','2020-05-09','user@dontfeed.com','Alexander','Hmelevskoy','1','Immersion'),(65,'1997-07-24','2020-05-09','user@dontfeed.com','Mikhail','Agatov','1','Misha'),(66,'2002-05-16','2020-05-09','user@dontfeed.com','Egor','Grigorenko','1','epileptick1d'),(67,'1994-06-07','2020-05-09','user@dontfeed.com','Rostislav','Lozovoi','1','fn'),(68,'2000-01-08','2020-05-09','user@dontfeed.com','Dmitry','Dorokhin','1','DM'),(69,'2001-02-12','2020-05-09','user@dontfeed.com','Vitalie','Melnic','1','Save-'),(70,'1997-08-27','2020-05-09','user@dontfeed.com','Albert','Garaev','1','eine');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_leagues`
--

LOCK TABLES `users_leagues` WRITE;
/*!40000 ALTER TABLE `users_leagues` DISABLE KEYS */;
INSERT INTO `users_leagues` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(51,1),(52,1),(53,1),(54,1),(55,1),(56,1),(57,1),(58,1),(59,1),(60,1),(61,1),(62,1),(63,1),(64,1),(65,1),(66,1),(67,1),(68,1),(69,1),(70,1);
/*!40000 ALTER TABLE `users_leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_teams`
--

LOCK TABLES `users_teams` WRITE;
/*!40000 ALTER TABLE `users_teams` DISABLE KEYS */;
INSERT INTO `users_teams` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,2),(7,2),(8,2),(9,2),(10,2),(11,3),(12,3),(13,3),(14,3),(15,3),(16,4),(17,4),(18,4),(19,4),(20,4),(21,5),(22,5),(23,5),(24,5),(25,5),(26,6),(27,6),(28,6),(29,6),(30,6),(31,7),(32,7),(33,7),(34,7),(35,7),(36,8),(37,8),(38,8),(39,8),(40,8),(41,9),(42,9),(43,9),(44,9),(45,9),(46,10),(47,10),(48,10),(49,10),(50,10),(51,11),(52,11),(53,11),(54,11),(55,11),(56,12),(57,12),(58,12),(59,12),(60,12),(61,13),(62,13),(63,13),(64,13),(65,13),(66,14),(67,14),(68,14),(69,14),(70,14);
/*!40000 ALTER TABLE `users_teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_tournaments`
--

LOCK TABLES `users_tournaments` WRITE;
/*!40000 ALTER TABLE `users_tournaments` DISABLE KEYS */;
INSERT INTO `users_tournaments` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(51,1),(52,1),(53,1),(54,1),(55,1),(56,1),(57,1),(58,1),(59,1),(60,1),(61,1),(62,1),(63,1),(64,1),(65,1),(66,1),(67,1),(68,1),(69,1),(70,1);
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

-- Dump completed on 2020-05-24 12:50:29
