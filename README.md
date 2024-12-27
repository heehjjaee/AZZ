# 👆 ToneTouch 프로젝트
## 📢 프로젝트 소개
### 주제 : 청각 장애인을 위한 주변 소리 인식 위험 상황 알리미
+ 청각장애인의 안전한 일상을 위한 주변소리 인식 웹페이지 개발
+ 비문해자 청각장애인도 위급 상황에서 한눈에 파악할 수 있는 **간결한  UI**를 목표
+ 생활 소음 및 주변 소리 분석하여 주변 상황 알림 기능 제공
+ 인식한 소리에 따라 라즈베리에서 화면으로, 진동으로 사용자에게 알림
       
## 📆 프로젝트 기간 
+ 24.06.26 - 24.08.02

## 🐣 팀원 소개
![team](https://github.com/user-attachments/assets/75a1cdfc-11ad-4293-9582-7a1feb50a736)

## 🎥 시현 영상
  
https://github.com/user-attachments/assets/81279d38-c540-4538-923f-3ba7c3cd483a

  
## 📚 사용 기술
<div> 
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
	<img src="https://img.shields.io/badge/jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
  <img src="https://img.shields.io/badge/raspberrypi-A22846?style=for-the-badge&logo=raspberrypi&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

## 🖼️ UI 화면
### 시작화면 
![KakaoTalk_20241227_145111110](https://github.com/user-attachments/assets/42518999-fd34-470d-94dd-19570cb10c4a)
### 소리 감지 화면
![KakaoTalk_20241227_145111110_01](https://github.com/user-attachments/assets/af5f9308-5b45-44ac-93b5-e35b69151869)
### 주의단계 화면
![KakaoTalk_20241227_145111110_02](https://github.com/user-attachments/assets/38823c65-5e5e-4888-818d-33ab02092cd2)
### 위험단계 화면
![KakaoTalk_20241227_145111110_03](https://github.com/user-attachments/assets/1ef46d79-31dc-4323-b009-f69c8ae2eb40)


## 📌 개발환경
+ **GPU**
  + Tensorflow 2.4.1(Python 3.8.6, CUDA 11.0, cuDNN 8.0.5)

## 🗃️ DataSet
### 1. Urbansound8k
+ 뉴욕대학교 MARL(Music and Audio Research Lab)에서 공개한 데이터셋
+ 10개의 클래스
+ 데이터셋 링크 : [Urbansound8k dataset](https://urbansounddataset.weebly.com/urbansound8k.html)
### 2. Infant cry audio corpus
+ Kaggle 데이터  
+ 데이터셋 링크 : [Infant cry audio corpus](https://www.kaggle.com/datasets/warcoder/infant-cry-audio-corpus)

→ 이 중 **청각장애인이 소리를 듣지 못해 위험한 상황에 직면했던 소리** 에 해당하는 클래스를 따로 추출    
출처 : 청각장애인의 위험 판단을 위한 소리 정보, 인지 조건과 행동 반응에 관한 연구
   
### class list  
| 번호 | 클래스이름 | 개수 |
|------|-----------|-------|
| 0 | car_horn | 429 |
| 1 | jackhammer | 1,000 | 
| 2 | siren | 929 | 
| 3 | baby_cry | 457 |
| | | 2,815 |


## 🔪 데이터 전처리
### 1. 데이터의 크기 통일
+ 데이터의 길이를 4초 단위로 비슷하게 맞춤
### 2. Librosa 라이브러리
+ 음악 및 오디오 신호처리를 위한 파이썬 라이브러리
+ 원천 데이터 .wav 형식을 **Mel spectrogram**으로 변환
+ Mel Spectrogram은 주파수가 Mel Scale로 변환되는 Spectrogram
+ 사람들은 음성신호를 인식할 때 주파수를 linear scale로 인식하지 못함, Mel Scale은 이러한 특성을 고려한 음조의 지각 척도
![그림01](https://github.com/user-attachments/assets/1d93f3cc-ce2e-42f0-9e46-d485ce9666e2)

## 🥇 모델
### CNN(Convolutional Neural Network, 합성곱 신경망)
+ Random Forest
  + 앙상블의 한 종류
  + 여러개의 Decision Tree를 이용해 최종 예측을 내는 방법
  + 과적합 문제 효과적으로 방지
+ SVM
  + 자료분석을 위한 지도 학습 모델
  + 클래스를 분류할 수 있는 최적의 경계를 찾는 방식
+ CNN
  + 이미지를 인식하기 위한 패턴을 찾는데 유용
  + 이미지를 학습시키는 과정에서 **이미지 공간 정보를 유지한 상태로 학습** 가능
  
+ 모델 비교
  
| 모델 | 정확도 | 정밀도 | 재현율 | F1-Score |
|------|--------|--------|--------|----------|
| Random Forest | 0.77 | 0.77 | 0.77 | 0.76 |
| SVM | 0.78 | 0.79 | 0.78 | 0.76 |
| CNN | 0.90 | 0.90 | 0.90 | 0.90 |

### 학습 및 파라미터 튜닝
+ 과적합 방지를 위해 **Dropout 레이어**를 추가
+ **Earlystopping 함수**를 사용하여 검증 데이터의 오차가 증가하면 학습을 중단
![acc](https://github.com/user-attachments/assets/c4acecc7-9d5c-41a3-a63a-48b05b9ebdd2)
→ 정확도 **0.90**

## 👷‍♂️ 하드웨어
### 결선도
![결선도](https://github.com/user-attachments/assets/a2fbdde3-04a3-416e-bde4-699ac75171b0)
+ 5V
+ 0.05A(USB 마이크) + 0.13A(TFT LCD 디스플레이) + 0.06A(PWM 진동모터) = **0.24A**

### 부품소개
+ **TFT LCD 디스플레이**
  + 터치로 조작 가능
  + 웹 페이지에 접속하여 사용자에게 화면으로 알림
+ **PWM 진동 모터**
  + 위험 분류에 따라 진동세기가 달라짐
  + 사용자에게 상황 인지를 시킬 때 사용 
+ **Mini USB Microphone**
  + 마이크로 주변 소리 입력


## 😎 기대효과 및 향후 목표
### 기대효과
+ 청각장애인의 생활 속의 위험들이 줄어들 것으로 예상
+ 위험이 발생했을 때 빠른 조치가 가능할 것으로 기대
### 향후 목표
+ 더 많은 데이터를 학습시켜 다양한 상황에서의 대처
+ 여러 개의 마이크를 통해 소리의 방향과 크기를 판단
+ 주변에 위험에 빠졌다는 신호를 전달하는 기능 추가
+ 더 나아가 위급 상황에서 119 또는 112 구조 요청을 할 수 있는 기능 추가


## 📝 참고사항
+ Modeling 코드가 데이터 다운부터 cnn모델 학습, 교차검증까지 한 파일에 진행해서 알아보기 힘듦
+ Urbansound8k 데이터 코드 상에서 다운받아 진행
+ 'baby_cry'클래스를 포함한 모델과 포함하지 않은 모델 2가지 버전이 있음


