<template>
    <div class="login-page">
      <div class="login-container">
        <!-- Logo -->
        <div class="logo-container">
          <img src="/logo.png" alt="Logo" class="logo" />
        </div>
  
        <!-- Login Form -->
        <div class="form-container">
          <h2>Giriş Yap</h2>
          <form @submit.prevent="login">
            <div class="input-group">
              <label for="email">E-posta Adresi</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="password">Şifre</label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Şifrenizi girin"
                required
              />
            </div>
  
            <!-- Giriş Butonu -->
            <button type="submit" class="login-btn">Giriş Yap</button>
          </form>
  
          <!-- Şifremi Unuttum Linki -->
          <div class="forgot-password">
            <a href="#">Şifremi unuttum</a>
          </div>
  
          <!-- Sosyal Medya ile Giriş -->
          <div class="social-login">
            <button class="facebook-btn">Facebook ile Giriş Yap</button>
            <button class="google-btn">Google ile Giriş Yap</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  // Gerçek giriş yapılmayacak, sadece formu test etmek için boş fonksiyon
  function login() {
    console.log('Email:', email.value)
    console.log('Password:', password.value)
    // Burada herhangi bir işlem yapılmayacak, sadece görsel tarafı işleyeceğiz.
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
  }
  
  .login-container {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  
  .logo-container {
    text-align: center;
  }
  
  .logo {
    width: 150px;
    height: auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #ff6000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #e55a00;
  }
  
  .forgot-password {
    text-align: center;
    margin-top: 10px;
  }
  
  .forgot-password a {
    color: #007bff;
    text-decoration: none;
  }
  
  .social-login {
    margin-top: 20px;
  }
  
  .social-login button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .facebook-btn {
    background-color: #3b5998;
    color: white;
  }
  
  .google-btn {
    background-color: #db4437;
    color: white;
  }
  </style>
  