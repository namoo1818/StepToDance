FROM docker
COPY --from=docker/buildx-bin:latest /buildx /usr/libexec/docker/cli-plugins/docker-buildx

FROM ubuntu
RUN apt-get -y update
RUN apt-get install -y ffmpeg

FROM openjdk:17-jdk
ADD ./build/libs/steptodance-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]