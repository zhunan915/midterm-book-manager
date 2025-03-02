# Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the backend port
EXPOSE 8800

# Command to run the backend server
CMD ["node", "./index.js"]