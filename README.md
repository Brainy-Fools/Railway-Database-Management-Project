<p align="center">
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FBrainy-Fools%2FRailway-Database-Management-Project&count_bg=%23267DE8&title_bg=%23404140&icon=github.svg&icon_color=%23258DE0&title=visitors&edge_flat=false"/>
  </p>
<p align="center">

  <img alt="GitHub Org's stars" src="https://img.shields.io/github/stars/Brainy-Fools?logoColor=blue&style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/Brainy-Fools/Railway-Database-Management-Project?logoColor=blue&style=social">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/Brainy-Fools/Railway-Database-Management-Project?logoColor=blue&style=social">
  <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/MasumBhai?logo=github&logoColor=blue&style=social">
  <img alt="GitHub" src="https://img.shields.io/github/license/Brainy-Fools/Railway-Database-Management-Project?logo=git&logoColor=blue&style=social">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
  <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Brainy-Fools/Railway-Database-Management-Project?logo=github&logoColor=blue&style=social">
</p><br>


# How to install this project to run in localhost from your pc
<h4>!! important reminder</h4> Django Only supports Oracle Database version 12c or above & we have performed this project in oracle 19c version<br>
So download oracle 19c from this <a href="https://www.oracle.com/database/technologies/oracle19c-windows-downloads.html" target="_blank">official site</a><br><br>
After installing oracle database, need to create a <b>user</b> & grant some previlieges to handle this database. I have created a script for your convinence, run this script in any online python ide & copy the output & paste in your <b>SQL PLUS</b><br>

```py
x = '''
CREATE USER <user_name> IDENTIFIED BY <password>;
GRANT CONNECT,RESOURCE,DBA TO <user_name>; 
GRANT CREATE SESSION TO <user_name> WITH ADMIN OPTION;
GRANT UNLIMITED TABLESPACE TO <user_name>;
GRANT "IMP_FULL_DATABASE" TO <user_name> ;
GRANT "EXP_FULL_DATABASE" TO <user_name> ;
GRANT "CONNECT" TO <user_name> ;
GRANT "RESOURCE" TO <user_name> ;
GRANT "DATAPUMP_EXP_FULL_DATABASE" TO <user_name> ;
GRANT "DATAPUMP_IMP_FULL_DATABASE" TO <user_name> ;
GRANT "AUTHENTICATEDUSER" TO <user_name> ;
'''
y = x.replace("<user_name>","c##SuperMan")
print(y.replace("<password>","Masum")) 
```
<h5>Here in replace section, Give your desired name of database user & password otherwise left it as it is.<br>One thing to be noted,user name must start with <b>c##</b> in oracle database to be common user</h5><br>

Now make a connection via SQL Developer/DataGrip (btw jetbrains DataGrip is used by me) where SID will be orcl and port 1521 and username & password will be newly created user & password. Here i have attached a <a href="https://imgur.com/a/m3EvFt0" target="_blank">DEMO of Database Connection</a><br><br>

