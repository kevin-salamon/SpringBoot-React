INSERT INTO user (USER_NAME, FIRST_NAME, LAST_NAME, EMAIL) VALUES ('mrbananalisk', 'Kevin', 'Salamon', 'theksalamon@gmail.com');

INSERT INTO workout (USER_ID, CURRENT_DATE) VALUES ((SELECT ID FROM user WHERE LAST_NAME = 'Salamon'), '2021-06-23');

INSERT INTO exercise (WORKOUT_ID, NAME, SETS, REPS, WEIGHT, SUCCESS) VALUES ((SELECT ID FROM workout WHERE CURRENT_DATE = '2021-06-23'), 'Squats', 5, 5, 95, true);