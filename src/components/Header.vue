<template>
  <header class="header">
    <div class="barber-menu" :class="{ 'rotated': isMenuOpen }" @click="toggleMenu">
      <img style="width: 100%" src="../assets/icons/image-removebg-preview.png" alt="иконка меню" />
    </div>
    <div class="logo-panel">
      <svg class="logo" width="81" height="88" viewBox="0 0 81 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42.5803 0.775961C36.6236 1.29712 32.0962 6.5572 32.6169 12.5147L35.2968 43.1484L25.162 47.8737C21.7678 41.9758 14.3668 39.5553 8.08457 42.4851C1.45122 45.5796 -1.41826 53.4629 1.67428 60.0972C4.76801 66.73 12.6523 69.6014 19.2873 66.5077C23.8398 64.3847 26.6184 60.004 26.9143 55.3217L39.3265 49.5334L40.5196 63.1756C36.6133 65.7735 34.209 70.3699 34.6457 75.3737C35.2841 82.6663 41.7121 88.0584 49.003 87.4213C56.2956 86.7829 61.6885 80.3554 61.0511 73.0644C60.447 66.1595 54.6501 60.9606 47.8458 60.9691L46.8707 49.8295L74.7388 36.8339C80.1593 34.3067 82.4502 27.7553 79.9231 22.336L45.8559 38.2239L42.5803 0.775961ZM19.6756 57.9209C17.7785 61.2068 13.5764 62.3327 10.2905 60.4356C7.00455 58.5385 5.87869 54.3363 7.77576 51.0505C9.67333 47.7638 13.8749 46.6386 17.1609 48.5357C20.4468 50.4329 21.5732 54.6342 19.6756 57.9209ZM53.7886 77.616C51.8914 80.9019 47.6894 82.0279 44.4034 80.1307C41.1175 78.2336 39.9916 74.0315 41.8887 70.7456C43.7863 67.4589 47.9879 66.3337 51.2738 68.2308C54.5597 70.1279 55.6861 74.3293 53.7886 77.616Z"
          fill="#99BAED" />
      </svg>
      <span class="logo-text">arber</span>
    </div>
    <nav class="nav">
      <ul class="nav-menu" :class="{ 'show': isMenuOpen }">
        <li><a href="#" class="active" @click.prevent="scrollToTop">Home</a></li>
        <li><a href="#history" @click.prevent="scrollToSection('history')">History</a></li>
        <li><a href="#service" @click.prevent="scrollToSection('service')">Service</a></li>
        <li><a href="#gallery" @click.prevent="scrollToSection('gallery')">Gallery</a></li>
      </ul>
    </nav>
    <div class="header-button">
      <svg class="profile-icon" width="42" height="42" viewBox="0 0 42 42" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.9944 26.5557C13.4467 26.5557 6.99969 27.7457 6.99969 32.5057C6.99969 37.2674 13.4064 38.4994 20.9944 38.4994C28.5422 38.4994 34.9892 37.3112 34.9892 32.5494C34.9892 27.7877 28.5842 26.5557 20.9944 26.5557Z"
          fill="#99BAED" />
        <path opacity="0.4"
          d="M20.9944 22.0215C26.1359 22.0215 30.2554 17.9003 30.2554 12.7605C30.2554 7.62076 26.1359 3.49951 20.9944 3.49951C15.8547 3.49951 11.7335 7.62076 11.7335 12.7605C11.7335 17.9003 15.8547 22.0215 20.9944 22.0215Z"
          fill="#A4A4A4" />
      </svg>
      <div class="notif-div">
        <svg class="notif-button" width="30" height="29" viewBox="0 0 30 29" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.5966 17.3793C27.3183 15.8865 26.7374 14.5929 26.7374 12.395V11.6477C26.7374 8.78369 26.0782 6.93837 24.6451 5.09303C22.4363 2.22723 18.7177 0.5 15.0774 0.5H14.9227C11.3589 0.5 7.75686 2.14792 5.50975 4.8974C3.99833 6.77974 3.26263 8.70438 3.26263 11.6477V12.395C3.26263 14.5929 2.71997 15.8865 1.40336 17.3793C0.434593 18.4791 0.125 19.8926 0.125 21.4225C0.125 22.9541 0.627652 24.4046 1.63642 25.5838C2.95304 26.9973 4.81231 27.8996 6.71156 28.0565C9.46134 28.3701 12.211 28.4883 15.0009 28.4883C17.789 28.4883 20.5388 28.2909 23.2901 28.0565C25.1876 27.8996 27.047 26.9973 28.3635 25.5838C29.3707 24.4046 29.875 22.9541 29.875 21.4225C29.875 19.8926 29.5654 18.4791 28.5966 17.3793Z"
            fill="#99BAED" />
        </svg>
        <svg class="notif-button_botom" width="12" height="6" viewBox="0 0 12 6" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4"
            d="M9.51518 0.649696C8.64036 0.462796 3.30951 0.462796 2.43466 0.649696C1.68678 0.822421 0.878021 1.22422 0.878021 2.10552C0.921509 2.94622 1.41371 3.68822 2.0955 4.1588L2.09376 4.16055C2.97561 4.84795 4.01038 5.28492 5.09398 5.4419C5.67148 5.52117 6.25931 5.51767 6.85763 5.4419C7.93948 5.28492 8.97426 4.84795 9.85608 4.16055L9.85433 4.1588C10.5361 3.68822 11.0284 2.94622 11.0718 2.10552C11.0718 1.22422 10.2631 0.822421 9.51518 0.649696Z"
            fill="#AEAEAE" />
        </svg>
        <svg class="notif-circle" width="18" height="16" viewBox="0 0 18 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.56862" cy="7.55395" r="7.95443" transform="rotate(-0.887255 8.56862 7.55395)" fill="#FF5050"
            stroke="white" />
        </svg>
        <span class="notif-count">2</span>
      </div>
      <button class="button-btn"><span>Appointment</span></button>
    </div>
  </header>
  <button v-show="showScrollTop" class="scroll-top-btn" @click="scrollToTop" aria-label="Scroll to top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useHeader } from './useHeaderActions'

