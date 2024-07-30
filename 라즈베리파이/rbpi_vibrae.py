import RPi.GPIO as gpio
import requests

gpio.setmode(gpio.BCM)
gpio.setup(13,gpio.OUT)
pwm = gpio.PWM(13,100)

def vibrate_server_main2():
    response_main2 = requests.get('http://192.168.20.230:5001/main02')
    if response_main2.status_code == 200:
        return pwm.ChangeDutyCycle(70)
    else:
        return pwm.stop()
    
def vibrate_server_main3():
    response_main3 = requests.get('http://192.168.20.230:5001/main03')
    if response_main3.status_code == 200:
        return pwm.ChangeDutyCycle(100)
    else:
        return pwm.stop()
    

    # 상황고보 try except 추가