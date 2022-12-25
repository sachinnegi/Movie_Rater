ARG NODE_VERSION=16.3.0-alpine

FROM node:${NODE_VERSION}
#RUN apk add --no-cache
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "--version"]

