# Build Frontend
FROM node:12.16.3-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Frontend
#FROM fholzer/nginx-brotli:v1.12.2
#WORKDIR /etc/nginx
#ADD nginx.conf /etc/nginx/nginx.conf

#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]