CREATE DATABASE mediassist;
USE mediassist;

CREATE TABLE symptoms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(255) NOT NULL,
    response TEXT NOT NULL
);

INSERT INTO symptoms (keyword, response) VALUES
('headache', 'Headaches can be caused by stress, dehydration, or migraines.'),
('fever', 'Fever may indicate an infection. Monitor your temperature and stay hydrated.'),
('cough', 'Coughing can be due to allergies, infections, or lung issues.'),
('fatigue', 'Fatigue can be caused by lack of sleep, stress, or medical conditions.'),
('nausea', 'Nausea may result from food poisoning, pregnancy, or motion sickness.'),
('dizziness', 'Dizziness can be caused by low blood pressure, dehydration, or vertigo.');