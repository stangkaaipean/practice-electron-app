FROM node

WORKDIR /usr/src/app

COPY package.json /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install

RUN npm install -g typescript

COPY api /usr/src/app
COPY tsconfig.json /usr/src/app

RUN tsc

EXPOSE 3000

CMD [ "npm", "run", "server" ]