FROM node:14
WORKDIR /app/frontend/
COPY package.json .
RUN npm install
COPY . .
# RUN npm test
EXPOSE 3000
CMD ["npm", "start"]