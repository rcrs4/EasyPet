Scenario: Preenchendo os dados do pet
    Given que estou na página “cadastro do pet”
    When eu preencho campos obrigatórios com nome “Bob”, raça “vira-lata” e dono “Fulano”
    And preencho um campo opcional de peso com “10kg”
    And submeto as informações
    Then sou dirigido para a tela de resumo “dados preenchidos”

Scenario: Visualizar os dados preenchidos antes de confirmar
	Given estou na página “dados preenchidos”
    When confirmo os dados já previamente preenchidos
    Then recebo a mensagem de “Cadastro bem sucedido”

Scenario: Atribuição do pet ao dono
	Given que tenho o dono “Fulano” e pet “Bob” cadastrados
	And estou na página para ligar o pet ao dono
	When atribuo o pet “Bob” ao dono “Fulano”
	Then eu visualizo o pet “Bob” no cadastro do dono “Fulano”

Scenario: Editando os dados do pet
	Given que tenho a lista de pet
	And o pet “Bob” já está cadastrado
	When quero editar o pet “Bob”
    Then sou direcionado para a página de “cadastro do pet” para ser preenchida novamente

Scenario: Tentativa falha de preencher os dados do pet
    Given que estou na página “cadastro do pet”
    When eu preencho alguns campos obrigatórios com raça “vira-lata” e dono “Fulano”
    And preencho um campo opcional de peso com “10kg”
    And submeto as informações
    Then recebo uma mensagem de erro "Campos obrigatórios não preenchidos"

Scenario: Falha ao editar os dados do pet
	Given que tenho a lista de pets
	And o pet “Bob” já está cadastrado
	When quero editar o pet “Bob”
    And esqueço em branco o campo obregatório "raça"
    Then recebo uma mensagem de erro "Campos obrigatórios não preenchidos"

Scenario: Falha de atribuição do pet ao dono
	Given que tenho o dono “Fulano” e pet “Bob” cadastrados
    And o campo "dono" do pet "Bob" contem "Alex"
	And estou na página para ligar o pet ao dono
	When atribuo o pet “Bob” ao dono “Fulano”
	Then recebo uma mensagem de erro "Donos diferentes"

Commit 1