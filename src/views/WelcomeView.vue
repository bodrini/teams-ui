<template>
    <div class="welcome-container">
      <div class="header-section">
        <h1 class="welcome-title">ARE WE HAPPY, VINCENT?</h1>
        <img src="@/assets/site-logo.png" alt="BAO Army Logo" class="header-logo" />
        <p class="welcome-subtitle">Blue & Orange Army Eastern Europe</p>
      </div>
  
      <router-link to="/matches" class="cta-wrapper">
        <div class="image-container">
          <img src="@/assets/happy-button.png" alt="Enter Arena" class="main-image" />
          
          <div class="image-overlay"></div>
          
          <div class="content-overlay">
            <span class="cta-label">CHECK</span>
            <span class="cta-sublabel"></span>
          </div>
          
          <div class="shine-effect"></div>
        </div>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  // Здесь пока нет логики, но мы используем setup для порядка
  </script>
  
  <style scoped>
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    text-align: center;
  }
  
  .header-section {
    margin-bottom: 3rem;
  }
  
  .welcome-title {
    font-size: 3.5rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin: 0;
    text-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }
  
  .welcome-subtitle {
    font-size: 1.5rem;
    color: #3b82f6;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }
  
  /* КОНТЕЙНЕР КАРТИНКИ */
  .cta-wrapper {
    text-decoration: none;
    display: block;
    perspective: 1000px; /* Добавляет объем при наклоне */
  }
  
  .image-container {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden; /* Чтобы края картинки и блик не вылезали за радиус */
    
    /* --- СКРУГЛЕНИЕ КРАЕВ --- */
    border-radius: 40px; 
    
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Картинка заполняет всё пространство без искажений */
    transition: transform 0.6s ease;
  }
  
  /* СЛОЙ ЗАТЕМНЕНИЯ (Overlay) */
  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
    transition: opacity 0.3s ease;
  }
  
  /* ТЕКСТ ПОВЕРХ КАРТИНКИ */
  .content-overlay {
    position: absolute;
    bottom: 10px; /* Прижимаем к низу */
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none; /* Клик проходит сквозь текст */
  }
  
  .cta-label {
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  .cta-sublabel {
    color: #3b82f6;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  
  /* ЭФФЕКТ БЛИКА */
  .shine-effect {
    position: absolute;
    top: 0;
    left: -150%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: skewX(-25deg);
    transition: 0.7s;
  }
  
  /* ХОВЕР ЭФФЕКТЫ (При наведении) */
  .image-container:hover {
    transform: scale(1.03) translateY(-10px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 30px 60px -12px rgba(59, 130, 246, 0.3);
  }
  
  .image-container:hover .main-image {
    transform: scale(1.1); /* Картинка внутри чуть увеличивается */
  }
  
  .image-container:hover .shine-effect {
    left: 150%; /* Блик пробегает слева направо */
  }
  
  /* АДАПТИВ */
  @media (max-width: 768px) {
    .welcome-title { font-size: 2.5rem; }
    .image-container { width: 280px; height: 350px; }
  }

  .header-logo {
  width: 320px;       /* Настрой ширину под свой логотип */
  height: auto;
  margin: 1.5rem 0;   /* Отступы сверху и снизу от текста */
  
  /* Эффект свечения, чтобы логотип не терялся на темном фоне */
  filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.4));
  
  /* Можно добавить легкую анимацию парения */
  animation: float 4s ease-in-out infinite;
}

/* Анимация плавного покачивания */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

  </style>