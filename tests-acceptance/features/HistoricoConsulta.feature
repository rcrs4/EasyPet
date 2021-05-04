Feature: Histórico de Consulta
  Consultar o histórico de consulta realizada para o pets

Scenario: Lista de pets
  Given estou na pagina de "historico"
  And tenho os pets "zeze" e "spike" cadastrados
  When nao faco nada
  Then devo ver o titulo "Historico de consultas"
  And devo ver em lista botoes de acesso aos detalhes de "zeze" e "spike"
