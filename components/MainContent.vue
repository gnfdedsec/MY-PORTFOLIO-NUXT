<template>
    <main class="flex flex-col lg:flex-row justify-between px-10 bg-gray-800 text-white min-h-[500px] rounded-xl border-4 border-green-500">
      <!-- คอลัมน์ขวา (แสดงก่อนบน iPad และมือถือ) -->
      <div class="lg:order-3 lg:flex-1 flex flex-col items-center pt-10 lg:pt-20 lg:pr-10">
        <img
          src="@/assets/img/profile.jpg"
          alt="Profile Image"
          class="rounded-full w-48 h-48 object-cover bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_2px] bg-no-repeat bg-bottom mb-4"
        >
        <div class="flex items-center">
          <Icon icon="ph:dev-to-logo-thin" class="text-5xl mr-2" />
          <div>
            <p>Examinee ID : 67310</p>
            <p class="text-green-500">MR.SURAWUT SUPON (LEK)</p>
          </div>
        </div>
      </div>

      <!-- คอลัมน์ซ้าย -->
      <div class="lg:order-1 pt-10 lg:pt-20 px-4 lg:px-10 text-center lg:text-left">
        <h2 class="text-gray-400 text-base lg:text-lg hidden lg:block">Hi !</h2>
        <h1 class="text-3xl lg:text-4xl font-bold">
          I'm <span class="bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">ALEX TH</span>
        </h1>
        <p class="text-base lg:text-lg mt-2 lg:mt-3">Web Developer / Frontend / Backend / Teaster</p>
        <div class="mt-4 lg:mt-5 space-y-2 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <button class="bg-green-500 text-white py-1.5 px-3 lg:py-2 lg:px-4 rounded text-sm lg:text-base">Hire Me</button>
          <button class="bg-gray-700 text-white py-1.5 px-3 lg:py-2 lg:px-4 rounded text-sm lg:text-base">Portfolio</button>
          <p class="text-base lg:text-lg mt-2 lg:mt-0">
            <span class="border border-green-600 rounded-full px-3 lg:px-4 text-xs lg:text-sm text-green-500 py-0.5">
              Let's get to know me
            </span>
          </p>
        </div>
        <div class="wrapper mt-8 lg:mt-10 rounded border border-green-500 p-3 lg:p-4">
          <div class="typing-container">
            <span class="typing text-sm lg:text-base">{{ currentText }}</span>
          </div>
        </div>
      </div>

      <!-- คอลัมน์กลาง -->
      <div class="lg:order-2 lg:flex-1">
        <!-- เนื้อหาคอลัมน์กลาง (ถ้ามี) -->
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texts: [
          "Hi everyone !  ",
          "This site i going to show you, ",
          "A part of my works.",
          "So , Let's check out my works"
        ],
        currentText: '',
        currentIndex: 0
      }
    },
    mounted() {
      this.typeText()
    },
    methods: {
      typeText() {
        const text = this.texts[this.currentIndex]
        let charIndex = 0
  
        const typingInterval = setInterval(() => {
          if (charIndex < text.length) {
            this.currentText += text.charAt(charIndex)
            charIndex++
          } else {
            clearInterval(typingInterval)
            if (this.currentIndex < this.texts.length - 1) {
              setTimeout(() => {
                this.eraseText()
              }, 2000)
            }
          }
        }, 100)
      },
      eraseText() {
        const erasingInterval = setInterval(() => {
          if (this.currentText.length > 0) {
            this.currentText = this.currentText.slice(0, -1)
          } else {
            clearInterval(erasingInterval)
            this.currentIndex++
            setTimeout(() => {
              this.typeText()
            }, 500)
          }
        }, 50)
      }
    }
  }
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .typing-container {
    font-family: monospace;
    font-size: 18px;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
  
  .typing {
    border-right: 2px solid white;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
  </style>