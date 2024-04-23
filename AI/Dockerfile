FROM python:3.9
COPY ./requirements.txt /fastApiProject/requirements.txt
COPY ./.env /fastApiProject/.env
RUN pip install --no-cache-dir --upgrade -r /fastApiProject/requirements.txt
RUN cd /fastApiProject
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
