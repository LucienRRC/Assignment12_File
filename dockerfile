FROM node:20-alpine AS build

WORKDIR /Lin_Luxiang_ui_garden

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build-storybook

FROM nginx:alpine

COPY --from=build /Lin_Luxiang_ui_garden/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
