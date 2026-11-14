# API - Cifra de Vernam

**Desenvolvido por:** Jonas Eduardo de Almeida Pinheiro

## Sobre o projeto

Esta API foi desenvolvida como parte da atividade de Segurança da Informação e tem como objetivo implementar a **Cifra de Vernam**, um método de criptografia que utiliza a operação lógica XOR (OU exclusivo) entre os bytes da mensagem e da chave.

A API permite realizar duas operações:

- **Cifragem:** recebe um texto claro e uma chave, aplicando a operação XOR para gerar o texto cifrado em representação binária.
- **Decifragem:** recebe o texto cifrado e a mesma chave utilizada na cifragem, recuperando a mensagem original.

## Acesso à API

A API está hospedada no Render e pode ser acessada pelo endereço:

https://cifradevernan.onrender.com/

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- CORS

## Estrutura do projeto

```text
src/
├── cifrar.js
├── decifrar.js
└── server.js
```

## Como executar o projeto localmente

### 1. Pré-requisitos

- Node.js instalado.
- NPM instalado.

### 2. Clonar o repositório

```bash
git clone https://github.com/JonasAPinheiro/cifradevernan.git
```

### 3. Acessar a pasta do projeto

```bash
cd cifradevernan
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Executar a API

```bash
npm run start
```

A API estará disponível em:

http://localhost:3000

## Endpoints

**GET /**

Retorna uma mensagem indicando que a API está funcionando.

### Cifrar mensagem

**POST /cifrar**

Exemplo de requisição:

```json
{
  "textoClaro": "OLA",
  "chave": "CHT"
}
```

Resposta esperada:

```json
{
  "textoCifrado": "000011000000010000010101"
}
```

### Decifrar mensagem

**POST /decifrar**

Exemplo de requisição:

```json
{
  "textoCifrado": "000011000000010000010101",
  "chave": "CHT"
}
```

Resposta esperada:

```json
{
  "textoClaro": "OLA"
}
```

## Observações

- A chave deve possuir o mesmo tamanho da mensagem em bytes.
- A mesma chave utilizada na cifragem deve ser utilizada na decifragem.
- O texto cifrado é retornado em representação binária, com 8 bits por byte.
- Requisições inválidas retornam o status HTTP 400.
- Respostas bem-sucedidas retornam o status HTTP 200.
