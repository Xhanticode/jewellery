<template>
  <div class="landing-container">
    <div v-if="!user" class="login-overlay">
      <Login id="login-form" />
      <div id="top-overlay"></div>
      <div id="bottom-overlay"></div>
    </div>
    <div class="moving-products-grid">
      <div class="cover-text">
        <h1>Spring/Summer collection '22</h1>
        <p>
          browse our luxury spring/summer 2022 capsule collection available only
          at selected stores.
          <router-link to="/collection"><span
            ><svg
              width="20"
              height="20"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.3419 44.6586L34.9384 43.2562L50.1995 27.9928H0V26.0072H50.2021L34.9384 10.7465L36.3419 9.34138L54 26.9995L36.3419 44.6586Z"
                fill="#010002"
              />
            </svg>
          </span></router-link>
        </p>
      </div>
      <div class="gallery">
        <div class="col">
          <!-- <div
            class="image"
            v-for="product in 3"
            :key="product.id"
            :product="product"
          >
            <img :src="product.img" alt="" />
          </div> -->
          <div class="image">
            <img src="https://i.postimg.cc/d1BGQ8h8/IMG-4790.jpg" alt="" />
          </div>
          <div class="image">
            <img src="https://i.postimg.cc/9X15LcvR/IMG-4774.jpg" alt="" />
          </div>
          <div class="image">
            <img src="https://postimg.cc/D8w1X0RS" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="image">
            <img src="https://i.postimg.cc/WbXjmtkX/IMG-4789.jpg" alt="" />
          </div>
          <div class="image">
            <img src="https://postimg.cc/FksGzZjR" alt="" />
          </div>
          <div class="image">
            <img src="https://postimg.cc/k2kjsWd1" alt="" />
          </div>
        </div>
        <div class="col">
          <!-- <div
            class="image"
            v-for="product in 3"
            :key="product.id"
            :product="product"
          >
            <img :src="product.img" alt="" />
          </div> -->
          <div class="image">
            <img src="https://i.postimg.cc/d1BGQ8h8/IMG-4790.jpg" alt="" />
          </div>
          <div class="image">
            <img src="https://i.postimg.cc/9X15LcvR/IMG-4774.jpg" alt="" />
          </div>
          <div class="image">
            <img src="https://postimg.cc/D8w1X0RS" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    Login,
    Register,
},
computed: {
  user() {
      return this.$store.state.user;
    },
},
  mounted() {
    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    // user() {
    //   return this.$store.state.user;
    // }

    // if(user) {function overlayAnimation() {
    //   let loginOverlay = document.querySelector(".login-overlay");
    //   let topOverlay = document.querySelector("#top-overlay");
    //   let bottomOverlay = document.querySelector("#bottom-overlay");
    //   let loginButton = document.getElementById("login-button");
    //   let loginForm = document.getElementById("login-form");
    //   let sideBar = document.querySelector(".app-sidebar");
    //   loginButton.addEventListener("click", hideOverlay);
    //   function hideOverlay() {
    //     loginOverlay.style.display = "none";
    //     loginOverlay.style.zIndex = "-5000";
    //     topOverlay.style.opacity = "0";
    //     topOverlay.style.transform = "translateY(-1000)";
    //     bottomOverlay.style.opacity = "0";
    //     bottomOverlay.style.transform = "translateY(1000)";
    //     loginForm.style.transform = "translateX(-1000), scale(0)";
    //     loginForm.style.opacity = "0";
    //     sideBar.style.zIndex = "5000";
    //   }
    // }
    // overlayAnimation();}

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;
    const cols = gsap.utils.toArray(".col");

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction == "+=") {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }

              return y;
            }),
          },
        });
      });
    });

    ScrollTrigger.create({
      trigger: "section",
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });
  },
};
</script>

<style lang="scss">
#login-form {
  z-index: 1000;
  transition: 3s;
}
.landing-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.login-overlay {
  width: 100vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transition: 2s;
}
#top-overlay {
  top: 0;
  width: 100%;
  height: 50%;
  position: absolute;
  background: black;
  opacity: 0.9;
  transition: 4s;
}
#bottom-overlay {
  bottom: 0;
  width: 100%;
  height: 50%;
  position: absolute;
  background: black;
  opacity: 0.9;
  transition: 4s;
}
iframe {
  border: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
section {
  padding: 10vw;
  height: 100%;
  min-height: 500vh;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cover-text {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2000;
  width: 21.5rem;
  h1 {
    white-space: initial;
    word-wrap: break-word;
  }
  p {
    font-size: 1.6rem;
    width: 100%;
    text-align: justify;
    position: relative;
    span {
      right: 0;
      position: absolute;
    }
  }
}
* {
  box-sizing: border-box;
}

.gallery {
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  overflow: visible;
  transform: rotate(45deg);
}
.app-sidebar {
  position: absolute;
  top: 30%;
  right: 2rem;
  z-index: 30;
}
@media (max-width: 768px) {
  .gallery {
    width: 160%;
  }
}

.col {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  justify-self: flex-start;
}

.col:nth-child(2) {
  align-self: flex-end;
  justify-self: flex-end;
}

.image {
  width: 100%;
  padding: 1rem;
}

img {
  transition: 0.3s ease-out;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
}
.moving-products-grid {
  position: relative;
}
</style>
