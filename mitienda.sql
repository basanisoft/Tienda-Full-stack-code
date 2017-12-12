-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2017 at 06:12 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mitienda` /*!40100 DEFAULT CHARACTER SET latin1 */;

--
-- Database: `mitienda`
--

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `description` text,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`id`, `name`, `price`, `description`, `image`, `created_at`, `updated_at`) VALUES
(17, 'Lenovo A6600 Plus (Black, 16 GB)  (2 GB RAM)', '100.00', 'Be it playing music or running multiple apps, seamlessly execute your tasks as the Lenovo A6600 Plus is powered by the 1.0 GHz 64-bit quad-core processor and 2 GB of RAM', '1513091068.jpg', '2017-12-11 05:43:04', '2017-12-12 09:34:28'),
(18, 'Moto C (Starry Black, 16 GB)  (1 GB RAM)', '120.00', 'The phone comes with a 5.00-inch touchscreen display with a resolution of 480 pixels by 854 pixels at a PPI of 196 pixels per inch.', '1513091123.jpg', '2017-12-11 05:43:39', '2017-12-12 09:35:23'),
(20, 'Samsung Galaxy On5 (Gold, 8 GB)  (1.5 GB RAM)', '150.00', 'With a leathery feel, the Samsung Galaxy On5 has a classy look with a thin frame that provides you a comfortable steady grip.', '1513091179.jpg', '2017-12-11 07:22:43', '2017-12-12 09:36:19'),
(35, 'Apple iPhone SE (Space Grey, 32 GB)', '200', 'Apple A9 64-bit processor and Embedded M9 Motion Co-processor', '1513091245.jpg', '2017-12-12 09:37:25', '2017-12-12 09:37:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2015_12_21_225422_create_categories_table', 1),
('2015_12_21_225621_create_posts_table', 1),
('2015_12_21_230614_create_custom_fields_table', 1),
('2015_12_22_193105_create_posts_status_field', 1),
('2015_12_22_215532_create_custom_fields_slug_field', 1),
('2015_12_28_215947_create_posts_image_field', 1),
('2015_12_29_202919_create_users_username_field', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `order_state` varchar(110) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `store_id`, `material_id`, `quantity`, `order_state`, `created_at`, `updated_at`) VALUES
(1, 17, 17, 1, '94057', '2017-12-12 15:11:23', '0000-00-00 00:00:00'),
(2, 18, 18, 1, '94057', '2017-12-12 15:11:23', '0000-00-00 00:00:00'),
(3, 20, 20, 1, '46659', '2017-12-12 15:11:48', '0000-00-00 00:00:00'),
(4, 35, 35, 1, '46659', '2017-12-12 15:11:48', '0000-00-00 00:00:00'),
(5, 18, 18, 1, '82948', '2017-12-12 15:11:58', '0000-00-00 00:00:00'),
(6, 17, 17, 1, '24606', '2017-12-12 16:51:54', '0000-00-00 00:00:00'),
(7, 18, 18, 1, '24606', '2017-12-12 16:51:54', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(10) UNSIGNED NOT NULL,
  `store_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `store_name`, `description`, `created_at`, `updated_at`) VALUES
(9, 'Lenovo', '<p>Lenovo<br/></p>', '2017-12-11 05:45:07', '2017-12-12 09:37:59'),
(10, 'Motorola', '<p>Motorola<br/></p>', '2017-12-11 05:45:23', '2017-12-12 09:38:25'),
(11, 'Samsung', '<p>Samsung <br/></p>', '2017-12-11 05:45:42', '2017-12-12 09:38:38'),
(19, 'Apple', '<p>Apple<br/></p>', '2017-12-11 10:42:44', '2017-12-12 09:38:52');

-- --------------------------------------------------------

--
-- Table structure for table `storematerial`
--

CREATE TABLE `storematerial` (
  `id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `storematerial`
--

INSERT INTO `storematerial` (`id`, `store_id`, `material_id`, `quantity`, `created_at`, `updated_at`) VALUES
(16, 19, 20, 100, '2017-12-12 02:31:05', '2017-12-12 02:31:05'),
(18, 9, 17, 100, '2017-12-12 02:33:10', '2017-12-12 09:39:33'),
(21, 10, 18, 100, '2017-12-12 04:22:11', '2017-12-12 04:22:11'),
(22, 11, 20, 100, '2017-12-12 09:39:44', '2017-12-12 09:39:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@mail.com', 'admin', '$2y$10$N2hF/YKMvqo9AL9BOIKSvOi06AOdMgN3l2/NMZQUTaHFxXyE6d36q', 'ku2iDswv4TFn5Zb7cMOoWHU9K2qrXjJA3md36nhL77Ng4h7X27hG5HfKwGn7', NULL, '2017-12-12 11:21:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `storematerial`
--
ALTER TABLE `storematerial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `storematerial`
--
ALTER TABLE `storematerial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
