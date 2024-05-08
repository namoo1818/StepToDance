import tensorflow as tf
import numpy as np
from matplotlib import pyplot as plt
import cv2
import boto3
import os

def get_s3_client():
    s3 = boto3.client('s3',
                      aws_access_key_id=os.environ['S3_ACCESS_KEY'],
                      aws_secret_access_key=os.environ['S3_SECRET_ACCESS_KEY'],
                      region_name='ap-northeast-2'
                      )
    return s3

def imgToBodyModel(image) -> list:
    print(image)
    return None