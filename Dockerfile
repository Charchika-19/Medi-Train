# Step 1: Build the Angular app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the Angular app using a web server
FROM nginx:alpine

# Copy the built Angular app from the previous build stage to the nginx server
COPY --from=build /app/dist/medi-train /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

