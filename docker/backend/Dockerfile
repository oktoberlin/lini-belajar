FROM python:3.7.3-alpine

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/

COPY company-ca.crt /usr/share/ca-certificates
RUN update-ca-certificates
RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./docker /app/docker
ADD ./backend /app/backend


