import cv2

dispositivo = cv2.VideoCapture("/videoManos.mp4")

while True:
    bien,img = dispositivo.read()
    cv2.imshow("Image",img)
    cv2.waitKey(1)