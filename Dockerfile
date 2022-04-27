FROM python:3.7

RUN mkdir /backend

COPY requirements.txt /backend

WORKDIR /backend

RUN pip install -r requirements.txt

COPY . /backend

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload","--workers","4"]