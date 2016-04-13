# Cerebrow

#Setup
```
npm install
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
postgresql://root:etna42@37.59.60.163:5432/gpe
```

##Own Database:
```javascript
postgresql://[user]:[password]@[host]:[port]/[database]
```

Sequelize should already map the database schema throught models in app/models.

To update models (Don't commit new models if you're not sure):

###Default Test Database :
```
node_modules/sequelize-auto/bin/sequelize-auto sequelize-auto -h 37.59.60.163 -d gpe -u root -x etna42 -p 5432  --dialect postgresql -c config/database.json -o app/models/
```

###Own Database :
```
node_modules/sequelize-auto/bin/sequelize-auto -h [host] -d [database] -u [user] -x [password] -p [port]  --dialect postgresql -c config/database.json -o app/models/
```
_____________________

#Storage Module :

[In progress...]