![](RackMultipart20230329-1-vffia2_html_28dd08ff51f8fef2.png)

**GraphQL is a query language for our API** , it technically exists as a layer in between your frontend and backend. The client which is a frontend will use this query language to request data from the API, and GraphQL will take that into consideration, then it will decide what to return or what to do based on that request.

 Unlike SQL or other Database languages, the GraphQL exists in between the frontend and the backend whereas other query languages exist in between Backend and Databases to query records.

 This also means that GraphQL is not tied to any specific Database, instead it queries your API's and not your Database.

 I know this is a bit confusing for you right now if you are reading about GraphQL for the 1st time, but believe me we will make it easy and you will get it! 🤯

**How does GraphQL differ from a normal API request?**

There is an interesting distinction you can observe, Technically in GraphQL there are 2 types of requests(also called types).

  - Query
  - Mutation

_ **Query** _ - Think of query in this way, say if you are in the Frontend and want to make a request for some sort of data, you are going to make a query. And all of the logic will stay inside the query.GraphQL query is the equivalent of **GET** request in **REST**.

(OR)

Queries are used to fetch data from a server. If you want to get data from your API, you call a query.

_ **Mutation** _- A mutation in a GraphQL operation that allows you to insert new data or modify the already existing data on the server-side. GraphQL mutations are the equivalent of **POST** , **PUT** , **PATCH** & **DELETE** requests in **REST.**

(OR)

Mutations are used to modify or write server side data. If you want to update data in your API, you call a mutation.

With GraphQL you don't need to specify what kind of HTTP request you are making from the frontend. You just have to specify if you are making a query or mutation and GraphQL will handle it. So it removes extra burden from your shoulders about what kind of requests or methods you are using.

