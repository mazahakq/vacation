
Установка для Raspberry Pi  
#LCD экран  
git clone https://github.com/waveshare/LCD-show.git  
cd LCD-show/  
chmod +x LCD35-show  
./LCD35-show  

#NodeJS  
wget https://nodejs.org/dist/v16.16.0/node-v16.16.0-linux-armv7l.tar.xz  
sudo apt-get install xz-utils  
tar -xpJf node-v16.16.0-linux-armv7l.tar.xz  
cd ./node-v16.16.0-linux-armv7l  
sudo cp -R * /usr/local/  

#chromium (обычно уже установлен), автостарт при запуске  
mkdir ~/.config/autostart  
cp chromium.desktop ~/.config/autostart/chromium.desktop  

#Сервис запуска приложения  
cp node-app.service /etc/systemd/system/node-app.service  
sudo systemctl enable node-app.service  
sudo systemctl start node-app.service  

#Само приложение (копируем в /home/pi/nodejs данный репозиторий)  
cd /home/pi/nodejs  
npm install  

