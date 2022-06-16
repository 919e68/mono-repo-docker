FROM node:16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./frontend/package.json /app/
COPY ./frontend/yarn.lock /app/
RUN yarn install --verbose

# add appllication files
COPY ./frontend /app/
COPY .env* /app/

# expose app port
EXPOSE 3000

# start app
CMD ["yarn", "start"]
