FROM ubuntu:latest

# Ubuntu 패키지 업데이트 및 ffmpeg 설치
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

# OpenJDK 17 설치
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

# Docker buildx 설치
RUN mkdir -p /usr/libexec/docker/cli-plugins && \
    curl -L https://github.com/docker/buildx/releases/download/v0.6.3/buildx-v0.6.3.linux-amd64 > /usr/libexec/docker/cli-plugins/docker-buildx && \
    chmod a+x /usr/libexec/docker/cli-plugins/docker-buildx

# 애플리케이션 JAR 파일 추가
ADD ./build/libs/steptodance-0.0.1-SNAPSHOT.jar /app.jar

# 애플리케이션 실행 명령 지정
ENTRYPOINT ["java", "-jar", "/app.jar"]