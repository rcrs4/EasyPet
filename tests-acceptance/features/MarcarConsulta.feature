Feature: Marcar consulta
Possibilidade de marcar uma consulta 

Scenario: Marcar consulta com êxito
Given que estou na página "marcar consulta"
And que todos os campos: "data: 23/02", "hora: 10h", "nome do dono: Bob" e "animal: Rex" devidamente preenchidos
When submeto as informações
Then recebo a mensagem "consulta marcada com êxito"

Scenario: Não preenchimento de todos os campos para marcar consulta
Given que estou na página "marcar consulta"
And que não preenchi todos os campos: "data", "hora", "nome do dono" e/ou "animal"
When tento submeter as informações
Then vejo a mensagem "não foi possível marcar a consulta. Por favor preencha todos os campos obrigatórios"

Scenario: Marcar consulta em horário ocupado
Given que estou na página "marcar consulta"
And que todos os campos como "data: 25/03", "hora: 13h", "nome do dono: Gil" e "animal: Kira" devidamente preenchidos
When tento marcar consulta em um horário ocupado
Then vejo uma mensagem "não foi possível marcar em horário já ocupado"

Scenario: Recibo de confirmação de consulta
Given que tenho uma consulta marcada
And estou na página "consultas marcadas"
When solicito recibo da consulta
Then recebo um recibo de confirmação contendo os dados "data: 23/02", "hora: 10h", "nome do dono: Bob", "animal: Rex" e "nome do veterinário: Dr.Jorge" de que a consulta foi marcada.

Scenario: Tentar marcar consulta sem possuir um animal cadastrado na conta do dono
Given que estou na página "marcar consulta"
When tento preencher qualquer campo como "data", "hora", "nome do dono" e/ou "animal"
Then recebo uma mensagem "Você não possui animais cadastrados na sua conta" juntamente com um link para cadastro do mesmo

Scenario: Tentativa de marcar consulta em um dia completamente preenchido
Given que estou na página "marcar consulta"
When seleciono o campo "data"
And essa data selecionada está totalmente preenchida
Then recebo uma mensagem "Dia sem vagas. Esse dia foi completamente preenchido, por favor selecione outro dia"
