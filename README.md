# STEP TO DANCE

### AI 댄스 선생님 및 숏폼 생성 공유 플랫폼

<img alt="steptodance" src="./img/steptodance.jpg" height="280"/> <br/>

## 서비스 개요

### 서비스 설명

저희 서비스를 이용해 사람들이 다양한 수준의 춤을 영상을 통해서 배울 수 있으며, 우리의 앱은 모션 인식 기술로 사용자의 춤을 분석하고 즉각적인 피드백을 제공합니다. 사용자는 자신의 춤을 숏폼 비디오로 변환해 소셜 미디어에 업로드할 수 있어, 자기 계발과 커뮤니티와의 소통이 가능합니다.

### 기획 배경

춤에 대한 관심이 급증하는 현대 사회에서, 기술을 통해 누구나 쉽고 재미있게 춤을 배우고 연습할 수 있는 환경을 제공하고자 해당 주제를 선정하였습니다. 최근 몇 년간 춤 관련 숏폼 콘텐츠의 인기가 폭발적으로 증가함에 따라, 사용자들이 춤 실력을 개발하고 공유할 수 있는 플랫폼에 대한 수요가 크게 증가하였습니다. 이러한 배경을 바탕으로, 모션인식 기술을 활용해 사용자의 춤에 대한 피드백을 제공하고, SNS에 공유할 수 있게 함으로써, 더 많은 사람들이 춤에 접근하고 즐길 수 있도록 하기 위해 프로젝트를 기획하게 되었습니다.

### 기대 효과

- 숏폼 생성으로 사용자 편의성 향상
- 시공간의 제약 없는 학습 인프라 구축
- 랭킹 시스템을 통한 재미 향상
- SNS 공유로 커뮤니티 활성화

## 서비스 화면 및 기능 소개

### 가이드 영상 시청

<img alt="가이드시청" src="./img/가이드시청.gif" height="400"/> <br/>

- 홈 화면에는 유저들이 많이 춘 순서대로 안무 영상을 추천하는 HOT 5와 개인 맞춤형 장르별 안무 추천이 있습니다
- 가이드 화면에서는 영상을 보며 춤을 익힐 수 있습니다
  - 볼륨 조절과 배속 기능이 지원됩니다.

### 영상 촬영

<img alt="영상촬영" src="./img/영상촬영.gif" height="400"/> <br/>

- 촬영은 사이드 모드와 오버레이 모드를 지원합니다.

### 피드백 생성

<img alt="피드백1" src="./img/피드백1.jpg" height="400"/>
<img alt="피드백2" src="./img/피드백2.jpg" height="400"/> <br/>

- AI가 영상을 분석하여 점수과 틀린 구간을 계산해줍니다.

### 숏폼 편집

<img alt="영상편집" src="./img/영상편집.gif" height="400"/> <br/>

- 편집 페이지에서 촬영한 영상을 편집할 수 있습니다
- 완성한 숏폼은 카카오톡, 페이스북, X로 공유할 수 있습니다.

### 숏폼 조회

<img alt="숏폼조회" src="./img/숏폼조회.gif" height="400"/> <br/>

- 숏폼 페이지에서 유저들이 올린 숏폼을 조회할 수 있습니다

### 랭킹

<img alt="랭킹" src="./img/랭킹.gif" height="400"/> <br/>

- 랭킹 페이지에서는 전체 유저의 랭킹을 확인할 수 있습니다
- 유저 페이지에 들어가 유저의 점수와 숏폼을 확인할 수 있습니다

### 가이드 업로드

<img alt="가이드업로드" src="./img/가이드업로드.gif" height="400"/> <br/>

- 직접 연습할 안무를 올릴 수 있는 가이드 업로드 페이지입니다.

## 기술 스택

> ## Frontend

### React

- React 18.3.1
- Vite 5.2.0
- emotion 11.11.4
- material 5.15.15
- redux 2.2.3
- axios 1.6.8
- react-dom 18.3.1
- react-router-dom 6.23.0
- styled-components 6.1.8
- three 0.164.1
- vite-plugin-pwa 0.19.8
  > ## Backend

### Spring 서버

- Springboot 3.2.4
- Spring Data JPA
- Spring Data mongodb
- Spring Data redis
- Spring Security
- Spring Kafka 3.1.3
- JWT
- Java JDK 17
- QueryDSL 5.0.0
- AWS S3
- gson 2.10.1

### Fast Api 서버

- Python 3.11.2
- pip 22.3.1
- fastapi 0.110.2
- uvicorn 0.29.0
- confluent_kafka 2.3.0
- redis 5.0.4
- tensorflow 2.16.1
- tensorflow_hub 0.16.1
- opencv-python 4.9.0
  > ## AI
