FROM node:12-alpine

RUN npm install -g serverless
ENV NODE_PATH /usr/local/lib/node_modules

RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  freetype-dev \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  yarn

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN mkdir /noto
ADD https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip /noto 
WORKDIR /noto
RUN unzip NotoSansCJKjp-hinted.zip && \
  mkdir -p /usr/share/fonts/noto && \
  cp *.otf /usr/share/fonts/noto && \
  chmod 644 -R /usr/share/fonts/noto/ && \
  fc-cache -fv
WORKDIR /
RUN rm -rf /noto

WORKDIR /serverless
