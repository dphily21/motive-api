# base image
FROM node:8.9.4

# install and cache app dependencies
COPY package.json package.json
RUN npm install

COPY . .

# start app
CMD ["npm", "start"]