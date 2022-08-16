<template>
  <div>
    <SideBar />
    <div v-if="product">
      <div v-for="product of product" :key="product.id" product="product">
        <img :src="product.img" alt="" class="single-product-img" />
        <div>
          <h2>{{ product.title }}</h2>
          <h3>{{ product.price }}</h3>
          <h5>{{ product.color }}</h5>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";

export default {
  components: {
    SideBar,
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
    document
      .querySelector(".product-card")
      .addEventListener(
        "mouseOver",
        (document.querySelector("product-info").style.opacity = "1")
      );
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
.single-product-img {
  width: 20rem;
  height: 26rem;
}
</style>
