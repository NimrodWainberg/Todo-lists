FROM python:3.10.0-slim-buster

# RUN mkdir /backend
WORKDIR /app/backend

COPY requirements.txt .

# WORKDIR /backend

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload","--workers","4"]