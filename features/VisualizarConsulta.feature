Feature: Listar disponibilidade de consultas com informações relacionadas à data, horário e veterinário.
    Como usuário, gostaria de visualizar, à disponibilidade para marcar uma consulta filtrado por certos parâmetros.

# Service
Scenario: Visualizar consultas disponíveis
    Given a consulta que está registrada com o id "0", data "22/03", hora "10" e veterinário "Dr.Tonicao"
    And "Dr.Tonicao" está associado a consulta id "4", data "23/03",horario "16", veterinario "Dr.Tonicao"
    When eu pergunto ao sistema pela consulta com veterinário "Dr.Tonicao"
    Then o sistema retorna uma lista com a consulta id "0", data "22/03", hora "10" e veterinário "Dr.Tonicao" e a consulta id "4", data "23/03",horario "16", veterinario "Dr.Tonicao"

# UI
Scenario: Visualizar a tabela ordenada por veterinário
    Given estou na página "consultas"
    And a consulta de id "0" está cadastrado com os campos obrigatórios data "22/03", hora "10" e veterinário "Dr.Tonicao"
    And a consulta de id "1" está cadastrado com os campos obrigatórios data "22/03", hora "10" e veterinário "Dr.Manel"
    And a consulta de id "2" está cadastrado com os campos obrigatórios data "23/03", hora "8" e veterinário "Dr.Pedoka"
    When eu solicito para ordenar as consultas por veterinario
    Then o sistema retorna a tabela ordenada com os nomes dos veterinários "Dr.Manel", "Dr.Pedoka" e "Dr.Tonicao", nesta ordem
