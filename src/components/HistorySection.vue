<template>
  <section id="history" class="history-section">
    <div>
      <img src="../assets/icons/history-removebg.png" alt="History Photo" class="history-ing" />
    </div>
    <div class="history-info">
      <h2 class="heading">Our <span class="highlight">History</span></h2>
      <p class="history-text-info first_paragraph">
        It is a long established fact that a reader will be distracted by
        the readable content of a page w hen looking at.
      </p>
      <p class="history-text-info second_paragraph">
        It is a long established fact that a reader will be distracted by
        the readable content of a page w hen looking at.
      </p>
      <button type="button" class="button-btn history-btn">
        <span>Learn more</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HistorySection',
};
</script>

<style scoped>
.history-section {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(100px, 968px);
  justify-content: center;
  align-items: center;
  gap: 149px;
  margin-block-start: 226px;
  margin-inline-start: 82px;
}

.history-text-info {
  color: #153461;
  opacity: 0.65;
}

.first_paragraph {
  margin-block-start: 80px;
}

.second_paragraph {
  margin-block-start: 48px;
  margin-block-end: 108px;
}

@media (max-width: 768px) {
  .history-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-inline-start: 20px;
  }
}
</style>
