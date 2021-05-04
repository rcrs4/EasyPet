Feature: Listar donos cadastrados e fazer ordenação

    #Service
	Scenario: Filtrar cadastro no service pela idade
		Given que o sistema tem o dono com id "1" cadastrado com os campos obrigatorios cpf "000.000.000-00" e idade "22"
		And que o sitema tem o dono com id "2" cadastrado com os campos obrigatorios cpf "111.111.111-11" e idade "23"
		And que o sistema tem o dono com id "3" cadastrado com os campos obrigatorios cpf "222.222.222-22" e idade "22"
		When eu filtro por donos com idade "22" 
		Then o sistema retorna apenas o dono com id "1", cpf "000.000.000-00" e idade "22" e o dono com id "3", cpf "222.222.222-22" e idade "22" 

    #UI
	Scenario: Visualizar a lista de donos ordenada por idade
		Given que eu estou na pagina "listar donos"
		And o dono de id "1" esta cadastrado com os campos obrigatorios cpf "000.000.000-00" e idade "22"
		And o dono de id "2" esta cadastrado com os campos obrigatorios cpf "111.111.111-11" e idade "23"
		And o dono de id "3" esta cadastrado com os campos obrigatorios cpf "222.222.222-22" e idade "22"
		When eu clicar para ordenar os donos por idade
		Then o sistema retorna a lista de donos ordenada com as idades "22", "22" e "23", nessa ordem
