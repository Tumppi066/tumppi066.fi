# Use a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /tumppi066.fi

# Copy the app files to the container
COPY . /tumppi066.fi

# Install any dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Specify the command to run your app
CMD npm start