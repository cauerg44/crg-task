INSERT INTO tb_category (name) VALUES ('Estudo');
INSERT INTO tb_category (name) VALUES ('Trabalho');
INSERT INTO tb_category (name) VALUES ('Casa');
INSERT INTO tb_category (name) VALUES ('Academia');

INSERT INTO tb_task (title, description) VALUES ('Estudar ReactJS', 'Aprender sobre Context API e estado global')
INSERT INTO tb_task (title, description) VALUES ('Organizar meu quarto', 'Organizar meu quarto antes das 8hrs para eu sair de casa')
INSERT INTO tb_task (title, description) VALUES ('Treino de braço', 'Treinar bastante o bíceps e tríceps')
INSERT INTO tb_task (title, description) VALUES ('Entender conceito SOLID', 'Entender todo o conceito e arquitetura para que me ajude a melhorar meu código')
INSERT INTO tb_task (title, description) VALUES ('Limpar banheiro e cozinha', 'Deixar a comida pronta, depois deixar a cozinha limpa, e deixar o banheiro limpo antes de anoitecer')
INSERT INTO tb_task (title, description) VALUES ('Zerar a task', 'Fazer todas as tasks e fazer o pull request para ser aprovado')
INSERT INTO tb_task (title, description) VALUES ('Entregar o projeto pronto', 'Entregar meu projeto full stack pronto para eu ser aprovado')

INSERT INTO tb_task_category (task_id, category_id) VALUES (1, 1);
INSERT INTO tb_task_category (task_id, category_id) VALUES (1, 3);
INSERT INTO tb_task_category (task_id, category_id) VALUES (2, 3);
INSERT INTO tb_task_category (task_id, category_id) VALUES (3, 4);
INSERT INTO tb_task_category (task_id, category_id) VALUES (4, 1);
INSERT INTO tb_task_category (task_id, category_id) VALUES (5, 3);
INSERT INTO tb_task_category (task_id, category_id) VALUES (6, 2);
INSERT INTO tb_task_category (task_id, category_id) VALUES (7, 1);
INSERT INTO tb_task_category (task_id, category_id) VALUES (7, 2);