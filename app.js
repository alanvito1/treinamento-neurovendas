// Efeito 3D Tilt nos Cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

// Controle de Progresso (LocalStorage)
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa progresso se não existir
  if (!localStorage.getItem('neurovendas_progress')) {
    localStorage.setItem('neurovendas_progress', JSON.stringify({
      modulo1: 0,
      modulo2: 0,
      modulo3: 0,
      modulo4: 0,
      modulo5: 0
    }));
  }
  
  // Atualiza as barras de progresso na tela inicial
  const progress = JSON.parse(localStorage.getItem('neurovendas_progress'));
  
  // Exemplo de aplicação (se estivéssemos em uma página específica, atualizaríamos aqui)
  // No index, podemos simular ou ler se houver elementos específicos.
});

// Easter Egg (Não documentado!)
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'n') {
    const glow = document.querySelector('.bg-glow');
    if (glow) {
      glow.style.background = 'radial-gradient(circle at center, rgba(255, 0, 51, 0.3) 0%, rgba(212, 175, 55, 0.1) 30%, transparent 60%)';
      setTimeout(() => {
        glow.style.background = 'radial-gradient(circle at center, rgba(255, 0, 51, 0.08) 0%, rgba(212, 175, 55, 0.03) 30%, transparent 60%)';
      }, 1000);
    }
    console.log('%c Modo NeuroCloser Ativado! ', 'background: #ff0033; color: #fff; font-size: 20px; font-weight: bold;');
  }
});
