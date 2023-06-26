FROM postgres:latest

RUN mkdir /home
COPY ./main.js /home/main.js
# password and user
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres

RUN apt update && apt install nodejs -y && apt install npm -y
