# node version we want to work with
FROM node:22-alpine

# creating a working directory
WORKDIR /app

# copy all files into the app directory
COPY  . ..

# since we're using a yarn.lock file, need to run yarn command
RUN yarn install --production

# starts up our node application and runs the index.js file
CMD ["node", "src/index.js"]

EXPOSE 3000
