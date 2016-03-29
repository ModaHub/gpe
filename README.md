# cerebrow

Setup:
	npm install

Run:
	npm run start

----
Database Configuration :

RDBMS	: PostgreSQL
IP	: 37.59.60.163
PORT	: 5432
DB	: gpe
USER	: root
PASSWD	: etna42

Sequelize already configured to map the database schema throught models in app/models.
---

STORAGE :

How it works

|-->[CBW = Heap]---------------->[All: Containers]----------->[All: Objects]
	 |-->[CBW: AWS Storage]->[AWS: Containers {Buckets}]->[AWS: Objects {Objects}]
	 |-->[CBW: AZR Storage]->[AZR: Containers {BLOBS}]--->[AZR: Objects {BLOBS}]

|-->[CBW: AWS Storage]-->[AWS: Containers {Buckets}]->[AWS: Objects {Objects}]
|-->[CBW: AZR Storage]-->[AZR: Containers {BLOBS}]--->[AZR: Objects {BLOBS}]
