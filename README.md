## Nodejs Sequelize RESTAPI MYSQL

<p align="justify">
Nodejs Sequelize RESTAPI MYSQL for creating projects and tasks related to that project
</p>

<p align="center">
  <img src="README-images\diagram.PNG" alt="StepLast">
</p>

FILTER GET
<p align="center">
  <img src="README-images\filterget.PNG" alt="StepLast">
</p>


GET projects

<p align="center">
  <img src="README-images\getprojects.PNG" alt="StepLast">
</p>


GET Task

<p align="center">
  <img src="README-images\gettasks.PNG" alt="StepLast">
</p>

<p align="center">
  <img src="README-images\dbprojects.PNG" alt="StepLast">
</p>

<p align="center">
  <img src="README-images\dbtasks.PNG" alt="StepLast">
</p>



----

## Steps to implement

1. Use Dockercompose
```
docker-compose up
```
2. For get node_modules use 
Using node v18.15.0 
```python
npm install 
npm run dev
```

To enter the docker container

```python
docker run --name mycontainer -e MYSQL_ROOT_PASSWORD=mypassword -p 3306:3306 -d mysql:latest
docker exec -it mycontainer  bash
mysql -u root -p

#Manually
create database projectsdb;
```
[Documentation sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)

Inspiration from [Fazt Code](https://www.youtube.com/watch?v=3xiIOgYdbiE)

Using query with THUNDER CLIENT , extention vscode