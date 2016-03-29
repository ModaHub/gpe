# cerebrow

npm install

RDBMS	: PostgreSQL
IP	: 37.59.60.163
PORT	: 5432
DB	: gpe
USER	: root
PASSWD	: etna42

Sequelize already configured to map the database schema throught models in app/models.

STORAGE :

How it works

|-->[CBW = Heap]---------------------->	[All Physical Containers]-------------> [All Physical Objects]
	 |-->[CBW : AWS Storage]------>	[AWS: Physical Containers {Buckets}]-->	[AWS: Physical Objects {Objects}]
	 |-->[CBW : AZR Storage]------>	[AZR: Physical Containers {BLOBS}]---->	[AZR: Physical Objects {BLOBS}]

|-->[CBW : AWS Storage]-->	[AWS: Physical Containers {Buckets}]-->	[AWS: Physical Objects {Objects}]
|-->[CBW : AZR Storage]-->	[AZR: Physical Containers {BLOBS}]-->	[AZR: Physical Objects {BLOBS}]
