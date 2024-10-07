//função de click para o botão de compra
function comprarProduto(nomeProduto) {
    alert(`Você clicou em "Comprar" para o produto: ${nomeProduto}`); 

//zoom para imagens
const imagens = document.querySelectorAll(".imagem-com-zoom");

imagens.forEach(imagem => {
  imagem.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)"; 
  });

  imagem.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; 
  });
});
} 