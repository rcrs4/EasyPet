Feature: Histórico de Consulta
  Consultar o histórico de consulta realizada para o pets

Scenario: Visualização de todas as consultas
  Given que estou na página de detalhes sobre o pet "Bob"
  And "Bob" já realizou consultas no consultório anteriormente nos dias "01/01/2020" e "01/02/2020"
  When acesso o histórico de consultas de "Bob"
  Then visualizo um resumo das consultas que "Bob" fez nos dias "01/01/2020" e "01/02/2020"
  And visualizo, para cada consulta, a data em que ela foi realizada
  And visualizo, para cada consulta, uma via de acesso à detalhes da consulta
  And visualizo um meio de gerar relatório sobre todas as consultas realizadas

Scenario: Visualização de histórico vazio
  Given que estou na página de detalhes sobre o pet "Bob"
  And "Bob" nunca realizou uma consulta no consultório anteriormente
  When acesso o histórico de consultas de "Bob"
  Then visualizo uma tela em branco
  And visualizo uma mensagem "Nenhuma consulta realizada anteriormente"















