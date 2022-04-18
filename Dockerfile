FROM node:14-alpine as build-step
WORKDIR /app
EXPOSE 80
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod 
FROM nginx:1.21.6-alpine
COPY --from=build-step /app/dist/App-Tecnologias /usr/shared/nginx/html