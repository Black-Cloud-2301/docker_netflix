FROM node:alpine as build
WORKDIR /app
COPY . .
RUN yarn install && yarn build


FROM nginx:alpine
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]