FROM ubuntu:22.04

RUN apt update && apt install -y nodejs npm

WORKDIR /app

COPY package.json ./
RUN npm config set legacy-peer-deps true && npm install

COPY ./ /app/

ENTRYPOINT ["npm", "run", "dev"]


# maszyna wirtualna ma swój kernel
# kontener działa na systemowym i dodatkowo ma swoją powłokę

# docker compose -> nakładka 