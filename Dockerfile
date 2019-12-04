FROM node:carbon

USER root

# Add NGINX Signing Key
ADD nginx_signing.key /
RUN apt-key add nginx_signing.key

# Append NGINX packages to sources
RUN echo "deb http://nginx.org/packages/debian/ stretch nginx\ndeb-src http://nginx.org/packages/debian/ stretch nginx" >> /etc/apt/sources.list

# Install NGINX
RUN apt-get update && apt-get install -y nginx

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy NGINX configuration file from the current directory
ADD nginx.conf /etc/nginx/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# npm install all dependencies (keep this before COPY source code so that Docker will re-use an existing Image if possible)
COPY ./.storybook/package-deploy.json /usr/build/package.json
WORKDIR /usr/build
RUN npm install --no-optional

# Copy source code
COPY . /usr/build/

# Run script to build
RUN npm run build-storybook

# Cleanup source files
WORKDIR ..
RUN rm -rf build

# Expose service endpoint at port 90
expose 90

# Set the default command to execute
# when creating a new container
CMD service nginx start