# Usa la imagen base de NGINX
FROM nginx:alpine

# Copia los archivos de la aplicación al directorio de NGINX
COPY dist/visortv /usr/share/nginx/html

# Copia una configuración personalizada para manejar rutas en aplicaciones de una sola página
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor NGINX
CMD ["nginx", "-g", "daemon off;"]

