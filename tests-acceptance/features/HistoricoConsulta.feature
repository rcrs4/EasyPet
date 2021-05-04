Feature: Histórico de Consulta
  Consultar o histórico de consulta realizada para o pets

  Scenario: Lista de pets
    Given estou na pagina de "historico"
    And tenho os pets "zeze" e "spike" cadastrados
    When nao faco nada
    Then devo ver o titulo "Historico de consultas"
    And devo ver em lista botoes de acesso aos detalhes de "zeze" e "spike"

  Scenario: Requisição de consultas do pet
    Given estou na pagina de "historico"
    And "zeze" tem consultas registrada no dia "20/04/2021" e "21/04/2021"
    When acesso os detalhes de "zeze"
    Then o sistema retorna uma lista de consultas de "zeze" com aa datas "20/04/2021" e "21/04/2021"
    And sou redirecionado para "historico/pets/zeze"

  Scenario: Visualização de histórico vazio
    Given estou na pagina de "historico/pets/zeze"
    And "zeze" tem consultas registrada no dia "20/04/2021" e "21/04/2021"
    When nao faco nada
    Then visualizo uma lista com as consultas do dia "20/04/2021" e "21/04/2021"
    And visualizo botoes de acesso a detalhes das consultas do dia "20/04/2021" e "21/04/2021"