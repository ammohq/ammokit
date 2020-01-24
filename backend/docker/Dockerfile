FROM python:3.8-alpine
LABEL maintainer="tom@triton-it.nl"
WORKDIR /app/
ADD ./requirements.txt /app/

RUN apk add jpeg-dev zlib-dev git \
	&& apk --no-cache add --virtual build-dependencies \
      build-base \
      linux-headers \
      gcc \
      libc-dev \
      libffi-dev \
      mariadb-dev \
      && pip install -r requirements.txt \
      && rm -rf .cache/pip \
      && apk del build-dependencies

RUN apk -q --no-cache add mariadb-connector-c-dev

ADD ./docker/run.sh /app/docker/run.sh

RUN chmod +x /app/docker/run.sh

ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE settings.development
ENV APPLICATION_RUN_TYPE  "development"

CMD ["sh", "/app/docker/run.sh"]