const { isMenuOpen, showScrollTop, toggleMenu, scrollToSection, scrollToTop } = useHeader()
</script>

<style scoped>
.header {
  display: grid;
  grid-auto-flow: column;
}

.logo path {
  transition: transform 0.5s ease;
  transform-origin: center;
}

/* Эффект закрытия ножниц при наведении на весь логотип */
.logo:hover path:first-child {
  transform: rotate(25deg);
  /* Поворот первого лезвия */
}

.logo:hover path:last-child {
  transform: rotate(-25deg);
  /* Поворот второго лезвия */
}

.logo-text {
  position: absolute;
  left: 72px;
  top: 40px;
  font-weight: 600;
  font-size: 40px;
  line-height: 134%;
  color: #99baed;
  cursor: default;
}

.header-button {
  display: flex;
  flex-direction: row;
  gap: 78px;
  margin-block-start: 35px;
  align-items: center;
}

.nav-menu {
  display: flex;
  /* Располагаем элементы горизонтально */
  gap: 20px;
  /* Отступы между элементами */
}

.nav-menu li a {
  display: block;
  position: relative;
  padding: 67px 20px 8px;
  font-size: 25px;
  font-weight: 500;
  color: #153461;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}

.barber-menu {
  display: none;
}

.nav-menu li a {
  display: block;
  position: relative;
  padding: 67px 20px 8px;
  font-size: 25px;
  font-weight: 500;
  color: #153461;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}

.nav-menu li a.active {
  background-color: #99baed;
  /* Цвет выделенного элемента */
  color: white;
  /* Цвет текста для активного элемента */
}

.nav-menu li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0%;
  /* Начинаем с середины */
  width: 100%;
  /* Ширина линии */
  height: 2px;
  /* Толщина линии */
  background-color: #153461;
  /* Цвет линии */
  transform: scaleX(0);
  /* Начальное состояние - линия скрыта */
  transform-origin: center;
  /* Линия разворачивается от центра */
  transition: transform 0.3s ease;
  /* Плавный переход */
}

.nav-menu li a:not(.active):hover::after {
  transform: scaleX(1);
}

.nav-menu li a:not(.active):hover {
  background-color: #d0ddef;
}

/* Контейнер SVG для применения анимации */
.profile-icon {
  transition: transform 0.3s ease, fill 0.3s ease;
  cursor: pointer;
}

/* Анимация при наведении */
.profile-icon:hover {
  transform: scale(1.1);
  /* Увеличение */
}

.profile-icon path {
  transition: fill 0.3s ease, opacity 0.3s ease;
}

.profile-icon:hover path:nth-child(1) {
  fill: #4a90e2;
  /* Смена цвета первой части */
}

.profile-icon:hover path:nth-child(2) {
  opacity: 0.8;
  /* Изменение прозрачности второй части */
}

.notif-div {
  position: relative;
}

.notif-button {
  position: relative;
}

.notif-circle {
  position: absolute;
  left: 14px;
  top: -3px;
  cursor: default;
}

.notif-button_botom {
  position: absolute;
  left: 10px;
  top: 30px;
}

.notif-count {
  position: absolute;
  top: -3px;
  right: 4px;
  font-weight: 700;
  font-size: 10px;
  line-height: 151%;
  letter-spacing: 0.03em;
  color: #fff;
}

/* Основной стиль для иконок */
.notif-button,
.notif-button_botom,
.notif-circle {
  transition: transform 0.3s ease, fill 0.3s ease, opacity 0.3s ease;
}

/* Эффекты при наведении на .notif-button */
.notif-button:hover {
  transform: scale(1.05);
  /* Легкое увеличение основного элемента */
}

.notif-button:hover path {
  fill: #4a90e2;
  /* Смена цвета основной фигуры */
}

.notif-button:hover~.notif-button_botom {
  transform: scale(1.05);
  /* Легкое увеличение нижнего элемента */
}

.notif-button:hover~.notif-button_botom path {
  fill: #808080;
  /* Смена цвета нижней фигуры */
  opacity: 0.6;
  /* Изменение прозрачности нижней фигуры */
}

.notif-button:hover~.notif-circle {
  transform: scale(1.2);
  /* Увеличение круга уведомления */
}

.notif-button:hover~.notif-circle circle {
  fill: #ff3333;
  /* Смена цвета круга уведомления */
  stroke: #e6e6e6;
  /* Изменение цвета обводки */
}

.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #99baed;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.scroll-top-btn:hover {
  background-color: #7ba1e2;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1480px) {
  .logo-text {
    font-size: 30px;
    /* Уменьшаем размер шрифта для логотипа */
  }

  .nav-menu {
    gap: 5px;
  }

  .nav-menu li a {
    font-size: 20px;
    padding: 30px 15px 5px;
  }

  .header-button {
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
  }

  .nav-menu {
    flex-direction: column;
    position: absolute;
    top: 80px;
    /* Настроить в зависимости от высоты хедера */
    left: 0;
    z-index: 1;
    width: 100%;
    background-color: white;
    /* Цвет фона */
    padding: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-height: 0;
    max-width: 70px;
    /* Начальная высота 0 для скрытого состояния */
    overflow: hidden;
    transition: max-height 0.35s ease;
  }

  .nav-menu.show {
    max-height: 350px;
  }

  .barber-menu {
    display: block;
    width: 60px;
    height: 40px;
  }

  .barber-menu img {
    transition: transform 0.3s ease;
    /* Плавный поворот */
  }

  .barber-menu.rotated img {
    transform: rotate(90deg);
    /* Поворачиваем на 90 градусов влево */
  }

  .nav-menu li a {
    padding: 20px 10px;
    font-size: 18px;
  }

  .header-button {
    flex-direction: column;
    gap: 20px;
    margin: 0;
  }

  .scroll-top-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
