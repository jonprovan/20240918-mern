CREATE SCHEMA `college` ;

CREATE TABLE `college`.`advisor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `advisorName` VARCHAR(45) NOT NULL,
  `department` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `college`.`student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `studentName` VARCHAR(45) NOT NULL,
  `studentYear` VARCHAR(45) NOT NULL,
  `advisorId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `advisorId1_idx` (`advisorId` ASC) VISIBLE,
  CONSTRAINT `advisorId1`
    FOREIGN KEY (`advisorId`)
    REFERENCES `college`.`advisor` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
    
CREATE TABLE `college`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `courseName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `college`.`student_courses_course` (
  `studentId` INT NOT NULL,
  `courseId` INT NOT NULL,
  PRIMARY KEY (`studentId`, `courseId`),
  INDEX `courseId1_idx` (`courseId` ASC) VISIBLE,
  CONSTRAINT `studentId1`
    FOREIGN KEY (`studentId`)
    REFERENCES `college`.`student` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `courseId1`
    FOREIGN KEY (`courseId`)
    REFERENCES `college`.`course` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `college`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

INSERT INTO advisor(advisorName, department) VALUES('Weatherly Davison', 'Sports Medicine'), ('Ima Hacker', 'Cybersecurity');
INSERT INTO student(studentName, studentYear, advisorId) VALUES('Austin Powers', 'Sophomore', 1), ('Willy Wonka', 'Senior', 2), ('Les Paul', 'Junior', 1), ('Minty Gums', 'Freshman', 2);
INSERT INTO course(courseName) VALUES('Physical Therapy'), ('White Hat Hacking'), ('Bone Splinting 101'), ('DDoS Attacks For Dummies'), ('Gauze'), ('SEC+');
INSERT INTO student_courses_course(studentId, courseId) VALUES(1, 3), (2, 5), (3, 1), (4, 6), (1, 2), (2, 4), (3, 3), (4, 1);

SELECT * FROM advisor;
SELECT * FROM student;
SELECT * FROM course;
SELECT * FROM student_courses_course;
SELECT * FROM user;

SELECT advisorName, department, studentName, studentYear, courseName FROM advisor JOIN student ON advisor.id = student.advisorId
	JOIN student_courses_course ON student.id = student_courses_course.studentId
    JOIN course ON student_courses_course.courseId = course.id;