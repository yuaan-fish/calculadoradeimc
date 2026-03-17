Calculadora de IMC (React Native + Expo)

Este é um aplicativo simples desenvolvido com React Native utilizando Expo, que permite calcular o IMC (Índice de Massa Corporal) com base no peso e altura informados pelo usuário.

---

Funcionalidades

* Inserção de peso e altura
* Cálculo automático do IMC
* Exibição da classificação de acordo com o resultado
* Validação de campos obrigatórios
* Botão para limpar os dados

---

Como funciona

O cálculo do IMC é feito com a fórmula:

```
IMC = peso / (altura * altura)
```

Com base no resultado, o app retorna uma classificação:

| IMC         | Classificação      |
| ----------- | ------------------ |
| ≤ 18.5      | Abaixo do peso     |
| 18.5 - 24.9 | Peso normal        |
| 25 - 29.9   | Sobrepeso          |
| 30 - 34.9   | Obesidade Grau I   |
| 35 - 39.9   | Obesidade Grau II  |
| ≥ 40        | Obesidade Grau III |

---

Tecnologias utilizadas

* React Native
* Expo
* JavaScript (Hooks com `useState`)

---

Como rodar o projeto

1. Instale o Expo CLI (caso ainda não tenha):

```
npm install -g expo-cli
```

2. Clone este repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

3. Acesse a pasta do projeto:

```
cd seu-repositorio
```

4. Instale as dependências:

```
npm install
```

5. Execute o projeto:

```
npx expo start
```

6. Abra no:

* Emulador Android/iOS
* Ou app Expo Go no celular

---

Interface

O aplicativo possui:

* Logo ilustrativa
* Campos de entrada para altura e peso
* Botão Calcular
* Botão Limpar
* Área de exibição do resultado

--

Observações

* O app não substitui avaliação médica profissional.
* Certifique-se de inserir valores válidos (ex: altura em metros, como 1.75).

---

Melhorias futuras

* Adicionar histórico de cálculos
* Melhorar validação dos inputs
* Interface mais moderna (UI/UX)
* Suporte a diferentes unidades (kg/lb, m/cm)

---
