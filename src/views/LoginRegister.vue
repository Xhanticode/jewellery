<template>
  <div class="login-overlay">
    <LoginRegister id="login-form" />
    <div id="top-overlay"></div>
    <div id="bottom-overlay"></div>

    <!-- Register -->
    <div class="register">
      <div>
        <form @submit.prevent="submit">
          <div>
            <label for="username">Username:</label>
            <input type="text" name="username" v-model="form.username" />
          </div>
          <div>
            <label for="full_name">Full Name:</label>
            <input type="text" name="full_name" v-model="form.full_name" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" v-model="form.password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <p v-if="showError" id="error">Username already exists</p>
    </div>
  </div>
</template>

<script>
import LoginRegister from "@/components/LoginRegister.vue";

export default {
  components: { LoginRegister },
};
</script>
