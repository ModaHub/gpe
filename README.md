#Installation
```
npm install
```

#Run:
```
npm run start
```
-----
#Database Configuration :

##Databases

###Sprint End Report
File : config/production.json
###Devs Working Database
File : config/development.json
###Database Modeling
File : config/testing.json

###Basic Postgres Commands
Connection:
```
ssh gpe@cerebrow.com / mdp: gpe42
psql [production/development/testing] root
```
Display Table List:
```
\d [Optional: Table Name]
```
Quit:
```
\q
```

##Bookshelfjs Configuration
[Priority: 1]

_____________________

#Cloud Accounts
[Priority: 1]

_____________________
#Storage Module
Allows users to manage different cloud vendor storage service like Azure Storage and Amazon S3 uniformly.

##Basic Management
* Add/Edit/Delete a Storage Space: AWS, AZR or vStorage
_Note: Deleting a Storage Space doesn't mean that the data stored will be deleted in the cloud side, only unmanaged._
* Add/Edit/Delete a Container : AWS Bucket, AZR Container, vContainer
_Warning: Actions take effect directly in the cloud side._
* Add/Edit/Delete a Folder : FileSystem-like
_Warning: Actions take effect directly in the cloud side._
_Note: It should not delete files inside, but just retrieve them to the upper folder._
* Add/Edit/Delete an Object : AWS Object, AZR Blob, vObject
_Warning: Actions take effect directly in the cloud side._

##Advanced Management
Managing different Cloud storage services from one vStorage Space :
* Add a vCloud with AWS Storage and AZR Storage inside as members
* Add/Edit/Delete a Container/Folder/Object in the vCloud and propagate to a specific or both Cloud Vendors
* Move/Copy a Container/Folder/Object from one Cloud Vendor to Another
* Template: Permit to build a fake environnement that could be pushed later
* Diff: To Know the difference between Appliance and Distant Cloud

_Note: vStorages are only virtual objects that contains informations/parameters about the object itself (Name, Description, Cloud Vendor(s), etc.). They always master the Storage Space members_

##Expert Management
Expert Actions that should be carefully executed :
* Synchronize: Retrieve Distant Cloud Information to the Appliance
* Push: Push Appliance Information to the Distant Cloud
* Convert: Allows to convert a full branch from eg. Amazon S3 to Azure Storage.

_Massive Warning: It could cause data loss !_

##Architecture
* _Virtual Type: Is just a Layer made by Cerebrow, it permits a better view/management of the service._
* _Physical Type: Is a materialized Container that exists on the Cloud Service._

###Four levels
1. Storage Space (Virtual: Represents the storage service by Cloud Vendor)
2. Container (Physical: exists in AWS as "Bucket" and in AZR as "Container")
3. Folders (Virtual: Allows the user to arrange Objects (Files) like a FileSystem does & Physical: exists on AWS as "Folder" with parameters and in AZR as "Container")
4. Objects (Physical: exists in AWS as "Object" and in AZR as "Object BLOB")

###Storage Documentation
* AWS Storage : [How it works ?](http://docs.aws.amazon.com/AmazonS3/latest/gsg/SigningUpforS3.html)
* Azure Storage : [How it works ?](https://azure.microsoft.com/fr-fr/documentation/articles/storage-nodejs-how-to-use-blob-storage/)

_____________________
#RBAC
[Priority: 5]

_____________________
#SDK
##Get Started
* [Amazon Nodejs SDK Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
* [Azure Nodejs SDK Guide](https://azure.microsoft.com/fr-fr/develop/nodej/)

##Documentation
* [Amazon Nodejs SDK Doc](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
* [Azure Nodejs SDK Doc](http://azure.github.io/azure-sdk-for-node/)

