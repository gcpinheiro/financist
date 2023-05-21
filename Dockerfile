# FROM node:alpine as angular
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# RUN npm install -g @angular/cli
# COPY . .
# CMD ["ng","serve","--host", "0.0.0.0"]



FROM node:14.17.3

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@12.2

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
