## Aplicativo que centraliza a gestão da sua loja, cadastrando seus produtos personalizado. ##

## Funcionalidades

* **Área de Administração (Sua Visão)**
  
    * Login: Tela para inserir seu e-mail e senha.
    * Dashboard de Produtos: Uma página onde você vê todos os produtos já cadastrados.
    * Adicionar Produto: Formulário com os campos que você mencionou: nome, valor, descrição e imagem.
    * Editar/Remover Produto: Opções para atualizar a informação de um produto ou tirá-lo do ar.
      
* **Área do Cliente (Visão do Usuário)**
    * Página Inicial (Vitrine): Uma galeria com todos os seus copos personalizados, exibindo a imagem, o nome e o preço de cada um.
    * Detalhes do Produto: Ao clicar em um copo, o cliente veria uma página com a descrição completa e o valor.
    * Navegação: O cliente pode navegar por todos os produtos sem precisar de nenhuma credencial de login.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* React: Para a interface do usuário (a parte visual do app).
* Node.js (ou similar) + Express: Para construir a parte do "servidor" (o backend). Isso é o que vai gerenciar seu login e o banco de dados.
* Banco de Dados (por exemplo, MongoDB ou PostgreSQL): Para armazenar de forma segura todas as informações dos produtos (nome, valor, descrição, etc.) e seu login e senha.



## Pré-requisitos

Para rodar este projeto localmente, você precisará ter o **Node.js** e o **npm** (ou yarn) instalados em seu computador.

* **Bootstrap é um kit de ferramentas front-end poderoso e repleto de recursos.**

  - https://getbootstrap.com/docs/5.3/getting-started/introduction/
 
* **Leaflet é a principal biblioteca JavaScript de código aberto para mapas interativos compatíveis com dispositivos móveis**
  - https://leafletjs.com/reference.html
    


## Install

## Back-end
* Para instalar as dependências do projeto
```
npm install
```
* Para instalar bibliotecas específicas
```
npm install mongoose
npm install jsonwebtoken
```
* Para iniciar o servidor
```
npm run dev
```
* Conectar ao seu banco de dados FireBase.
```
npm install firebase
```

## Front-end 
* Para instalar bibliotecas específicas
```
npm install react-router-dom
```

## Resumo Rápido
O fluxo de trabalho padrão é:
* **Abra um terminal e vá para a pasta backend.**
* **Execute npm run dev para iniciar o servidor.**
* **Abra um segundo terminal e vá para a pasta app-loja.**
* **Execute npm run dev para iniciar o aplicativo.**



## Imagens

* **Login**
 <img width="1087" height="1088" alt="image" src="https://github.com/user-attachments/assets/3e954bff-6193-48f4-8388-c44fb2d7fd95" />

* **Dashboard do Adminstrador App-loja**
 <img width="1495" height="1237" alt="image" src="https://github.com/user-attachments/assets/bab0d407-e639-4b6e-a44f-7169c53195c5" />

* **Cadastrar Produtos Novos**
  <img width="1291" height="1237" alt="image" src="https://github.com/user-attachments/assets/cd8f304d-f13c-4d36-ac26-45813f25599f" />





