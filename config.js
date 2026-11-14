/* ============================================================
   CONFIGURAÇÃO DO CASSINO DE PONTOS
   Este arquivo vale para as duas páginas (placar e crupier).
   Suba ele no GitHub na mesma pasta do index.html e do crupier.html.
   ============================================================ */
window.CASSINO_CONFIG = {
  eventName: "Jogo do Bicho & Cassino",
  subtitle: "Anna e Gabi",

  // Texto da carta de convite que aparece na abertura do placar.
  eventDate: "Sábado, 14 de novembro, 20h",
  dressCode: "Jogo do Bicho",

  // De quantos em quantos minutos o tierlist do placar é atualizado (:00, :03, :06...).
  refreshMinutes: 3,

  // Limite de pontos por lançamento (evita erro de digitação, ex.: 5000 em vez de 50).
  maxLaunch: 100000,

  // PIN do crupier no modo teste (sem Firebase).
  localPin: "0000",

  // Conta do crupier no Firebase. Com isso preenchido, o celular pede só o PIN.
  // No console (Authentication → Users → Adicionar usuário), crie:
  //   E-mail: crupier@cassino.festa
  //   Senha:  cassino-0000      ← "cassino-" + o PIN
  // Para trocar o PIN depois, mude a senha dessa conta para "cassino-" + novo PIN.
  crupierEmail: "crupier@cassino.festa",

  // Tiers: do maior para o menor. "min" é a pontuação mínima para entrar no tier.
  tiers: [
    { name: "Ouro",   suit: "♥", red: true,  min: 500, metal: ["#ffe39a", "#ffb86b"] },
    { name: "Prata",  suit: "♠", red: false, min: 250, metal: ["#f4f1ea", "#cfc9bd"] },
    { name: "Bronze", suit: "♣", red: false, min: 0,   metal: ["#ffcf9f", "#e9965a"] }
  ],

  // ------------------------------------------------------------
  // FIREBASE: troque o null abaixo pelo bloco firebaseConfig do console
  // (Configurações do projeto → Seus apps → app web). Fica assim:
  //
  // firebase: {
  //   apiKey: "AIza...",
  //   authDomain: "seu-projeto.firebaseapp.com",
  //   databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
  //   projectId: "seu-projeto",
  //   appId: "1:123456:web:abcdef"
  // }
  //
  // Enquanto estiver null, tudo roda em modo teste e a TV NÃO recebe
  // o que é lançado no celular.
  // ------------------------------------------------------------
  firebase: null
};
