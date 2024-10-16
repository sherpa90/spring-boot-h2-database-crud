# Spring Boot H2 Database CRUD APP Centro de Eventos Talento Digital 2024.-

## Run Spring Boot local

http://localhost:8080/tutorials

## Run Spring Boot H2 BBDD

http://localhost:8080/h2-console

## Run Spring Boot application paso 1
```
mvn clean install
```
## Run Spring Boot application paso 2
```
mvn spring-boot:run
```

# Despliegue en Kubernetes usando `kubectl` y `minikube`

Este apartado describe cómo desplegar una aplicación Spring Boot en Kubernetes utilizando `minikube`.

## Pasos para el despliegue:

```bash
minikube start --insecure-registry true
eval $(minikube docker-env)
sudo docker build -t td-springboot ./springboot-app
minikube image load td-springboot
kubectl apply -f kubernetes.yaml
minikube service springboot-loadbalancer -n talento-digital --url
minikube delete

