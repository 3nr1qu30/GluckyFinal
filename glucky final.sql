-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: glucky3
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id_chat` int NOT NULL AUTO_INCREMENT,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `fechacreacion_chat` datetime NOT NULL,
  PRIMARY KEY (`id_chat`),
  KEY `fk_medico_chat_idx` (`cedula_med`),
  KEY `fk_paciente_chat_idx` (`curp_pacien`),
  CONSTRAINT `fk_medico_chat` FOREIGN KEY (`cedula_med`) REFERENCES `medico` (`cedula_med`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_chat` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citamedica`
--

DROP TABLE IF EXISTS `citamedica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citamedica` (
  `id_cita` int NOT NULL AUTO_INCREMENT,
  `date_cita` date NOT NULL,
  `hour_cita` time NOT NULL,
  `id_consmed` int NOT NULL,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_cita`),
  KEY `fk_consultoriomedico_citamedica_idx` (`id_consmed`),
  KEY `fk_paciente_citamedica_idx` (`curp_pacien`),
  CONSTRAINT `fk_consultoriomedico_citamedica` FOREIGN KEY (`id_consmed`) REFERENCES `consultoriomedico` (`id_consmed`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_citamedica` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citamedica`
--

LOCK TABLES `citamedica` WRITE;
/*!40000 ALTER TABLE `citamedica` DISABLE KEYS */;
/*!40000 ALTER TABLE `citamedica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultorio`
--

DROP TABLE IF EXISTS `consultorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultorio` (
  `id_cons` int NOT NULL AUTO_INCREMENT,
  `calle_cons` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `num_cons` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `cp_cons` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `col_cons` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `del_cons` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `edo_cons` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_cons`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultorio`
--

LOCK TABLES `consultorio` WRITE;
/*!40000 ALTER TABLE `consultorio` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultoriomedico`
--

DROP TABLE IF EXISTS `consultoriomedico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultoriomedico` (
  `id_consmed` int NOT NULL AUTO_INCREMENT,
  `id_cons` int NOT NULL,
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_consmed`),
  KEY `fk_consultorio_consmed_idx` (`id_cons`),
  KEY `fk_medico_consmed_idx` (`cedula_med`),
  CONSTRAINT `fk_consultorio_consmed` FOREIGN KEY (`id_cons`) REFERENCES `consultorio` (`id_cons`) ON UPDATE CASCADE,
  CONSTRAINT `fk_medico_consmed` FOREIGN KEY (`cedula_med`) REFERENCES `medico` (`cedula_med`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultoriomedico`
--

LOCK TABLES `consultoriomedico` WRITE;
/*!40000 ALTER TABLE `consultoriomedico` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultoriomedico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datosmedicos`
--

DROP TABLE IF EXISTS `datosmedicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datosmedicos` (
  `id_datmed` int NOT NULL AUTO_INCREMENT,
  `gluc_datmed` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `presis_datmed` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `predia_datmed` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `date_datmed` date NOT NULL,
  `hpur_datmed` time NOT NULL,
  `id_edoalimn` int NOT NULL,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_datmed`),
  KEY `fk_estadoalimenticio_datosmedicos_idx` (`id_edoalimn`),
  KEY `fk_paciente_datosmedicos_idx` (`curp_pacien`),
  CONSTRAINT `fk_estadoalimenticio_datosmedicos` FOREIGN KEY (`id_edoalimn`) REFERENCES `estadoalimenticio` (`id_edoalimn`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_datosmedicos` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosmedicos`
--

LOCK TABLES `datosmedicos` WRITE;
/*!40000 ALTER TABLE `datosmedicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `datosmedicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dieta`
--

DROP TABLE IF EXISTS `dieta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dieta` (
  `id_dieta` int NOT NULL AUTO_INCREMENT,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `date_dieta` date NOT NULL,
  PRIMARY KEY (`id_dieta`),
  KEY `fk_paciente_dieta_idx` (`curp_pacien`),
  KEY `fk_medico_dieta_idx` (`cedula_med`),
  CONSTRAINT `fk_medico_dieta` FOREIGN KEY (`cedula_med`) REFERENCES `medico` (`cedula_med`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_dieta` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieta`
--

LOCK TABLES `dieta` WRITE;
/*!40000 ALTER TABLE `dieta` DISABLE KEYS */;
/*!40000 ALTER TABLE `dieta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dietaingrediente`
--

DROP TABLE IF EXISTS `dietaingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dietaingrediente` (
  `id_dietingred` int NOT NULL AUTO_INCREMENT,
  `id_dieta` int NOT NULL,
  `id_ingred` int NOT NULL,
  PRIMARY KEY (`id_dietingred`),
  KEY `fk_dieta_dietaingrediente_idx` (`id_dieta`),
  KEY `fk_ingrediente_dietaingrediente_idx` (`id_ingred`),
  CONSTRAINT `fk_dieta_dietaingrediente` FOREIGN KEY (`id_dieta`) REFERENCES `dieta` (`id_dieta`) ON UPDATE CASCADE,
  CONSTRAINT `fk_ingrediente_dietaingrediente` FOREIGN KEY (`id_ingred`) REFERENCES `ingrediente` (`id_ingred`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dietaingrediente`
--

LOCK TABLES `dietaingrediente` WRITE;
/*!40000 ALTER TABLE `dietaingrediente` DISABLE KEYS */;
/*!40000 ALTER TABLE `dietaingrediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoalimenticio`
--

DROP TABLE IF EXISTS `estadoalimenticio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadoalimenticio` (
  `id_edoalimn` int NOT NULL AUTO_INCREMENT,
  `nom_edoalimn` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_edoalimn`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoalimenticio`
--

LOCK TABLES `estadoalimenticio` WRITE;
/*!40000 ALTER TABLE `estadoalimenticio` DISABLE KEYS */;
INSERT INTO `estadoalimenticio` VALUES (1,'ayunas'),(2,'Despues de comer');
/*!40000 ALTER TABLE `estadoalimenticio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadosolicitud`
--

DROP TABLE IF EXISTS `estadosolicitud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadosolicitud` (
  `id_edosol` int NOT NULL AUTO_INCREMENT,
  `nom_edosol` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_edosol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadosolicitud`
--

LOCK TABLES `estadosolicitud` WRITE;
/*!40000 ALTER TABLE `estadosolicitud` DISABLE KEYS */;
INSERT INTO `estadosolicitud` VALUES (1,'enviado'),(2,'aceptado'),(3,'denagado');
/*!40000 ALTER TABLE `estadosolicitud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingrediente`
--

DROP TABLE IF EXISTS `ingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente` (
  `id_ingred` int NOT NULL AUTO_INCREMENT,
  `nom_ingred` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `desc_ingred` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_ingred`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente`
--

LOCK TABLES `ingrediente` WRITE;
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamento`
--

DROP TABLE IF EXISTS `medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicamento` (
  `id_medic` int NOT NULL AUTO_INCREMENT,
  `nom_medic` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_medic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamento`
--

LOCK TABLES `medicamento` WRITE;
/*!40000 ALTER TABLE `medicamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `pass_med` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `id_pers` int NOT NULL,
  PRIMARY KEY (`cedula_med`),
  UNIQUE KEY `cedula_med_UNIQUE` (`cedula_med`),
  KEY `id_persona_medico_idx` (`id_pers`),
  CONSTRAINT `fk_persona_medico` FOREIGN KEY (`id_pers`) REFERENCES `persona` (`id_pers`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje` (
  `id_mensaje` int NOT NULL AUTO_INCREMENT,
  `id_chat` int DEFAULT NULL,
  `id_emisor` varchar(20) DEFAULT NULL,
  `id_receptor` varchar(20) DEFAULT NULL,
  `desc_mensaje` varchar(2000) DEFAULT NULL,
  `date_mensaje` date DEFAULT NULL,
  `hour_mensaje` time DEFAULT NULL,
  PRIMARY KEY (`id_mensaje`),
  KEY `id_chat` (`id_chat`),
  CONSTRAINT `mensaje_ibfk_1` FOREIGN KEY (`id_chat`) REFERENCES `chat` (`id_chat`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `pass_pacien` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `estado` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `estado_descripcion` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `id_pers` int NOT NULL,
  `id_tipdiabts` int NOT NULL,
  PRIMARY KEY (`curp_pacien`),
  UNIQUE KEY `curp_pacien_UNIQUE` (`curp_pacien`),
  KEY `fk_persona_paciente_idx` (`id_pers`),
  KEY `fk_tipodiabetes_paciente_idx` (`id_tipdiabts`),
  CONSTRAINT `fk_persona_paciente` FOREIGN KEY (`id_pers`) REFERENCES `persona` (`id_pers`) ON UPDATE CASCADE,
  CONSTRAINT `fk_tipodiabetes_paciente` FOREIGN KEY (`id_tipdiabts`) REFERENCES `tipodiabetes` (`id_tipdiabts`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientemedico`
--

DROP TABLE IF EXISTS `pacientemedico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientemedico` (
  `id_pacmed` int NOT NULL AUTO_INCREMENT,
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `id_edosol` int NOT NULL,
  PRIMARY KEY (`id_pacmed`),
  KEY `fk_medico_pacientemedico_idx` (`cedula_med`),
  KEY `fk_paciente_pacientemedico_idx` (`curp_pacien`),
  KEY `fk_estadosolicitud_pacientemedico_idx` (`id_edosol`),
  CONSTRAINT `fk_estadosolicitud_pacientemedico` FOREIGN KEY (`id_edosol`) REFERENCES `estadosolicitud` (`id_edosol`) ON UPDATE CASCADE,
  CONSTRAINT `fk_medico_pacientemedico` FOREIGN KEY (`cedula_med`) REFERENCES `medico` (`cedula_med`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_pacientemedico` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientemedico`
--

LOCK TABLES `pacientemedico` WRITE;
/*!40000 ALTER TABLE `pacientemedico` DISABLE KEYS */;
/*!40000 ALTER TABLE `pacientemedico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id_pers` int NOT NULL AUTO_INCREMENT,
  `nom_pers` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `apellidos_pers` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `email_pers` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `edad_pers` varchar(3) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `genero_pers` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `tel_pers` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_pers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `id_receta` int NOT NULL AUTO_INCREMENT,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `cedula_med` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `date_receta` date NOT NULL,
  `id_cons` int NOT NULL,
  PRIMARY KEY (`id_receta`),
  KEY `fk_paciente_receta_idx` (`curp_pacien`),
  KEY `fk_medico_receta_idx` (`cedula_med`),
  KEY `fk_consultorio_receta_idx` (`id_cons`),
  CONSTRAINT `fk_consultorio_receta` FOREIGN KEY (`id_cons`) REFERENCES `consultorio` (`id_cons`) ON UPDATE CASCADE,
  CONSTRAINT `fk_medico_receta` FOREIGN KEY (`cedula_med`) REFERENCES `medico` (`cedula_med`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_receta` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetamedicamento`
--

DROP TABLE IF EXISTS `recetamedicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetamedicamento` (
  `id_recmed` int NOT NULL AUTO_INCREMENT,
  `id_receta` int NOT NULL,
  `id_medic` int NOT NULL,
  `frec_recmed` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `present_recmed` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_recmed`),
  KEY `fk_receta_recetamedicamento_idx` (`id_receta`),
  KEY `fk_medicamento_recetamedicamento_idx` (`id_medic`),
  CONSTRAINT `fk_medicamento_recetamedicamento` FOREIGN KEY (`id_medic`) REFERENCES `medicamento` (`id_medic`) ON UPDATE CASCADE,
  CONSTRAINT `fk_receta_recetamedicamento` FOREIGN KEY (`id_receta`) REFERENCES `receta` (`id_receta`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetamedicamento`
--

LOCK TABLES `recetamedicamento` WRITE;
/*!40000 ALTER TABLE `recetamedicamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `recetamedicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitarcita`
--

DROP TABLE IF EXISTS `solicitarcita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitarcita` (
  `id_solcita` int NOT NULL AUTO_INCREMENT,
  `date_solcita` date NOT NULL,
  `hour_solcita` time NOT NULL,
  `id_edosol` int NOT NULL,
  `curp_pacien` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `id_consmed` int NOT NULL,
  PRIMARY KEY (`id_solcita`),
  KEY `fk_estadosolicitud_solicitarcita_idx` (`id_edosol`),
  KEY `fk_paciente_solicitarcita_idx` (`curp_pacien`),
  KEY `fk_consultoriomedico_idx` (`id_consmed`),
  CONSTRAINT `fk_consultoriomedico` FOREIGN KEY (`id_consmed`) REFERENCES `consultoriomedico` (`id_consmed`) ON UPDATE CASCADE,
  CONSTRAINT `fk_estadosolicitud_solicitarcita` FOREIGN KEY (`id_edosol`) REFERENCES `estadosolicitud` (`id_edosol`) ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente_solicitarcita` FOREIGN KEY (`curp_pacien`) REFERENCES `paciente` (`curp_pacien`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitarcita`
--

LOCK TABLES `solicitarcita` WRITE;
/*!40000 ALTER TABLE `solicitarcita` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitarcita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipodiabetes`
--

DROP TABLE IF EXISTS `tipodiabetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipodiabetes` (
  `id_tipdiabts` int NOT NULL AUTO_INCREMENT,
  `nom_tipdiabts` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_tipdiabts`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipodiabetes`
--

LOCK TABLES `tipodiabetes` WRITE;
/*!40000 ALTER TABLE `tipodiabetes` DISABLE KEYS */;
INSERT INTO `tipodiabetes` VALUES (1,'tipo 1'),(2,'tipo 2'),(3,'gestacional');
/*!40000 ALTER TABLE `tipodiabetes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vdoctorpaciente`
--

DROP TABLE IF EXISTS `vdoctorpaciente`;
/*!50001 DROP VIEW IF EXISTS `vdoctorpaciente`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vdoctorpaciente` AS SELECT 
 1 AS `nom_pers`,
 1 AS `apellidos_pers`,
 1 AS `nom_tipdiabts`,
 1 AS `curp_pacien`,
 1 AS `email_pers`,
 1 AS `cedula_med`,
 1 AS `estado`,
 1 AS `estado_descripcion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vmedicocitas`
--

DROP TABLE IF EXISTS `vmedicocitas`;
/*!50001 DROP VIEW IF EXISTS `vmedicocitas`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vmedicocitas` AS SELECT 
 1 AS `hour_cita`,
 1 AS `date_cita`,
 1 AS `nom_pers`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vperfildoctor`
--

DROP TABLE IF EXISTS `vperfildoctor`;
/*!50001 DROP VIEW IF EXISTS `vperfildoctor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vperfildoctor` AS SELECT 
 1 AS `nom_pers`,
 1 AS `apellidos_pers`,
 1 AS `cedula_med`,
 1 AS `email_pers`,
 1 AS `edad_pers`,
 1 AS `tel_pers`,
 1 AS `genero_pers`,
 1 AS `calle_cons`,
 1 AS `num_cons`,
 1 AS `cp_cons`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vsolicitudenlace`
--

DROP TABLE IF EXISTS `vsolicitudenlace`;
/*!50001 DROP VIEW IF EXISTS `vsolicitudenlace`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vsolicitudenlace` AS SELECT 
 1 AS `id_pacmed`,
 1 AS `nom_pers`,
 1 AS `nom_tipdiabts`,
 1 AS `genero_pers`,
 1 AS `curp_pacien`,
 1 AS `email_pers`,
 1 AS `tel_pers`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'glucky3'
--

--
-- Dumping routines for database 'glucky3'
--
/*!50003 DROP PROCEDURE IF EXISTS `ActualizarContraseña` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarContraseña`(IN correo VARCHAR(50), IN nuevaContraseña VARCHAR(100))
BEGIN
    DECLARE id_persona INT;
    
    -- Buscar el ID de la persona según el correo
    SELECT id_pers INTO id_persona FROM persona WHERE email_pers = correo;
    
    -- Actualizar la contraseña del paciente si existe
    UPDATE paciente SET pass_pacien = nuevaContraseña WHERE id_pers = id_persona;
    
    -- Actualizar la contraseña del médico si existe
    UPDATE medico SET pass_med = nuevaContraseña WHERE id_pers = id_persona;
    
    SELECT 'Contraseña actualizada correctamente.' AS mensaje;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertarDatosMedicos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarDatosMedicos`(
    IN p_gluc_datmed VARCHAR(5),
    IN p_presis_datmed VARCHAR(5),
    IN p_predia_datmed VARCHAR(5),
    IN p_date_datmed DATE,
    IN p_hpur_datmed TIME,
    IN p_id_edoalimn INT,
    IN p_curp_pacien VARCHAR(20),
    IN p_nuevo_estado VARCHAR(200),
    IN p_descripcion_Estado VARCHAR(200)
)
BEGIN
    INSERT INTO datosmedicos (gluc_datmed, presis_datmed, predia_datmed, date_datmed, hpur_datmed, id_edoalimn, curp_pacien)
    VALUES (p_gluc_datmed, p_presis_datmed, p_predia_datmed, p_date_datmed, p_hpur_datmed, p_id_edoalimn, p_curp_pacien);

    UPDATE paciente
    SET estado = p_nuevo_estado, estado_descripcion=p_descripcion_Estado
    WHERE curp_pacien = p_curp_pacien;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_datos_medico` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizar_datos_medico`(
  IN cedula VARCHAR(9),
  IN nom VARCHAR(45),
  IN apellidos VARCHAR(45),
  IN email VARCHAR(50),
  IN edad VARCHAR(3),
  IN genero VARCHAR(15),
  IN tel VARCHAR(15),
  IN calle VARCHAR(45),
  IN num VARCHAR(10),
  IN cp VARCHAR(8),
  IN col VARCHAR(45),
  IN del VARCHAR(45),
  IN edo VARCHAR(45)
)
BEGIN
  DECLARE id_consultorio INT;
  DECLARE id_persona INT;
  
  SELECT id_cons INTO id_consultorio FROM consultoriomedico WHERE cedula_med = cedula;
  SELECT id_pers INTO id_persona FROM medico WHERE cedula_med = cedula;

  UPDATE persona SET
    nom_pers = nom,
    apellidos_pers = apellidos,
    email_pers = email,
    edad_pers = edad,
    genero_pers = genero,
    tel_pers = tel
  WHERE id_pers = id_persona;

  UPDATE consultorio SET
    calle_cons = calle,
    num_cons = num,
    cp_cons = cp,
    col_cons = col,
    del_cons = del,
    edo_cons = edo
  WHERE id_cons = id_consultorio;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_datos_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizar_datos_paciente`(
  IN curp VARCHAR(20),
  IN nom VARCHAR(45),
  IN apellidos VARCHAR(45),
  IN email VARCHAR(50),
  IN edad VARCHAR(3),
  IN genero VARCHAR(15),
  IN tel VARCHAR(15),
  IN id_tipdiabts INT
)
BEGIN
  DECLARE id_persona INT;
  SELECT id_pers INTO id_persona FROM paciente WHERE curp_pacien = curp;

  UPDATE persona SET nom_pers = nom, apellidos_pers = apellidos, email_pers = email, edad_pers = edad, genero_pers = genero, tel_pers = tel WHERE id_pers = id_persona;
  UPDATE paciente SET id_tipdiabts = id_tipdiabts WHERE id_pers = id_persona;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insertar_medico_consultorio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertar_medico_consultorio`(
    IN p_nombre VARCHAR(45),
    IN p_apellidos VARCHAR(45),
    IN p_email VARCHAR(50),
    IN p_edad INT,
    IN p_telefono VARCHAR(15),
    IN p_cedula VARCHAR(9),
    IN p_sexo VARCHAR(15),
    IN p_calle VARCHAR(45),
    IN p_num_cons INT,
    IN p_cp VARCHAR(8),
    IN p_col VARCHAR(45),
    IN p_del VARCHAR(45),
    IN p_edo VARCHAR(45),
    IN p_contrasena VARCHAR(100)
)
BEGIN
    DECLARE id_persona INT;
    DECLARE id_consultorio INT;
    
    
    INSERT INTO persona (nom_pers, apellidos_pers, email_pers, edad_pers, tel_pers, genero_pers)
    VALUES (p_nombre, p_apellidos, p_email, p_edad, p_telefono, p_sexo);
    SET id_persona = LAST_INSERT_ID();
    
    
    INSERT INTO medico (cedula_med, pass_med, id_pers)
    VALUES (p_cedula, p_contrasena, id_persona);
    
    
    INSERT INTO consultorio (calle_cons, num_cons, cp_cons, col_cons, del_cons, edo_cons)
    VALUES (p_calle, p_num_cons, p_cp, p_col, p_del, p_edo);
    SET id_consultorio = LAST_INSERT_ID();
    
    
    INSERT INTO consultoriomedico (id_cons, cedula_med)
    VALUES (id_consultorio, p_cedula);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insertar_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertar_paciente`(
IN nombre_pers VARCHAR(50),
IN apellidos_pers VARCHAR (50),
IN email_pers VARCHAR(50),
IN edad_pers INT,
IN tel_pers VARCHAR (20),
IN sexo_pers VARCHAR(15),
IN curp_pacien VARCHAR (20),
IN pass_pacien VARCHAR (100),
IN id_tipdiabts INT)
BEGIN
DECLARE id_pers INT;
DECLARE last_id INT;
INSERT INTO persona(nom_pers, apellidos_pers, email_pers, edad_pers, tel_pers, genero_pers) values (nombre_pers, apellidos_pers, email_pers, edad_pers, tel_pers, sexo_pers);
SET last_id = LAST_INSERT_ID();
INSERT INTO paciente(curp_pacien, pass_pacien, id_pers, id_tipdiabts) VALUES(curp_pacien, pass_pacien, last_id, id_tipdiabts);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `vdoctorpaciente`
--

/*!50001 DROP VIEW IF EXISTS `vdoctorpaciente`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vdoctorpaciente` AS select `persona`.`nom_pers` AS `nom_pers`,`persona`.`apellidos_pers` AS `apellidos_pers`,`tipodiabetes`.`nom_tipdiabts` AS `nom_tipdiabts`,`paciente`.`curp_pacien` AS `curp_pacien`,`persona`.`email_pers` AS `email_pers`,`medico`.`cedula_med` AS `cedula_med`,`paciente`.`estado` AS `estado`,`paciente`.`estado_descripcion` AS `estado_descripcion` from ((((`pacientemedico` join `paciente` on((`pacientemedico`.`curp_pacien` = `paciente`.`curp_pacien`))) join `medico` on((`pacientemedico`.`cedula_med` = `medico`.`cedula_med`))) join `persona` on((`paciente`.`id_pers` = `persona`.`id_pers`))) join `tipodiabetes` on((`paciente`.`id_tipdiabts` = `tipodiabetes`.`id_tipdiabts`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vmedicocitas`
--

/*!50001 DROP VIEW IF EXISTS `vmedicocitas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vmedicocitas` AS select `citamedica`.`hour_cita` AS `hour_cita`,`citamedica`.`date_cita` AS `date_cita`,`persona`.`nom_pers` AS `nom_pers` from (((`citamedica` join `paciente` on((`citamedica`.`curp_pacien` = `paciente`.`curp_pacien`))) join `persona` on((`paciente`.`id_pers` = `persona`.`id_pers`))) join `consultoriomedico` on((`citamedica`.`id_consmed` = `consultoriomedico`.`id_consmed`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vperfildoctor`
--

/*!50001 DROP VIEW IF EXISTS `vperfildoctor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vperfildoctor` AS select `persona`.`nom_pers` AS `nom_pers`,`persona`.`apellidos_pers` AS `apellidos_pers`,`medico`.`cedula_med` AS `cedula_med`,`persona`.`email_pers` AS `email_pers`,`persona`.`edad_pers` AS `edad_pers`,`persona`.`tel_pers` AS `tel_pers`,`persona`.`genero_pers` AS `genero_pers`,`consultorio`.`calle_cons` AS `calle_cons`,`consultorio`.`num_cons` AS `num_cons`,`consultorio`.`cp_cons` AS `cp_cons` from (((`consultoriomedico` join `medico` on((`consultoriomedico`.`cedula_med` = `medico`.`cedula_med`))) join `persona` on((`medico`.`id_pers` = `persona`.`id_pers`))) join `consultorio` on((`consultorio`.`id_cons` = `consultoriomedico`.`id_cons`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vsolicitudenlace`
--

/*!50001 DROP VIEW IF EXISTS `vsolicitudenlace`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vsolicitudenlace` AS select `pm`.`id_pacmed` AS `id_pacmed`,`p`.`nom_pers` AS `nom_pers`,`td`.`nom_tipdiabts` AS `nom_tipdiabts`,`p`.`genero_pers` AS `genero_pers`,`pa`.`curp_pacien` AS `curp_pacien`,`p`.`email_pers` AS `email_pers`,`p`.`tel_pers` AS `tel_pers` from (((`pacientemedico` `pm` join `paciente` `pa` on((`pm`.`curp_pacien` = `pa`.`curp_pacien`))) join `persona` `p` on((`pa`.`id_pers` = `p`.`id_pers`))) join `tipodiabetes` `td` on((`pa`.`id_tipdiabts` = `td`.`id_tipdiabts`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22 20:27:55
