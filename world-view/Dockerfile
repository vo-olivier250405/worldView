FROM node:latest

WORKDIR /app

COPY . /app

RUN apt update
RUN apt install npm -y

RUN npm i
EXPOSE 3000
CMD ["npm", "run", "dev"]