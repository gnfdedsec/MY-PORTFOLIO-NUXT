# ใช้ Node.js เวอร์ชันล่าสุดเป็นฐาน
FROM node:lts-alpine

# ตั้งค่าไดเรกทอรีทำงาน
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดของโปรเจคทั้งหมดไปยังไดเรกทอรีทำงาน
COPY . .

# สร้าง production build
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# รันแอพ
CMD [ "node", ".output/server/index.mjs" ]