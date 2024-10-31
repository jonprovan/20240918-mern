# setting the version for the base NodeJS server environment we're going to run from
# we need this to be part of our container so our app can run on top of it
FROM node:22.9.0

# setting the working directory inside the container to copy files to
WORKDIR /usr/src/app

# copying over our package files to run npm i before copying the project files
COPY package*.json ./

# run npm i before copying the remainder of the files
RUN npm i

# copying the rest of the files
COPY . .

# build it inside the container
RUN npm run build

# open up the container's port
EXPOSE 3000

# run it
CMD ["node", "dist/main"]