<template>
  <section class="main-section">
    <div class="main-info">
      <h1 class="heading">
        <span class="highlight">Hairstyle</span> Reflects The Personality
        Inside You
      </h1>
      <p class="main-text-info">
        It is a long established fact that a reader will be distracted by
        the readable content of a page w hen looking at.
      </p>
      <button type="button" class="button-btn main-btn">
        <span>Get Started</span>
      </button>
    </div>
    <div class="main-image">
      <img src="../assets/icons/main-image-removebg.png" alt="Main Photo" class="main-image-photo" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'MainSection',
};
</script>

<style scoped>
.main-section {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: minmax(100px, 620px);
  justify-content: center;
  column-gap: 20px;
  margin-left: 188px;
}

.main-image-photo {
  max-width: 100%;
  /* Чтобы изображение масштабировалось */
  height: auto;
  margin-block-start: 32px;
}

.main-text-info {
  color: #153461;
  opacity: 0.65;
  margin-block-start: 29px;
}

.main-btn {
  margin-block-start: 97px;
}

@media (max-width: 768px) {
  .main-section {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    padding-left: 10px;
    margin: 0;
  }

  .main-image-photo {
    margin-block-start: 10px;
  }

  .main-text-info {
    font-size: 26px;
    text-align: center;
  }
}
</style>
