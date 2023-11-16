# Dockerfile

# Use a base image with Node.js installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Define the command to start the application
CMD ["node", "index.js"]
