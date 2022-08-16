<template>
  <div class="project-box-wrapper">
    <div class="project-box" style="background-color: #fee4cb">
      <div class="project-box-header">
        <span>December 10, 2020</span>
        <div class="more-wrapper">
          <button class="project-btn-more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>
      <div class="project-box-content-header">
        <p class="box-content-header">{{ header }}</p>
        <p class="box-content-subheader">Prototyping</p>
      </div>
      <div class="box-progress-wrapper">
        <p class="box-progress-header">progress</p>
        <div class="box-progress-bar">
          <span
            class="box-progress"
            style="width: 60%; background-color: #ff942e"
          ></span>
        </div>
        <p class="box-progress-percentage">60%</p>
      </div>
      <div class="project-box-footer">
        <div class="participants">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt="participant"
          />
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="participant"
          />
          <button class="add-participant" style="color: #ff942e">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
        <div class="days-left" style="color: #ff942e">2 Days Left</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  data() {
    return {
      dashboard: [
        {
          id: 1,
          date: "12 March",
          header: "Sales",
          subheader: "",
          percentage: "60%",
        },
        {
          id: 2,
          date: "12 March",
          header: "Cost of Sales",
          subheader: "",
          percentage: "30%",
        },
        {
          id: 3,
          date: "12 March",
          header: "Profit",
          subheader: "",
          percentage: "80",
        },
        {
          id: 4,
          date: "12 March",
          header: "Revenue",
          subheader: "",
          percentage: "100",
        },
        {
          id: 5,
          date: "12 March",
          header: "Inventory",
          subheader: "",
          percentage: "50%",
        },
        {
          id: 6,
          date: "12 March",
          header: "Orders",
          subheader: "",
          percentage: "20",
        },
        {
          id: 7,
          date: "12 March",
          header: "Vat",
          subheader: "",
          percentage: "15%",
        },
      ],
    };
  },
};
</script>

<style lang="sass">

//     // products

//     .project-box-wrapper {
//       width: 33.3%;
//     }
//     .project-box {
//       display: flex;
//       border-radius: 10px;
//       position: relative;
//       > * {
//         margin-right: 24px;
//       }
//     }

//     .more-wrapper {
//       position: absolute;
//       right: 16px;
//       top: 16px;
//     }

//     .project-box-content-header {
//       order: 1;
//       max-width: 120px;
//     }

//     .project-box-header {
//       order: 2;
//     }

//     .project-box-footer {
//       order: 3;
//       padding-top: 0;
//       flex-direction: column;
//       justify-content: flex-start;
//     }

//     .project-box-footer:after {
//       display: none;
//     }

//     .participants {
//       margin-bottom: 8px;
//     }

//     .project-box-content-header p {
//       text-align: left;
//       overflow: hidden;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//     }

//     .project-box-header > span {
//       position: absolute;
//       bottom: 16px;
//       left: 16px;
//       font-size: 12px;
//     }

//     .box-progress-wrapper {
//       order: 3;
//       flex: 1;
//     }

// .project-box {
//   --main-color-card: #dbf6fd;
//   border-radius: 30px;
//   padding: 16px;
//   background-color: var(--main-color-card);

//   &-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 16px;
//     color: var(--main-color);

//     span {
//       color: #4a4a4a;
//       opacity: 0.7;
//       font-size: 14px;
//       line-height: 16px;
//     }
//   }

//   &-content-header {
//     text-align: center;
//     margin-bottom: 16px;

//     p {
//       margin: 0;
//     }
//   }

//   &-wrapper {
//     padding: 8px;
//     transition: 0.2s;
//   }
// }

// .project-btn-more {
//   padding: 0;
//   height: 14px;
//   width: 24px;
//   height: 24px;
//   position: relative;
//   background-color: transparent;
//   border: none;
//   flex-shrink: 0;

//   /*&:after, &:before {
//     content: '';
//     position: absolute;
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background-color: var(--main-color);
//     opacity: .8;
//     left: 50%;
//     transform: translatex(-50%);
//   }

//   &:before { top: 0;}
//   &:after { bottom: 0; }*/
// }

// .more-wrapper {
//   position: relative;
// }

// .box-content-header {
//   font-size: 16px;
//   line-height: 24px;
//   font-weight: 700;
//   opacity: 0.7;
// }

// .box-content-subheader {
//   font-size: 14px;
//   line-height: 24px;
//   opacity: 0.7;
// }

// .box-progress {
//   display: block;
//   height: 4px;
//   border-radius: 6px;

//   &-bar {
//     width: 100%;
//     height: 4px;
//     border-radius: 6px;
//     overflow: hidden;
//     background-color: #fff;
//     margin: 8px 0;
//   }

//   &-header {
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 16px;
//     margin: 0;
//   }

//   &-wrapper {
//   }

//   &-percentage {
//     text-align: right;
//     margin: 0;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 16px;
//   }
// }

// .project-box-footer {
//   display: flex;
//   justify-content: space-between;
//   padding-top: 16px;
//   position: relative;

//   &:after {
//     content: "";
//     position: absolute;
//     background-color: rgba(255, 255, 255, 0.6);
//     width: calc(100% + 32px);
//     top: 0;
//     left: -16px;
//     height: 1px;
//   }
// }

// .participants {
//   display: flex;
//   align-items: center;

//   img {
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     overflow: hidden;
//     object-fit: cover;

//     &:not(:first-child) {
//       margin-left: -8px;
//     }
//   }
// }

// .add-participant {
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: none;
//   background-color: rgba(255, 255, 255, 0.6);
//   margin-left: 6px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
// }

// .days-left {
//   background-color: rgba(255, 255, 255, 0.6);
//   font-size: 12px;
//   border-radius: 20px;
//   flex-shrink: 0;
//   padding: 6px 16px;
//   font-weight: 700;
// }
</style>
