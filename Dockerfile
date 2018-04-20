FROM node:slim
WORKDIR /usr/src/app

COPY . .

ENV NODE_END=development

RUN npm install
RUN npm run build

CMD npm start