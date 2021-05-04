Feature: Lista de pets
    # UI
    Scenario: Visualizar a tabela ordenada alfabeticamente pelos nomes dos pets
        Given estou na página "Pet List"
        And o pet de id "0" está cadastrado com os campos obrigatórios nome "Bob" e dono "Manoel"
        And o pet de id "2" está cadastrado com os campos obrigatórios nome "Filomena" e dono "Alceu"
        And o pet de id "3" está cadastrado com os campos obrigatórios nome "Faísca" e dono "Pedro"
        When eu solicito para ordenar os pets por nome
        Then o sistema retorna a tabela ordenada com os nomes dos pets "Bob", "Faísca" e "Filomena", nesta ordem
    # Service
    Scenario: Obter lista de pets registrados ordenador por nome
        Given o pet de id "0" está cadastrado com os campos obrigatórios nome "Bob" e dono "Manoel"
        And o pet de id "2" está cadastrado com os campos obrigatórios nome "Filomena" e dono "Alceu"
        And o pet de id "3" está cadastrado com os campos obrigatórios nome "Faísca" e dono "Pedro"
        When eu solicito ao sistema para ordenar os pets por nome
        Then o sistema retorna o pet com id "0" e nome "Bob", de dono "Manoel"
        Then o sistema retorna o pet com id "3" e nome "Faísca", de dono "Pedro"
        Then o sistema retorna o pet com id "2" e nome "Filomena", de dono "Alceu"

    Scenario: Obter lista de pets registrados para um determinado dono
        Given o dono "Alceu" está associado ao pet de id "2" e nome "Filomena"
        And o dono "Alceu" está associado ao pet de id "4" e nome "Gus"
        When eu pergunto ao sistema pelos pets com dono "Alceu"
        Then o sistema retorna o pet com id "2" e nome "Filomena", de dono "Alceu"
        And o sistema retorna o pet com id "4" e nome "Gus", de dono "Alceu"
