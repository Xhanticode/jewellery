<template>
  <div class="app-container">
    <div class="app-content">

      <div class="products-section-header" d-flex style="gap: 1rem">
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Search" />
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
        <!-- <div class="filter-wrapper">
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="filter"
          ></b-form-select>
        </div> -->
      </div>
      <div class="products-grid" v-if="products.length">
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
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      selected: null,
      options: [
        { value: null, text: "Sort" },
        { value: "a", text: "Price" },
        { value: "b", text: "Category" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  mounted() {
    axios.get("https://xcjewels.herokuapp.com/products").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
    // document.querySelector(".product-card").addEventListener(
    //     "mouseOver",
    //     (document.querySelector("product-info").style.opacity = "1")
    //   );
    //   this.$store.dispatch("getProducts");
    //   this.$store.dispatch("getUser");
    // },
    // computed: {
    //   // products() {
    //   //   return this.$store.state.products;
    //   // },
    //   user() {
    //     return this.$store.state.user;
    //   },
    //   idArray() {
    //     return this.products.map((product) => product.id);
    //   },
    // },
    // methods: {
    //   sortPrice() {
    //     this.$store.commit("sortProductsByPrice");
    //   },
    // },
    // created() {
    //   // GET request using fetch with error handling
    //   fetch("https://xcjewels.herokuapp.com/products")
    //     .then(async (response) => {
    //       const data = await response.json();
    //       console.log(data);

    //       // check for error response
    //       if (!response.ok) {
    //         // get error message from body or default to response statusText
    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //       }

    //       this.totalVuePackages = data.total;
    //     })
    //     .then((data) => (this.products = data));
    //   console.log("this");
    //   console.log("products").catch((error) => {
    //     this.errorMessage = error;
    //     console.error("There was an error!", error);
    //   });
    // },
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
