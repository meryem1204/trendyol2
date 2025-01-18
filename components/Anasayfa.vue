<template>
    <div class="product-list">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
      <!-- Favori Butonu -->
      <button 
        class="favorite-btn"
        @click="toggleFavorite(index)"
        :class="{ active: product.isFavorite }"
      >
        ❤
      </button>
        <div class="image-container">
          <img :src="product.image" alt="Ürün Resmi" />
          <button
            v-if="hoveredIndex === index"
            class="add-to-cart"
          >
            Sepete Ekle
          </button>
        </div>
        <div class="details">
          <h3>{{ product.title }}</h3>
          <p class="price">{{ product.price }} TL</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { title: "Saat", price: "500,99", image: "/saat.png", isFavorite:false },
          { title: "Ayakkabı", price: "1999,99", image: "/ayakkabı.png" },
          { title: "Buzdolabı", price: "14999,99", image: "/buzdolabı.png" },
          { title: "Çamaşır makinesi", price: "11999,99", image: "/çamasır.png" },
          { title: "Kulaklık", price: "4599,99", image: "/kulaklık.png" },
          { title: "Kedi maması", price: "299,99", image: "/mama.png" },
          { title: "Telefon", price: "24999,99", image: "/telefon.png" },
          { title: "Ütü", price: "1999,99", image: "/ütü.png" },
          { title: "Televizyon", price: "9999,99", image: "/televizyon.png" },
        ],
        hoveredIndex: null,
      };
    },
    methods: {
    toggleFavorite(index) {
      this.products[index].isFavorite = !this.products[index].isFavorite;
    },
  },
  };
  </script>
  
  <style scoped>
  .product-list {
    position: relative;
    display: grid;
    margin-top: 20px; /* Üstten 20px boşluk */
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
  .product-card {
    position: relative;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  /* Favori Butonu */
.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: gray; /* Varsayılan renk */
  transition: color 0.3s;
  opacity: 1; /* Her zaman görünür */
  display: block; /* Görünürlüğünü garanti altına alır */
}
.favorite-btn.active {
  color: red; /* Favoriye eklendiğinde kırmızı olur */
}
.favorite-btn {
  z-index: 10; /* Butonu diğer elementlerin üstüne çıkarır */
}

  .product-card:hover {
    transform: scale(1.05);
  }
  .image-container {
    position: relative;
    overflow: hidden;
  }
  .image-container img {
    width: 100%;
    transition: transform 0.3s;
  }
  .image-container:hover img {
    transform: scale(1.1);
  }
  .add-to-cart {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff6700;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .image-container:hover .add-to-cart {
    opacity: 1;
  }
  .details {
    padding: 10px;
    text-align: center;
  }
  .price {
    color: #ff6700;
    font-weight: bold;
  }.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px; /* Aralarındaki boşlukları biraz daralttık */
  padding: 15px;
}
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  width: 75%; /* Kart genişliği grid sistemine göre ayarlanacak */
  max-width: 250px; /* Maksimum genişliği sınırlayarak küçülttük */
  margin: 0 auto; /* Kartları ortalamak için */
}
.product-card:hover {
  transform: scale(1.05);
}
.image-container {
  position: relative;
  overflow: hidden;
  height: 150px; /* Görselin yüksekliğini küçülttük */
}

.image-container img {
    width: 100%;
  height: 100%;
  object-fit: contain; /* Resmi alanın tamamına sığdırır, gerekirse boşluk bırakır */
  background-color: #f0f0f0; /* Boşluklar için arka plan rengi ekleyebilirsiniz */
  transition: transform 0.3s;
}
.add-to-cart {
  position: absolute;
  bottom: 8px; /* Butonun daha aşağıda yer almasını sağladık */
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff6700;
  color: white;
  border: none;
  padding: 5px 20px; /* Buton boyutlarını küçülttük */
  border-radius: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px; /* Yazı boyutunu küçülttük */
}
.image-container:hover .add-to-cart {
  opacity: 1;
}
.details {
  padding: 8px; /* Kart detayları için daha az boşluk verdik */
  text-align: center;
}
.price {
  color: #ff6700;
  font-weight: bold;
  font-size: 14px; /* Fiyat yazı boyutunu küçülttük */
}

  </style>