# 📱 MentIA -- App de Recomendação e Desenvolvimento Profissional

O **MentIA** é uma plataforma de inteligência artificial desenvolvida
para guiar pessoas em suas jornadas profissionais em um mundo em
constante transformação.\
Mais do que conectar usuários a mentores, o MentIA atua como um
**ecossistema inteligente de autodesenvolvimento**, unindo tecnologia,
dados e relações humanas para preparar indivíduos para carreiras que
ainda estão nascendo.

A aplicação combina **IA generativa**, análise de dados comportamentais
e tendências de mercado para oferecer experiências **personalizadas de
crescimento profissional**, além de funcionalidades práticas para
navegação, cadastro e recomendações.

------------------------------------------------------------------------
## 👥 Integrantes da Equipe

| Nome                           | RM      |
|--------------------------------|---------|
| Geovanna Silva Cunha           | RM97736 |
| João Arthur Monteiro Pajaro    | RM551272 |
| Victor Camargo Maciel          | RM98384 |

------------------------------------------------------------------------

## 🚀 Funcionalidades Principais

-   **Autenticação Firebase (Email/Senha)**\
-   **Persistência de dados do usuário no Firebase Realtime Database**\
-   **Recomendações inteligentes** de cursos baseadas na área de
    interesse\
-   Uso de componentes essenciais:
    -   ScrollView\
    -   Picker\
    -   TextInput\
    -   TouchableOpacity / Button\
    -   Alert\
    -   Image\
-   Navegação entre telas com **React Navigation**\
-   Arquitetura organizada em contextos, serviços e telas

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    MentIA/
    │── App.tsx
    │── app.json
    │── babel.config.js
    │── package.json
    │── tsconfig.json
    │
    ├── assets/
    │   ├── mentIA2.png
    │
    ├── src/
    │   ├── context/
    │   │   └── AuthContext.tsx
    │   ├── firebase/
    │   │   └── firebaseConfig.ts
    │   ├── screens/
    │   │   ├── LoginScreen.tsx
    │   │   ├── RegisterScreen.tsx
    │   │   ├── TabsNavigator.tsx
    │   │   ├── HomeScreen.tsx
    │   │   ├── RecommendationsScreen.tsx
    │   │   └── ProfileScreen.tsx
    │   ├── services/
    │   │   └── iaService.ts
    │   └── styles/
    │       └── globalStyles.ts

------------------------------------------------------------------------

## ▶️ Como Rodar o Projeto

### 1️⃣ Instalar dependências

No terminal, dentro da pasta do projeto:

``` bash
npm install
```

### 2️⃣ Iniciar o servidor Expo

``` bash
npx expo start --clear
```

### 3️⃣ Escolha rodar na web!

-   **w** → Web\

------------------------------------------------------------------------

## 🔧 Configuração do Firebase

O app utiliza:

-   Firebase Authentication\
-   Firebase Realtime Database

No arquivo:

    src/firebase/firebaseConfig.ts

Essas credenciais devem estar configuradas:

``` ts
const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_DOMAIN",
  projectId: "SEU_PROJECT",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_SENDER",
  appId: "SEU_APP_ID",
  databaseURL: "SEU_RTDB_URL",
};
```

------------------------------------------------------------------------

## 📘 Fluxo do Usuário

1.  **Cadastro**
    -   Nome\
    -   Email\
    -   Senha (mínimo 9 caracteres)\
    -   Área de interesse\
    -   Salvo automaticamente no Realtime Database
2.  **Login**
    -   Autenticação Firebase\
    -   Carregamento automático do perfil
3.  **Home**
    -   Visual geral das funcionalidades
4.  **Recomendações**
    -   Cursos personalizados com base na área escolhida
5.  **Perfil**
    -   Visualizar dados cadastrados\
    -   Editar informações

------------------------------------------------------------------------
