<template>
    <main class="flex flex-col md:flex-row items-center justify-between py-20 px-10 bg-gray-800 text-white">
      <div>
        <h2 class="text-gray-400 text-lg">Hi !</h2>
        <h1 class="text-4xl font-bold">I'm <span class="bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">ALEX TH</span></h1>
        <p class="text-lg mt-3"> Web Developer / Frontend / Backend /Teaster</p>
        <div class="mt-5 space-x-3">
          <button class="bg-green-500 text-white py-2 px-4 rounded">Hire Me</button>
          <button class="bg-gray-700 text-white py-2 px-4 rounded">Portfolio</button>
          <p class="text-orange-400 mb-2">
           
          </p>
          <p class="text-lg">
 
            <span class="border border-green-600 rounded-full px-4 text-sm text-green-500 py-0.5">
                Let's get to know me
   </span>
  </p>
        </div>
        <div class="wrapper">
          <div class="typing-container">
            <span class="typing">{{ currentText }}</span>
          </div>
        </div>
      </div>
      <div class="mt-10 md:mt-0">
        <img src="@/assets/img/profile.jpg" alt="Profile Image" class="rounded-full w-48 h-48 object-cover bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texts: ["Hi everyone!  ","This site are going to show you ","A part of my work.", "So , are you ready ?"], // ข้อความที่ต้องการพิมพ์
        currentText: '',
        currentIndex: 0
      }
    },
    mounted() {
      this.typeText() // เริ่มการพิมพ์เมื่อคอมโพเนนต์ถูก mount
    },
    methods: {
      typeText() {
        const text = this.texts[this.currentIndex] // ข้อความปัจจุบันที่จะพิมพ์
        let charIndex = 0
  
        const typingInterval = setInterval(() => {
          if (charIndex < text.length) {
            this.currentText += text.charAt(charIndex)
            charIndex++
          } else {
            clearInterval(typingInterval)
            // ตรวจสอบว่าถ้าเป็นข้อความสุดท้าย จะไม่ลบข้อความออก
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
            this.currentText = this.currentText.slice(0, -1) // ลบข้อความทีละตัวอักษร
          } else {
            clearInterval(erasingInterval)
            this.currentIndex++ // ไปที่ข้อความถัดไป
            setTimeout(() => {
              this.typeText() // เริ่มพิมพ์ข้อความถัดไป
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
  }
  
  @keyframes blink {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
  
  .typing {
    animation: blink 1s step-end infinite;
  }
  </style>
  