<template>
  <div class="panel-container">
    <!-- Üst Panel -->
    <div class="top-banner">
      <span class="highlight">EFSANE GÜNLER</span>
      <span>Yılda Bir Gelen Efsane Fırsatlar!</span>
    </div>

    <!-- Logo, Arama Çubuğu ve Kullanıcı İşlemleri -->
    <div class="header-bar">
      <div class="logo">
        <span>trendyol</span>
      </div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        />
        <button class="search-icon">
          🔍
        </button>
      </div>
      <div class="user-actions">
        <div class="action">
          <span class="icon">👤</span> Giriş Yap
        </div>
        <div class="action">
          <span class="icon">❤️</span> Favorilerim
        </div>
        <div class="action">
          <span class="icon">🛒</span> Sepetim
        </div>
      </div>
    </div>

    <!-- Alt Menü -->
    <div class="bottom-menu">
      <a
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ active: activeMenu === index }"
        @click="toggleMenu(index)"
      >
        {{ item.label }}
      </a>
    </div>

    <!-- Yardım ve Destek Bölümü -->
    <div v-if="activeMenu === 3" class="help-section">
      <!-- Sol Menü -->
      <div class="help-menu">
        <ul>
          <li
            v-for="(topic, index) in helpTopics"
            :key="index"
            @click="selectHelpTopic(index)"
            @mouseover="hoverHelpIndex = index"
            @mouseleave="hoverHelpIndex = null"
            :class="{ active: selectedHelpTopicIndex === index }"
          >
            {{ topic.label }}
          </li>
        </ul>
      </div>

      <!-- Sağ Menü -->
      <div v-if="selectedHelpTopicIndex === 0" class="help-content">
        <h3>Popüler Sorular</h3>
        <div
          v-for="(question, index) in helpTopics[0].questions"
          :key="index"
          class="question-box"
        >
          <div class="question" @click="toggleAnswer(index)">
            {{ question.question }}
            <span class="toggle-btn">{{ question.open ? '-' : '+' }}</span>
          </div>
          <div v-show="question.open" class="answer">{{ question.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: null, // Hangi menünün aktif olduğunu tutar
      hoverHelpIndex: null, // Yardım menüsünde hover edilen index
      selectedHelpTopicIndex: null, // Seçilen yardım konusu index
      menuItems: [
        { label: "İndirim Kuponlarım" },
        { label: "Trendyol'da Satış Yap" },
        { label: "Hakkımızda" },
        { label: "Yardım & Destek" },
      ],
      helpTopics: [
        {
          label: "Popüler Sorular",
          questions: [
            {
              question: "Nasıl iade yapabilirim?",
              answer: "Ürün sayfasındaki iade bölümünden işlem yapabilirsiniz.",
              open: false,
            },
            {
              question: "Siparişimi nasıl takip edebilirim?",
              answer: "Siparişlerim sekmesinden siparişlerinizi görüntüleyebilirsiniz.",
              open: false,
            },
          ],
        },
        { label: "İade", questions: [] },
        { label: "Kargo ve Teslimat", questions: [] },
        { label: "Siparişler", questions: [] },
        { label: "trendyol.com Hakkında", questions: [] },
        { label: "Hesabım", questions: [] },
        { label: "Ürün & Alışveriş", questions: [] },
        { label: "İşlem Rehberi", questions: [] },
        { label: "Hızlı Market", questions: [] },
        { label: "Trendyol Yemek", questions: [] },
        { label: "İletişim", questions: [] },
      ],
    };
  },
  methods: {
    toggleMenu(index) {
      this.activeMenu = this.activeMenu === index ? null : index;
      if (index !== 3) {
        this.selectedHelpTopicIndex = null;
      }
    },
    selectHelpTopic(index) {
      this.selectedHelpTopicIndex =
        this.selectedHelpTopicIndex === index ? null : index;
    },
    toggleAnswer(index) {
      this.helpTopics[0].questions[index].open =
        !this.helpTopics[0].questions[index].open;
    },
  },
};
</script>

<style scoped>
/* Üst Panel */
.top-banner {
  background-color: #2a2a72;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.top-banner .highlight {
  font-weight: bold;
  color: #ffcc00;
  margin-right: 5px;
}

/* Header Bar */
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 65px; /* Üst menüden aşağıya kaydırmak için */
  left: 0;
  width: 100%;
  
}
.logo {
  font-size: 20px;
  font-weight: bold;
  color: #ff6600;
}
.search-bar {
  display: flex;
  flex: 1;
  margin: 0 20px;
}
.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}
.search-bar .search-icon {
  padding: 10px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.user-actions {
  display: flex;
  gap: 15px;
}
.user-actions .action {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
}
.user-actions .action:hover {
  color: #ff6600;
}
.user-actions .icon {
  margin-right: 5px;
}

/* Alt Menü */
.bottom-menu {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #f6efef;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 40px; 
  left: 0;
  width: 100%;
  
}
.bottom-menu a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s;
}
.bottom-menu a.active,
.bottom-menu a:hover {
  color: #ff6600;
}

/* Yardım ve Destek Bölümü */
.help-section {
  display: flex;
  margin-top: 10px; /* Sayfanın alt kısmına kaydırmak için */
}
.help-menu {
  width: 75%;
  background-color: #f7efef;
  border-right: 1px solid #ddd;
}
.help-menu ul {
  list-style: none;
  padding: 0;
}
.help-menu li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.help-menu li:hover,
.help-menu li.active {
  background-color: #ffcc00;
  color: white;
}
.help-content {
  width: 75%;
  padding: 20px;
}
.question-box {
  margin-bottom: 10px;
}
.question {
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
}
.question:hover {
  background-color: #ddd;
}
.answer {
  padding: 10px;
  background-color: #f9f9f9;
}
</style>
