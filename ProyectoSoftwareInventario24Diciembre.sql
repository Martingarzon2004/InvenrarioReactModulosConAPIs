-- MySQL Script generated by MySQL Workbench
-- Sun Dec 24 11:32:34 2023
-- Model: New Model    Version: 2.1
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Inventario
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Inventario
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Inventario` DEFAULT CHARACTER SET utf8 ;
USE `Inventario` ;

-- -----------------------------------------------------
-- Table `Inventario`.`Proveedoresyclientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventario`.`Proveedoresyclientes` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `Proveedorocliente` VARCHAR(35) NOT NULL,
  `ZonadeBogota` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventario`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventario`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `Inventario`.`Listadeproductos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventario`.`Listadeproductos` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `Cantidad` VARCHAR(35) NOT NULL,
  `Tipodeproducto` VARCHAR(35) NOT NULL,
  `Localizacion` VARCHAR(35) NOT NULL,
  `Preciodeventa` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventario`.`Historial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventario`.`Historial` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Nombredelaaccion` VARCHAR(45) NOT NULL,
  `Fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventario`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventario`.`Usuarios` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `Clavedeacceso` VARCHAR(35) NOT NULL,
  `Clavedeautenticacion` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
