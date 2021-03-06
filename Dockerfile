# Setting the base image for our container
FROM node:alpine as builder

# Setting the working directory
WORKDIR '/app'

# Installing react app dependencies
COPY ./package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1
RUN npm install tailwindcss 

# Add a copy to the root of the app
COPY . . 

# Start the build
RUN npm run build

# Setting up the nginx server
FROM nginx 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf