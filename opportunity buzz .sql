-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2024 at 09:45 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `opportunitybuzz`
--

-- --------------------------------------------------------

--
-- Table structure for table `subject_cat`
--

CREATE TABLE `subject_cat` (
  `sub_id` int(5) NOT NULL,
  `sub_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject_cat`
--

INSERT INTO `subject_cat` (`sub_id`, `sub_name`) VALUES
(1, 'C'),
(2, 'C++'),
(3, 'Python'),
(4, 'Java');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_a_login`
--

CREATE TABLE `tbl_a_login` (
  `a_id` int(5) NOT NULL,
  `a_email` varchar(20) NOT NULL,
  `a_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_a_login`
--

INSERT INTO `tbl_a_login` (`a_id`, `a_email`, `a_password`) VALUES
(1, 'admin@gmail.com', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_a_questions`
--

CREATE TABLE `tbl_a_questions` (
  `q_id` int(5) NOT NULL,
  `q_question` varchar(500) NOT NULL,
  `q_response` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_a_questions`
--

INSERT INTO `tbl_a_questions` (`q_id`, `q_question`, `q_response`) VALUES
(1, 'How Many Users currently register? ', 'There Are 10 users.\r\n'),
(2, 'Hey', 'Hello, How can I Help You. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `tc_id` int(5) NOT NULL,
  `tc_name` varchar(10) NOT NULL,
  `tc_sub` varchar(10) NOT NULL,
  `tc_num` bigint(10) NOT NULL,
  `tc_email` varchar(10) NOT NULL,
  `tc_msg` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`tc_id`, `tc_name`, `tc_sub`, `tc_num`, `tc_email`, `tc_msg`) VALUES
(1, 'RAM', 'qrfq', 123142355134, 'pp4665031@', ' vzvbxd'),
(2, 'pratik', 'jklh', 1248189249, 'pp4665031@', 'ksdgfuigui'),
(3, 'pratik', 'agdf', 2234445556, 'pp0222002@', 'sdfcdxvdgd'),
(4, 'Jayraj', 'React', 9913116167, 'dhrumildj1', 'Helloo, I '),
(5, 'Pratik Pat', 'Java', 8866217603, 'pp0222002@', 'adasfasfffffffffffffffffffffffffffffff');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_c_registration`
--

CREATE TABLE `tbl_c_registration` (
  `c_id` int(5) NOT NULL,
  `c_name` varchar(20) NOT NULL,
  `c_email` varchar(40) NOT NULL,
  `c_password` varchar(10) NOT NULL,
  `c_phoneno` bigint(10) NOT NULL,
  `c_gender` char(10) NOT NULL,
  `c_dob` date NOT NULL,
  `c_address` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_c_registration`
--

INSERT INTO `tbl_c_registration` (`c_id`, `c_name`, `c_email`, `c_password`, `c_phoneno`, `c_gender`, `c_dob`, `c_address`) VALUES
(1, 'pratik', '	\r\ngodsent2405@gmail.com', '1234', 9866131868, 'Male', '2024-01-02', 'shfgihq'),
(2, 'Afzal', 'godsent2405@gmail.com', '1234', 9289783902, 'Male', '2002-02-02', 'wdaq'),
(3, 'Uvesh', 'techniacityit@gmail.com', '1234', 7688961237, 'Male', '2002-02-02', 'ajifw'),
(5, 'Brijesh', 'jayrajravalji176@gmail.com', '1234', 231432525, 'Male', '2024-02-08', 'asfa'),
(6, 'jayraj', 'jyrj176@gmail.com', '1234', 8987239612, 'Male', '2024-03-15', 'Bharuch'),
(7, 'dhruv', 'dhruvjadav2002@gmail.com', '1234', 4646756824, 'Male', '2024-03-27', 'wdaq'),
(35, 'Asutosh', 'jayrajravalji176@gmail.com', '1234', 942713069, 'Male', '2003-06-25', 'Chakla '),
(36, 'ushgfyaufsif', 'jayrajravalji176@gmail.com', 'qewqe', 3123213, 'Male', '2024-04-18', 'adds');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_date`
--

CREATE TABLE `tbl_date` (
  `d_id` int(5) NOT NULL,
  `s_date` date DEFAULT NULL,
  `e_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_date`
--

INSERT INTO `tbl_date` (`d_id`, `s_date`, `e_date`) VALUES
(28, '2024-04-01', '2024-04-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hr_login`
--

CREATE TABLE `tbl_hr_login` (
  `hr_id` int(5) NOT NULL,
  `hr_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_job_category`
--

CREATE TABLE `tbl_job_category` (
  `jc_id` int(5) NOT NULL,
  `jc_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_job_category`
--

INSERT INTO `tbl_job_category` (`jc_id`, `jc_name`) VALUES
(20, 'Software'),
(21, 'Cyber'),
(23, 'Web');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_job_details`
--

CREATE TABLE `tbl_job_details` (
  `job_id` int(5) NOT NULL,
  `jc_id` varchar(20) NOT NULL,
  `job_name` varchar(25) NOT NULL,
  `enddate` date NOT NULL,
  `job_desc` varchar(30) DEFAULT NULL,
  `j_requirement` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mcqs`
--

CREATE TABLE `tbl_mcqs` (
  `mcqs_id` int(5) NOT NULL,
  `sub_id` int(5) NOT NULL,
  `que` varchar(500) NOT NULL,
  `option1` varchar(100) NOT NULL,
  `option2` varchar(100) NOT NULL,
  `option3` varchar(100) NOT NULL,
  `option4` varchar(100) NOT NULL,
  `correct_ans` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_mcqs`
--

INSERT INTO `tbl_mcqs` (`mcqs_id`, `sub_id`, `que`, `option1`, `option2`, `option3`, `option4`, `correct_ans`) VALUES
(1, 2, 'Who invented C++?', 'a) Dennis Ritchie', 'b) Ken Thompson', 'c) Brian Kernighan', 'd) Bjarne Stroustrup', 'd) Bjarne Stroustrup'),
(2, 2, 'What is C++?', 'a) C++ is an object oriented programming language', 'b) C++ is a procedural programming language', 'c)C++supports both procedural and object oriented programming language.', 'd) C++ is a functional programming language', 'c)C++supports both procedural and object oriented programming language.'),
(3, 2, 'Which of the following is the correct syntax of including a user defined header files in C++?', 'a) #include [userdefined]', 'b) #include “userdefined”', 'c) #include <userdefined.h>', 'd) #include <userdefined>', 'b) #include “userdefined”'),
(4, 1, 'Who is the father of C language?', 'a) Steve Jobs', 'b) James Gosling', 'c) Dennis Ritchie', 'd) Rasmus Lerdorf', 'c) Dennis Ritchie'),
(5, 1, 'Which of the following is not a valid C variable name?', 'a) int number;', 'b) float rate;', 'c) int variable_count;', 'd) int $main;', 'd) int $main;'),
(6, 1, 'All keywords in C are in ____. ', 'a) LowerCase letters', 'b) UpperCase letters', 'c) CamelCase letters', 'd) None of the mentioned', 'a) LowerCase letters'),
(7, 3, 'Who developed Python Programming Language?', 'a) Wick van Rossum\r\n\r\n', 'b) Rasmus Lerdorf', 'c) Guido van Rossum', 'd) Niene Stom', 'c) Guido van Rossum'),
(8, 3, 'Which type of Programming does Python support?', 'a) object-oriented programming\r\n\r\n\r\n', 'b) structured programming', 'c) functional programming', 'd) all of the mentioned', 'd) all of the mentioned'),
(9, 3, 'Which of the following is the correct extension of the Python file?', 'a) .python\r\n', 'b) .pl', 'c).py', 'd) .p', 'c).py'),
(23, 4, '1) Which of the following is not a Java features?', 'a) Dynamic', 'b) Architecture Neutral', 'c) Use of pointers', 'd) Object-oriented', 'c) Use of pointers'),
(24, 4, '2) Which of the following is a valid declaration of a char?', 'a) char ch = \'\\utea\';', 'b) char ca = \'tea\';', 'c) char cr = \\u0223;', 'd) char cc = \'\\itea\';', 'a) char ch = \'\\utea\';'),
(25, 4, '3) Which keyword is used for accessing the features of a package?', 'a) package', 'b) import', 'c) extends', 'd) export', 'b) import');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resume`
--

CREATE TABLE `tbl_resume` (
  `r_id` int(5) NOT NULL,
  `up_resume` varchar(300) NOT NULL,
  `c_id` int(5) NOT NULL,
  `c_name` varchar(10) NOT NULL,
  `jc_id` int(5) NOT NULL,
  `r_date` date NOT NULL,
  `si_date` date DEFAULT NULL,
  `si_time` time NOT NULL,
  `remark` varchar(500) NOT NULL,
  `si_venue` varchar(20) NOT NULL,
  `state` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_resume`
--

INSERT INTO `tbl_resume` (`r_id`, `up_resume`, `c_id`, `c_name`, `jc_id`, `r_date`, `si_date`, `si_time`, `remark`, `si_venue`, `state`) VALUES
(60, '1710313516095-.jpg', 1, 'pratik', 20, '2024-03-13', '2024-04-27', '14:15:00', 'Sorry, You Are not Selected for an Interview Round', 'Bharuch', 3),
(61, '1710313557694-.jpg', 1, 'pratik', 21, '2024-03-13', NULL, '00:00:00', 'Sorry, You Are not Selected for an Interview Round', '', 4),
(62, '1710313583704-.jpg', 1, 'pratik', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(67, '1710313706133-.jpg', 6, 'jayraj', 21, '2024-03-13', '2024-04-12', '15:02:00', 'Dear Candidate,  Thank you for taking the time to apply for the Job IN Our Compnay.  After carefully reviewing your application, we regret to inform you that we have decided to pursue other candidates whose qualifications more closely align with the requirements of the role.  We want to thank you for considering opportunities with us and wish you the best of luck in your job search.', 'vadodara', 3),
(68, '1710313725870-.jpg', 6, 'jayraj', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(71, '1710313852126-.jpg', 2, 'Afzal', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(73, '1710313942732-.jpg', 3, 'Uvesh', 21, '2024-03-13', '2024-04-09', '17:37:00', '', 'Vadodara', 2),
(74, '1710313954113-.jpg', 3, 'Uvesh', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(76, '1710313997486-.jpg', 7, 'dhruv', 21, '2024-03-13', NULL, '00:00:00', '', '', 0),
(77, '1710314010406-.jpg', 7, 'dhruv', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(79, '1710314056935-.jpg', 5, 'Brijesh', 21, '2024-03-13', NULL, '00:00:00', '', '', 0),
(80, '1710314071978-.jpg', 5, 'Brijesh', 23, '2024-03-13', NULL, '00:00:00', '', '', 0),
(81, '1710483979796-.png', 6, 'jayraj', 20, '2024-03-15', '2024-04-18', '13:22:00', 'Sorry, You Are not Selected for an Interview Round', 'Vadodara', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subject_cat`
--
ALTER TABLE `subject_cat`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `tbl_a_login`
--
ALTER TABLE `tbl_a_login`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `tbl_a_questions`
--
ALTER TABLE `tbl_a_questions`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`tc_id`);

--
-- Indexes for table `tbl_c_registration`
--
ALTER TABLE `tbl_c_registration`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `tbl_date`
--
ALTER TABLE `tbl_date`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `tbl_hr_login`
--
ALTER TABLE `tbl_hr_login`
  ADD PRIMARY KEY (`hr_id`);

--
-- Indexes for table `tbl_job_category`
--
ALTER TABLE `tbl_job_category`
  ADD PRIMARY KEY (`jc_id`);

--
-- Indexes for table `tbl_job_details`
--
ALTER TABLE `tbl_job_details`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `tbl_mcqs`
--
ALTER TABLE `tbl_mcqs`
  ADD PRIMARY KEY (`mcqs_id`);

--
-- Indexes for table `tbl_resume`
--
ALTER TABLE `tbl_resume`
  ADD PRIMARY KEY (`r_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subject_cat`
--
ALTER TABLE `subject_cat`
  MODIFY `sub_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_a_login`
--
ALTER TABLE `tbl_a_login`
  MODIFY `a_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_a_questions`
--
ALTER TABLE `tbl_a_questions`
  MODIFY `q_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `tc_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_c_registration`
--
ALTER TABLE `tbl_c_registration`
  MODIFY `c_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tbl_date`
--
ALTER TABLE `tbl_date`
  MODIFY `d_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tbl_hr_login`
--
ALTER TABLE `tbl_hr_login`
  MODIFY `hr_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_job_category`
--
ALTER TABLE `tbl_job_category`
  MODIFY `jc_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `tbl_job_details`
--
ALTER TABLE `tbl_job_details`
  MODIFY `job_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_mcqs`
--
ALTER TABLE `tbl_mcqs`
  MODIFY `mcqs_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_resume`
--
ALTER TABLE `tbl_resume`
  MODIFY `r_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
