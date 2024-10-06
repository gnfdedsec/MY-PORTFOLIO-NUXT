<template>
    <main class="flex flex-col md:flex-row  justify-between  px-10 bg-gray-800 text-white h-[500px] rounded-xl border-4 border-green-500 ">
      <!-- Left column -->
      <div class="pt-20 px-10">
        <h2 class="text-gray-400 text-lg">Hi !</h2>
        <h1 class="text-4xl font-bold">
          I'm <span class="bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">ALEX TH</span>
        </h1>
        <p class="text-lg mt-3">Web Developer / Frontend / Backend / Teaster</p>
        <div class="mt-5 space-x-3">
          <button class="bg-green-500 text-white py-2 px-4 rounded">Hire Me</button>
          <button class="bg-gray-700 text-white py-2 px-4 rounded">Portfolio</button>
          <p class="text-lg mt-2">
            <span class="border border-green-600 rounded-full px-4 text-sm text-green-500 py-0.5 ">
              Let's get to know me
            </span>
          </p>
        </div>
        <div class="wrapper mt-10 rounded border border-green-500 p-4">
          <div class="typing-container">
            <span class="typing">{{ currentText }}</span>
          </div>
        </div>
      </div>
  
      <!-- Middle column -->
      <div class="flex-1">
     
      </div>
  
      <!-- Right column -->
      <div class="flex-1 flex flex-col items-center pt-20 pr-10  mt- md:mt-0" >
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
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texts: [
          "Hi everyone !  ",
          "This site are going to show you, ",
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
    font-size: 24px;
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