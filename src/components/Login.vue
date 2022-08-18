<template>
  <div>
    <!-- Login Form  -->
    <form @submit.prevent="login" class="login-form">
      <input required v-model="email" name="email" type="email" placeholder="Email" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        name="email"
      />
      <button type="submit" id="login-button" value="Login">Login</button>
      <p>
        Don't have an account?
        <button @click="toggleForm" id="register-button">register</button>
      </p>
      <div v-if="user">Welcome {{ user.fullname }}</div>
    </form>

    <!-- Register Form -->
     <form @submit.prevent="submit" class="register-form">
          <div>
            <label for="fullname">Full Name:</label>
            <input type="text" name="fullname" required v-model="fullname" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" name="email" required v-model="email" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" required v-model="password" />
          </div>
          <div>
            <label for="password">Phone:</label>
            <input type="text" name="phone" required v-model="phone" />
          </div>
          <button type="submit" value="Register">Submit</button>
          <p>
        have an account?
        <button @click="toggleForm" id="register-button">login</button>
      </p>
      <div v-if="user">
      Welcome {{ user.fullname }}, Your sign up was successsul
    </div>
        </form>
        
    
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
      fullname: "",
      email: "",
      password: "",
      phone: "",
      userRole: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      
    },
     register() {
      let user = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        userRole: this.userRole,
      };
      this.$store.dispatch("register", user);
    },
    toggleForm() {
        let loginForm = document.querySelector('.login-form')
        let registerForm = document.querySelector('.register-form')
        if (loginForm.style.display === "flex") {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  } else {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  };
    },
  },
};
</script>

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
.register-form {
  display: none;
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
#register-button {
  border: none;
}
</style>
