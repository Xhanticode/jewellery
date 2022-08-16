<template>
  <div>
    <div v-if="product" class="single-product-container">
      <div class="single-product" v-for="product of product" :key="product.id" product="product">
        <img :src="product.img" alt="" class="single-product-img" />
        <div class="single-product-info">
          <h2>{{ product.title }}</h2>
          <h3>{{ product.price }}</h3>
          <h5>{{ product.color }}</h5>
          <p>{{ product.description }}</p>
          <div>
            <button><svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 17.5L54.5 54.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54.5 17.5L17.5 54.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            <button><svg
        width="20"
        height="20"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sidebar-icons"
        id="cart-icon"
      >
        <path
          class="sidebar-icons"
          d="M11.68 13L10.847 8H7.857C7.411 6.28 5.859 5 4 5C1.794 5 0 6.794 0 9C0 11.206 1.794 13 4 13C5.859 13 7.411 11.72 7.858 10H9.152L9.652 13H9.614L14.785 39.016C12.32 39.204 10.267 41.102 10.025 43.49C9.883 44.895 10.345 46.302 11.293 47.348C12.242 48.397 13.594 49 15 49H17C17 52.309 19.691 55 23 55C26.309 55 29 52.309 29 49H40C40 52.309 42.691 55 46 55C49.309 55 52 52.309 52 49H56C56.553 49 57 48.553 57 48C57 47.447 56.553 47 56 47H51.65C50.824 44.673 48.607 43 46 43C43.393 43 41.176 44.673 40.35 47H28.65C27.824 44.673 25.607 43 23 43C20.393 43 18.176 44.673 17.35 47H15C14.158 47 13.348 46.638 12.776 46.007C12.199 45.368 11.928 44.546 12.015 43.691C12.167 42.182 13.561 41.001 15.188 41.001H15.979C15.993 41.001 16.004 41.001 16.018 41.001H55.012C57.763 41 60 38.763 60 36.013V13H11.68ZM4 11C2.897 11 2 10.103 2 9C2 7.897 2.897 7 4 7C5.103 7 6 7.897 6 9C6 10.103 5.103 11 4 11ZM46 45C48.206 45 50 46.794 50 49C50 51.206 48.206 53 46 53C43.794 53 42 51.206 42 49C42 46.794 43.794 45 46 45ZM23 45C25.206 45 27 46.794 27 49C27 51.206 25.206 53 23 53C20.794 53 19 51.206 19 49C19 46.794 20.794 45 23 45ZM58 36.013C58 37.66 56.66 39 55.013 39H16.821L12.051 15H58V36.013Z"
          fill="black"
        />
      </svg></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      product: [],
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
    axios
      .get("https://xcjewels.herokuapp.com/products/" + this.$route.params.id)
      .then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    // document
    //   .querySelector(".product-card")
    //   .addEventListener(
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
.single-product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.single-product {
  width: 80%;
    display: flex;
    gap: 1.5rem;
}
.single-product-info {
  width: 60%;
}
.single-product-img {
  width: 20rem;
  height: 26rem;
}
</style>
