FROM python:3.10

RUN mkdir -p /app
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app
RUN pip install -r requirements.txt

COPY ./ ./

ENTRYPOINT [ "python", "app.py" ]