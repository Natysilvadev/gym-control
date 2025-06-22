// splash

setTimeout(() => {
  const splash = document.getElementById('splash');
  splash.classList.add('fade-out');

  setTimeout(() => {
    splash.style.display = 'none';
    document.getElementById('conteudo-principal').style.display = 'block';
    document.getElementById('conteudo-principal').style.visibility = 'visible';
  }, 500); // tempo da transição
}, 3000); // tempo da splash


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButtons = document.querySelectorAll('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let autoSlideInterval;
    
    // Mostrar slide inicial
    showSlide(currentSlide);
    
    // Configurar autoplay
    startAutoSlide();
    
    // Eventos para botões "Next"
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            resetAutoSlide();
            nextSlide();
        });
    });
    
    // Evento para botão "Get Started"
    document.querySelector('.get-started-btn')?.addEventListener('click', () => {
        alert('Redirecionando para o aplicativo...');
        // window.location.href = '/dashboard';
    });
    
    // Eventos para indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            resetAutoSlide();
            goToSlide(slideIndex);
        });
    });
    
    // Funções
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 8000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Pausar autoplay quando o mouse está sobre o carrossel
    document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});