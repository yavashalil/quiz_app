function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  this.cevabıKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
  };
}

let sorular = [
  new Soru(
    "1-Hangisi .javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "Css", b: "Html", c: "Javascript", d: "SQL" },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript proglama dilini kullanmaz?",
    { a: "React", b: "Angular", c: "Vue.js", d: "Asp.net" },
    "d"
  ),
];
