FROM node:17

ARG APP_DIR=/app

# build
WORKDIR ${APP_DIR}

# copy files from local into the image
ADD contexts contexts
ADD public public
ADD views views
ADD app.js .
ADD package.json .
ADD package-lock.json .

# install dependencies
RUN npm ci

# run
ENV APP_DIR=/app
ENV PORT=3000

WORKDIR ${APP_DIR}

# what are the required ports
EXPOSE ${PORT}

# run application
ENTRYPOINT [ "node", "app.js" ]
