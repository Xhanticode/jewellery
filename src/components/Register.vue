<template>
  <div>
    <form @submit.prevent="register" class="login-form">
      <input required v-model="email" name="user-name" type="email" placeholder="Email" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        name="user-name"
      />
      <button type="submit" id="login-button" value="Register">Register</button>
      <p>
        Have an account?
        <button to=".register" @click="showLogin">Login</button>
      </p>
    </form>
    <div v-if="user"><Login /></div>
    <!-- <p v-if="showError">Username or Password is incorrect</p> -->
    
  </div>
</template>

<script>
export default {
  props: ['users'],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  mounted() {
    // function showLogin() {
    //     document.querySelector('.login-form').style.display= "none";
    //     document.querySelector('.register-form').style.display= "block";
    // }
  }
};
</script>

<style lang="scss">
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  background: black;
  padding: 2rem;
  width: 20rem;
  height: 26rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 5px 16px 5px #3f3f3f;
  box-shadow: 5px 5px 16px 5px #3f3f3f;
  font-family: var(--p-font);
  opacity: 0.5;
  input {
    border: none;
    border-bottom: 0.05rem solid white;
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
    color: white;
    border: 0.05rem solid white;
    border-radius: 0.2rem;
    font-family: var(--p-font);
  }
  p {
    margin-inline: auto;
    a {
      color: white;
    }
  }
}
</style>
