FROM node:10.16.0-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install tailwindcss 
COPY . . 
RUN npm run build

FROM nginx 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html