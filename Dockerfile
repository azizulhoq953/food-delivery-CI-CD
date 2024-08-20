# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

ENV MONGODB_URI=mongodb+srv://azizulhoq953:t5D3fniTQdIwb0Ff@cluster0.bo5g0gy.mongodb.net/food-ordering
# Build the Next.js application


# RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "run", "start"]


