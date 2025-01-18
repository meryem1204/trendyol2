<template>
    <div class="account-section">
      <!-- Hesabım Butonu -->
      <div class="account-dropdown" @mouseover="showMenu" @mouseleave="hideMenu">
        <button class="account-button">Hesabım</button>
  
        <!-- Dropdown Menü -->
        <ul v-show="menuVisible" class="dropdown-menu">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            :class="{ active: activeIndex === index }"
            @mouseover="hoverIndex = index"
            @mouseleave="hoverIndex = null"
            @click="navigate(item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
  
      <!-- Kullanıcı Bilgilerim Formu -->
      <div v-if="activeComponent === 'UserInfo'" class="user-info-form">
        <h2>Kullanıcı Bilgilerim</h2>
        <form>
          <div class="form-section">
            <h3>Üyelik Bilgilerim</h3>
            <label>
              Ad
              <input type="text" placeholder="Adınız" />
            </label>
            <label>
              Soyad
              <input type="text" placeholder="Soyadınız" />
            </label>
            <label>
              E-mail
              <input type="email" placeholder="Email adresiniz" />
            </label>
            <label>
              Cep Telefonu
              <input type="tel" placeholder="Cep telefonunuz" />
            </label>
            <button type="button">Güncelle</button>
          </div>
  
          <div class="form-section">
            <h3>Şifre Güncelleme</h3>
            <label>
              Şu Anki Şifre
              <input type="password" placeholder="Mevcut şifreniz" />
            </label>
            <label>
              Yeni Şifre
              <input type="password" placeholder="Yeni şifreniz" />
            </label>
            <label>
              Yeni Şifre (Tekrar)
              <input type="password" placeholder="Yeni şifre tekrar" />
            </label>
            <button type="button">Güncelle</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Hesabim",
    data() {
      return {
        menuVisible: false,
        menuItems: [
        { label: "Kullanıcı Bilgilerim", component: "UserInfo" },
          { label: "Tüm Siparişlerim", component: null },
          { label: "Değerlendirmelerim", component: null },
          { label: "Satıcı Mesajlarım", component: null },
          { label: "İndirim Kuponlarım", component: null },
         
        ],
        activeComponent: null,
        hoverIndex: null,
      };
    },
    computed: {
      activeIndex() {
        return this.menuItems.findIndex((item) => item.component === this.activeComponent);
      },
    },
    methods: {
      showMenu() {
        this.menuVisible = true;
      },
      hideMenu() {
        this.menuVisible = false;
      },
      navigate(item) {
        if (item.component) {
          this.activeComponent = item.component;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .account-section {
    position: relative;
    width: 600px;
  }
  .account-button {
    background-color: #ff5900;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    width: 50%;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 50%;
  }
  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .dropdown-menu li:hover {
    color: #007bff;
  }
  .dropdown-menu li.active {
    font-weight: bold;
  }
  .user-info-form {
    margin-top: 50px;
    border: 1px solid #f1ecec;
    padding: 20px;
    background: #f3f1f1;
  }
  .form-section {
    margin-bottom: 20px;
  }
  .form-section h3 {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #f9f4f4;
    border-radius: 4px;
  }
  button {
    background-color: #ff6600;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  button:hover {
    background-color: #e55d00;
  }
  </style>
  