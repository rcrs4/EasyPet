Feature: Desmarcar agendamento

	Scenario: Filtrar agendamento, service
		Given que o sistema tem agendamentos de "spike" e de "zeze"
		When eu filtro por "zeze"
		Then o sistema retorna apenas agendamentos de "zeze" e nao mais de "spike"

	Scenario: Desmarcar agendamento com exito
		Given I am at the desmarcar page
		And eu vejo um agendamento para o pet "zeze" na data "20/04/2021"
		When eu clico para desmarcar o agendamento de "zeze" na data "20/04/2021"
		Then eu nao vejo o agendamento de "zeze" na data "20/04/2021" na lista de agendamentos

	Scenario: Procurar agendamento
		Given I am at the desmarcar page
		When eu filtro os agendamentos para somente o pet "zeze"
		Then eu vejo agendamentos apenas do pet "zeze"
	
	Scenario: Desmarcar agendamento, service
		Given que o sistema tem um agendamento de "spike" para a data "20/04/2020" com o id "2"
		When eu desmarco o agendamento de "spike" para a data "20/04/2020" com o id "2"
		Then o sistema agora nao tem mais agendamento de "spike" para a data "20/04/2020" com o id "2"
