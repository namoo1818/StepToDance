FROM nginx:latest

RUN mkdir /app

WORKDIR /app

COPY package*.json yarn.lock ./

RUN mkdir ./build

ADD ./dist ./build

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]