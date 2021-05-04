Feature: Desmarcar agendamento

    #UI
	Scenario: Filtrar agendamento, service
		Given que o sistema tem agendamentos de "spike" e de "zeze"
		When eu filtro por "zeze"
		Then o sistema retorna apenas agendamentos de "zeze" e nao mais de "spike"

    #Service
	Scenario: Desmarcar agendamento com exito
		Given I am at the desmarcar page
		And eu vejo um agendamento para o pet "zeze" na data "20/04/2021"
		When eu clico para desmarcar o agendamento de "zeze" na data "20/04/2021"
		Then eu nao vejo o agendamento de "zeze" na data "20/04/2021" na lista de agendamentos