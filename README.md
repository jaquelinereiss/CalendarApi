# 📅 CalendarApi

A CalendarApi é uma API desenvolvida para fornecer dados estruturados de calendário, podendo ser integrada a qualquer aplicação que consuma essas informações. O projeto utiliza uma arquitetura modular, garantindo escalabilidade, clareza e fácil manutenção.

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- CORS  
- JavaScript/TypeScript  
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

## 📈 Possíveis Endpoints Futuros

A CalendarApi ainda pode evoluir com novas rotas e funcionalidades. Algumas ideias de endpoints futuros:

- **GET /calendar/{year}/{month}**  
*Retorna o calendário completo de qualquer mês e ano informado.*

- **GET /calendar/holidays**  
*Retorna feriados nacionais/regionais (permitindo futura integração com APIs externas).*

## 👩‍💻 Autora

Desenvolvido por [Jaqueline Reis](https://github.com/jaquelinereiss)
