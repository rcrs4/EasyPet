Feature: Desmarcar consulta
desmarca uma consulta existente

Cenário: desmarcar consulta com êxito
Given que estou na estou na página “desmarcar consulta”
And coloquei para desmarcar a consulta das 16 horas
And que coloquei o nome do pet como identificador para desmarcar
When eu confirmo a desmarcação
Then eu vejo uma mensagem de confirmação que a “consulta: 16 horas” foi desmarcada.

Cenário: aparição da opção remarcar
Given que estou vendo a mensagem de confirmação que uma consulta foi desmarcada
When eu saio da mensagem de confirmação
Then eu vejo uma opção para remarcar uma consulta


Cenário: não há consulta no horário desmarcado
Given que estou na estou na página de desmarcar consultas
And coloquei para desmarcar a consulta das 16 horas
And que coloquei o nome do pet como identificador para desmarcar
When eu confirmo a desmarcação
Then eu vejo uma mensagem de erro de consulta não encontrada.


Cenário: não há consultas para serem desmarcadas
Given que estou na estou na página inicial
When eu entro na página “desmarcar consulta”
Then eu vejo uma mensagem de erro informando que não existe nenhuma consulta marcada
Then eu volto para a página "inicial"
