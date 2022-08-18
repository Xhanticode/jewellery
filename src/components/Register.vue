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
   
  }
};
</script>

<style lang="scss">
</style>
