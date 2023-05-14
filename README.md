docker build -t govno-image .


docker run -it -p 8080:8080 --rm --name govno-container govno-image
