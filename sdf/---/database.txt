CREATE DATABASE  IF NOT EXISTS `sdf` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sdf`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sdf
-- ------------------------------------------------------
-- Server version	5.6.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cus`
--

DROP TABLE IF EXISTS `cus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cus` (
  `id_cus` bigint(1) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(35) NOT NULL,
  `pass` varchar(25) NOT NULL,
  `cus_since` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `verified` smallint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_cus`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COMMENT='To store details, except in case of addresses and so(mob no, which is not required currently).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cus`
--

LOCK TABLES `cus` WRITE;
/*!40000 ALTER TABLE `cus` DISABLE KEYS */;
INSERT INTO `cus` VALUES (1,'shubhamsengar88@gmail.com','aaa','2017-11-09 01:06:31',1),(2,'one@one.one','one','2017-11-12 01:37:09',1),(3,'two@two.two','two','2017-11-13 01:33:56',1),(4,'one@one.omc','one','2017-11-26 19:03:59',0),(5,'six@six.six','six','2017-11-26 19:20:24',0),(6,'oye@oye.oye','oye','2017-11-26 19:23:46',0),(7,'hoe@hoe.hoe','hoe','2017-11-26 19:25:45',0),(8,'nin@nin.nin','nin','2017-11-26 21:11:21',0),(9,'shubhamser88@gmail.com','aaa','2017-11-26 21:13:33',0),(10,'sona@sona.sona','a','2017-11-27 04:12:41',0);
/*!40000 ALTER TABLE `cus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cus_add`
--

DROP TABLE IF EXISTS `cus_add`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cus_add` (
  `id_cus_add` bigint(1) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_cus` bigint(1) unsigned NOT NULL,
  `name` varchar(45) NOT NULL,
  `deli_add` varchar(250) NOT NULL,
  `state` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `pincode` int(6) unsigned NOT NULL,
  PRIMARY KEY (`id_cus_add`),
  KEY `fk_id_cus_key_idx` (`fk_id_cus`),
  CONSTRAINT `fk_id_cus_key` FOREIGN KEY (`fk_id_cus`) REFERENCES `cus` (`id_cus`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1 COMMENT='To store multiple addresses for a customer.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cus_add`
--

LOCK TABLES `cus_add` WRITE;
/*!40000 ALTER TABLE `cus_add` DISABLE KEYS */;
INSERT INTO `cus_add` VALUES (1,1,'Ravi Shankar.','D-99,Peeragarhi,Nagin Lake Appartmenst.','Delhi','Peeragarhi',110063),(2,1,'Ravi Shankar.','D-99,Peeragarhi,Nagin Lake Appartmen','Delhi','Peeragarhi',110063),(3,2,'Ravi Shankar.','D-99,Peeragarhi,Nagin Lake Appartmenst.','Delhi','Peeragarhi',110063),(4,7,'Ravi Shankar.','D-99,Peeragarhi,Nagin Lake Appartmenst.','Delhi','Peeragarhi',110063),(5,8,'Ravi Shankar.','D-99,Peeragarhi,Nagin Lake Appartmenst.','Delhi','Peeragarhi',110063),(6,1,'kjk','kjkhkhj','Jammu & Kashmir','kjkj',213456),(7,1,'fcjk','kljlkjlkjlk','Lakshadweep','kljjk',123123),(8,1,'sdf','kjkljkjlk','Karnataka','kjlkjlkk',123123),(9,1,'jkj','435454135','Madhya Pradesh','lkkljklj',123132),(10,1,'12312132','mkjkljlk','Karnataka','\';k;lkl',546545),(11,1,'cjkvjlk','iiojkl','Jharkhand','kjkjklj',456465),(12,1,'sdjfkj','kjdskjf','Karnataka','kjkjlk',111111),(13,1,'jdflkg','jkldsjk','Karnataka','dskfjkl',123213),(14,1,'kfjk','kjkdlfj','Karnataka','kdfgjk',465456),(15,1,'lkjlkjk','kljlkjlkjlkj','Karnataka','jkjlkjlk',111111),(16,1,'545','54\n54','Chhattisgarh','45',545454),(17,1,'ljlkj','kjlkjlk','Karnataka','54654',454645),(18,1,'5454','45454','Maharashtra','645465',154545),(19,1,'jlkjkl','kjkljlkjlk','Lakshadweep',';kljkl',545654),(20,1,'ljlkj','jlkjkljkl','Karnataka','jhkjhkj',111111),(21,1,'.kjkljl','kjlkjlkjlk','Lakshadweep','656',546546),(22,1,'klfjg','jfdkjgk','Jammu & Kashmir','kjfdkgj',456456),(23,1,'sdlkjlk','kjsdlkjfk','Jammu & Kashmir','kjkljlk',123154),(24,1,'dslkjfklj','kjdslkjflkadsj','Lakshadweep','klsdjlkfjlsk',123132),(25,1,'ksdjflkjs','kdjkslfjlksdj','Karnataka','kjkdsjfkj',123456),(26,1,'.cvk','kjkjl','Jammu & Kashmir','kjkjk',123456),(27,1,'ljlkj','kljkl','Jammu & Kashmir','jlkjjkljlk',153151),(28,1,'klkl','lkl;kl;k;','Lakshadweep',';;lklk;l',123456),(29,1,'llklk',';lk;lk;lk;l','Karnataka','lk;kl;k',564544),(30,1,'d;.d.;.f;','5435135421','Andhra Pradesh',',l,l,l',444444),(31,1,'kjkjkkjkj','kjlkjlkjl','Jammu & Kashmir','jkjlk',123321),(32,1,'lkjk','lkjlkjlk','Karnataka','545454',545454);
/*!40000 ALTER TABLE `cus_add` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cus_add_contact`
--

DROP TABLE IF EXISTS `cus_add_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cus_add_contact` (
  `id_cus_add_contact` bigint(1) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_cus` bigint(1) unsigned NOT NULL,
  `fk_id_cus_add` bigint(1) unsigned NOT NULL,
  `fk_id_cus_contact` bigint(1) unsigned NOT NULL,
  `primary` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_cus_add_contact`),
  KEY `fk_id_cus_in_cus_add_contact_idx` (`fk_id_cus`),
  KEY `fk_id_cus_add_in_cus_add_contact_idx` (`fk_id_cus_add`),
  KEY `fk_id_cus_contact_in_cus_add_contact_idx` (`fk_id_cus_contact`),
  CONSTRAINT `fk_id_cus_add_in_cus_add_contact` FOREIGN KEY (`fk_id_cus_add`) REFERENCES `cus_add` (`id_cus_add`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_cus_contact_in_cus_add_contact` FOREIGN KEY (`fk_id_cus_contact`) REFERENCES `cus_contact` (`id_cus_contact`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_cus_in_cus_add_contact` FOREIGN KEY (`fk_id_cus`) REFERENCES `cus` (`id_cus`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cus_add_contact`
--

LOCK TABLES `cus_add_contact` WRITE;
/*!40000 ALTER TABLE `cus_add_contact` DISABLE KEYS */;
INSERT INTO `cus_add_contact` VALUES (1,1,1,1,NULL),(2,1,1,2,NULL),(3,1,2,2,NULL),(4,2,3,3,NULL),(5,7,4,4,NULL),(6,8,5,5,NULL),(7,1,6,6,NULL),(8,1,7,7,NULL),(9,1,8,8,NULL),(10,1,9,9,NULL),(11,1,10,10,NULL),(12,1,11,11,NULL),(13,1,12,12,NULL),(14,1,13,13,NULL),(15,1,14,14,NULL),(16,1,15,15,NULL),(17,1,16,7,NULL),(18,1,17,16,NULL),(19,1,18,17,NULL),(20,1,19,18,NULL),(21,1,20,19,NULL),(22,1,21,20,NULL),(23,1,22,21,NULL),(24,1,23,22,NULL),(25,1,24,23,NULL),(26,1,25,24,NULL),(27,1,26,25,NULL),(28,1,27,26,NULL),(29,1,28,27,NULL),(30,1,29,28,NULL),(31,1,30,29,NULL),(32,1,31,30,NULL),(33,1,32,31,NULL);
/*!40000 ALTER TABLE `cus_add_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cus_contact`
--

DROP TABLE IF EXISTS `cus_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cus_contact` (
  `id_cus_contact` bigint(1) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_cus` bigint(1) unsigned NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  PRIMARY KEY (`id_cus_contact`),
  KEY `fk_id_cus_in_cus_contact_key_idx` (`fk_id_cus`),
  CONSTRAINT `fk_id_cus_in_cus_contact_key` FOREIGN KEY (`fk_id_cus`) REFERENCES `cus` (`id_cus`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cus_contact`
--

LOCK TABLES `cus_contact` WRITE;
/*!40000 ALTER TABLE `cus_contact` DISABLE KEYS */;
INSERT INTO `cus_contact` VALUES (1,1,'79846519845'),(2,1,'79846519846'),(3,2,'79846519845'),(4,7,'79846519845'),(5,8,'79846519845'),(6,1,'456789'),(7,1,'4545454'),(8,1,'123465'),(9,1,'132132'),(10,1,'456456465'),(11,1,'4564654'),(12,1,'1111213215'),(13,1,'21123121'),(14,1,'45645645'),(15,1,'1213165'),(16,1,'5465456456'),(17,1,'54654654'),(18,1,'646468'),(19,1,'123132165'),(20,1,'4654646'),(21,1,'45454564'),(22,1,'546546546'),(23,1,'212312312'),(24,1,'546546545'),(25,1,'45656454'),(26,1,'54564465'),(27,1,'5454545645'),(28,1,'545554'),(29,1,'45454654454'),(30,1,'45695285'),(31,1,'56465465465');
/*!40000 ALTER TABLE `cus_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kurti`
--

DROP TABLE IF EXISTS `kurti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kurti` (
  `id_kurti` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_kurti_comm` int(1) unsigned NOT NULL,
  `colors` varchar(300) DEFAULT NULL,
  `prices` varchar(300) NOT NULL,
  `sizes` varchar(100) DEFAULT NULL,
  `qty` varchar(300) NOT NULL,
  `out_of_stock` int(1) NOT NULL DEFAULT '1',
  `entry_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_kurti`),
  UNIQUE KEY `fk_id_kurti_comm_UNIQUE` (`fk_id_kurti_comm`),
  KEY `fk-id-article_idx` (`fk_id_kurti_comm`),
  CONSTRAINT `fk-id-kurti-comm` FOREIGN KEY (`fk_id_kurti_comm`) REFERENCES `kurti_comm` (`id_kurti_comm`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kurti`
--

LOCK TABLES `kurti` WRITE;
/*!40000 ALTER TABLE `kurti` DISABLE KEYS */;
INSERT INTO `kurti` VALUES (1,1,'[\"green\"]','[1799]','[\"xl\",\"40\"]','[0,0]',0,'2017-12-01 18:56:53'),(2,2,'[\"red\"]','[9999]','[\"xxxl\"]','[0]',0,'2017-12-02 18:56:53'),(3,3,'[\"green\"]','[2200]','[\"m\",\"l\",\"xl\",\"xxl\",\"xxxl\"]','[0,0,0,0,0]',0,'2017-12-03 18:56:53'),(4,4,'[\"blue\"]','[2000]','[\"s\",\"xxxl\",\"46\"]','[0,0,0]',0,'2017-12-04 18:56:53'),(5,5,'[\"blue\"]','[1800]','[\"xxl\",\"xxxl\",\"36\",\"38\",\"40\"]','[5,15,25,40,18]',1,'2017-12-05 18:56:53'),(6,6,'[\"red\"]','[1800]','[\"m\",\"44\",\"50\"]','[25,24,25]',1,'2017-12-06 18:56:53'),(7,7,'[\"red\"]','[3000]','[\"36\"]','[12]',1,'2017-12-07 18:56:53'),(8,8,'[\"blue\"]','[2500]','[\"l\",\"xxl\",\"40\",\"44\"]','[40,30,25,35]',1,'2017-12-05 18:56:53'),(9,9,'[\"red\"]','[1000]','[\"s\",\"52\"]','[35,40]',1,'2017-12-09 18:56:53'),(10,10,'[\"blue\"]','[3500]','[\"m\",\"xxl\",\"36\",\"46\"]','[35,25,10,40]',1,'2017-12-02 18:56:53');
/*!40000 ALTER TABLE `kurti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kurti_comm`
--

DROP TABLE IF EXISTS `kurti_comm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kurti_comm` (
  `id_kurti_comm` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `pattern` varchar(50) NOT NULL,
  `print_pattern` varchar(100) NOT NULL,
  `sleeve` varchar(40) NOT NULL,
  `neck` varchar(45) NOT NULL,
  `fabric` varchar(70) NOT NULL,
  `occasion` varchar(70) NOT NULL,
  `product_desc` varchar(300) NOT NULL,
  PRIMARY KEY (`id_kurti_comm`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kurti_comm`
--

LOCK TABLES `kurti_comm` WRITE;
/*!40000 ALTER TABLE `kurti_comm` DISABLE KEYS */;
INSERT INTO `kurti_comm` VALUES (1,'1 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','0','[0,1,3,6]','3','5','6','[1]','1 Product Description.'),(2,'2 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','3','[5,15,2]','1','6','9','[1,3]','2 Product Description.'),(3,'3 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','5','[15,5,1]','3','2','10','[2]','3 Product Description.'),(4,'4 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','2','[2,4,6]','1','1','7','[1,2]','4 Product Description.'),(5,'5 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','0','[3,5]','4','1','6','[3]','5 Product Description.'),(6,'6 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','2','[7,14]','1','2','3','[1,3]','6 Product Description.'),(7,'7 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','2','[10,11,12]','2','5','7','[1,2]','7 Product Description.'),(8,'8 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','4','[2,4,7]','4','1','3','[2]','8 Product Description.'),(9,'9 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','0','[0]','0','0','0','[0]','9 Product Description.'),(10,'10 Kurti Name is Supposed to me long string and this text is just to make the string long, long, long as long as possible,bitch.','5','[1,3,5]','3','4','8','[2,3]','10 Product Description.'),(11,'11','11','','11','','11','11','111'),(12,'12','12','','12','','12','12','12'),(13,'13','13','','13','','13','13','13'),(14,'14','14','','14','','14','14','14'),(15,'14','14','','14','','14','14','14'),(16,'14','14','','14','','14','14','14'),(17,'14','14','','14','','14','14','14'),(18,'15','15','','15','','15','15','15'),(19,'kurit name','0','Array','0','0','0','','prod desc'),(20,'name 2','3','[0,3,4]','2','2','3','2','desc 2'),(21,'name 3','3','[0,4]','2','2','4','1','desc3'),(22,'naem 4','3','[2]','3','4','4','1','lkjsdf'),(23,'ljkfdgkl','0','[0]','1','0','1','[0,1]','----'),(24,'dsfsd','0','[5]','1','3','3','[1]','jlk');
/*!40000 ALTER TABLE `kurti_comm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id_orders` bigint(1) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_cus_add_contact` bigint(1) unsigned NOT NULL,
  `tid` bigint(1) NOT NULL,
  `orders` mediumtext NOT NULL,
  `order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deli_status` varchar(200) NOT NULL,
  `payment_status` varchar(200) NOT NULL,
  `track_id` varchar(1000) DEFAULT NULL,
  `ship_date` mediumtext,
  `bogus` tinyint(1) DEFAULT '0',
  `comments` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_orders`),
  UNIQUE KEY `tid_UNIQUE` (`tid`),
  KEY `fk_id_cus_contact_in_orders_idx` (`fk_id_cus_add_contact`),
  CONSTRAINT `fk_id_cus_add_contact` FOREIGN KEY (`fk_id_cus_add_contact`) REFERENCES `cus_add_contact` (`id_cus_add_contact`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,101,'[[3,\"green\",\"xxl\",1,0,2200,0],[3,\"green\",\"xxxl\",1,0,2200,0],[3,\"green\",\"xl\",1,0,2200,0]]','2017-06-12 15:40:13','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(2,1,102,'[[3,\"green\",\"xxl\",1,0,2200,0],[3,\"green\",\"xxxl\",1,0,2200,0],[3,\"green\",\"xl\",1,0,2200,0]]','2017-07-12 15:52:13','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(3,1,103,'[[3,\"green\",\"xxl\",1,0,2200,0],[3,\"green\",\"xxxl\",1,0,2200,0],[3,\"green\",\"xl\",1,0,2200,0]]','2017-08-12 15:52:18','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(4,1,104,'[[3,\"green\",\"xxl\",1,0,2200,0],[3,\"green\",\"xxxl\",1,0,2200,0],[3,\"green\",\"xl\",1,0,2200,0]]','2017-09-12 15:52:21','[0,1,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(5,1,105,'[[3,\"green\",\"xxl\",1,0,2200,3],[3,\"green\",\"xxxl\",1,0,2200,3],[3,\"green\",\"xl\",1,0,2200,0]]','2017-10-12 15:52:24','[0,1,0]','[0,1,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(6,1,106,'[[3,\"green\",\"xxl\",1,0,2200,3],[3,\"green\",\"xxxl\",1,0,2200,4],[3,\"green\",\"xl\",1,0,2200,3]]','2017-11-12 15:52:27','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(7,1,107,'[[3,\"green\",\"xl\",1,0,2200,3]]','2017-11-12 18:36:36','[0]','[1]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL),(8,4,108,'[[2,\"red\",\"xxxl\",1,0,1500,0]]','2017-11-12 18:42:50','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(9,4,109,'[[2,\"red\",\"xxxl\",1,0,1500,0]]','2017-11-12 18:47:43','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(10,1,110,'[[3,\"green\",\"l\",1,0,2200,2],[3,\"green\",\"xl\",1,0,2200,3]]','2017-11-13 23:27:37','[3,0]','[1,1]','[\"--NA--\",\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\",\"1000-12-31T18:30:00.000Z\"]',0,NULL),(17,1,111,'[[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[3,\"green\",\"m\",1,0,2200]]','2017-11-19 11:36:58','[3,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(18,1,112,'[[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[3,\"green\",\"m\",1,0,2200]]','2017-11-20 22:21:43','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(20,1,113,'[[2,\"red\",\"xxxl\",2,0,1500],[3,\"green\",\"xl\",3,0,2200],[4,\"blue\",\"xxxl\",5,0,2000]]','2017-11-21 00:02:53','[1,1,1]','[1,1,1]','[\"1\",\"2\",\"3\"]','[\"2017-11-20T18:30:00.000Z\",\"2017-11-20T18:30:00.000Z\",\"2017-11-20T18:30:00.000Z\"]',0,NULL),(21,1,114,'[[2,\"red\",\"xxxl\",1,0,1500]]','2017-11-21 04:45:26','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(22,1,115,'[[4,\"blue\",\"s\",1,0,2000]]','2017-11-22 19:52:58','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(23,1,116,'[[7,\"red\",\"36\",1,0,3000],[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",1,0,1000]]','2017-11-22 20:06:53','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(24,1,117,'[[7,\"red\",\"36\",1,0,3000],[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",1,0,1000]]','2017-11-22 20:08:56','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(25,1,118,'[[7,\"red\",\"36\",1,0,3000],[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",1,0,1000]]','2017-11-22 20:13:09','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(26,1,119,'[[1,\"green\",\"40\",1,0,1000],[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[4,\"blue\",\"s\",1,0,2000],[4,\"blue\",\"xxxl\",1,0,2000],[4,\"blue\",\"46\",1,0,2000]]','2017-11-22 20:36:30','[0,0,0,0,0,0]','[0,0,0,0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(27,1,120,'[[1,\"green\",\"40\",1,0,1000],[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[4,\"blue\",\"s\",1,0,2000],[4,\"blue\",\"xxxl\",1,0,2000],[4,\"blue\",\"46\",1,0,2000]]','2017-11-22 20:38:20','[0,0,0,0,0,0]','[0,0,0,0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(28,1,121,'[[1,\"green\",\"40\",1,0,1000],[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[4,\"blue\",\"s\",1,0,2000],[4,\"blue\",\"xxxl\",1,0,2000],[4,\"blue\",\"46\",1,0,2000]]','2017-11-22 20:38:38','[0,0,0,0,0,0]','[0,0,0,0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(29,1,122,'[[1,\"green\",\"40\",1,0,1000],[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[4,\"blue\",\"s\",1,0,2000],[4,\"blue\",\"xxxl\",1,0,2000],[4,\"blue\",\"46\",1,0,2000]]','2017-11-22 20:39:40','[0,0,0,0,0,0]','[0,0,0,0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(42,1,124,'[[2,\"red\",\"xxxl\",1,0,1500],[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",1,0,1000]]','2017-11-23 05:35:40','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(43,1,125,'[[1,\"green\",\"xl\",1,0,1000]]','2017-11-23 18:46:32','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(44,1,126,'[[4,\"blue\",\"xxxl\",1,0,2000]]','2017-11-23 19:10:30','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(45,1,127,'[[1,\"green\",\"xl\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500]]','2017-11-23 19:29:55','[0,0]','[0,0]','[\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\"]',0,NULL),(47,1,129,'[[1,\"green\",\"xl\",\"17\",0,1000]]','2017-11-23 19:36:22','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(48,1,130,'[[4,\"blue\",\"xxxl\",\"9\",0,2000]]','2017-11-23 19:42:25','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(49,1,131,'[[1,\"green\",\"40\",1,0,1000]]','2017-11-23 19:44:08','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(50,1,132,'[[7,\"red\",\"36\",1,0,3000]]','2017-11-24 22:00:16','[2]','[1]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL),(51,1,133,'[[2,\"red\",\"xxxl\",1,0,1500]]','2017-11-26 18:39:31','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(52,5,134,'[[2,\"red\",\"xxxl\",\"12\",0,1500]]','2017-11-26 21:10:27','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(53,6,135,'[[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",1,0,1000]]','2017-11-26 21:11:31','[0,0]','[0,0]','[\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\"]',0,NULL),(54,7,136,'[[5,\"blue\",\"xxxl\",1,0,1800],[1,\"green\",\"40\",1,0,1000]]','2017-11-26 23:53:13','[0,0]','[0,0]','[\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\"]',0,NULL),(55,8,137,'[[1,\"green\",\"40\",1,0,1000],[2,\"red\",\"xxxl\",1,0,1500]]','2017-11-26 23:56:18','[0,0]','[0,0]','[\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\"]',0,NULL),(56,9,138,'[[1,\"green\",\"40\",1,0,1000]]','2017-11-26 23:58:33','[0]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(57,10,139,'[[2,\"red\",\"xxxl\",1,0,1500],[1,\"green\",\"40\",1,0,1000]]','2017-11-27 00:02:51','[0,0]','[0,0]','[\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\"]',0,NULL),(58,11,140,'[[2,\"red\",\"xxxl\",\"5\",0,1500]]','2017-11-27 00:03:19','[4]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(59,12,141,'[[1,\"green\",\"xl\",25,0,1000],[2,\"red\",\"xxxl\",1,0,1500],[1,\"green\",\"40\",40,0,1000]]','2017-11-27 03:52:11','[2,1,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\",\"1000-12-31T18:30:00.000Z\",\"1000-12-31T18:30:00.000Z\"]',0,NULL),(60,13,142,'[[1,\"green\",\"40\",1,0,1000]]','2017-11-27 04:15:29','[2]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(61,14,143,'[[1,\"green\",\"xl\",1,0,1000]]','2017-11-27 04:31:37','[3]','[0]','[\"--NA--\"]','[\"01-01-1001\"]',0,NULL),(62,15,144,'[[5,\"blue\",\"xxl\",5,0,1800],[6,\"red\",\"44\",6,0,1800],[7,\"red\",\"36\",7,0,3000]]','2017-11-27 05:13:40','[4,3,3]','[0,1,1]','[\"na\",\"2\",\"3\"]','[\"1970-01-01T00:00:00.000Z\",\"2017-11-27T00:00:00.000Z\",\"2017-11-27T00:00:00.000Z\"]',0,NULL),(68,21,145,'[[2,\"red\",\"xxxl\",3,0,1500]]','2017-11-27 08:28:12','[1]','[0]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL),(69,22,146,'[[2,\"red\",\"xxxl\",1,0,1500]]','2017-11-27 08:28:49','[1]','[0]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL),(70,23,147,'[[4,\"blue\",\"xxxl\",1,0,2000],[1,\"green\",\"40\",1,0,1000]]','2017-11-27 08:35:22','[1,1]','[1,1]','[\"1\",\"2\"]','[\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\"]',0,NULL),(71,24,148,'[[1,\"green\",\"xl\",1,0,1000],[3,\"green\",\"xl\",1,0,2200],[4,\"blue\",\"xxxl\",1,0,2000]]','2017-11-27 08:38:32','[1,1,1]','[1,1,1]','[\"1\",\"2\",\"3\"]','[\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\"]',0,NULL),(72,25,149,'[[1,\"green\",\"xl\",1,0,1000],[3,\"green\",\"xl\",1,0,2200],[4,\"blue\",\"xxxl\",1,0,2000]]','2017-11-27 08:40:55','[1,1,1]','[1,1,1]','[\"1\",\"2\",\"3\"]','[\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\"]',0,NULL),(73,26,150,'[[1,\"green\",\"xl\",1,0,1000],[1,\"green\",\"40\",5,0,1000],[3,\"green\",\"xl\",1,0,2200],[4,\"blue\",\"xxxl\",1,0,2000]]','2017-11-27 08:44:59','[1,1,1,1]','[1,1,1,1]','[\"1\",\"2\",\"3\",\"4\"]','[\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\",\"2017-11-26T18:30:00.000Z\"]',0,NULL),(77,30,154,'[[2,\"red\",\"xxxl\",1,0,1500],[3,\"green\",\"m\",1,0,2200],[4,\"blue\",\"xxxl\",1,0,2000]]','2017-11-28 21:38:29','[1,1,1]','[0,0,1]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\",\"1000-12-31T18:30:00.000Z\",\"1000-12-31T18:30:00.000Z\"]',0,''),(78,31,155,'[[7,\"red\",\"36\",7,0,3000],[6,\"red\",\"44\",4,0,1800],[5,\"blue\",\"xxxl\",2,0,1800]]','2017-11-28 22:22:18','[0,0,0]','[0,0,0]','[\"--NA--\",\"--NA--\",\"--NA--\"]','[\"01-01-1001\",\"01-01-1001\",\"01-01-1001\"]',0,NULL),(79,32,156,'[[1,\"green\",\"xl\",1,0,1000]]','2017-11-28 22:30:21','[1]','[0]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL),(80,33,157,'[[1,\"green\",\"40\",1,0,1000]]','2017-11-28 22:31:24','[1]','[0]','[\"--NA--\"]','[\"1000-12-31T18:30:00.000Z\"]',0,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-11  9:55:03
