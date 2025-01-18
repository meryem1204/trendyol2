<template>
    <div class="navbar">
      <ul class="categories">
        <!-- Kategoriler -->
        <li
          v-for="category in categories"
          :key="category.name"
          class="category-item"
          :class="{ active: activeCategory === category.name }"
          @mouseenter="setActiveCategory(category.name)"
          @mouseleave="setActiveCategory(null)"
        >
          <span>{{ category.name }}</span>
  
          <!-- Kadın kategorisi için alt menü -->
          <div
            v-if="category.name === 'Kadın' && activeCategory === 'Kadın'"
            class="submenu woman-submenu"
          >
            <ul>
              <li
                v-for="sub in womanCategories"
                :key="sub.name"
                @mouseenter="setActiveSubmenu(sub.name)"
                @mouseleave="setActiveSubmenu(null)"
              >
                {{ sub.name }}
                <!-- Kadın alt kategorileri -->
                <ul v-if="activeSubmenu === sub.name" class="subsubmenu">
                  <li v-for="item in sub.items" :key="item">{{ item }}</li>
                </ul>
              </li>
            </ul>
          </div>
  
          <!-- Diğer kategoriler için alt menüler -->
          <div
            v-if="activeCategory === category.name && category.name !== 'Kadın'"
            class="submenu"
          >
            <ul>
              <li v-for="sub in category.subcategories" :key="sub">
                {{ sub }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeCategory: null,
        activeSubmenu: null,
        categories: [
          { name: 'Kadın' },
          { name: 'Erkek' },
          { name: 'Anne & Çocuk' },
          { name: 'Ev & Mobilya' },
          { name: 'Süpermarket' },
          { name: 'Kozmetik' },
          { name: 'Ayakkabı & Çanta' },
          { name: 'Elektronik' },
          { name: 'Spor & Outdoor' },
        ],
        womanCategories: [
          { name: 'Giyim', items: ['Elbise', 'Tişört', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Bluz', 'Ceket', 'Etek', 'Kazak', 'Tesettür', 'Büyük Beden', 'Trençkot', 'Yağmurluk & Rüzgarlık', 'Sweatshirt', 'Kaban', 'Hırka', 'Palto'] },
          { name: 'Ayakkabı', items: ['Topuklu Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Sandalet', 'Çizme', 'Kar Botu', 'Loafer'] },
          { name: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Portföy', 'Posta Çantası', 'Etk Çantası'] },
          { name: 'İç Giyim', items: ['Pijama Takımı', 'Gecelik', 'Sütyen', 'Fantazi Giyim', 'Çorap', 'Korse', 'Bralet'] },
          { name: 'Kozmetik', items: ['Parfüm', 'Cilt Bakımı', 'Makyaj', 'Saç Bakımı', 'Vücut Bakımı', 'Cinsel Sağlık', 'Dudak Nemlendirici', 'Aydınlatıcı & Aydınlatıcılar', 'Eyeliners', 'Saç Maskesi'] },
          { name: 'Spor & Outdoor', items: ['Sweatshirt', 'Tişört', 'Spor Sütyeni', 'Outdoor Ayakkabı', 'Outdoor Ekipmanları', 'Spor Çantası'] },
        ]
      };
    },
    methods: {
      setActiveCategory(category) {
        this.activeCategory = category;
      },
      setActiveSubmenu(subcategory) {
        this.activeSubmenu = subcategory;
      }
    }
  };
  </script>
  
  <style scoped>
.navbar {
  position: absolute;
  top: 50px; /* Sayfanın üst kısmından 50px aşağıya */
  left: 400px; /* Sayfanın sol kenarından 20px sağa */
  background-color: #f4f4f4;
  padding: 10px;
  width: 250px;
}

.categories {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.category-item {
  position: relative;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}

.category-item:hover {
  color: #1f190b;
}

.submenu {
  position: absolute;
  top: 0;
  left: 100%;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  display: none;
}

.category-item.active .submenu {
  display: block;
}

.woman-submenu {
  position: absolute;
  top: 0;
  left: 100%; /* Kadın kategorisinin sağında */
}

.main-submenu {
  list-style-type: none;
  padding-left: 20px;
}

.subsubmenu {
  list-style-type: none;
  padding-left: 20px;
}

.subsubmenu li {
  padding: 5px 0;
  cursor: pointer;
}


.subsubmenu li:hover {
  color: #fcbb0a; /* Hover rengi */
}

.submenu span {
  cursor: pointer;
}

.submenu span:hover {
  color: #edcc13;
}

.category-item:hover > .submenu {
  display: block;
}

.subsubmenu li:hover {
  color: #f6ca0a; /* Hover rengi */
}
</style>