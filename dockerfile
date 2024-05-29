# Use a base image
FROM node:alpine

# Set the working directory
WORKDIR /tumppi066.fi

# Copy the app files to the container
COPY /tumppi066.fi /tumppi066.fi

# Expose the port the app runs on
EXPOSE 3000

# Install any dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Specify the command to run your app
CMD npm start