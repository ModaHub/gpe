# Cerebrow

#Setup
```
npm install
```
//SOON
If the database is not already set up :
```
/path/to/bin/sequelize migration:create
/path/to/bin/sequelize db:migrate
```

#Run:
```
	npm run start
```
-----
#Database Configuration :

##Default Database

File : config/database.json

```javascript
postgresql://root:etna42@37.59.60.163:5432/[ttk || tee]
```

##Own Database:
```javascript
postgresql://[user]:[password]@[host]:[port]/[database]
```

Sequelize should already map the database schema throught models in app/models.

To update models (Don't commit new models if you're not sure):

###Default Test Database :
```
sequelize-auto -h 37.59.60.163 -d [ttk || tee] -u root -x etna42 -p 5432  --dialect postgresql -c config/database.json -o app/models/
```

###Own Database :
```
sequelize-auto -h [host] -d [database] -u [user] -x [password] -p [port]  --dialect postgresql -c config/database.json -o app/models/
```
_____________________

#Storage Module :

##How it works ?

>|-->[CBW = Heap]---------------->[All: Containers]----------->[All: Objects]
>	 |-->[CBW: AWS Storage]->[AWS: Containers {Buckets}]->[AWS: Objects {Objects}]
>	 |-->[CBW: AZR Storage]->[AZR: Containers {BLOBS}]--->[AZR: Objects {BLOBS}]

>|-->[CBW: AWS Storage]-->[AWS: Containers {Buckets}]->[AWS: Objects {Objects}]
>|-->[CBW: AZR Storage]-->[AZR: Containers {BLOBS}]--->[AZR: Objects {BLOBS}]