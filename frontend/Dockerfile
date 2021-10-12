FROM node:14 as build-step


RUN mkdir -p /app

WORKDIR /app

COPY package-lock.json .
COPY package.json .

#RUN ls .
#RUN npm install -g npm@14
RUN  npm  install

COPY . /app

RUN ls .
RUN npm run build

#Segundo paso: deploy
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/front2 /usr/share/nginx/html

#EXPOSE 4200:80
#ddddddf
#Addeddddffggc
