<template>
  <div class="app-sidebar">
    <div class="sidebar-link">
    <router-link to="/cart" class="app-sidebar-link">
      <svg
        width="20"
        height="20"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sidebar-icons"
        id="cart-icon"
        @mouseover="hovercart = true"
    @mouseleave="hovercart = false"
     
      >
        <path
          class="sidebar-icons"
          d="M11.68 13L10.847 8H7.857C7.411 6.28 5.859 5 4 5C1.794 5 0 6.794 0 9C0 11.206 1.794 13 4 13C5.859 13 7.411 11.72 7.858 10H9.152L9.652 13H9.614L14.785 39.016C12.32 39.204 10.267 41.102 10.025 43.49C9.883 44.895 10.345 46.302 11.293 47.348C12.242 48.397 13.594 49 15 49H17C17 52.309 19.691 55 23 55C26.309 55 29 52.309 29 49H40C40 52.309 42.691 55 46 55C49.309 55 52 52.309 52 49H56C56.553 49 57 48.553 57 48C57 47.447 56.553 47 56 47H51.65C50.824 44.673 48.607 43 46 43C43.393 43 41.176 44.673 40.35 47H28.65C27.824 44.673 25.607 43 23 43C20.393 43 18.176 44.673 17.35 47H15C14.158 47 13.348 46.638 12.776 46.007C12.199 45.368 11.928 44.546 12.015 43.691C12.167 42.182 13.561 41.001 15.188 41.001H15.979C15.993 41.001 16.004 41.001 16.018 41.001H55.012C57.763 41 60 38.763 60 36.013V13H11.68ZM4 11C2.897 11 2 10.103 2 9C2 7.897 2.897 7 4 7C5.103 7 6 7.897 6 9C6 10.103 5.103 11 4 11ZM46 45C48.206 45 50 46.794 50 49C50 51.206 48.206 53 46 53C43.794 53 42 51.206 42 49C42 46.794 43.794 45 46 45ZM23 45C25.206 45 27 46.794 27 49C27 51.206 25.206 53 23 53C20.794 53 19 51.206 19 49C19 46.794 20.794 45 23 45ZM58 36.013C58 37.66 56.66 39 55.013 39H16.821L12.051 15H58V36.013Z"
          fill="black"
        />
      </svg>
    </router-link>
    <p id="settings-det" v-if="hovercart">cart</p>
    </div>
    <div class="sidebar-link">
    <router-link to="/products" class="app-sidebar-link">
      <svg
        width="20"
        height="20"
        viewBox="0 0 592 592"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sidebar-icons"
        id="products-icon"
        @mouseover="hoverproduct = true"
    @mouseleave="hoverproduct = false"
      >
        <g clip-path="url(#clip0_1_3)">
          <path
            class="sidebar-icons"
            d="M590.045 126.94L508.445 4.54C506.405 1.684 503.345 0.052002 499.877 0.052002H91.877C88.409 0.052002 85.349 1.684 83.309 4.54L1.70901 126.94C-0.534986 130.204 -0.534986 134.692 1.50501 138.16L287.105 586.96C288.941 589.816 292.205 591.652 295.673 591.652C299.141 591.652 302.405 589.816 304.241 586.96L589.841 138.16C592.289 134.692 592.289 130.408 590.045 126.94ZM300.977 137.752H448.877L300.977 552.076V137.752ZM300.977 127.552V20.452H490.901L452.549 127.552H300.977ZM290.777 127.552H139.205L100.853 20.452H290.777V127.552V127.552ZM290.777 137.752V552.076L142.877 137.752H290.777ZM268.133 518.824L25.577 137.752H131.861L268.133 518.824ZM459.689 137.752H565.973L323.621 518.824L459.689 137.752ZM565.769 127.552H463.361L499.061 27.592L565.769 127.552ZM92.693 27.592L128.393 127.552H25.985L92.693 27.592Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_3">
            <rect width="591.704" height="591.704" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </router-link>
    <p id="settings-det" v-if="hoverproduct">products</p>
    </div>
    <div class="sidebar-link">
    <router-link to="/collection" class="app-sidebar-link">
      <svg width="20" height="20" viewBox="0 0 436 436" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icons"
           @mouseover="hovercollection = true"
    @mouseleave="hovercollection = false">
