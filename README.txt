PREFERENCIAS:

 Softwares necessários que precisam ser instalados antes dos passos:
-------------------------------------------------------------------
winrar

disponível em : https://www.win-rar.com/download.html?&L=9
-------------------------------------------------------------------
node.js
disponível em: https://nodejs.org/pt
-------------------------------------------------------------------
Mysql
disponível em: https://dev.mysql.com/downloads/file/?id=541637

Obs. não é  necessário criar uma conta, apenas aperte logo abaixo escrito "No thanks, just start my download."
--------------------------------------------------------------------
Visual Studeo Code
disponível em: https://code.visualstudio.com
--------------------------------------------------------------------
Passo 1
crie uma pasta com o nome " cafeteria_nodes " em users/seu_usuario/documentos 
baixe os arquivos dispobilizados no github em zip
extraia a pasta em documetos

se a pasta estiver com nome diferente 
algo como cafeteria_nodes-master
renomeie para " cafeteria_nodes "
------------------------------------------------------------------------------------------

Passo 2:


Comece utilizando o software MySql :
no instalador selecione "full" para instalar todas os modos 
em algum momento irá pedir para selecionar um usuário e senha, 
por padrão usuário "root", mas você pode trocar se desejar
coloque uma senha qualquer de sua preferência ("necessário para mais chances de sucesso").

abra a pasta cafeteria_node citada no passo1
verifique o arquivo com o nome "db"
aperte o botão direito e selecione para abrir com o visual studeo code

identifique estas linhas
--------------------------------
  host: "localhost",           
  user: "root",                
  password: "",                
  database: "cafeteria",       
--------------------------------

modifique o user e passaword caso voce tenha colocado outro nome no user, retire o root o coloque o usuario definido por você
quando você iniciou o  MySql, assim como a password, 
é necessário colocar para que seja identificado o servidor e se conecte ao mysql.
salve o arquivo apertando ctrl + s.

após isso: crie um arquivo

e cole este código abaixo:

------------------------------------------------------
                                                      
-- Cria o banco de dados                              
CREATE DATABASE IF NOT EXISTS cafeteria;              
USE cafeteria;                                       
                                                      
-- Cria a tabela de produtos                          
CREATE TABLE IF NOT EXISTS produtos (                 
    id INT AUTO_INCREMENT PRIMARY KEY,                
    nome VARCHAR(100) NOT NULL,                       
    descricao TEXT,                                          
    preco DECIMAL(10,2),                                           
    imagem VARCHAR(255)                                  
);                                                     
                                                           
                                                      
______________________________________________________

após isso aperte na simbolo de "raio" para executar o codigo e criar o banco de dados
---------------------------------------------------------------------------------------

Passo 3:

logo após isso verifique se o node.js foi instalado utilizando cmd do windows ("terminal").

escreva ou cole abaixo o codigos:

node -v

ou

node --version

verifique se a saída foi algo como ("v16.14.2") ou outra versão

obs. isso verfica se o node.js foi instalado 
---------------------------------------------------------------------------------------------

Passo 4:

abra o cmd "terminal do windows"
execute normalmente, 'não execute em administrador"
primeiro precisa ser instalado as depedencias e pacotes do node

abra a pasta selecionada utilizando o codigo:
---------------------------------------/        
cd documents\cafeteria_nodes            /
---------------------------------------/

após isso utilize o codigo:

---------------------------------------/        
npm install                            /
---------------------------------------/

agora utilize o ultimo codigo abaixo:

---------------------------------------/        
node server.js                         /
---------------------------------------/
	

oque precisa estar escrito:
"
servidor rodando em http://localhost:3000
conectado ao mysql
"
ou outro localhost definido por você no mysql.

copie a url
---------------------------------------------


passo 5:

verifique se realmente foi criado o banco

adicione um produto na pagina inicial
coloque foto, nome, preço, descrição

crie ao menos 5 produtos
teste " editar, remover "

após isso cole a url em outro navegador
e verifique se suas alterações continuaram mesmo após trocar de navegador

teste a pasta uploads, verifique se as imagens foram parar na pasta uploads, contida na pasta cafeteria_node 
