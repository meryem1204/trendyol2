<template>
  <footer class="footer">
    <!-- Üst Kısım: Hızlı Bağlantılar -->
    <div class="footer-top">
      <div class="footer-column">
        <h3>Trendyol</h3>
        <ul>
          <li><a href="#">Biz Kimiz</a></li>
          <li><a href="#">Kariyer</a></li>
          <li><a href="#">Sürdürülebilirlik</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Kampanyalar</h3>
        <ul>
          <li><a href="#">Kampanyalar</a></li>
          <li><a href="#">Alışveriş Kredisi</a></li>
          <li><a href="#">Elit Üyelik</a></li>
          <li><a href="#">Hediye Fikirleri</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Satıcı</h3>
        <ul>
          <li><a href="#">Trendyol'da Satış Yap</a></li>
          <li><a href="#">Temel Kavramlar</a></li>
          <li><a href="#">Trendyol Akademi</a></li>
          
        </ul>
      </div>
      <div class="footer-column">
        <h3>Yardım</h3>
        <ul>
          <li><a href="#">Sıkça Sorulan Sorular</a></li>
          <li><a href="#">Canlı Yardım/Destek</a></li>
          <li><a href="#">Naıl İade Edebilirim</a></li>
          <li><a href="#">İşlem Rehbe</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Güvenli Alışveriş</h3>
        <ul class="payment-methods">
          <li><img src="/images/payment-methods/visa.png" alt="Visa" /></li>
          <li><img src="/images/payment-methods/mastercard.png" alt="Mastercard" /></li>
          <li><img src="/images/payment-methods/troy.png" alt="Troy" /></li>
          <li><img src="/images/payment-methods/amex.png" alt="American Express" /></li>
        </ul>
      </div>
      <div>
      <h3>Mobil Uygulamalar</h3>
        <ul class="mobil">
          <li><img src="/images/mobil/AppGallery.png" alt="AppGallery" /></li>
          <li><img src="/images/mobil/AppStore.png" alt="AppStore" /></li>
          <li><img src="/images/mobil/GooglePlay.png" alt="GooglePlay" /></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Güvenlik Sertifikası</h3>
        <ul class="security">
          <li><img src="/images/security/1.png" alt="1" /></li>
          <li><img src="/images/security/2.png" alt="2" /></li>
          <li><img src="/images/security/3.png" alt="3" /></li>
          <li><img src="/images/security/4.png" alt="4" /></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Sosyal Medya</h3>
        <ul class="social-media">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>

    <!-- Alt Kısım: Telif Hakkı ve Ekstra Bilgiler -->
    <div class="footer-bottom">
      <p>&copy; 2024 Trendyol - Tüm Hakları Saklıdır.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
  padding: 0 20px;
}

.footer-column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.footer-column ul li a:hover {
  color: #ff5722;
}

.payment-methods {
  display: flex;
  justify-content: space-between;
}

.payment-methods li img {
  width: 30px;
  height: auto;
}

.social-media {
  display: flex;
  justify-content: space-between;
}

.social-media li {
  width: 30px;
}

.social-media i {
  font-size: 20px;
  color: #333;
}

.social-media i:hover {
  color: #ff5722;
}
.security {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.security li {
  width: 30px;
}

.security li img {
  width: 100%;
  height: auto;
}
.mobil {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobil li {
  width: 30px;
}

.mobil li img {
  width: 160%;
  height: auto;
}


.footer-bottom {
  text-align: center;
  font-size: 14px;
  color: #333;
  margin-top: 20px;
}
</style>
