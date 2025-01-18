<template>
   <div class="slider-section">
    <!-- Başlık -->
    <h2 class="slider-title">Size Özel Markalar</h2>
  <div class="slider-container">
    <button @click="prevSlide" class="arrow left-arrow">❮</button>
    <div class="slider">
      <div v-for="(brand, index) in brands" 
           :key="index" 
           class="brand"
           :class="{ active: index === currentIndex }">
        <img :src="brand.image" :alt="brand.name" />
        <p>{{ brand.name }}</p>
      </div>
    </div>
    <button @click="nextSlide" class="arrow right-arrow">❯</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Markalar",
  data() {
    return {
      brands: [
        {  image: "/karaca.png" },
        {  image: "/nike.png" },
        {  image: "/puma.png" },
        {  image: "/adidas.png" },
        {  image: "/defacto.png" },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.brands.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.brands.length) % this.brands.length;
    },
  },
};
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  margin: 20px auto;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 300px;
  height: 200px;
}

.brand {
  display: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.brand img {
  width: 100%;
  height: auto;
}

.brand.active {
  display: flex;
}

.arrow {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  color: #007bff;
  z-index: 1;
}

.left-arrow {
  left: -20px;
}

.right-arrow {
  right: -20px;
}

.arrow:hover {
  color: #0056b3;
}
</style>