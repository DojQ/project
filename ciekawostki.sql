-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Wrz 2018, 11:00
-- Wersja serwera: 10.1.28-MariaDB
-- Wersja PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `belgia`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ciekawostki`
--

DROP TABLE IF EXISTS `ciekawostki`;
CREATE TABLE `ciekawostki` (
  `ID` int(11) NOT NULL,
  `ciekawostka` text CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `ciekawostki`
--

INSERT INTO `ciekawostki` (`ID`, `ciekawostka`) VALUES
(1, ' Belgia ma najlepsza czekoladę na świecie, mającą ponad 300 letnią tradycje.'),
(2, 'Wszystkie nazwy ulic, reklamy, tablice informacyjne, znaki napisane są w dwóch językach: francuskim i flamandzkim.'),
(3, 'Jest tam ponad 800 rodzajów piwa.'),
(4, 'Od 2002 roku legalna jest eutanazja.'),
(5, 'Belgowie częściej słodzą popcorn niż solą.'),
(6, 'W Brukseli jest średnio 140 restauracji na kilometr kwadratowy.'),
(7, 'Pełna nazwa kraju – Królestwo Belgii. '),
(8, ' Kraj ten zamieszkuje około 70 000 Polaków. '),
(9, ' Gęstość zaludnienia wynosi 346 osób/km2. '),
(10, 'Główną religią jest Kościół Katolicki, 58%. '),
(11, 'Najdłuższą rzeką jest Skalda, 200 km. ');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `ciekawostki`
--
ALTER TABLE `ciekawostki`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `ciekawostki`
--
ALTER TABLE `ciekawostki`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
