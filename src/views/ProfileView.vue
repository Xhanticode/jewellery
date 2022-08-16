<template>
  <div class="app-container">
    <div class="app-content">
      <SideBar />
      <div class="products-section">
        <div class="products-section-header" d-flex style="gap: 1rem">
          <p>My Profile</p>
        </div>
        <div
          class="profile-content"
          v-for="user of user"
          :key="user.id"
          user="user"
        >
          <div class="image-side">
            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
            <span>{{ user.name }}</span>
          </div>
          <div class="info-side">
            <h4>General</h4>
            <input type="text" :placeholder="user.fullname" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Date Of Birth" />
            <input type="email" :placeholder="user.mail" />
            <input type="text" placeholder="Bio" />
            <button>Logout</button>
          </div>
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
      user: [],
    };
  },
  mounted() {
    axios.get("https://xcjewels.herokuapp.com/users").then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
    // axios.get("https://xcjewels.herokuapp.com/users/" + this.$route.params.id).then((response) => {
    //     console.log(response.data);
    //     this.user = response.data;
    //   });
  },
};
</script>
<style lang="scss">
.profile-content {
  display: flex;
  gap: 2rem;
}
.image-side {
  border-right: 0.2rem solid var(--message-box-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-right: 4rem;
  padding-left: 2rem;
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
  }
  button {
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
  }
}
</style>
