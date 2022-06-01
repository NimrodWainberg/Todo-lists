FROM python:3.10.0-slim-buster

# RUN mkdir /backend
WORKDIR /backend

COPY requirements.txt /backend

# WORKDIR /backend

RUN pip install -r requirements.txt

COPY . .

# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload","--workers","4"]
CMD ["uvicorn", "main:app", "--reload"]