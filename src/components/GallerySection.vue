<template>
    <section id="gallery" class="gallery-section">
        <h2 class="heading gallery-title">
            Our <span class="highlight">Gallery</span>
        </h2>
        <div class="image-container">
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo1.png" alt="gallery" />
            </div>
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo2.png" alt="gallery" />
            </div>
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo3.png" alt="gallery" />
            </div>
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo4.png" alt="gallery" />
            </div>
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo5.png" alt="gallery" />
            </div>
            <div class="image-wrapper">
                <img src="../assets/icons/gallery-photo6.png" alt="gallery" />
            </div>
        </div>
        <button class="button-btn gallery-btn"><span>View All</span></button>
    </section>
</template>

<script lang="ts">
export default {
    name: 'GallerySection',
};
</script>

<style scoped>
.gallery-section {
    display: grid;
    justify-items: center;
    margin: 270px 270px 0px 270px;
}

.gallery-title {
    text-align: center;
}

.image-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 37px;
    margin-block-start: 110px;
    margin-block-end: 77px;
}

.image-container img {
    /* width: 100%; */
    border-radius: 8px;
}

.image-wrapper {
    position: relative;
    border-radius: 8px;
    /* Скругленные углы контейнера */
    overflow: hidden;
    /* Чтобы фоновый слой не выходил за границы */
}

.image-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #5296ff;
    /* Полупрозрачный синий фон */
    opacity: 0.3;
    pointer-events: none;
}

.image-wrapper img {
    width: 100%;
    display: block;
}


@media (max-width: 1480px) {
    .gallery-section {
        margin: 150px 20px 20px 20px;
    }

    .gallery-title {
        font-size: 55px;
    }

    .image-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        margin-block-start: 40px;
    }
}

@media (max-width: 768px) {
    .gallery-section {
        margin: 70px 20px 20px 20px;
        justify-items: normal;
    }

    .gallery-title {
        font-size: 55px;
    }

    .image-container {
        grid-template-columns: 1fr;
        gap: 15px;
        margin-block-start: 40px;
    }
}
</style>