- Openpose
- Movenet thunder
  > ## 인프라

### CI/CD

- AWS EC2
- AWS S3
- jenkins 2.454
- Docker 26.1.0
- NginX 1.18.0 (Ubuntu)
- MatterMost Webhook
- GitLab Webhook
- MySQL 8.0.36
- Redis 7.2.4
  > ## 기타

### 이슈 관리

- Jira

### 형상 관리

- Git, Gitlab

### 소통, 협업

- Notion
- Mattermost

### 개발 환경

- OS: Windows 10
- IDE: Intellij, VSCode
- EC2: Ubuntu 20.04.6 LTS (GNU/Linux 5.15.0-1051-aws x86_64)
- Reverse Proxy: Nginx
- SSH: WSL , MobaXterm
- SSL: CertBot, Let’s Encrypt

## REACT PWA

<img alt="react pwa" src="./img/reactpwa.webp" height="280"/> <br/>

모바일 환경에서도 접근이 가능할 수 있도록 PWA를 적용

일반적인 웹 기술을 활용해 모바일에서도 사용이 가능

일반적인 웹사이트와는 달리, 오프라인에서도 작동

## KARKA

<img alt="kafka" src="./img/kafka.PNG" height="280"/> <br/>

(n= 분석할 초당 프레임 수) 1/n초마다
하나의 이미지를 전송하여 분석해야 함

분석 결과 list를 1/n초마다 반환해야 함

많은 양의 데이터를 서버 사이에서
수송신 해야하는 환경에 적합

## MOVENET

<img alt="movenet" src="./img/movenet.gif" height="280"/> <br/>

동영상에 대한 사람 분석은 영상 자체가 아닌
프레임 마다의 human estimation을 수행

서비스 이용자 수가 많더라도
안정적인 유사도 비교 역할 수행 필요

Openpose 일부 모델 대비 1분 영상 기준
약 8배 빠른 성능
(Tensorflow를 서버 내 cpu로 구동한 결과)

## 유사도-비교방식

<img alt="유사도비교" src="./img/유사도비교.jpeg" height="400"/> <br/>

기존의 가이드 영상에서의 사람 모델과 사람들이 점수를 보기 위해 올린 영상에서의 사람 모델을 비교하는 방법.

기획 단계에서의 계획 : 관절간의 각도에 대한 유사도 비교
-> 360도에 대한 정확한 각도를 구하기가 어려운 문제

대안: 유클리드 거리를 통해 유사도를 비교하게 됨
두 점 사이의 거리를 재는 것

## 유사도-정규화

사람 모델을 정규화

두 개의 사람 모델
(가이드 영상,
사용자의 업로드 영상)
거리 비교 수행

-> 개선사항
정규화된 키포인트 좌표를 통해 코사인 유사도를 계산 (정확도)

## 프로젝트 산출물

### ERD

![ERD](./img/ERD.png) <br/>

### 요구사항 정의서

![요구사항정의서](./img/요구사항정의서.png) <br/>

### API 명세서

![API명세서1](./img/API명세서1.png) <br/>
![API명세서2](./img/API명세서2.png) <br/>

### 시스템 설계서

![시스템설계서](./img/시스템설계서.png) <br/>

## 팀원 소개

> <h3><font color="red">Front-End</font></h3>

<table>
 <tr>
    <td align="center"><a href="https://github.com/1234jienf"><img src="./img/백지윤.png" width="130px;" alt=""></a></td>
    <td align="center"><a href="https://github.com/choikeunyoung"><img src="./img/최근영.png" width="130px;" alt=""></a></td>
    <td align="center"><a href="https://github.com/namoo1818"><img src="./img/이민지.png" width="130px;" alt=""></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/1234jienf"><b>백지윤</b></a></td>
    <td align="center"><a href="https://github.com/choikeunyoung"><b>최근영</b></a></td>
    <td align="center"><a href="https://github.com/namoo1818"><b>이민지</b></a></td>
  </tr>
  <tr>
    <td align="center">팀장</td>
    <td align="center"></td>
    <td align="center"></td>
  </tr>
</table>

> <h3><font color="red">Back-End</font></h3>

<table>
 <tr>
    <td align="center"><a href="https://github.com/MadCom96"><img src="./img/황진하.png" width="130px;" alt=""></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/MadCom96"><b>황진하</b></a></td>
  </tr>
  <tr>
    <td align="center">Infra</td>
  </tr>
</table>

## 🏷 License

<p>
This software is licensed under the MIT <a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp" _blank="new">©SSAFY</a>.
</p>
