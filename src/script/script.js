// function selecionarCarta(carta) {
//   alert("Você selecionou a carta de " + carta);
//   // Aqui você pode adicionar o redirecionamento ou outra lógica

// }

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const audio = document.createElement("audio");

  audio.src = "src/assets/trilha de fundo site.mp3";

  body.appendChild(audio);

  audio.play().catch((error) => {
    console.log("A reprodução automática foi bloqueada:", error);
  });
});
function ativarCarta(card) {
  const image = document.querySelector("#mostrar-image");
  const text = document.querySelector("#mostrar-text");
  const src = localeImage[card];
  const texto = localetext[card];

  text.textContent = texto;
  image.src = src;

  document.querySelector(".mostrar").classList.toggle("active");
}

const localeImage = {
  "card-1": "src/assets/171FEB46-0F12-4AC0-B441-826A7310F2D2.jpg",
  "card-2": "src/assets/616BB321-087D-4878-B2BC-C89746383F20.jpg",
  "card-3": "src/assets/FEB88856-8847-49AA-9E5E-28F3C6D1D5D3.jpg",
};
const localetext = {
  "card-2":
    "À medida que as estrelas se alinham e a lua cresce cheia, uma oportunidade de ouro surge à frente. O universo conspira para encher teus bolsos, mas cuidado com os espinhos ocultos pelo caminho. A prosperidade vem àqueles que esperam, e maior ainda àqueles que buscam.",
  "card-1":
    "À luz do luar, segredos sussurrados ao vento revelam promessas de amor eterno. Uma surpresa aguarda por você, oculta nas sombras do que você mais deseja. Olhe além do óbvio, pois o amor pode estar se escondendo onde menos espera. Esteja pronta para um enigma que irá transformar seu coração.",
  "card-3":
    "Com cada passo adiante, um novo desafio se descortina. O destino tecerá obstáculos, mas também caminhos inesperados de sucesso. Esteja preparado para mudanças súbitas; tua habilidade de adaptação é tua maior ferramenta.",
};
