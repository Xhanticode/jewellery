<template>
  <div class="app-container">
    <div class="app-content">

      
      <div v >
      <div class="products-section-header" d-flex style="gap: 1rem">
        <div class="search-wrapper">
          <input class="search-input" type="text" v-model="search" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
        <div class="sort-options ">
            <button class="btn btn-outline-dark ms-5" @click="sortProducts">
              Sort By Title
            </button>
            <select v-model="category" class="ms-3">
              <option value="">All</option>
              <option value="Earrings">Earrings</option>
              <option value="Necklace">Necklaces</option>
              <option value="Rings">Rings</option>
            </select>
    </div>
        <!-- <div class="filter-wrapper">
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="filter"
          ></b-form-select>
        </div> -->
      </div>
      <div v-if="notproducts"  class="products-grid">
        <ProductCard
          v-for="product of notproducts"
          :key="product.id"
          :product="product"
          class="product-card"
        />
        </div>
           <div v-if="products"  class="products-grid">
        <ProductCard
          v-for="product of products"
          :key="product.id"
          :product="product"
          class="product-card"
        />
        </div>

         <div v-else>
        <div class="loader loader--style2" title="1">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#000"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
      </div>
      
     
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
// import axios from "axios";

export default {
  props: ["id"],
  components: {
    ProductCard,
  },
  data() {
    return {
      search:"",
      category:"",
        title: "",
        img: "",
        thumbnail: "",
        price: "",
        color: "",
        description: "",
        quantity: "",
        category: "",
        sku: "",
        available: "",
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products?.filter((product)=>{
        let isMatch = true;
        if (!product.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "all" && product.category !== this.category) isMatch = false;
        return isMatch;
      })
    },
  notproducts(){
      return this.$store.state.products;
    },
    product(){
      return this.$store.state.product;
    },
  },
  methods:{
    addProduct(){
      let product = {
      title: this.title,
        img: this.img,
        thumbnail: this.thumbnail,
        price: this.price,
        color: this.color,
        description: this.description,
        quantity: this.quantity,
        category: this.category,
        sku: this.sku,
        available: this.available,
        
      };
      this.$store.dispatch("addProduct", product)
    }, 
    sortProducts(){
      this.$store.commit("sortProductsByTitle");
    }
  },
};
</script>

<style lang="scss">
.products-grid {
  display: flex;
  flex-wrap: wrap;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  overflow: scroll;
  padding: 4rem 0.5rem;
  justify-content: center;
  height: 100vh;
  position: absolute;
}
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  top: 50%;
  left: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  svg path,
  svg rect {
    fill: var(--button-bg);
  }
}
</style>
