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

Scenario: Visualização rápida de detalhes
  Given que estou na página de "Histórico de consulta" do pet "Bob"
  And "Bob" já realizou consultas no consultório anteriormente
  When eu der destaque para a consulta que aconteceu no dia "01/01/2020"
  Then verei que ele a consulta foi agendada em "01/12/2019"

Scenario: Visualização aprofundada dos detalhes
  Given que estou na página de "Histórico de consulta" do pet "Bob"
  When acesso os deatlhes da consulta realizada no dia "01/01/2020"
  Then visualizo a data que a consulta foi feita "01/01/2020", a data que a consulta foi agendada "01/12/2019"
  And visualizo o resumo escrito da consulta "Dog saudável"
  And visualizo um meio de gerar relatório daquela consulta

<<<<<<< HEAD
Scenario: Gerar relatório de cada consulta
  Given que estou na tela de visualização aprofundada dos detalhes da consulta de "Bob" do dia "01/01/2020"
  When peço ao sistema que gere um relatório daquela consulta
  Then farei o download de um relatório em PDF
  And neste relatório terá a data que foi feita "01/01/2020", a data que foi marcada "01/12/2019" e o resumo da consulta "Dog saudável"

Scenario: Gerar relatório de todas as consultas
  Given que estou na página de Histórico de Consulta de "Bob"
  And "Bob" realizou consultas no dia "01/01/2020" e no dia "01/02/2020"
  When peço ao sistema para gerar relatório de todas as consultas
  Then farei o download de um relatório em PDF
  And neste relatório terá, para cada consulta, a data em que a consulta foi realizada, a data em que a consulta foi agendada e o resumo da consulta
  And passo adicional de teste
=======
Scenario: Teste de commit na branch de desenvolvimento
  Given context
  When event
  Then outcome



>>>>>>> desenvolvimento










