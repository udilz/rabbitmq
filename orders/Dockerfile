FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest
RUN pnpm install

EXPOSE 3000

CMD [ "pnpm", "dev" ]