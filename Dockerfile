FROM node:10 as builder
ENV NPM_CONFIG_LOGLEVEL warn

ARG NODE_ENV="development"
ENV NODE_ENV=${NODE_ENV}

ENV PORT="3000"

RUN mkdir -p /code
WORKDIR /code
EXPOSE $PORT
ENV PATH /code/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
ADD . /code
RUN if [ $NODE_ENV = 'production' ] ; then npm build ; fi

FROM nginx:1.17 as prod

COPY --from=builder /code/frontend/ /usr/share/nginx/html
RUN nginx -c /etc/nginx/nginx.conf -t