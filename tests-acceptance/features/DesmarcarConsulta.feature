Feature: Desmarcar consulta

Scenario: Desmarcar consulta com exito
Given I am at the desmarcar page
And eu vejo um agendamento para o pet "zeze" na data "20/04/2021"
When eu clico para desmarcar o agendamento de "zeze" na data "20/04/2021"
Then eu nao vejo o agendamento de "zeze" na data "20/04/2021" na lista de agendamentos

