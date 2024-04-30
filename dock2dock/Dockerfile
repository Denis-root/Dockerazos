#Se selcciona la imagen a usar, en la que se va a basar el contenedor, tiene que ser el nombre segun el tag
FROM node:20

#Se ejecuta dentro del contenedor el comando para crear la carpeta donde estara el proyecto
RUN mkdir -p /home/app

#Se copia el contenido de la carpeta actual, a la carpeta creada dentro del contenedor
COPY . /home/app

#Se define el puerto a exponer desde el contenedor hacia afuera
EXPOSE 3000

#Se define el comando que iniciara el proyecto dentro del contenedor
CMD [ "node", "/home/app/index.js" ]