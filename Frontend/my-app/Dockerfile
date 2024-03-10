# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install necessary dependencies
RUN npm install

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the application
CMD ["npm", "start"]