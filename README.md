# 📅 CalendarApi

A CalendarApi é uma API desenvolvida para fornecer dados estruturados de calendário, podendo ser integrada a qualquer aplicação que consuma essas informações. O projeto utiliza uma arquitetura modular, garantindo escalabilidade, clareza e fácil manutenção.

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- CORS  
- TypeScript  
- Estrutura modular básica (routes, utils)

*Tecnologias planejadas para uso futuro:*

- Axios (para consultas externas)  
- Zod (validação de dados)  
- ESLint + Prettier (padrões de código)  
- Arquitetura em camadas completas (controllers, services)

## 📌 Funcionalidades Principais

- Retornar dados do calendário  
- Possibilitar carregar informações diárias e semanais

## 🔷 Endpoints Atuais

- **GET /calendar/currentWeek**  
*Retorna a semana corrente, o índice referente ao dia atual e informações básicas do calendário.*

- **GET /calendar/{year}/{month}**  
*Retorna o calendário completo de qualquer mês e ano informado.*

## 📈 Possíveis Endpoints Futuros

A CalendarApi ainda pode evoluir com novas rotas e funcionalidades. Algumas ideias de endpoints futuros:

- **GET /calendar/holidays**  
*Retorna feriados nacionais/regionais (permitindo futura integração com APIs externas).*

## 🌐 API Online

A API está hospedada na plataforma **Render** e pode ser acessada publicamente.

**Base URL**

```
https://calendarapi-vns7.onrender.com
```

**API Check**

```
GET https://calendarapi-vns7.onrender.com/calendar/currentWeek
```

## 👩‍💻 Autora

Desenvolvido por [Jaqueline Reis](https://github.com/jaquelinereiss)
