<template>
  <div class="app-header">
    <div class="app-header-left">
      <p class="app-name">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 15.3C21.6 19.7735 17.9735 23.4 13.5 23.4C9.02646 23.4 5.4 19.7735 5.4 15.3C5.4 11.9731 7.40952 9.12078 10.2778 7.8741L10.5948 8.1207L11.9878 9.20412C9.24588 9.88596 7.2 12.35 7.2 15.3C7.2 18.7738 10.0262 21.6 13.5 21.6C16.9738 21.6 19.8 18.7738 19.8 15.3C19.8 12.35 17.7541 9.88596 15.0122 9.20412L16.7222 7.87428C19.5905 9.12096 21.6 11.9731 21.6 15.3ZM13.5 8.1L18 4.5999L16.2 1.8H10.8L9 4.5999L11.7 6.69996L13.5 8.1Z"
            fill="black"
          />
        </svg>
        Jewels
      </p>
      <!-- <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div> -->
    </div>
    <div class="app-header-right">
      <button class="mode-switch" title="Switch Theme" @click="changeTheme">
        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 44C21.732 44 28 37.732 28 30C28 22.268 21.732 16 14 16C6.26801 16 0 22.268 0 30C0 37.732 6.26801 44 14 44Z"
            fill="black"
          />
          <path
            d="M53 23H30.588C30.861 23.646 31.085 24.318 31.282 25H53C55.757 25 58 27.243 58 30C58 32.757 55.757 35 53 35H31.281C31.084 35.682 30.86 36.354 30.587 37H53C56.86 37 60 33.859 60 30C60 26.141 56.86 23 53 23Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        class="profile-btn"
        @click="
          $router.push({ name: 'profile', params: { id: $route.params.id } })
        "
        v-for="user of users"
        :key="user.id"
        :user="user"
      >
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span v-if="isLoggedIn">{{ user.name }}</span>
        <span v-else>
          <router-link to="/login">Login</router-link>
          <router-link>Register</router-link>
        </span>
      </button>
    </div>
    <button class="messages-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-message-circle"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "NavigationBar",
  props: {
    msg: String,
  },
  data() {
    return {
      users: [],
      isActive: false,
      dark: false,
    };
  },
  mounted() {
    axios.get("https://xcjewels.herokuapp.com/users").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    changeTheme() {
      let themeSwitch = document.querySelector(".mode-switch");
      themeSwitch.classList.toggle("active");
      document.documentElement.classList.toggle("dark");
    },
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style lang="scss">
.app {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: "DM Sans", sans-serif;
    }
  }

  &-content {
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 16px 24px 24px 0;
    position: relative;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 16px 24px;
    position: relative;
    background: transparent;

    &-left,
    &-right {
      display: flex;
      align-items: center;
    }

    &-left {
      flex-grow: 1;
    }

    &-right button {
      margin-left: 10px;
    }
  }

  &-icon {
    width: 26px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--main-color);
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--main-color);
      left: 50%;
      transform: translatex(-50%);
    }

    &:before {
      top: -6px;
    }
    &:after {
      bottom: -6px;
    }
  }

  &-name {
    color: var(--main-color);
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
    font-family: "Aboreto", cursive;
  }
}

.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  color: var(--light-font);
  overflow: hidden;

  .dark & {
    box-shadow: none;
  }
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);
  opacity: 0.8;
}

.add-btn {
  color: #fff;
  background-color: var(--button-bg);
  padding: 0;
  border: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn {
  color: var(--main-color);
  padding: 0;
  border: 0;
  background-color: transparent;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-btn {
  padding: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-left: 2px solid #ddd;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
  }

  span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
}

.page-content {
  flex: 1;
  width: 100%;
}
</style>
