FROM nginx:latest

LABEL maintainer="Jesus Rodriguez<arturo@ravelo.ca>"

ADD ./config/site.nginx.conf /etc/nginx/conf.d/default.conf