# UICNews

Displays news articles that mention UIC in the last six months in reverse chronological order by using the Bing news API.

# Design

For the client, I chose the React library because it is popular, and for its ability to describe complex and dynamic interfaces using small, stateful, composable components without needing to work directly with the DOM.

For the server, I chose to use an Azure function in order to create an abstraction for both the search provider that was used and the API key because it shouldn't be on exposed on the client. Also, if I decide to use another news search provider in the future, I can leave the client alone, and just modify the Azure function.

# Usage:

In order to use the app, visit a demo installation at:

> https://teresajbocchini.github.io/UICNews

# Deployment:

### Client:

###### In order to deploy the web client on your own server:

1. Install [nodejs](https://nodejs.org).
2. Clone this repository.
3. run `npm install` in the `client` folder to install the dependencies.
4. Run `npm run build` in the `client` folder to create the deployment artifacts.
5. Once the build process completes successfully, take the contents of the generated `build` folder and upload it to your server.
6. Visit `index.html` in a web browser.

###### In order to deploy using Github pages:

1. Fork this repository on Github.
2. Update the `homepage` property in `package.json` in the `client` folder with:

   > https:/<GITHUB ACCOUNT>.github.io/<REPOSITORY NAME>

   For example:

   > https://teresajbocchini.github.io/UICNews

3. In the `client` folder, run `npm run deploy`.
4. Once it completes successfully, visit the website at:

   > https://<GITHUB ACCOUNT>.github.io/<REPOSITORY NAME>

### Server:

If you'd like to deploy the server to your own Azure account, you will need to make sure you update `index.js` with your own Bing News Search API key, and then follow standard Azure processes for deploying function apps.

Instructions for that can be found at:

> https://docs.microsoft.com/en-us/azure/azure-functions/
