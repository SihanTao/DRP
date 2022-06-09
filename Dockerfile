FROM ubuntu:latest
RUN apt-get -y update &&\
    apt-get -y install nodejs &&\
    apt-get -y install npm
CMD node -v
CMD npm -v