**What are the differences between a GraphQL API and** [**REST API**](https://aws.amazon.com/what-is/restful-api/)?

1. _ **One Endpoint** _ -

Unlike REST API where we create multiple endpoints for different operations, in graphQL we will send query/mutation (requests) to a single endpoint.

 Imagine a social media platform like Facebook, where there must exist multiple Endpoints like -
**/user**

**/followers**

**/posts**

But in the case of GraphQL, there will only be 1 end point, i.e. - **/graphql,** where all query/mutations(requests) will be sent.

1. **Overfetching / Underfetching -**

![](RackMultipart20230329-1-vffia2_html_3d296d53839b3203.png) ![](RackMultipart20230329-1-vffia2_html_28763832b781e0d4.png) ![](RackMultipart20230329-1-vffia2_html_7d452921d40ded88.png)

In the REST structure, we either over fetch the data to show a particular set of information which we need to display on the frontend or we just underfetch making multiple API calls and then display parts of data.
 Fetching the data from the backend and loading it on the frontend is 1 of the most expensive operations, so using GraphQL we can overcome this issue. We will see this further in the blog.

1. **GraphQL can be faster**

This is a very subjective thing as many REST API's are highly performant. But mostly when there is a scenario where we have to make multiple API calls and each endpoint has some delay associated with it (Asynchronous behaviour) to receive the data, in comparison to the [GraphQL](https://graphql.org/) where we need to send the query/mutation(request) to one single endpoint, here GraphQL supersedes REST.
 But now you could be thinking about the scenario,

_where we have to make only 1 REST API call, what will happen then?_
 In that case, depending on the request REST can be faster than GraphQL and vice versa.

**Data Types in GraphQL**

1. **Int** : A signed 32‐bit integer.
2. **Float** : A signed double-precision floating-point value.
3. **String** : A UTF‐8 character sequence.
4. **Boolean** : true or false.
5. **ID** : The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialised in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.

There are 5 kinds of[Data types](https://graphql.org/learn/schema/#gatsby-focus-wrapper) in GraphQL. But you can create custom data types as well using these.

 Imagine there is a user who has some properties associated with him, like his basic traits (name, age etc). He has many friends who are also users of a particular social media app and they share videos and each video has some metadata associated with it, like **id, title and description.**

You want to create these data types as well to store such values, how would you do that?

_ **type User {** _

_ **id: ID,** _

_ **name: String,** _

_ **age: Int,** _

_ **height: Float,** _

_ **isMarried: Boolean,** _

_**friends: [User],**_

_**videoPosted: [Video]**_

_ **}** _

_ **type Video {** _

_ **Id: ID,** _

_ **title: String,** _

_ **Description: String** _

_ **}** _

Generally we do not make every field required, but there are times when we make the field required. So to make any field value type required or a field value of a particular type, we use !(exclamation mark).

_ **type User {** _

_ **id: ID!,** _

_ **name: String!,** _

_ **age: Int!,** _

_ **height: Float!,** _

_ **isMarried: Boolean!,** _

_**friends: [User!]!,**_

_**videoPosted: [Video!]**_

_ **}** _

In the above example we have made the type of the values required for different fields. Now let's understand `_**friends: [User!]!,`**_ this line.
 Here we are making the array type of friends User, required, if in case friends exist, also we are making the array required by adding [User]! Line.

Now you're understanding the gist of how[GraphQL](https://graphql.org/learn/) works.

**Working with GraphQL APIs**

Every GraphQL API must have a schema and the schema isn't as same as the Database schema, it's just a schema which will define all the data that will exist inside the API.

 Every GraphQL schema will have a root type called query and inside of the query will have a list of all queries which you want to make from the frontend to request data from the API.

Eg - The below query will be requesting 2 things,
 1. A list of users

2. Information about a specific user by id.

type Query {

users: [User]

user(id:): User

}

So now you have got a basic idea regarding GraphQL API. Now we will understand how our GraphQL server interacts with our Client side application, where our client side application is a React.js App.

To create our Application, we will be using [Rick and Morty API](https://rickandmortyapi.com/graphql) open source GraphQL API.

We will be using React.js for developing our Client side application, to learn more about React.js, you can visit [official React docs](https://react.dev/).

**Connecting a GraphQL server to a React.js Application**

To create a React.js app a modern way is to use Vite/Parcel, but for learning purposes, we will be using CRA (Create React App).

To create a react app using CRA, open your terminal and write

_ **npx create-react-app rick-morty** _

After creating the basic React.js app, we will be connecting our [GraphQL](https://graphql.org/)Endpoint using [Apollo Client](https://www.apollographql.com/docs/react/). There are a lot of frameworks available which can be used in place of Apollo, but we will be using Apollo Client as by far it is most widely used.

Go to your terminal and copy paste this command to[setup Apollo client](https://www.apollographql.com/docs/react/get-started)

**npm install @apollo/client graphql**

Now our dependencies are set up, we can now initialize an ApolloClient instance. Remember this! The root of our react.js app directory is in the index.js file. So navigate to the index.js file and import the symbols we need from @apollo/client.

Copy paste this on the top of index.js file.

import {

ApolloClient,

InMemoryCache,

ApolloProvider,

gql,

} from"@apollo/client";

Now we'll initialize the ApolloClient, by passing an object in its constructor, that is a configuration object to be precise.
 So now again, navigate to the index.js file and add the following lines below the line where all the import statements are done importing.

constclient = newApolloClient({

uri:"https://rickandmortyapi.com/graphql",

cache:newInMemoryCache(),

});

This is the client which is going to have all the information about our GraphQL server. A very good thing GraphQL does is [caching](https://graphql.org/learn/caching/). It means, if a request is sent before it will cache/memoize it and later when the same request is done, instead of again sending request to the server, it'll call the cached result and will return it.

Now we need to connect the Application to the GraphQL, we need ApolloProvider

which we have already imported. We will wrap our app using this like shown below and will supply it with a prop called client.
```
constclient = newApolloClient({

uri:"https://rickandmortyapi.com/graphql",

cache:newInMemoryCache(),

});

constroot = ReactDOM.createRoot(document.getElementById('root'));

root.render(

\<React.StrictMode\>

\<ApolloProviderclient={client}\>

\<App/\>

\</ApolloProvider\>

\</React.StrictMode\>

);
```

The Client is telling us, this is the endpoint and thus we want to make query to this endpoint, and the ApolloProvider which is wrapping your App is taking client as props and making that interpretation.

**Writing our first Query**

![](RackMultipart20230329-1-vffia2_html_e56ebe65561b25d2.png)

This is our query, where we are requesting characters or rick and morty, and it should return id, name, gender, image of the requested characters.

![](RackMultipart20230329-1-vffia2_html_3bd03a2c548a7bd3.png)

This is the response returned by the graphql endpoint. Here you can observe tat every record has only the requested parameters.

You can try writing this query on a [GraphQL Playground](https://rickandmortyapi.com/graphql) and observe the response for this API.

So now, we will be iterating over the response and appending it in each card.

Now run your application by writing, npm start on your terminal.

Go to the folders structure and inside src directory, create another directory/folder with name pages. And inside that create a file named CharactersList.js

![](RackMultipart20230329-1-vffia2_html_7a5779c3cfdaab7c.png)

Note - Remove all the boiler plate code from App.css and index.css. Apart from this, remove the header from App.js.

![](RackMultipart20230329-1-vffia2_html_7b313dced1e4717d.png)

Now after the refresh, you will observe the empty screen in your react app.

**Querying the GraphQL API in our react.js App.**

We need the [useQuery](https://www.apollographql.com/tutorials/lift-off-part1/10-the-usequery-hook) hook in our React.js Application.

**Why do we need useQuery hook?**

The useQuery hook is a primary API which is required to execute our query in React Application. We run a query within a React component by calling [useQuery](https://www.apollographql.com/tutorials/lift-off-part1/10-the-usequery-hook) and passing it our GraphQL query string.

First, we need to import useQuery from the @apollo/client package (we're already importing gql):

import { useQuery, gql } from "@apollo/client";

So after importing the statement, we will get something back from the useQuery hook, we'll see it later. For now just imagine we are going to get something back. ![](RackMultipart20230329-1-vffia2_html_5bf8fc1975143386.png)

The way we can add a GraphQL query is by utilising **gpl** which we also get from **"@apollo/client"** as well.

So outside of a component, we give our [GraphQL query](https://graphql.org/learn/queries/) a name, and the naming convention is to name it in All uppercase letters in the string. Remember to pass the query which you need to execute in backticks **` `**.

Now paste this query inside your useQuery Hook.
```
// Naming our query

constGET\_CHARACTERS = gpl`

query {

characters {

results {

id

name

gender

image

}

}

}

`;

**Naming our query**

// Naming our query

constGET\_CHARACTERS = gpl`

query {

characters {

results {

id

name

gender

image

}

}

}

`;

constCharactersList = () =\> {

constgetSomething = useQuery(GET\_CHARACTERS);

**Passing our query as an argument**

So after passing this query, now we will receive an object, In this object we get 3 main properties -

We are renaming **getSomething** to **object**.

constCharactersList = () =\> {

constgetSomething = useQuery(GET\_CHARACTERS);

**To**

**const**** CharactersList **** = () **** =\> **** {**

**const**** object **** = **** useQuery****(****GET\_CHARACTERS****);**

1. **object.error -** If an error occurs it will be populated inside the object.error.
2. **object.loading -** A boolean value, if our Application is loading or fetching the data, if it is true or not.
3. **object.data -** This is our actual data which we will receive as a response.

**object****. ****error**** ;**

**object****. ****loading**** ;**

**object****. ****data**** ;**

So let's destructure and console this to see their true values.

constCharactersList = () =\> {

const {error, loading, data} = useQuery(GET\_CHARACTERS);

console.log(error, loading, data);

return\<\>\</\>;

};
```
Before that go to your App.js file and import this component and later check the logs.

![](RackMultipart20230329-1-vffia2_html_49ef69384c9071d0.png)

**App.js file**

![](RackMultipart20230329-1-vffia2_html_7b61422b4b3dd05b.png)

**Console**

**Mapping data in our component**
```
**import**** React ****from****"react" ****;**

**import**  **{**  **useQuery**** , **** gql **** } **** from ****"@apollo/client"**** ;**

**// Naming our query**

**const**** GET\_CHARACTERS **** = **** gql ****`**

**query**  **{**

**characters**  **{**

**results**  **{**

**id**

**name**

**gender**

**image**

**}**

**}**

**}**

**`;**

**const**** CharactersList **** = () **** =\> **** {**

**const**  **{**  **error**** , **** loading ****,**  **data**  **} =**  **useQuery**** ( ****GET\_CHARACTERS**** );**

**console****. ****log**** ({ **** error ****,**  **loading**** , **** data **** });**

**return** **(**

**\<\>**

**{**** data ****.**** characters ****.**** results ****.**** map****((****character****)**  **=\>**  **{**

**return** **(**

**\<**** div ****\>**

**\<**** img ****src**** = ****{**** character ****.**** image ****}**** /\>**

**\<**** h2 ****\>**** { ****character****. ****name**** } ****\</**** h2 ****\>**

**\</**** div ****\>**

**);**

**})****}**

**\</\>**

**);**

**};**

**export**** default ****CharactersList**** ;**
```

**Appending Name and Image in our component**

![](RackMultipart20230329-1-vffia2_html_394dd2479b174caa.png)

**Yayy! We did it. Now we can see the names and images in our React.js Application**

Adding some basic styling results us with, ![](RackMultipart20230329-1-vffia2_html_75307ff771b0d7b7.png)

So now we have learnt how to query a GraphQL API in our React.js App and display the results on the browser.

**Creating a Query Hook**

What is a hook?

- At the end of the day hook is nothing more than a function which can be called anywhere possible.

Why should we create custom hooks?

- Good developers implement but to be a better developer, you have to also understand how you should separate the excessive logic from the UI layer of the application. So creating custom hooks does exactly the same for us.

So, our custom hook looks like this.

```
import { useQuery, gql } from"@apollo/client";

// Naming our query

constGET\_CHARACTERS = gql`

query {

characters {

results {

id

name

gender

image

}

}

}

`;

constuseCharacters = () =\> {

const { error, loading, data } = useQuery(GET\_CHARACTERS);

return { error, loading, data };

};

exportdefaultuseCharacters;

Calling our custom hook in the Function. Observe how clean the Component file looks now.

importReactfrom"react";

importuseCharactersfrom"../hooks/useCharacters";

import"./CharacterList.css";

constCharactersList = () =\> {

const { error, loading, data } = useCharacters();

return (

\<divclassName="CharacterList"\>

{data?.characters?.results?.map((character) =\> {

return (

\<div\>

\<imgsrc={character?.image}/\>

\<h2\>{character?.name}\</h2\>

\</div\>

);

})}

\</div\>

);

};

exportdefaultCharactersList;
```

**Query with variables**

Now imagine if we want to get redirected to a new page when we click on a peculiar character and want more details about the character. So how would we do that?

![](RackMultipart20230329-1-vffia2_html_579e0d7eff787c6d.png)

So this is how you would [query](https://rickandmortyapi.com/graphql)for singular character information.

Let's create the above mentioned functionality (when you click on a card, it redirects you to a new page).

Install [react-router-dom](https://reactrouter.com/en/main) and also wrap the application with \<BrowserRouter\> in the index.js file, as shown below.

```
root.render(

\<React.StrictMode\>

\<BrowserRouter\>

\<ApolloProviderclient={client}\>

\<App/\>

\</ApolloProvider\>

\</BrowserRouter\>

\</React.StrictMode\>

);
```

Now navigate to the App.js file and also check if react-router is installed or not. If not just open your terminal and write **npm i react-router**

We will create Routes using React-Router-Dom.Before creating routes, first of all import these 2 lines in your index.js at the top.
```
import { BrowserRouter } from"react-router-dom";

import { Route, Routes } from"react-router";
```
Now we want to create 2 routes,

1. The home directory route, where our home page is present and it displays all the characters.
2. Second will navigate us to a page about the character info, when we click on a particular character using its ":_ **id.** _

Go to the index.js and modify the code inside render() as shown below,
```
root.render(

\<React.StrictMode\>

\<BrowserRouter\>

\<ApolloProviderclient={client}\>

\<Routes\>

\<Routepath="/"element={\<CharactersList/\>}/\>

\<Routepath="/:id"element={\<CharacterInfo/\>}/\>

\</Routes\>

\</ApolloProvider\>

\</BrowserRouter\>

\</React.StrictMode\>

);
```
Now, let's create an additional hook for displaying info about a particular character as we did before. The query for this particular query is as mentioned below.

![](RackMultipart20230329-1-vffia2_html_3ed22ab4c89e4cc1.png)

Now you can see the response from the query as well.

To create a new customHook with name **useCharacterInfo,** go to the src/hooks folder and create a new file called, useCharacterInfo.
```
import { useQuery, gql } from"@apollo/client";

// Naming our query

constGET\_CHARACTER\_INFO = gql`

queryGetCharacterInfo($id: ID!) {

character(id: $id) {

name

id

image

episode {

name

episode

}

}

}

`;

constuseCharacterInfo = (id) =\> {

const { error, loading, data } = useQuery(GET\_CHARACTER\_INFO, {

variables: {

id,

},

});

return { error, loading, data };

};

exportdefaultuseCharacterInfo;
```
Here id is a variable entity, so to pass variables in the query. We have put the id inside the variables, which is justified.

Now import this hook in your **CharacterInfo.js** component and let's try to render the info of any character when it gets redirected to this page.

To dynamically redirect to a character page modify the CharacterList component and replace div with Link. Do not forget to import the Link as well, as shown below.
```
importReactfrom"react";

importuseCharactersfrom"../hooks/useCharacters";

import"./CharacterList.css";

import { Link } from"react-router-dom";

constCharactersList = () =\> {

const { error, loading, data } = useCharacters();

return (

\<divclassName="CharacterList"\>

{data?.characters?.results?.map((character) =\> {

return (

\<Linkto={`/${character.id}`}key={character.id}className="Link"\>

\<imgsrc={character?.image}/\>

\<h2\>{character?.name}\</h2\>

\</Link\>

);

})}

\</div\>

);

};

exportdefaultCharactersList;

Now use [useParams](https://reactrouter.com/en/main/hooks/use-params) hooks to read the id parameter from the link.

importReactfrom"react";

import { useParams } from"react-router";

importuseCharacterInfofrom"../hooks/useCharacterInfo";

import"./CharacterInfo.css";

constCharacterInfo = () =\> {

const { id } = useParams();

const { data, loading, error } = useCharacterInfo(id);

Now complete the code as shown below for the CharacterInfo.js page and we will be fine to display the individual character page.

importReactfrom"react";

import { useParams } from"react-router";

importuseCharacterInfofrom"../hooks/useCharacterInfo";

import"./CharacterInfo.css";

constCharacterInfo = () =\> {

const { id } = useParams();

const { data, loading, error } = useCharacterInfo(id);

if (error) {

return\<div\>Something went wrong.\</div\>;

}

if (loading) {

return\<div\>Loading...\</div\>;

}

return (

\<divclassName="CharacterInfo"\>

\<imgsrc={data?.character?.image}width={750}height={750}/\>

\<divclassName="Character-content"\>

\<h1\>{data?.character?.name}\</h1\>

\<p\>{data?.character?.gender}\</p\>

\<divclassName="Character-episode"\>

{data?.character?.episode?.map((episode) =\> {

\<divkey={episode.episode}\>

\<h3\>

{episode.name} - \<b\>{episode.episode}\</b\>

\</h3\>

\</div\>;

})}

\</div\>

\</div\>

\</div\>

);

};

exportdefaultCharacterInfo;
```
![](RackMultipart20230329-1-vffia2_html_6a6de71df1301628.png) Yayy! We did it again together and now we can dynamically navigate to any character page.

 So concluding this here, we learn what a query is and how to write a basic query, also the query with variables such as id. Now you are set to deep dive into the subject and also create something of your own as well.

Just try to do what we have done till now and all your doubts will be cleared.

I'm adding the Github repository for your reference.

[https://github.com/akashbhadouria/rick-morty-graphql.git](https://github.com/akashbhadouria/rick-morty-graphql.git)

Thanks for being here with me, hope to see you soon again.















_______________________________________________________________________________________________________________________________________

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

