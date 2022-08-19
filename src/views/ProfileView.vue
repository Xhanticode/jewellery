<template>
  <div class="app-container">
    <div class="app-content">
      <div class="profile-section">
    <div class="profile-content">
          <div v-if="user" class="image-side">
            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
            <span>{{ user.name }}</span>
          </div>
          <div v-if="user" class="info-side">
            <h4>General</h4>
            <input type="text" :placeholder="user.fullname" />
            <input type="password" :placeholder="user.password" />
            <input type="text" :placeholder="user.phone" />
            <input type="email" :placeholder="user.email" />
            <input type="text" placeholder="Bio" />
            <button>Logout</button>
          </div>
          <div v-if="user" class="cart-side">
            <h4>Cart</h4>
            <p>Your cart is empty. <router-link to="/products">Shop now!</router-link></p>
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
      // user: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
};
</script>
<style lang="scss">
.profile-section {
    //   display: flex;
    // flex-direction: column;
    // gap: 6rem;
}
.profile-content {
  display: flex;
  gap: 2rem;
  width: 100vw;
    justify-content: center;
        padding-right: 16rem;
        margin-top: 8rem;
}
.image-side {
  border-right: 0.2rem solid var(--message-box-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-right: 4rem;
  img {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
}
.info-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    border: none;
    border-bottom: 0.05rem solid var(--secondary-color);
    background: transparent;
    color: white;
    font-family: var(--p-font);
    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.05rem solid white;
      background: transparent;
    }
  }
    button {
      padding: 0.2rem;
      width: 6rem;
      align-self: center;
      background-color: transparent;
      color: var(--button-color);
      border: 0.05rem solid var(--button-border-color);
      border-radius: 0.2rem;
      font-family: var(--p-font);
    }
}
.cart-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
  a {
    color: main color;
    text-decoration: none;
  }
  }
</style>
