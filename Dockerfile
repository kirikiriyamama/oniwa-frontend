FROM node:12-slim

WORKDIR /opt/oniwa

COPY package.json yarn.lock ./
RUN yarn install

CMD ["yarn", "start"]
