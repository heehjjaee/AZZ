# pyaudio 설치 (sudo pip install pyaudio)
import numpy as np
import requests
from rbpi_vibrae import vibrate_server_main2 , vibrate_server_main3

#기본 설정
Format = pyaudio.paInt16
Channels = 1
Rate = 22050
Chunk = 1024
Record_second = 4

server_url = "http://192.168.20.230:5001/upload"


audio = pyaudio.Pyaudio() # 오디오 객체 생성

index_count = 0 # 녹음 카운트
#반복해서 전송
while True:
    try:
        #진동 체크
        # vibrate_server_main2()
        # vibrate_server_main3()

        #스트림 시작
        stream = audio.open(format = Format, channels = Channels, rate = Rate, input = True, frames_per_buffer = Chunk)

        print(f"{index_count}번째 녹음중입니다...")

        frames = [] #오디오 정보를 담을 리스트
        
        for i in range(0,int(Rate/Chunk*Record_second)): #4초간 녹음
            data = stream.read(Chunk)
            frames.append(data)  # 리스트에 담음 데이터들

        stream.stop_stream()
        stream.close()


        print("녹음 완료")

        audio_data = 'b'.join(frames)

        response = requests.post(server_url, data = audio_data )
        #audio.terminate()
        if response.status_code == 200:
            print("전송 완료")
        else:
            print("전송 실패")
        
        index_count +=1
            
    finally:
        audio.terminate()

