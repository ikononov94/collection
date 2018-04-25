FROM node:slim
WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=development

RUN npm install
RUN npm run build

EXPOSE 8080
CMD npm start 