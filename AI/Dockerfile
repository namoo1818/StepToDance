FROM python:3.9
COPY ./requirements.txt /fastApiProject/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /fastApiProject/requirements.txt
RUN cd ./src
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
