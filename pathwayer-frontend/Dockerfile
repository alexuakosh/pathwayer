FROM node:latest
WORKDIR /app

COPY package.json ./
RUN  npm install

COPY . .

ENV NODE_ENV development

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "dev"]