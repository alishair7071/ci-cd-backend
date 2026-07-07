# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for caching — deps only reinstall if these change)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of your app's code
COPY . .

# Tell Docker which port your app listens on
EXPOSE 4000

# Command to run when the container starts
CMD ["node", "index.js"]