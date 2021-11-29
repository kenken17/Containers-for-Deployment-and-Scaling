# Containerize 

``js`
docker build -t myapp:v1 .
``

``js`
docker run -d -p 8080:3000 -e PORT=3000 --name myapp myapp:v1
``

visit [http://localhost:8080](http://localhost:8080)
