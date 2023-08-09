FROM node:14 AS build
WORKDIR /client
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install 
COPY /src ./src
COPY index.html . 
RUN npm run build

FROM node:14
WORKDIR /client
COPY package*.json ./
RUN npm install --production
COPY --from=build /client/dist/ ./dist
EXPOSE 3000
CMD ["npm", "start"]
