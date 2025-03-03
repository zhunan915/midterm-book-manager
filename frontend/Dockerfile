# Frontend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx to serve the frontend
FROM nginx:stable-alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
