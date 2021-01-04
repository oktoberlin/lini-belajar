FROM python:3

WORKDIR /usr/src/app
COPY ./backend/requirements.txt ./
RUN pip uninstall django
RUN pip install -r requirements.txt

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

COPY ./docker /app/docker
COPY ./backend /app/backend

