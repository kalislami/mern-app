FROM node:18.19

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT npm run dev