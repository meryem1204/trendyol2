<template>
    <div class="cart-container">
      <!-- Ürün Kartı -->
      <div class="product-card">
        <div class="product-info">
          <div class="seller-info">
            <span class="seller-name">Satıcı: TechStore</span>
            <span class="seller-rating">⭐⭐⭐⭐☆</span>
          </div>
          <div class="product-details">
            <div class="product-checkbox">
              <input type="checkbox" v-model="isSelected" />
            </div>
            <div class="product-image-container">
              <img
                :src="productImage"
                alt="Bilgisayar"
                class="product-image"
                @mouseover="onHover"
                @mouseleave="onLeave"
              />
            </div>
            <div class="product-description">
              <h2>Bilgisayar</h2>
              <p>Güçlü işlemci ve yüksek performans</p>
              <div class="prices">
                <!-- Eski fiyat üstü çizili ve yeni fiyat yan yana -->
                <span class="old-price">{{ oldPrice }}₺</span>
                <span class="new-price">{{ newPrice }}₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sipariş Özeti -->
      <div class="order-summary">
        <div class="summary-item">
          <span>Sepet Toplamı </span>
          <span class="summary-value">{{ total }}₺</span>
        </div>
        
        <div class="summary-item">
          <span>Kargo Ücreti </span>
          <span class="summary-value">{{ shippingCost }}₺</span>
        </div>
      </div>
  
      <!-- Sepet Toplamı -->
      <div class="cart-total">
        <div>
          <span class="total-text">Toplam  </span>
          <span class="currency">{{ total + shippingCost }}₺</span>
        </div>
      </div>
  
      <!-- Sepeti Onayla Butonu -->
      <button class="checkout-btn" :disabled="!isSelected">Sepeti Onayla</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  
  // Resim URL'leri
  const resim1 = "/resim1.png";  // Ana resim
  const resim2 = "/resim2.png";  // Hover resim
  
  // Resmin şu anki durumu
  const productImage = ref(resim1);
  
  // Hover efektleri
  const onHover = () => {
    productImage.value = resim2; // Hover olduğunda resim değişir
  };
  
  const onLeave = () => {
    productImage.value = resim1; // Hover'dan çıktığında orijinal resme döner
  };
  
  // Sepet öğesi seçimi
  const isSelected = ref(false); // Checkbox'ın seçili olup olmadığını kontrol eder
  
  // Ürün fiyatı ve indirimli fiyat
  const oldPrice = 10000; // Eski fiyat
  const discount = 200; // İndirim miktarı
  const newPrice = oldPrice - discount; // Yeni fiyat (indirimli fiyat)
  
  // Kargo ücreti ve kargo bedava durumu
  const shippingCost = computed(() => {
    return newPrice > 200 ? 0 : 50;  // Eğer ürün 200 TL'den fazla ise kargo bedava, aksi takdirde 50 TL
  });
  
  // Sepet toplamı, checkbox işaretli ise yeni fiyat, değilse 0
  const total = computed(() => {
    return isSelected.value ? newPrice : 0; // Checkbox işaretli ise yeni fiyat, değilse 0
  });
  </script>
  
  <style scoped>
  /* Genel stil */
  .cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .product-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: scale(1.02);
  }
  
  .product-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .seller-info {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
  
  .seller-name {
    font-weight: bold;
  }
  
  .seller-rating {
    color: #ffcc00;
  }
  
  .product-details {
    display: flex;
    align-items: center;
  }
  

  .product-checkbox input[type="checkbox"] {
  width: 25px;  /* Genişlik */
  height: 25px; /* Yükseklik */
  margin-right: 20px;
}
  
  .product-image-container {
    width: 350px;
    height: 250px;
    margin-right: 20px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 8px;
  }
  
  .product-description h2 {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .product-description p {
    font-size: 17px;
    color: #777;
  }
  
  .prices {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  
  .old-price {
    font-size: 25px;
    color: #da0c0c;
    text-decoration: line-through; /* Eski fiyat üstü çizili */
    margin-right: 10px;
  }
  
  .new-price {
    font-size: 30px;
    font-weight: bold;
    color: #0d0d0d;
  }
  
  /* Sipariş Özeti */
  .order-summary {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background-color: #a9a7a7;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    margin-top: 30px;
  }
  
  .summary-item {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .summary-item span {
    font-weight: bold;
    color: #333;
  }
  
  .seller-rating {
    color: #ffcc00;
  }
  
  /* Sepet Toplamı */
  .cart-total {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    margin-top: 20px;
  }
  
  .total-text {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  
  .currency {
    font-size: 24px;
    font-weight: bold;
    color: #f98c07;
  }
  
  /* Sepeti Onayla Butonu */
  .checkout-btn {
    width: 100%;
    max-width: 600px;
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #fc7601;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 30px;
  }
  
  .checkout-btn:hover {
    background-color: #f4c347;
  }
  </style>
  