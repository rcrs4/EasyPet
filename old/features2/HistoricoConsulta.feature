Feature: Historico

Scenario: Lista de pets
  Given estou na pagina historico
  And vejo "Bob" como um pet registrado
  Then vejo botões com o nome dos pets

