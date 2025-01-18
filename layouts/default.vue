<template>
  <div class="layout-container">
    <!-- Sol Taraf: Nav Bar -->
    <nav class="nav-bar">
      <button
        v-for="(item, index) in components"
        :key="index"
        @click="setActiveComponent(item.component)"
      >
        {{ item.label }}
      </button>
    </nav>

    <!-- Sağ Taraf: Dinamik Bileşen Alanı -->
    <main class="main-content">
      <component
        v-if="activeComponent"
        :is="activeComponent"
      />
      <div v-else class="placeholder">
        <h2>Hoş Geldiniz!</h2>
        <p>Soldaki menüden bir seçenek seçerek devam edebilirsiniz.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Arama from "~/components/arama.vue";
import Sepetim from "~/components/sepetim.vue";
import Panel from "~/components/panel.vue";
import Anasayfa from "~/components/Anasayfa.vue";
import Markalar from "~/components/Markalar.vue";
import login from "~/components/login.vue";
import Hesabım from "~/components/hesabım.vue";
import Footer from "~/components/Footer.vue";
import kategoriler from "~/components/kategoriler.vue";
import Favorites from "~/components/Favorites.vue";
// Bileşen Listesi
const components = [

  { label: "Arama çubuğu", component: Arama },
  { label: "sepetim", component: Sepetim },
  { label: "panel", component: Panel },
  { label: "Anasayfa", component: Anasayfa },
  { label: "Markalar", component: Markalar },
  { label: "Login", component: login },
  { label: "Hesabım", component: Hesabım },
  { label: "Footer", component: Footer },
  { label: "kategoriler", component: kategoriler },
  { label: "Favorites", component: Favorites },
  // Ek bileşenler buraya eklenebilir.
];

// Aktif bileşen
const activeComponent = ref(null);

// Bileşeni aktif hale getiren fonksiyon
const setActiveComponent = (component) => {
  activeComponent.value = component;
};
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
}

/* Sol Menü */
.nav-bar {
  width: 20%;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-bar button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-bar button:hover {
  background-color: #0056b3;
}

/* Sağ Alan */
.main-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.placeholder {
  text-align: center;
  color: #555;
}

.placeholder h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.placeholder p {
  font-size: 18px;
}
</style>
