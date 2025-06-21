setTimeout(() => {
  const splash = document.getElementById('splash');
  splash.classList.add('fade-out');

  setTimeout(() => {
    splash.style.display = 'none';
    document.getElementById('conteudo-principal').style.display = 'block';
  }, 500); // tempo da transição
}, 3000); // tempo da splash