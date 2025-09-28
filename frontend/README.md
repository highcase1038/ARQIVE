This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the working front-end repo for The ArQive
DO NOT use the front-end in GlobalTraqs repo.

## Project overview:

This repo is pretty much working out of the box

Please check Discord for .env file info

Place .env file in the main ArQive directory with environment variables for either the Globaltraqs dev server or local Globaltraqs

Check the GlobalTraqs repo for detailed steps in setting up backend (WIP)

# About

Senior Design Project of redesigning of the website : [The ArQive](http://thearqive.com/)
Still In Development

# Rules 
Contribution Rules

✔️ Never work on master branch!

⚠️ Be sure to branch off the development branch for features WIP

⚠️ Branch off of the production branch for hot fixes


✔️ Create a new branch for each set of related bugs or set of related tasks, naming by:


type_PascalCase, example: feat_CareerPage, bug_CareerEmail.


Common short type tokens: wip (work in progress), feat (feature or design), bug (bug fixes)


💻 command to create new branch locally: git checkout -b bug_CareerEmail


⚠️ Important: Before creating a branch, check if someone already started to work on this task and if there's already a branch created for this task, and if there is, please checkout and track the branch with the 💻 command: git checkout --track origin/bug_CareerEmail


--track shorthand for git checkout -b [branch] [remotename]/[branch] where remote name is origin and branch is the specific branch you're pulling from the origin remote


Right after creating a new branch, push it to remote to make it available for everyone, defining the upstream


💻 command: git push -u origin bug_CareerEmail


✔️ Everyday after working, push your local branch updates to remote branch.


⚠️ Important: make sure you're on the correct branch... and push


With 💻 command: git push


✔️ Finished with the task and want to merge?


Fix conflicts if needed, usually happens when more than 1 developer is working on the same file on different branches - communicate with the other developer to make sure their work was not removed


Please make the merge/pull request with as much detail about what you've done/added.


Or lead will merge your branch to master for you. Just ask!

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs nodejs to directory - creates needed node_modules folder

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
