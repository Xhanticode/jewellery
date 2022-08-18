<template>
<router-link  :to="{ name: 'product', params: { id: product.id } }">
  <div class="product-card">
    <img
      :src="product.img"
      alt="Jewellery"
      class="product-image"
    />
    <div class="product-info">
      <p>{{ product.title }}</p>
      <p>Price R{{ product.price }}</p>
    </div>

    <router-link :to="{ name: 'product', params: { id: product.id } }"
      ><button>
        <svg
          width="15"
          height="15"
          viewBox="0 0 210 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 80C11.215 80 0 91.215 0 105C0 118.785 11.215 130 25 130C38.785 130 50 118.785 50 105C50 91.215 38.785 80 25 80Z"
            fill="black"
          />
          <path
            d="M105 80C91.215 80 80 91.215 80 105C80 118.785 91.215 130 105 130C118.785 130 130 118.785 130 105C130 91.215 118.785 80 105 80Z"
            fill="black"
          />
          <path
            d="M185 80C171.215 80 160 91.215 160 105C160 118.785 171.215 130 185 130C198.785 130 210 118.785 210 105C210 91.215 198.785 80 185 80Z"
            fill="black"
          />
        </svg></button
    ></router-link>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style lang="scss">
.product-card {
  width: 22rem;
  height: 30rem;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  position: relative;
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product-info {
    opacity: 0;
    transition: 3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    text-align: center;
  }
  button {
    background: transparent;
    border: none;
  }
}
</style>
