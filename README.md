# myuse-starter-barra

> Nuxt/Vuetify starter template for interactive media students

## Build Setup

To get started with the project, you will first need to install NodeJS. You can find a download link below

- [NodeJS installer](https://nodejs.org/en/download/)


Next, you will need to download the project folder from Git Lab.

The best way to do this is to use the below commands in your Terminal.

```bash
# select the location to save the project (e.g. "Projects" folder)
$ cd ~/Projects

# clone the project repository
$ git clone https://gitlab.com/myuse/myuse-starter-barra.git
```

Next, you will need to install the project dependencies using NPM

```bash
# switch into the project folder
$ cd myuse-starter-barra

# install dependencies
$ npm install
```

## Running the Project

To run the project, use the below command for development mode. Development mode is useful because it will reload the application every time you make a change in the code:

```bash
# serve with hot reload at localhost:3000
$ npm run dev
```

Once the app is running, you can access view it in your browser at the below link:

- [Localhost](http://localhost:3000/)

You can also test how your application will perform in production, using the below commands:

```bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Updating the Project

To make edits to the project, please ensure you are working in the *development* branch

```bash
# switch to development branch
$ git checkout development
```

After making your code changes, you can save locally as commits. A good tip is to save regularly, in small chunks, so that it is easy to rollback if something goes wrong.

```bash
# stage your changes
$ git add .

# commit your changes
$ git commit -m "This is your commit message explaining the changes"
```

You can upload your code changes to the GitLab repository using the below command. This will allow you to safely back up your code, and allow others to view it.

```bash
# upload your changes to Git Lab
$ git push
```

If someone else commits changes to your project code, you can download the latest changes using the below command:

```bash
# download updates from server
$ git pull
```

## Code editor setup

Please use Visual Studio Code editor, to ensure consistency with our development team. You can download it for free here:

- [VSCode editor](https://code.visualstudio.com/)

Also, please install the below code formatting / linting tools into VSCode:

- [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## More information

For detailed explanation on how things work, check out

- [Nuxt.js docs](https://nuxtjs.org/guide/installation)
- [Vuetify docs](https://vuetifyjs.com/en/getting-started/quick-start/)
