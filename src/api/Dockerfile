FROM node:14 AS build
WORKDIR /api
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install 
COPY ./src .
RUN npm run build

FROM node:14
WORKDIR /api
COPY package*.json ./
RUN npm install --production
COPY --from=build /api/dist/ ./dist
EXPOSE 3000
CMD ["npm", "start"]
