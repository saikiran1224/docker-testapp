FROM node:22-trixie-slim

ENV MONGO_DB_USERNAME=admin \ 
    MONGO_DB_PWD=qwerty

RUN mkdir -p testapp 

COPY . /testapp

CMD ["node", "/testapp/server.js"]



