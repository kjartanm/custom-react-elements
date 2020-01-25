# custom-react-elements
This repo contains a proof of concept implementation of how to mix React modules in a legacy framework.

It is organized as a sort of monorepo that can be deployed through Zeit Now (https://zeit.co/)

For local development:

`npm i -g now`

Then

`now dev`

See https://medium.com/@kjartanmuller/mixing-react-modules-into-a-legacy-application-ddc0c5660ecd?source=friends_link&sk=7fc35f4654d27c2422b6850b4de08667 for a write up.

About the PoC
The PoC is based on the the Backbone ToDo app (https://backbonejs.org/docs/todos.html), vamped up with some Material design.

To this I have added two React modules. One that is an alternative to the Backbone List-view (it is still there, hidden by a checkbox, to show that they are synched), and one that adds features to the editing of the todo. They both uses Material UI (https://material-ui.com/) so that the styles can be aligned with the Backbone app. These two modules are compiled and deployed independently of each other, but they still share mui-theme and Redux-store.

Demo: https://custom-react-elements.now.sh/

