// Selecionando os elementos
const qrInput     = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const qrCanvas    = document.getElementById('qr-canvas');
const downloadBtn = document.getElementById('download-btn');


// Array com as URLs das suas imagens
const backgroundImages = [
  "imgs/back_1.jpg", // Exemplo 1
  "imgs/back_2.jpg",
  "imgs/back_3.jpg",
  "imgs/back_4.jpg"
];

// Escolhe uma imagem aleatória
const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

// Define a imagem de fundo da página
document.body.style.backgroundImage = `url('${randomImage}')`;



// Inicializando a biblioteca QRious
const qr = new QRious({
  element: qrCanvas,
  size: 250, // Tamanho do QR Code
});

// Função para gerar o QR Code
generateBtn.addEventListener('click', () => {
  const input = qrInput.value.trim();

  if (input === '') {
    alert('Please enter some text or a URL!');
    return;
  }

  qr.value = input; // Gera o QR Code com o valor inserido
  downloadBtn.style.display = 'block'; // Exibe o botão de download
  
});

// Função para baixar o QR Code como imagem
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = qrCanvas.toDataURL('image/png');
  link.download = 'qr-code.png';
  link.click();
});





