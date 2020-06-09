FROM mhart/alpine-node:13.13.0

ARG DEBIAN_FRONTEND=noninteractive

ENV TERM linux

ENV ES_HOST "http://localhost:9200"

ENV ARRANGER_API "http://localhost:5050"

ENV PROJECT_ID ""

ENV ACTIVE_INDEX ""

ENV ACTIVE_INDEX_NAME ""

RUN apk update && \
    apk upgrade && \
    apk add git

#RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

#RUN apt-get update && \
#    apt-get -y --no-install-recommends install git && \
#    rm -rf /var/lib/apt/lists/*

RUN git clone --branch disable_keycloak https://github.com/ramonamela/iPC_Data_Portal.git

WORKDIR iPC_Data_Portal

EXPOSE 3000

CMD npm start
