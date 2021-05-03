# UI
Scenario: Visualizar lista de pets cadastrados
    Given estou na página “início”
    And quero ver a lista de pets cadastrados
    And o pet de id "0" está cadastrado com os campos obrigatórios nome "Bob" e dono "Manoel"
    And o pet de id "2" está cadastrado com os campos obrigatórios nome "Filomena" e dono "Alceu"
    And o pet de id "3" está cadastrado com os campos obrigatórios nome "Faísca" e dono "Pedro"
    When entro na página "lista de pets"
    Then eu vejo uma tabela com uma coluna "nome", preenchida com "Bob", "Filomena" e "Faísca", nesta ordem
    Then eu vejo uma tabela com uma coluna "dono", preenchida com "Manoel", "Alceu" e "Pedro", nesta ordem

Scenario: Visualizar a tabela ordenada alfabeticamente pelos nomes dos pets
    Given estou na página "lista de pets"
    And o pet de id "0" está cadastrado com os campos obrigatórios nome "Bob" e dono "Manoel"
    And o pet de id "2" está cadastrado com os campos obrigatórios nome "Filomena" e dono "Alceu"
    And o pet de id "3" está cadastrado com os campos obrigatórios nome "Faísca" e dono "Pedro"
    When eu solicito para ordenar os pets por nome
    Then o sistema retorna a tabela ordenada com os nomes dos pets "Bob", "Faísca" e "Filomena", nesta ordem

Scenario: Visualizar a tabela ordenada alfabeticamente pelos nomes dos donos
    Given estou na página "lista de pets"
    And o pet de id "0" está cadastrado com os campos obrigatórios nome "Bob" e dono "Manoel"
    And o pet de id "2" está cadastrado com os campos obrigatórios nome "Filomena" e dono "Alceu"
    And o pet de id "3" está cadastrado com os campos obrigatórios nome "Faísca" e dono "Pedro"
    When eu solicito para ordenar a tabela por dono
    Then o sistema retorna a tabela ordenada com os nomes dos donos "Alceu", "Manoel" e "Pedro", nesta ordem

# Service
Scenario: Obter lista de pets registrados para um determinado dono
    Given o dono "Alceu" está associado ao pet de id "2" e nome "Filomena"
    And o dono "Alceu" está associado ao pet de id "4" e nome "Gus"
    When eu pergunto ao sistema pelos pets com dono "Alceu"
    Then o sistema retorna o pet com id "2" e nome "Filomena"
    And o sistema retorna o pet com id "4" e nome "Gus"
