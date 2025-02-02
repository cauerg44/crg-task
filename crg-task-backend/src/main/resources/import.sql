INSERT INTO tb_category (name) VALUES ('Estudo');
INSERT INTO tb_category (name) VALUES ('Trabalho');
INSERT INTO tb_category (name) VALUES ('Casa');
INSERT INTO tb_category (name) VALUES ('Academia');

INSERT INTO tb_task (title, description) VALUES ('Estudar ReactJS', 'Aprender sobre Context API e estado global')
INSERT INTO tb_task (title, description) VALUES ('Organizar meu quarto', 'Organizar meu quarto antes das 8hrs para eu sair de casa')

INSERT INTO tb_task_category (task_id, category_id) VALUES (1, 1);
INSERT INTO tb_task_category (task_id, category_id) VALUES (1, 3);
INSERT INTO tb_task_category (task_id, category_id) VALUES (2, 3);