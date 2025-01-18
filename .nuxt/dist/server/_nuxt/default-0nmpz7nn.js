import { mergeProps, useSSRContext, defineComponent, ref, computed, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrRenderStyle, ssrLooseEqual, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$a = {
  name: "Arama",
  data() {
    return {
      searchQuery: "",
      showDropdown: false,
      recentSearches: ["Lenovo", "iPhone"],
      popularSearches: ["Skechers", "Robot Süpürge", "Bileklik", "Baharatlık"],
      products: [
        { name: "Ürün 1", image: "/saat.png", price: "100 TL" },
        { name: "Ürün 2", image: "/telefon.png", price: "200 TL" },
        { name: "Ürün 3", image: "/televizyon.png", price: "300 TL" },
        { name: "Ürün 4", image: "/ütü.png", price: "400 TL" }
      ],
      currentIndex: 0
    };
  },
  computed: {
    visibleProducts() {
      return this.products.slice(this.currentIndex, this.currentIndex + 2);
    }
  },
  methods: {
    hideDropdown() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % (this.products.length - 1 || 1);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % (this.products.length - 1 || 1);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-container" }, _attrs))} data-v-ba4c9938><div class="search-bar" data-v-ba4c9938><input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız"${ssrRenderAttr("value", $data.searchQuery)} data-v-ba4c9938><button class="search-button" data-v-ba4c9938>🔍</button></div>`);
  if ($data.showDropdown) {
    _push(`<div class="dropdown" data-v-ba4c9938><div class="section" data-v-ba4c9938><h4 data-v-ba4c9938>Geçmiş Aramalar</h4><ul class="list" data-v-ba4c9938><!--[-->`);
    ssrRenderList($data.recentSearches, (item, index) => {
      _push(`<li class="list-item" data-v-ba4c9938>${ssrInterpolate(item)}</li>`);
    });
    _push(`<!--]--></ul></div><div class="section" data-v-ba4c9938><h4 data-v-ba4c9938>Popüler Aramalar</h4><ul class="list" data-v-ba4c9938><!--[-->`);
    ssrRenderList($data.popularSearches, (item, index) => {
      _push(`<li class="list-item" data-v-ba4c9938>${ssrInterpolate(item)}</li>`);
    });
    _push(`<!--]--></ul></div><div class="section popular-products" data-v-ba4c9938><h4 data-v-ba4c9938>Popüler Ürünler</h4><div class="slider" data-v-ba4c9938><button class="arrow left-arrow" data-v-ba4c9938>❮</button><div class="products" data-v-ba4c9938><!--[-->`);
    ssrRenderList($options.visibleProducts, (product, index) => {
      _push(`<div class="product" data-v-ba4c9938><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} data-v-ba4c9938><div class="product-info" data-v-ba4c9938><p data-v-ba4c9938>${ssrInterpolate(product.name)}</p><p data-v-ba4c9938>${ssrInterpolate(product.price)}</p></div></div>`);
    });
    _push(`<!--]--></div><button class="arrow right-arrow" data-v-ba4c9938>❯</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arama.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Arama = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-ba4c9938"]]);
const resim1 = "/resim1.png";
const oldPrice = 1e4;
const discount = 200;
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "sepetim",
  __ssrInlineRender: true,
  setup(__props) {
    const productImage = ref(resim1);
    const isSelected = ref(false);
    const newPrice = oldPrice - discount;
    const shippingCost = computed(() => {
      return 0;
    });
    const total = computed(() => {
      return isSelected.value ? newPrice : 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-container" }, _attrs))} data-v-1bc556c8><div class="product-card" data-v-1bc556c8><div class="product-info" data-v-1bc556c8><div class="seller-info" data-v-1bc556c8><span class="seller-name" data-v-1bc556c8>Satıcı: TechStore</span><span class="seller-rating" data-v-1bc556c8>⭐⭐⭐⭐☆</span></div><div class="product-details" data-v-1bc556c8><div class="product-checkbox" data-v-1bc556c8><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isSelected.value) ? ssrLooseContain(isSelected.value, null) : isSelected.value) ? " checked" : ""} data-v-1bc556c8></div><div class="product-image-container" data-v-1bc556c8><img${ssrRenderAttr("src", productImage.value)} alt="Bilgisayar" class="product-image" data-v-1bc556c8></div><div class="product-description" data-v-1bc556c8><h2 data-v-1bc556c8>Bilgisayar</h2><p data-v-1bc556c8>Güçlü işlemci ve yüksek performans</p><div class="prices" data-v-1bc556c8><span class="old-price" data-v-1bc556c8>${ssrInterpolate(oldPrice)}₺</span><span class="new-price" data-v-1bc556c8>${ssrInterpolate(newPrice)}₺</span></div></div></div></div></div><div class="order-summary" data-v-1bc556c8><div class="summary-item" data-v-1bc556c8><span data-v-1bc556c8>Sepet Toplamı </span><span class="summary-value" data-v-1bc556c8>${ssrInterpolate(total.value)}₺</span></div><div class="summary-item" data-v-1bc556c8><span data-v-1bc556c8>Kargo Ücreti </span><span class="summary-value" data-v-1bc556c8>${ssrInterpolate(shippingCost.value)}₺</span></div></div><div class="cart-total" data-v-1bc556c8><div data-v-1bc556c8><span class="total-text" data-v-1bc556c8>Toplam </span><span class="currency" data-v-1bc556c8>${ssrInterpolate(total.value + shippingCost.value)}₺</span></div></div><button class="checkout-btn"${ssrIncludeBooleanAttr(!isSelected.value) ? " disabled" : ""} data-v-1bc556c8>Sepeti Onayla</button></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sepetim.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Sepetim = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1bc556c8"]]);
const _sfc_main$8 = {
  data() {
    return {
      activeMenu: null,
      // Hangi menünün aktif olduğunu tutar
      hoverHelpIndex: null,
      // Yardım menüsünde hover edilen index
      selectedHelpTopicIndex: null,
      // Seçilen yardım konusu index
      menuItems: [
        { label: "İndirim Kuponlarım" },
        { label: "Trendyol'da Satış Yap" },
        { label: "Hakkımızda" },
        { label: "Yardım & Destek" }
      ],
      helpTopics: [
        {
          label: "Popüler Sorular",
          questions: [
            {
              question: "Nasıl iade yapabilirim?",
              answer: "Ürün sayfasındaki iade bölümünden işlem yapabilirsiniz.",
              open: false
            },
            {
              question: "Siparişimi nasıl takip edebilirim?",
              answer: "Siparişlerim sekmesinden siparişlerinizi görüntüleyebilirsiniz.",
              open: false
            }
          ]
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
        { label: "İletişim", questions: [] }
      ]
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
      this.selectedHelpTopicIndex = this.selectedHelpTopicIndex === index ? null : index;
    },
    toggleAnswer(index) {
      this.helpTopics[0].questions[index].open = !this.helpTopics[0].questions[index].open;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel-container" }, _attrs))} data-v-222daf17><div class="top-banner" data-v-222daf17><span class="highlight" data-v-222daf17>EFSANE GÜNLER</span><span data-v-222daf17>Yılda Bir Gelen Efsane Fırsatlar!</span></div><div class="header-bar" data-v-222daf17><div class="logo" data-v-222daf17><span data-v-222daf17>trendyol</span></div><div class="search-bar" data-v-222daf17><input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" data-v-222daf17><button class="search-icon" data-v-222daf17> 🔍 </button></div><div class="user-actions" data-v-222daf17><div class="action" data-v-222daf17><span class="icon" data-v-222daf17>👤</span> Giriş Yap </div><div class="action" data-v-222daf17><span class="icon" data-v-222daf17>❤️</span> Favorilerim </div><div class="action" data-v-222daf17><span class="icon" data-v-222daf17>🛒</span> Sepetim </div></div></div><div class="bottom-menu" data-v-222daf17><!--[-->`);
  ssrRenderList($data.menuItems, (item, index) => {
    _push(`<a class="${ssrRenderClass({ active: $data.activeMenu === index })}" data-v-222daf17>${ssrInterpolate(item.label)}</a>`);
  });
  _push(`<!--]--></div>`);
  if ($data.activeMenu === 3) {
    _push(`<div class="help-section" data-v-222daf17><div class="help-menu" data-v-222daf17><ul data-v-222daf17><!--[-->`);
    ssrRenderList($data.helpTopics, (topic, index) => {
      _push(`<li class="${ssrRenderClass({ active: $data.selectedHelpTopicIndex === index })}" data-v-222daf17>${ssrInterpolate(topic.label)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
    if ($data.selectedHelpTopicIndex === 0) {
      _push(`<div class="help-content" data-v-222daf17><h3 data-v-222daf17>Popüler Sorular</h3><!--[-->`);
      ssrRenderList($data.helpTopics[0].questions, (question, index) => {
        _push(`<div class="question-box" data-v-222daf17><div class="question" data-v-222daf17>${ssrInterpolate(question.question)} <span class="toggle-btn" data-v-222daf17>${ssrInterpolate(question.open ? "-" : "+")}</span></div><div style="${ssrRenderStyle(question.open ? null : { display: "none" })}" class="answer" data-v-222daf17>${ssrInterpolate(question.answer)}</div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Panel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-222daf17"]]);
const _sfc_main$7 = {
  data() {
    return {
      products: [
        { title: "Saat", price: "500,99", image: "/saat.png", isFavorite: false },
        { title: "Ayakkabı", price: "1999,99", image: "/ayakkabı.png" },
        { title: "Buzdolabı", price: "14999,99", image: "/buzdolabı.png" },
        { title: "Çamaşır makinesi", price: "11999,99", image: "/çamasır.png" },
        { title: "Kulaklık", price: "4599,99", image: "/kulaklık.png" },
        { title: "Kedi maması", price: "299,99", image: "/mama.png" },
        { title: "Telefon", price: "24999,99", image: "/telefon.png" },
        { title: "Ütü", price: "1999,99", image: "/ütü.png" },
        { title: "Televizyon", price: "9999,99", image: "/televizyon.png" }
      ],
      hoveredIndex: null
    };
  },
  methods: {
    toggleFavorite(index) {
      this.products[index].isFavorite = !this.products[index].isFavorite;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-list" }, _attrs))} data-v-7727604c><!--[-->`);
  ssrRenderList($data.products, (product, index) => {
    _push(`<div class="product-card" data-v-7727604c><button class="${ssrRenderClass([{ active: product.isFavorite }, "favorite-btn"])}" data-v-7727604c> ❤ </button><div class="image-container" data-v-7727604c><img${ssrRenderAttr("src", product.image)} alt="Ürün Resmi" data-v-7727604c>`);
    if ($data.hoveredIndex === index) {
      _push(`<button class="add-to-cart" data-v-7727604c> Sepete Ekle </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="details" data-v-7727604c><h3 data-v-7727604c>${ssrInterpolate(product.title)}</h3><p class="price" data-v-7727604c>${ssrInterpolate(product.price)} TL</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Anasayfa.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Anasayfa = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7727604c"]]);
const _sfc_main$6 = {
  name: "Markalar",
  data() {
    return {
      brands: [
        { image: "/karaca.png" },
        { image: "/nike.png" },
        { image: "/puma.png" },
        { image: "/adidas.png" },
        { image: "/defacto.png" }
      ],
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.brands.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.brands.length) % this.brands.length;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-section" }, _attrs))} data-v-3a9a50e2><h2 class="slider-title" data-v-3a9a50e2>Size Özel Markalar</h2><div class="slider-container" data-v-3a9a50e2><button class="arrow left-arrow" data-v-3a9a50e2>❮</button><div class="slider" data-v-3a9a50e2><!--[-->`);
  ssrRenderList($data.brands, (brand, index) => {
    _push(`<div class="${ssrRenderClass([{ active: index === $data.currentIndex }, "brand"])}" data-v-3a9a50e2><img${ssrRenderAttr("src", brand.image)}${ssrRenderAttr("alt", brand.name)} data-v-3a9a50e2><p data-v-3a9a50e2>${ssrInterpolate(brand.name)}</p></div>`);
  });
  _push(`<!--]--></div><button class="arrow right-arrow" data-v-3a9a50e2>❯</button></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Markalar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Markalar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-3a9a50e2"]]);
const _imports_0$1 = publicAssetsURL("/logo.png");
const _sfc_main$5 = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-253628d6><div class="login-container" data-v-253628d6><div class="logo-container" data-v-253628d6><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="logo" data-v-253628d6></div><div class="form-container" data-v-253628d6><h2 data-v-253628d6>Giriş Yap</h2><form data-v-253628d6><div class="input-group" data-v-253628d6><label for="email" data-v-253628d6>E-posta Adresi</label><input type="email" id="email"${ssrRenderAttr("value", email.value)} placeholder="E-posta adresinizi girin" required data-v-253628d6></div><div class="input-group" data-v-253628d6><label for="password" data-v-253628d6>Şifre</label><input type="password" id="password"${ssrRenderAttr("value", password.value)} placeholder="Şifrenizi girin" required data-v-253628d6></div><button type="submit" class="login-btn" data-v-253628d6>Giriş Yap</button></form><div class="forgot-password" data-v-253628d6><a href="#" data-v-253628d6>Şifremi unuttum</a></div><div class="social-login" data-v-253628d6><button class="facebook-btn" data-v-253628d6>Facebook ile Giriş Yap</button><button class="google-btn" data-v-253628d6>Google ile Giriş Yap</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-253628d6"]]);
const _sfc_main$4 = {
  name: "Hesabim",
  data() {
    return {
      menuVisible: false,
      menuItems: [
        { label: "Kullanıcı Bilgilerim", component: "UserInfo" },
        { label: "Tüm Siparişlerim", component: null },
        { label: "Değerlendirmelerim", component: null },
        { label: "Satıcı Mesajlarım", component: null },
        { label: "İndirim Kuponlarım", component: null }
      ],
      activeComponent: null,
      hoverIndex: null
    };
  },
  computed: {
    activeIndex() {
      return this.menuItems.findIndex((item) => item.component === this.activeComponent);
    }
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
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-section" }, _attrs))} data-v-e937a59c><div class="account-dropdown" data-v-e937a59c><button class="account-button" data-v-e937a59c>Hesabım</button><ul style="${ssrRenderStyle($data.menuVisible ? null : { display: "none" })}" class="dropdown-menu" data-v-e937a59c><!--[-->`);
  ssrRenderList($data.menuItems, (item, index) => {
    _push(`<li class="${ssrRenderClass({ active: $options.activeIndex === index })}" data-v-e937a59c>${ssrInterpolate(item.label)}</li>`);
  });
  _push(`<!--]--></ul></div>`);
  if ($data.activeComponent === "UserInfo") {
    _push(`<div class="user-info-form" data-v-e937a59c><h2 data-v-e937a59c>Kullanıcı Bilgilerim</h2><form data-v-e937a59c><div class="form-section" data-v-e937a59c><h3 data-v-e937a59c>Üyelik Bilgilerim</h3><label data-v-e937a59c> Ad <input type="text" placeholder="Adınız" data-v-e937a59c></label><label data-v-e937a59c> Soyad <input type="text" placeholder="Soyadınız" data-v-e937a59c></label><label data-v-e937a59c> E-mail <input type="email" placeholder="Email adresiniz" data-v-e937a59c></label><label data-v-e937a59c> Cep Telefonu <input type="tel" placeholder="Cep telefonunuz" data-v-e937a59c></label><button type="button" data-v-e937a59c>Güncelle</button></div><div class="form-section" data-v-e937a59c><h3 data-v-e937a59c>Şifre Güncelleme</h3><label data-v-e937a59c> Şu Anki Şifre <input type="password" placeholder="Mevcut şifreniz" data-v-e937a59c></label><label data-v-e937a59c> Yeni Şifre <input type="password" placeholder="Yeni şifreniz" data-v-e937a59c></label><label data-v-e937a59c> Yeni Şifre (Tekrar) <input type="password" placeholder="Yeni şifre tekrar" data-v-e937a59c></label><button type="button" data-v-e937a59c>Güncelle</button></div></form></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hesabım.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Hesabım = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e937a59c"]]);
const _imports_0 = "data:image/png;base64,UklGRvAEAABXRUJQVlA4WAoAAAAYAAAAbwAAbwAAQUxQSGQAAAABV0AgQJlkgSZ4YIqICEHveBRMa21b8mLdV9DuyRaAyghExvhHILqMyluRiP5PAFCf1+2FC6C8KG3oB4eQiotUnVjyjaU7WMbr9//z9skiVpZ+ZgkbFk0/OISElsMBMBz3GyMAVlA4IKQDAAAQFQCdASpwAHAAPm02lUikIqIhIrQKqIANiWkAFeO9fH9x6F3xd7K5Oj8B+XHp3uLv8r8wHGE3RcYH089DP87/3XHQUAPy3/xvTE/4vLR9Gewl+s3WyIJT4dy8Rj6GT38IydS3pTbdBFwF4/6k6gw1SDLZzkc9kBUwFZrc+4U1SVjm1YlRFk3xbc7W+qX7T8Dlk2Fdre580MzRikSTWsOkWZSFhKtn83/IlaCaz4dy8AAA/vyoAAe/bVGU3aq5ZR45PYFnRT2Z6Bm6qgRSl3zxwf3ZR89ixAU0wtu001VmwDD6kWaLX1GG9l3clqsnXPPplUoMJl2k32mogKwxdokVUTQg2eGO2PqRcI81a9JwREPyZ3z5Pyrkn0N2beXdYksiHhHCvTICJCZ8Vpy05kIazroRrBvyk8qFI//2kUYLr1xHdJ2LbXngD31K3/iK9hpnP07j2kcVy8HCgt/yeUzFKzGPSIpBUd3KMMjc5etpJnu11dWXwM+VqeqKh085tQxuZkTzr5bWf2RbqYDkM6GYXDEDlc2juDV6bFAyiimA0liBU8/rGIys5vVJ8tnDYjcs4/wiIlmmj1lG/ORy2omQ4NF0bU226Fvu0pRK0mTyrEXJhA6Lov2aOKZNJ92D/q2n4f2xCTSQBe+MjyrqbrfYwYgjR8BNuv9p6fHHIzhRpZ6kdfr/8H1JC/6iv+tRviM1QfBOIzYEEPuiiq18cqrfsiNXe/3qyMJXQkN/QdMJwPcjiX5oUgZCvcOyOoIoWA7Nll/purNV+rk7MM4m2jYk8sDnMAvc+bWTLEc5mr4MZXe/EN+Kz5lCtXROrc8Z2OazOfezP/MUBbICWZ+YmpoFU49uI/qBjf8ooe9ReR/Va6kLMeByEgAjrjNgTLM5+TArQeSCzTM9KePvmhvS4yfbD5WpjvUsyXFWEtSpZR+kqA/sPgHiTwbezHgutzFP+nhkqIeeDEB/aT82mnL1CG0O3TEmiNy/hPqXfjGVTo69hXL4LhdmeFyzxcv1ciWKi/FPi6iPtHui6W9Uu+rZYqNuTPIk1DmpI+xiR+N4SHT7L4F5WZ15/WNmKjAr+1kAGrY1Jspbk96Bj/NoDyS+GC39qSgsNXTj0jpClp5Zsp5khCQGe9azgwEodAQ66qYjOgz3po1m1nlJ3g0t9UU2318exy//uSJVv/Bx+aL2wLC1iMEvpDDALjSBvz2k8nQe3rz/6Qo03EfJB4O6rnoz9H7LgAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAHAAAAADoAQAAQAAAHAAAAAAAAAA";
const _imports_1 = "data:image/png;base64,UklGRqYDAABXRUJQVlA4WAoAAAAYAAAAbwAAbwAAQUxQSGQAAAABV0AgQJlkgSZ4YIqICEHveBRMa21b8mLdV9DuyRaAyghExvhHILqMyluRiP5PAFCf1+2FC6C8KG3oB4eQiotUnVjyjaU7WMbr9//z9skiVpZ+ZgkbFk0/OISElsMBMBz3GyMAVlA4IFoCAACwEACdASpwAHAAPm02l0gkIyIhJzdIoIANiWMAeVFC12/fDCfdTc437bt8d5gP2O9crpAP7d1G/oAfqB1tH7UftV7RmYAHTFX+fPo1RmRnjjTD0cDoVLd+okIkGH4a6qeffnXjhv3xEDGeCZPuLQatUQY5JbUQhcX7emGTX0wfNJ6SMP51++XMb5dQ6ZNAAP78SgAAqSv1x9h6HW+9Y9ffgw5gs5G9u73CZq/9sNK7+v9LZ+iUECc3qW5e6DbwA+E9l+SEbmD5G+ra3Cfpz5MIk3lFbYIvBxhlsnWzdMH1/+JH6+DpvKVb87zjeUj0uj07bmnkBMJ5qoZvztrcug3abkmW/KbbOkGbT4EqDPK6mGdZ5/MVz6BB4WezRs3SuYR6XAjiexhw2Obs3Mp1DCk6gu5Je4rKYoWrAv2HN9hsqHaBmkf1vHZnvVEMJMO7ZinCFe/T2s390M123ASaufFXU5BCnsz1zgcBYKtJKCPMCQUVEOQWCyByitxam4gc8di4Ik+Dcb6tR7mqbCACshF01C3tBZIUiYEmdgJt0CyWrSg2klZHEamm5sKPV3Q8TILdsMndHg/tvbJ36J9nU1XTNPubJQP8/VwwLOEJG/ehaZ7qLjrLxJ+2IFgzQAMY/xZ09hLDTLRRZzAxo0VfNTqu9I8YDN3c6DoepsBo+nZJ/x3+e8d1kqH48YyCJVsVV3cDXSh3YZD8vZv8lhVXBSmkAfDNekMW2mlXzUx9si/1fQsrQHuH/6hx4g7K+nzFU/Z98AA2VsUGXSknXdE7HSnKdmIh7NkcAAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAHAAAAADoAQAAQAAAHAAAAAAAAAA";
const _imports_2 = "data:image/png;base64,UklGRkwFAABXRUJQVlA4WAoAAAAYAAAAbwAAbwAAQUxQSGQAAAABV0AgQJlkgSZ4YIqICEHveBRMa21b8mLdV9DuyRaAyghExvhHILqMyluRiP5PAFCf1+2FC6C8KG3oB4eQiotUnVjyjaU7WMbr9//z9skiVpZ+ZgkbFk0/OISElsMBMBz3GyMAVlA4IAAEAADQFQCdASpwAHAAPm00lkekIyIhJVYKiIANiWkAFeV9kH+M5ZqUaR9/ouE/a53U3ufmXpJtAD+Rf330JM+X1D7CHSq9FX9gCmu/+QYVz9BdyyqvB2Yrrfic3a2qNai4gRiXffHaOaIHzmDZweJxPkwN5j5nNk/dUsU1acMNCKoBwllBaB20CtBmAzQAkg6BdFPtGykUm1AHEnfvGcP4ANJxCt0sSNM+7SPf6vYhb8XF3WDNvM13/pgA/vxKAAL5+m4tz1PVuA4bdqdwZV5YV6niTHK5aM3S/f0x8ksUm8rjF5RR6BRPHERD0D3MlnDfz/qrGo77x811F3/IY9Oil+yla87pQDH5+hGhWajI+KXBwGmvvIftDr8HySBfkxe8J0qfCqAaCQVzBt6LAvAPRK9u19kgd9WHn4BNv+j+0UzLK1lDSf/J6kxxuijPPf7Dp+xrKfszgf1vHhk514uJvZ/2RYf+NB/0z9E5FHZP+UPK9EygcuLt8ZwlC/+zzHcqAq+U22POT+2D+XCmN4QeLj2hbplOAGYXX1PbnyaFLE78LHNOQnFyquIjZbnuqKpTHLOfVdkMrQx3IfLJ8jqvx2sH4Ir3hEkQ3lWjo8iUMO1p6nqlixeurnLGRg0uVPg3detez/sdj/zmqMS2uTQebUDYjsMK9zv0zmMz0atlFqi/1ceLlwI0xgKeyjOY0E+krPx9J2v8/W03gKHv1vaR+Zb/HmGkA5mjQz+O1qdyxdmVcEmaD0ugV5Ac/Mj0lzsgxT+yyy/qnee69eGt5LsIW7qnkdsKgB6qckLI8l+6smJfM3Y2Qj8+aJoIjVTfABcBzvrEICAiRIhty53dXOoI7dP6cbzwQ3XcHHQu+qGa6HomNIgt9sxIBlS/razubF5k1/aBJbBmiNftaD9+hTRQVmU7+663e7uUfxFgNmYgqYByDMersjXk1tTxXjmmA6k4mYOBegODZEaG8aLm4b167vXAC8HJfTvyrA+XkoA16gWBGJbBSYwKoCGaFSO5cvUI1+XjnmTD7RnpZpqRgodLsr8iIRFTFtRJ/HQrI9+1x+7/9zUiVx/UZKbI4OQ410Lsb1yviJde+eqp8ROSXUONdYS7UvbwbBaClmcGqNT6+KJFHeTQWUD/MKnOoJFtdd4gnolU9B9T8qWSbk45WuIy041Dr46x9WQpdVlSjTeGc86V1k7yvTaVC7LSTLGp4F8W5E+6fm9MGAZvtg9SkoFwk+vBYMSLy1Y7QUIcZhdvflChJpgK7bvpB8eB7pqvg2J6tEjjwMb+/5r7r95tFAR4NbsVSJQSprvD+UEjXsZbS6GidkpGHdqQo1aV16IGL3v+b5PHdCFO2rhFhdowAAAAAAAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAcAAAAAOgBAABAAAAcAAAAAAAAAA=";
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "data:image/png;base64,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";
const _imports_7 = "" + __buildAssetsURL("1.B0KMAqkB.png");
const _imports_8 = "data:image/png;base64,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";
const _imports_9 = "data:image/png;base64,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";
const _imports_10 = "data:image/png;base64,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";
const _sfc_main$3 = {
  name: "Footer"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-f28a10e1><div class="footer-top" data-v-f28a10e1><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Trendyol</h3><ul data-v-f28a10e1><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Biz Kimiz</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Kariyer</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Sürdürülebilirlik</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>İletişim</a></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Kampanyalar</h3><ul data-v-f28a10e1><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Kampanyalar</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Alışveriş Kredisi</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Elit Üyelik</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Hediye Fikirleri</a></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Satıcı</h3><ul data-v-f28a10e1><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Trendyol&#39;da Satış Yap</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Temel Kavramlar</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Trendyol Akademi</a></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Yardım</h3><ul data-v-f28a10e1><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Sıkça Sorulan Sorular</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Canlı Yardım/Destek</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>Naıl İade Edebilirim</a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1>İşlem Rehbe</a></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Güvenli Alışveriş</h3><ul class="payment-methods" data-v-f28a10e1><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_0)} alt="Visa" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_1)} alt="Mastercard" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_2)} alt="Troy" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_3)} alt="American Express" data-v-f28a10e1></li></ul></div><div data-v-f28a10e1><h3 data-v-f28a10e1>Mobil Uygulamalar</h3><ul class="mobil" data-v-f28a10e1><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_4)} alt="AppGallery" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_5)} alt="AppStore" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_6)} alt="GooglePlay" data-v-f28a10e1></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Güvenlik Sertifikası</h3><ul class="security" data-v-f28a10e1><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_7)} alt="1" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_8)} alt="2" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_9)} alt="3" data-v-f28a10e1></li><li data-v-f28a10e1><img${ssrRenderAttr("src", _imports_10)} alt="4" data-v-f28a10e1></li></ul></div><div class="footer-column" data-v-f28a10e1><h3 data-v-f28a10e1>Sosyal Medya</h3><ul class="social-media" data-v-f28a10e1><li data-v-f28a10e1><a href="#" data-v-f28a10e1><i class="fab fa-facebook-f" data-v-f28a10e1></i></a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1><i class="fab fa-twitter" data-v-f28a10e1></i></a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1><i class="fab fa-instagram" data-v-f28a10e1></i></a></li><li data-v-f28a10e1><a href="#" data-v-f28a10e1><i class="fab fa-youtube" data-v-f28a10e1></i></a></li></ul></div></div><div class="footer-bottom" data-v-f28a10e1><p data-v-f28a10e1>© 2024 Trendyol - Tüm Hakları Saklıdır.</p></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f28a10e1"]]);
const _sfc_main$2 = {
  data() {
    return {
      activeCategory: null,
      activeSubmenu: null,
      categories: [
        { name: "Kadın" },
        { name: "Erkek" },
        { name: "Anne & Çocuk" },
        { name: "Ev & Mobilya" },
        { name: "Süpermarket" },
        { name: "Kozmetik" },
        { name: "Ayakkabı & Çanta" },
        { name: "Elektronik" },
        { name: "Spor & Outdoor" }
      ],
      womanCategories: [
        { name: "Giyim", items: ["Elbise", "Tişört", "Gömlek", "Kot Pantolon", "Kot Ceket", "Pantolon", "Mont", "Bluz", "Ceket", "Etek", "Kazak", "Tesettür", "Büyük Beden", "Trençkot", "Yağmurluk & Rüzgarlık", "Sweatshirt", "Kaban", "Hırka", "Palto"] },
        { name: "Ayakkabı", items: ["Topuklu Ayakkabı", "Sneaker", "Günlük Ayakkabı", "Sandalet", "Çizme", "Kar Botu", "Loafer"] },
        { name: "Çanta", items: ["Omuz Çantası", "Sırt Çantası", "Bel Çantası", "Okul Çantası", "Laptop Çantası", "Portföy", "Posta Çantası", "Etk Çantası"] },
        { name: "İç Giyim", items: ["Pijama Takımı", "Gecelik", "Sütyen", "Fantazi Giyim", "Çorap", "Korse", "Bralet"] },
        { name: "Kozmetik", items: ["Parfüm", "Cilt Bakımı", "Makyaj", "Saç Bakımı", "Vücut Bakımı", "Cinsel Sağlık", "Dudak Nemlendirici", "Aydınlatıcı & Aydınlatıcılar", "Eyeliners", "Saç Maskesi"] },
        { name: "Spor & Outdoor", items: ["Sweatshirt", "Tişört", "Spor Sütyeni", "Outdoor Ayakkabı", "Outdoor Ekipmanları", "Spor Çantası"] }
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-875e642e><ul class="categories" data-v-875e642e><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<li class="${ssrRenderClass([{ active: $data.activeCategory === category.name }, "category-item"])}" data-v-875e642e><span data-v-875e642e>${ssrInterpolate(category.name)}</span>`);
    if (category.name === "Kadın" && $data.activeCategory === "Kadın") {
      _push(`<div class="submenu woman-submenu" data-v-875e642e><ul data-v-875e642e><!--[-->`);
      ssrRenderList($data.womanCategories, (sub) => {
        _push(`<li data-v-875e642e>${ssrInterpolate(sub.name)} `);
        if ($data.activeSubmenu === sub.name) {
          _push(`<ul class="subsubmenu" data-v-875e642e><!--[-->`);
          ssrRenderList(sub.items, (item) => {
            _push(`<li data-v-875e642e>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeCategory === category.name && category.name !== "Kadın") {
      _push(`<div class="submenu" data-v-875e642e><ul data-v-875e642e><!--[-->`);
      ssrRenderList(category.subcategories, (sub) => {
        _push(`<li data-v-875e642e>${ssrInterpolate(sub)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kategoriler.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const kategoriler = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-875e642e"]]);
const _sfc_main$1 = {
  __name: "Favorites",
  __ssrInlineRender: true,
  setup(__props) {
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
        ratingCount: 123
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
        ratingCount: 89
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
        ratingCount: 230
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "favorites-page" }, _attrs))} data-v-27ff0123><h1 class="page-title" data-v-27ff0123><span class="heart-symbol" data-v-27ff0123>❤️</span> Favorilerim </h1><div class="products-container" data-v-27ff0123><!--[-->`);
      ssrRenderList(products.value, (product, index) => {
        _push(`<div class="product-card" data-v-27ff0123><div class="product-image-container" data-v-27ff0123><div class="badge-container" data-v-27ff0123>`);
        if (product.fastDelivery) {
          _push(`<div class="badge delivery-badge" data-v-27ff0123>HIZLI TESLİMAT</div>`);
        } else {
          _push(`<!---->`);
        }
        if (product.freeShipping) {
          _push(`<div class="badge shipping-badge" data-v-27ff0123>KARGO BEDAVA</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><img${ssrRenderAttr("src", product.image)} alt="product image" class="product-image default-image" data-v-27ff0123><img${ssrRenderAttr("src", product.hoverImage)} alt="product hover image" class="product-image hover-image" data-v-27ff0123></div><div class="product-info" data-v-27ff0123><h3 class="product-name" data-v-27ff0123>${ssrInterpolate(product.name)}</h3><p class="product-price" data-v-27ff0123>${ssrInterpolate(product.price)}</p>`);
        if (product.outOfStock) {
          _push(`<p class="out-of-stock" data-v-27ff0123>Tükendi</p>`);
        } else {
          _push(`<!---->`);
        }
        if (!product.outOfStock) {
          _push(`<div class="size-selector" data-v-27ff0123><label for="size" data-v-27ff0123>Beden:</label><select id="size" data-v-27ff0123><!--[-->`);
          ssrRenderList(product.sizes, (size) => {
            _push(`<option${ssrRenderAttr("value", size)} data-v-27ff0123${ssrIncludeBooleanAttr(Array.isArray(product.selectedSize) ? ssrLooseContain(product.selectedSize, size) : ssrLooseEqual(product.selectedSize, size)) ? " selected" : ""}>${ssrInterpolate(size)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="remove-button" data-v-27ff0123>Kaldır</button><button class="similar-products-button" data-v-27ff0123>Benzer Ürünler</button></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Favorites.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Favorites = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-27ff0123"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
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
      { label: "Favorites", component: Favorites }
      // Ek bileşenler buraya eklenebilir.
    ];
    const activeComponent = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-container" }, _attrs))} data-v-d326c395><nav class="nav-bar" data-v-d326c395><!--[-->`);
      ssrRenderList(components, (item, index) => {
        _push(`<button data-v-d326c395>${ssrInterpolate(item.label)}</button>`);
      });
      _push(`<!--]--></nav><main class="main-content" data-v-d326c395>`);
      if (activeComponent.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activeComponent.value), null, null), _parent);
      } else {
        _push(`<div class="placeholder" data-v-d326c395><h2 data-v-d326c395>Hoş Geldiniz!</h2><p data-v-d326c395>Soldaki menüden bir seçenek seçerek devam edebilirsiniz.</p></div>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d326c395"]]);
export {
  _default as default
};
//# sourceMappingURL=default-0nmpz7nn.js.map
