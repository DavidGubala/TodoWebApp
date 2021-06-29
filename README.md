# TodoWebApp
This is a todo list web app combining a GraphQl back-end Api with a React front-end.

## Start Front End
`cd /fea_0 ` \
`yarn start `

Will be hosted on localhost:3000. \
The front end can currently send a query to the graphql api and render a list of Todos. \
Unfortunately, all three mutations (create, edit, delete) do not work.

#### Front End Demo Screenshot
![should be photo of front end](https://github.com/DavidGubala/TodoWebApp/blob/main/docs/front-end-demo.PNG)

## Start Back End
`cd /TodoApi` \
`yarn start`

Will be hosted on port 3001. \
Interaction with graphql api through localhost:3001/graphql.

Queries: \
&nbsp;&nbsp; todos \
Mutations: \
&nbsp;&nbsp; createTodo \
&nbsp;&nbsp; updateTodo \
&nbsp;&nbsp; deleteTodo 

Proper testing of the service and resolver is yet to be done.

#### GraphQL Demo Screenshot
![should be photo of back end](https://github.com/DavidGubala/TodoWebApp/blob/main/docs/back-end-demo.PNG)
