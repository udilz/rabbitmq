FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest
RUN pnpm install

EXPOSE 8001

CMD [ "pnpm", "dev" ]