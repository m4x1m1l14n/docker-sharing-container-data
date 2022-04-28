FROM node:16.14.2

# By default we store all applications in /opt folder
WORKDIR /server

# Copy all files
COPY . .

# Install only dependencies needed to run application
RUN npm ci --only=production

CMD [ "node", "main.js" ]
