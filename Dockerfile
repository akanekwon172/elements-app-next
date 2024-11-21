FROM node:22.10.0-slim

RUN apt-get update \
&& apt-get install -y --no-install-recommends curl locales procps tmux vim \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app
