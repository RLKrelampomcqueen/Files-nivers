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
  // A senha dessa conta no Firebase é "cassino-" seguido do PIN (o PIN não fica escrito aqui,
  // porque este arquivo é público). Para trocar o PIN, mude a senha da conta no console.
  crupierEmail: "crupier@cassino.festa",

  // Tiers: do maior para o menor. "min" é a pontuação mínima para entrar no tier.
  tiers: [
    { name: "Ouro",   suit: "♥", red: true,  min: 500, metal: ["#ffe39a", "#ffb86b"] },
    { name: "Prata",  suit: "♠", red: false, min: 250, metal: ["#f4f1ea", "#cfc9bd"] },
    { name: "Bronze", suit: "♣", red: false, min: 0,   metal: ["#ffcf9f", "#e9965a"] }
  ],

  // Firebase do projeto cassino-anna-gabi (a apiKey do Firebase é pública por natureza;
  // quem protege o banco são as regras, que só deixam a conta do crupier gravar).
  firebase: {
    apiKey: "AIzaSyB8JJpqX-ecGIgtENvM34IDcVhgQmoBkyw",
    authDomain: "cassino-anna-gabi.firebaseapp.com",
    databaseURL: "https://cassino-anna-gabi-default-rtdb.firebaseio.com",
    projectId: "cassino-anna-gabi",
    appId: "1:253748701645:web:938cdd5bfd1991638fbc84"
  }
};
