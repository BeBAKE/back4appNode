# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the working directory to the src folder where index.js is located
WORKDIR /usr/src/app/src

# Expose the port your app will run on
EXPOSE 4500

# Command to run your app
CMD ["node", "index.js"]
