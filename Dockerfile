FROM node:13.13

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
