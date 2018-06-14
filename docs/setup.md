# Run ravelo-cms

You will need the following in order to be able to successfully run this repository:

* Docker version 18.03.1-ce, build 9ee9f40
* Visual Studio Code

You will need to also update your vhosts file by adding the following

```
127.0.0.1 api.localhost
```

Next all you need to do is clone and run the project:

```
git clone git@github.com:ravelo-systematic-solutions/ravelo-cms.git
cd ravelo-cms/
docker-compose up -d
```

Now you should be able to go to `http://api.localhost` and see the api running. The frontend needs to be implemented.