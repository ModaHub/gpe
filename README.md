#Get Started
##Installation
```
npm install
```

##Run:
```
npm run start
```
-----
#Database Configuration :

##Databases

###Sprint End Report
File : config/**production**.json
###Devs Working Database
File : config/**development**.json
###Database Modeling
File : config/**testing**.json

###Basic Postgres Commands
####Connection
```
ssh gpe@cerebrow.com / mdp: gpe42
psql [production/development/testing] root
```
####Display Table List
```
\d [Optional: Table Name]
```
####Quit
```
\q
```

##Bookshelfjs Configuration
[Priority: 1]

-----

#Cloud Accounts
[Priority: 1]

-----
#Storage Module
Allows users to manage different cloud vendor storage service like Azure Storage and Amazon S3 uniformly.

##Basic Management
Action        | Description           
------------- | -----------------------
**Add/Edit/Delete** (1) | a **Storage Space**: AWS, AZR or vStorage
**Add/Edit/Delete** (2) | a **Container**: AWS Bucket, AZR Container, vContainer
**Add/Edit/Delete** (3) | a **Folder**: FileSystem-like
**Add/Edit/Delete** (4) | an **Object**: AWS Object, AZR Blob, vObject

*(1) Note: Deleting a Storage Space doesn't mean that the data will be deleted, only unmanaged.*

*(2) Warning: Actions take effect directly in the cloud side.*

*(3) Warning: Actions take effect directly in the cloud side.*

*(3) Note: It should not delete files inside, but just retrieve them to the upper folder.*

*(4) Warning: Actions take effect directly in the cloud side.*

##Advanced Management
Managing different Cloud storage services from one vStorage Space :

Action        | Description           
------------- | -----------------------
**Add/Edit/Delete** | a **vCloud** with AWS Storage and AZR Storage inside as members
**Add/Edit/Delete** | a **Container/Folder/Object** in the vCloud and propagate it
**Move/Copy** | a **Container/Folder/Object** from one Cloud Vendor to Another
**Template** | Permit to build a **fake environnement** that could be pushed later
**Diff**: | To Know the difference between Appliance and Distant Cloud

*Note: vStorages are only virtual objects that contains informations/parameters about the object itself (Name, Description, Cloud Vendor(s), etc.). They always master the Storage Space members*

##Expert Management
Expert Actions that should be carefully executed :

Action        | Description           
------------- | -----------------------
**Synchronize** | **Retrieve** Distant Cloud Information **to the Appliance**
**Push** | **Push** Appliance Information **to the Distant Cloud**
**Convert** | Allows to convert a **full branch** from eg. Amazon S3 to Azure Storage

*Massive Warning: It could cause data loss !*

##Architecture
* *Virtual Type:    Is just a Layer/Item made by Cerebrow, it permits a better management of the service.*
* *Physical Type:    Is a materialized Item that exists on the Cloud Service.*

###Four levels
Item          | Description           
------------- |-----------------------
1. **Storage Space** | *Virtual: Represents the storage service by Cloud Vendor*
2. **Container** | *Physical: exists in AWS as "Bucket" and in AZR as "Container"*
3. **Folders** | *Physical: exists on AWS as "Folder" with parameters and in AZR as "Container"*
4. **Objects** | *Physical: exists in AWS as "Object" and in AZR as "Object BLOB"*

###Storage Documentation
* **AWS Storage**:    [How it works ?](http://docs.aws.amazon.com/AmazonS3/latest/gsg/SigningUpforS3.html)
* **Azure Storage**:    [How it works ?](https://azure.microsoft.com/fr-fr/documentation/articles/storage-nodejs-how-to-use-blob-storage/)

-----
#RBAC
[Priority: 5]

-----
#SDK
##Get Started
* [Amazon Nodejs SDK Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
* [Azure Nodejs SDK Guide](https://azure.microsoft.com/fr-fr/develop/nodej/)

##Documentation
* [Amazon Nodejs SDK Documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
* [Azure Nodejs SDK Doccumentation](http://azure.github.io/azure-sdk-for-node/)

