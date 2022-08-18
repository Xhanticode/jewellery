<template>
  <div class="login-overlay">
    <LoginRegister id="login-form" />
  </div>
</template>

<script>
import LoginRegister from "@/components/Login.vue";

export default {
  components: { LoginRegister },
};
</script>
