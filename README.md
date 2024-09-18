# Spring Boot H2 Database CRUD example: Building Rest API with Spring Data JPA

## Run Spring Boot local

http://localhost:8080/tutorials

## Run Spring Boot H2 BBDD

http://localhost:8080/h2-console

## Run Spring Boot application paso 1

mvn clean install

## Run Spring Boot application paso 2
```
mvn spring-boot:run
```

mvn clean verify sonar:sonar \
    -Dsonar.projectKey=demo-qube \
    -Dsonar.host.url=http://192.168.1.199:8080 \
    -Dsonar.login=sqp_90f65a6022352f573b2369fe6860ef6e5bb5e35e
