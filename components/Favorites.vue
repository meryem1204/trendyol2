<template>
  <div class="favorites-page">
    <h1 class="page-title">
      <span class="heart-symbol">❤️</span> Favorilerim
    </h1>
    <div class="products-container">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <!-- Ürün Görselleri ve Etiketler -->
        <div class="product-image-container">
          <!-- Kargo ve Teslimat Etiketleri -->
          <div class="badge-container">
            <div class="badge delivery-badge" v-if="product.fastDelivery">HIZLI TESLİMAT</div>
            <div class="badge shipping-badge" v-if="product.freeShipping">KARGO BEDAVA</div>
          </div>

          <!-- Ürün Resimleri -->
          <img
            :src="product.image"
            alt="product image"
            class="product-image default-image"
          />
          <img
            :src="product.hoverImage"
            alt="product hover image"
            class="product-image hover-image"
          />
        </div>

        <!-- Ürün Bilgileri -->
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }}</p>

          <p v-if="product.outOfStock" class="out-of-stock">Tükendi</p>

          <div v-if="!product.outOfStock" class="size-selector">
            <label for="size">Beden:</label>
            <select v-model="product.selectedSize" id="size">
              <option v-for="size in product.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
          </div>

          <button class="remove-button" @click="removeProduct(index)">Kaldır</button>
          <button class="similar-products-button" @click="showSimilarProducts(product)">Benzer Ürünler</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    name: "Bot",
    price: "899,99₺",
    image: "/bot.png",
    hoverImage: "/bot2.png",
    sizes: ["S", "M", "L", "XL"],
    selectedSize: "M",
    outOfStock: false,
    freeShipping: true,
    fastDelivery: true,
    rating: 4,
    ratingCount: 123,
  },
  {
    name: "Kazak",
    price: "259,99₺",
    image: "/kazak.png",
    hoverImage: "/kazak2.png",
    sizes: ["S", "M", "L", "XL"],
    selectedSize: "L",
    outOfStock: true,
    freeShipping: true,
    fastDelivery: true,
    rating: 3,
    ratingCount: 89,
  },
  {
    name: "Pantolon",
    price: "349,99₺",
    image: "/pantolon.png",
    hoverImage: "/pantolon2.png",
    sizes: ["M", "L", "XL"],
    selectedSize: "M",
    outOfStock: false,
    freeShipping: true,
    fastDelivery: true,
    rating: 5,
    ratingCount: 230,
  },
]);

const removeProduct = (index) => {
  products.value.splice(index, 1);
};

const showSimilarProducts = (product) => {
  alert(`Benzer ürünler: ${product.name}`);
};
</script>

<style scoped>
/* Sayfa genel stili */
.favorites-page {
  padding: 20px;
  background-color: #f5f5f5;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-symbol {
  font-size: 1.5rem;
  color: #ff6a13;
  margin-right: 10px;
}

/* Ürün kartları stili */
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  position: relative;
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.default-image {
  opacity: 1;
}

.hover-image {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.product-image-container:hover .default-image {
  opacity: 0;
}

.product-image-container:hover .hover-image {
  opacity: 1;
}

/* Etiketler (Badge) */
.badge-container {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10; /* Resimlerin üstünde görünmesini sağlar */
}

.badge {
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
}

.delivery-badge {
  background-color: #28a745; /* Yeşil */
}

.shipping-badge {
  background-color: #6c757d; /* Gri */
}

/* Diğer CSS'ler */
.product-info {
  margin-top: 10px;
}

.product-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.product-price {
  font-size: 0.9rem;
  color: #666;
}
</style>
