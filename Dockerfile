# build environment
FROM node:10 as build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]