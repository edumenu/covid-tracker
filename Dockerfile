# Setting the base image for our container
FROM node:10.16.0-alpine as builder

# Setting the working directory
WORKDIR '/app'

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

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