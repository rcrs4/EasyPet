Feature: Listar disponibilidade de consultas com informacoes relacionadas a data, horario e veterinario.

# Service
Scenario: Visualizar consultas disponiveis
    Given a consulta que esta registrada com o id "0", data "22/03", hora "10" e veterinario "Dr.Tonicao"
    And "Dr.Tonicao" esta associado a consulta id "4", data "23/03",horario "16", veterinario "Dr.Tonicao"
    When eu pergunto ao sistema pela consulta com veterinario "Dr.Tonicao"
    Then o sistema retorna a consulta id "0", data "22/03", hora "10" e veterinario "Dr.Tonicao"
    And o sistema retorna a consulta id "4", data "23/03", hora "16" e veterinario "Dr.Tonicao"

# UI
Scenario: Visualizar a tabela ordenada por veterinario
    Given estou na pagina "Consultas"
    And a consulta de id "3" esta cadastrado com os campos obrigatorios data "24/03", hora "15" e veterinario "Dr.Ruivin"
    And a consulta de id "1" esta cadastrado com os campos obrigatorios data "22/03", hora "10" e veterinario "Dr.Manel"
    And a consulta de id "2" esta cadastrado com os campos obrigatorios data "23/03", hora "8" e veterinario "Dr.Pedoka"
    When eu solicito para ordenar as consultas por veterinario
    Then o sistema retorna a tabela ordenada com os nomes dos veterinarios "Dr.Manel", "Dr.Pedoka" e "Dr.Ruivin", nesta ordem
