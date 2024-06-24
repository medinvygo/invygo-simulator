FROM node:18 As development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18 As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=development  /app/dist ./dist

CMD [ "npm", "run", "start:dev" ]