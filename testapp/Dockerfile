FROM node 

ENV MONGO_DB_USERNAME=admin \ 
    MONGODB_DB_PASSWORD=qwerty

RUN mkdir -p testapp 

COPY . /testapp

CMD ["node", "/testapp/server.js"]



