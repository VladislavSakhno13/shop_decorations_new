-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 31 2020 г., 22:54
-- Версия сервера: 5.6.43
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `decoration_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `FIO` text,
  `date` text,
  `login` text,
  `password` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `FIO`, `date`, `login`, `password`) VALUES
(4, 'Алексей Генадиевич Пшешкевич', 'Sunday 31st of May 2020 06:58:40 PM', 'qwer', 'qwer'),
(5, 'Сахно Владислав Витальевич', 'Sunday 31st of May 2020 07:00:53 PM', '1029384756', 'blabla23');

-- --------------------------------------------------------

--
-- Структура таблицы `metal_products`
--

CREATE TABLE `metal_products` (
  `id` int(11) NOT NULL,
  `metal` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `metal_products`
--

INSERT INTO `metal_products` (`id`, `metal`) VALUES
(1, 'Медь'),
(2, 'Серебро'),
(3, 'Платина'),
(4, 'Латунь');

-- --------------------------------------------------------

--
-- Структура таблицы `order_customers`
--

CREATE TABLE `order_customers` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `count_order` int(11) DEFAULT NULL,
  `customers_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `order_customers`
--

INSERT INTO `order_customers` (`id`, `product_id`, `count_order`, `customers_id`) VALUES
(1, 2, 2, 5),
(2, 1, 1, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `metal_product` int(11) DEFAULT NULL,
  `type_product` int(11) DEFAULT NULL,
  `rock_product` int(11) DEFAULT NULL,
  `img` text,
  `name` text,
  `cost` int(11) DEFAULT NULL,
  `sku` text,
  `discription` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `metal_product`, `type_product`, `rock_product`, `img`, `name`, `cost`, `sku`, `discription`) VALUES
(1, 2, 2, 4, 'Картинка', 'Кольцо', 1200, 'a345bd', 'описание'),
(2, 2, 2, 4, 'IMG', 'серебряное кольцо с алмазом', 3200, 'a345bc12', 'кольцо из серебра, вставка выполнена из алмаза');

-- --------------------------------------------------------

--
-- Структура таблицы `rocks_products`
--

CREATE TABLE `rocks_products` (
  `id` int(11) NOT NULL,
  `rock` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rocks_products`
--

INSERT INTO `rocks_products` (`id`, `rock`) VALUES
(1, 'Рубин'),
(2, 'Топаз'),
(3, 'Фианит'),
(4, 'Алмаз');

-- --------------------------------------------------------

--
-- Структура таблицы `type_products`
--

CREATE TABLE `type_products` (
  `id` int(11) NOT NULL,
  `type` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `type_products`
--

INSERT INTO `type_products` (`id`, `type`) VALUES
(1, 'Кольцо'),
(2, 'Серьги'),
(3, 'Цепочка'),
(4, 'Подвеска');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `metal_products`
--
ALTER TABLE `metal_products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `order_customers`
--
ALTER TABLE `order_customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_id` (`customers_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `metal_product` (`metal_product`),
  ADD KEY `type_product` (`type_product`),
  ADD KEY `rock_product` (`rock_product`);

--
-- Индексы таблицы `rocks_products`
--
ALTER TABLE `rocks_products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `type_products`
--
ALTER TABLE `type_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `metal_products`
--
ALTER TABLE `metal_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `order_customers`
--
ALTER TABLE `order_customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `rocks_products`
--
ALTER TABLE `rocks_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `type_products`
--
ALTER TABLE `type_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `order_customers`
--
ALTER TABLE `order_customers`
  ADD CONSTRAINT `order_customers_ibfk_1` FOREIGN KEY (`customers_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `order_customers_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`metal_product`) REFERENCES `metal_products` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`type_product`) REFERENCES `type_products` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`rock_product`) REFERENCES `rocks_products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;