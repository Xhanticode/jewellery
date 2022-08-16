<template>
  <div>
    <!-- <form @submit.prevent="submit" class="login-form">
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="form.password"
      />
      <button type="submit" id="login-button">Login</button>
      <p>
        Don't have an account?
        <router-link to=".register">register</router-link>
      </p>
    </form>
    <p v-if="showError">Username or Password is incorrect</p>
    <div v-if="user">welcome {{ user.fullname }}</div> -->
  </div>
</template>

<!-- <script>
import { mapActions } from "vuex";
export default {
  name: "LoginRegister",

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        username: "",
        full_name: "",
      },
      showError: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    ...mapActions(["Register"]),
    async submits() {
      try {
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        // this.$router.push("/products");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script> -->

<style lang="scss">
.login-form {
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
