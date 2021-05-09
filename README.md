# VOD Application  
## **Prerequisites**
- Node.js >= v12.22.1
- npm >= 6.14.12
    - Express >= 4.17.1
    - MySQL >= 2.18.1
    - Cors >= 2.8.5
- Docker >= 20.10.6
    - MySQL

## **Operarting System**
Ubuntu 18.04


## **Step-By-Step**
1. Install nodejs && npm
```bash
sudo apt install nodejs
```
2. Clone the repository
```bash
git clone https://github.com/Emmacortes22/AppVOD.git
```
3. Go to directory of application
```bash
cd AppVOD/
```
4. Install Express, MySQL and Cors 
```bash
sudo npm install express mysql cors --save 
```
5. Install Docker and pull MySQL
```bash
sudo apt install docker-ce
sudo docker run --name vodDB -e MYSQL_ROOT_PASSWORD=2222 -d mysql:latest
```
6. Acces to DB with a client like MySQL Workbench and execute the script *vodDBQuery.sql* in folder mysql_script

7. Know the IP of the container and put it in the file *db.config.js* in the folder app/config
```bash
sudo docker container inspect vodDB | grep "IPAddress"
```
8. Run server and go to web page AppVOD/web_page/app.html
```bash
node server.js
```