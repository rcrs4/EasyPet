Feature: Listar donos cadastrados

    #Service
	Scenario: Filtrar cadastro no service pela idade
		Given que o sistema tem donos cadastrados com "22" e "24" anos de idade
		When eu filtro por "22"
		Then o sistema retorna apenas os donos com "22" anos

    #UI
	Scenario: Ordenação da lista de donos cadastrados
		Given que eu estou na página que lista os donos cadastrados
		And eu clico na propriedade "Idade"
		Then a lista será ordenada baseada na "Idade" dos donos