<g clip-path="url(#clip0_44_2)">
<path d="M285.542 79.4733L286.094 78.9357L291.255 73.9117L291.266 73.9014L291.277 73.8917L300.931 65.5497C305.269 61.7994 307.706 56.3364 307.602 51.0689L307.602 51.0609L307.602 51.053L307.614 50.057L307.614 50.0554C307.684 45.4407 306.13 40.9627 303.254 37.4515L285.542 79.4733ZM285.542 79.4733L286.258 79.7585C356.108 107.578 402.464 175.161 402.458 250.996C402.458 352.718 319.707 435.469 217.985 435.469C116.263 435.469 33.512 352.718 33.512 250.996C33.512 175.161 79.8679 107.584 149.719 79.7655L150.435 79.4805L149.883 78.9429L144.471 73.6679L144.46 73.6573L144.448 73.6473L135.057 65.5505C130.725 61.8117 128.286 56.3452 128.368 50.5606C128.368 50.5601 128.368 50.5596 128.368 50.5591L128.386 49.6125L128.386 49.6028L128.386 49.5932C128.304 45.4499 129.848 40.965 132.735 37.4493L132.736 37.4491L136.99 32.2641L137.003 32.2476L137.015 32.2299L153.012 8.92303C156.631 3.65267 162.61 0.5 169.009 0.5H266.985C273.377 0.5 279.357 3.64679 282.981 8.92307L282.981 8.92318L299.277 32.6372L299.289 32.6555L299.304 32.6725L303.252 37.4499L285.542 79.4733ZM159.203 88.0178L158.978 87.7989L158.683 87.9061C90.2069 112.794 44.452 177.871 44.452 250.997C44.452 346.683 122.305 424.536 217.991 424.536C313.683 424.536 391.53 346.683 391.532 250.997C391.532 177.871 345.771 112.788 277.301 87.9061L277.006 87.7989L276.781 88.0178L235.138 128.569L235.137 128.569L235.127 128.58C234.654 129.042 233.775 129.902 231.357 130.658C228.895 131.428 224.833 132.091 217.992 132.091C211.148 132.091 207.085 131.427 204.622 130.658C202.209 129.905 201.328 129.049 200.854 128.588L200.84 128.575L200.839 128.574L159.203 88.0178Z" stroke="black"/>
</g>
<defs>
<clipPath id="clip0_44_2">
<rect width="435.969" height="435.969" fill="white"/>
</clipPath>
</defs>
</svg>

    </router-link>
    <p id="settings-det" v-if="hovercollection">collection</p>
    </div>
    <div class="sidebar-link">
      <router-link to="/profile" class="app-sidebar-link" name="settings">
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="sidebar-icons"
          id="settings-icon"
           @mouseover="hoverprofile = true"
    @mouseleave="hoverprofile = false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.8445 19.6618C4.15273 19.6618 1 19.0873 1 16.7865C1 14.4858 4.13273 12.3618 7.8445 12.3618C11.5364 12.3618 14.6891 14.4652 14.6891 16.766C14.6891 19.0658 11.5564 19.6618 7.8445 19.6618Z"
            stroke="#130F26"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-icons"
           
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.8372 9.1735C10.26 9.1735 12.2236 7.2099 12.2236 4.78718C12.2236 2.36445 10.26 0.3999 7.8372 0.3999C5.41452 0.3999 3.44998 2.36445 3.44998 4.78718C3.4418 7.20172 5.3918 9.1654 7.8063 9.1735C7.8172 9.1735 7.8272 9.1735 7.8372 9.1735Z"
            stroke="#130F26"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-icons"
          />
        </svg>
      </router-link>
      <p id="settings-det" v-if="hoverprofile">profile</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data () {
    return {
      hovercart: false,
      hoverproduct: false,
      hoverprofile: false,
      hovercollection: false,
      isActive: false,
    };
  },
  mounted() {
   
  },
  methods: {
toggleActive (){
  this.isActive = !this.isActive;
}
  },
};
</script>

<style lang="scss">
.sidebar-link {
  display: flex;
   flex-direction: row-reverse; 
   justify-content: center;
   align-items: baseline;
   gap: 0.2rem;
   transition: 0.5s;
  p {
font-style: italic;
  }
  & .active {
    background-color: rgb(131, 131, 131);
  }
 
}
 #settings-icon {
    path {
      stroke: var(--button-color);
    }
  }


</style>
