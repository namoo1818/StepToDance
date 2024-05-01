import boto3

# TODO: env로 키를 옮기기
AWS_S3_ACCESS_KEY = "test"
AWS_S3_PRIVATE_KEY = "test"

def guideUpload(video_url: str):
    s3 = boto3.client("s3", aws_access_key_id=AWS_S3_ACCESS_KEY, aws_secret_access_key=AWS_S3_PRIVATE_KEY)