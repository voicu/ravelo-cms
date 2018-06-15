# Getting Started

You will need the following in order to be able to successfully run this repository:

* Docker version 18.03.1-ce, build 9ee9f40
* Visual Studio Code

You will need to also update your vhosts file by adding the following

```
127.0.0.1 api.localhost
```

# How to contribute to this project

1. Make sure you have you have your ssh keys setup.

    NOTE: you can follow the [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) guide if you don't know how to do it.
1. Go to the repo [ravelo-cms](https://github.com/ravelo-systematic-solutions/ravelo-cms) and for the repository.
1. Select where you want the rpo to go
1. Copy the path to your repo (eg. `git@github.com:opposite-bracket/ravelo-cms.git`) and clone it:
  ```
  git clone git@github.com:opposite-bracket/ravelo-cms.git
  cd ravelo-cms/
  docker-compose up -d
  ```
5. You should be able to go to `http://api.localhost` and see the api running. The frontend needs to be implemented.

# Attach remote degugger

If you are using Visual Studio Code, you will find that we already have a configuration called `Attach debugger to docker container` which will allow you to place breakpoints throughout the API. -->

# How to Pull the latest changes to your fork

1. got to the original [ravelo-cms](https://github.com/ravelo-systematic-solutions/ravelo-cms) website and copy the ssh url: (`git@github.com:ravelo-systematic-solutions/ravelo-cms.git`)
1. Go to your terminal and switch to your ravelo-cms directory.
1. Create a new remote that points to the original repository like so:
    ```
    git remote add source git@github.com:ravelo-systematic-solutions/ravelo-cms.git
    ```
    NOTE: in this case we are naming the remote `source` but you can call it anything you want (eg. `original-open-source`)
4. If you run `git remote -v`, you should be able to see all the remotes and where they are pointing to.
1. Now you can pull the `latest and greatest` by running the following:
    ```
    git pull source master
    ```