All set,now download our project from <a href="https://github.com/Brainy-Fools/Railway-Database-Management-Project.git" target="_blank">this gihub link</a><br>
After opening this project in vs-code or pycharm. Open Railway > settings.py  you will see something like this:<br>

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'orcl',
        'USER': 'c##SuperMan',
        'PASSWORD': 'MasumBhai',
        'HOST': 'localhost',
        'PORT': '1521',
    }
}
```
<h5>Make sure that this database username and password are matched with your newly created user, password
<a href="https://stackoverflow.com/a/67758768/13939591" target="_blank">chekout my stackoverflow answer</a></h5><br>
Now few things need to install in your project terminal Or you can do it in command-prompt. Type these:

```bash
pip install Django
pip install django-debug-toolbar
pip install django-phone-field
pip install cx-oracle
```

<h5>if you see this error: ‘pip’ is not recognized as an internal or external command, then first you need to install pip <a href="" target="_blank">help link to install pip</a></h5>
<br>
Now open project terminal & make sure all these below commands are running from where <b>manage.py</b> file is located. In our project it's inside Railway foldeer. Here is a <a href="https://imgur.com/a/Fej4gmw" target="_blank">helping image</a>. Here django project is <b>Railway</b> and we used one app named <b>train</b>

```bash
py manage.py makemigrations 
py manage.py migrate
py manage.py runserver
```

All right. All setUp. Explore the site !!  But when you will click the DashBoard For Admin
You will see a LogIn Page For Admin. To Be an Admin , you have to create superuser from terminal.<br>
Again in terminal, type:

```bash
ctrl+pause/break or ctrl+C to stop the runserver
```
To create superuser, <a href="https://stackoverflow.com/a/66924978/13939591" target="_blank">follow my stackoverflow answer</a> or just simply type in project terminal:
```bash
py manage.py createsuperuser
```
After successfully creating superuser run the server via 
```bash
py manage.py runserver
```
and then click the 'DashBoard for admin' in header. Now give the username & password of newly created superuser.<br>
Bhaiola!! You are now admin!! You can control this <b>fully responsive</b> webapp<br><br>
At the begining no data is inserted, so you have to insert data manually in two table. <b>Route</b> & <b>Train_info</b><br>
The reason is: visitor will not control/monitor the route & train infos data, it's admin's work. <a href="https://drive.google.com/file/d/11x00d89iFEY9qkc405bue3uoRnMg_CMr/view?usp=sharing" target="_blank">here</a> i have attached a demo data sheet of route & train infos.
And when deleting users records, you have to follow this sequence (according to schema diagram):<br> First need to delete transections -> ticket -> passenger -> user<br>

If any problem arises, just create an issue in this repository, I will try to figure that out.

## After Payment Confirmation, End Product of this web-app
<img alt="End Product as QR Code" height="300px" weight="300px" src="https://user-images.githubusercontent.com/53784551/124384246-266ff580-dcf2-11eb-94da-e991d0942d50.png">
<hr/>

<!-- ![Django](https://user-images.githubusercontent.com/53784551/113674962-a0d1af00-96dc-11eb-85a3-693b731e6d16.png)

<hr/> -->

![admin_panel](https://user-images.githubusercontent.com/53784551/124383806-46061e80-dcf0-11eb-9e53-9939bd0c4f7b.png)

<hr/>

![Bill_details](https://user-images.githubusercontent.com/53784551/124383811-47cfe200-dcf0-11eb-8ebe-237e3e5b9c51.png)

<hr/>

![Bill_details2](https://user-images.githubusercontent.com/53784551/124383812-48687880-dcf0-11eb-932d-563ca5f4d1af.png)

<hr/>

![coming_soon](https://user-images.githubusercontent.com/53784551/124383813-48687880-dcf0-11eb-9a30-db6a6efb15d5.png)

<hr/>

![Footer](https://user-images.githubusercontent.com/53784551/124383814-49010f00-dcf0-11eb-9193-bea23dacabac.png)

<hr/>

![Index-Page](https://user-images.githubusercontent.com/53784551/124383815-4999a580-dcf0-11eb-9432-73202eb2bd59.png)

<hr/>

![payment_info](https://user-images.githubusercontent.com/53784551/124383816-4a323c00-dcf0-11eb-9703-d666a19341c1.png)

<hr/>

![payment_information](https://user-images.githubusercontent.com/53784551/124383817-4acad280-dcf0-11eb-9dc8-de9d14adf5a7.png)

<hr/>

![schedule](https://user-images.githubusercontent.com/53784551/124383819-4bfbff80-dcf0-11eb-94a1-c2a112b977d3.png)

<hr/>

![special_offer](https://user-images.githubusercontent.com/53784551/124383821-4c949600-dcf0-11eb-9e4c-c4efe11e19e3.png)

<hr/>

![traveller_info](https://user-images.githubusercontent.com/53784551/124383822-4c949600-dcf0-11eb-86ec-eee64f8249d1.png)

<hr/>

