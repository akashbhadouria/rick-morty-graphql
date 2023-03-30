![GitHub - jaydenseric/graphql-react: A GraphQL client for React using modern  context and hooks APIs that is lightweight (< 4 kB) but powerful; the first  Relay and Apollo alternative with server side rendering.](https://repository-images.githubusercontent.com/119938939/31e4ae00-61c6-11e9-9225-ddb41dd76d8c)  
 

# How to Write a GraphQL Query
## A beginner’s guide to writing your first GraphQL query

### What is GraphQL?

GraphQL is a query language for APIs. It is, in fact, a layer that sits between your frontend and backend. Here, the client—a frontend—will use this query language to request data from the API, and GraphQL will take that into account before deciding what to return or how to proceed. It was developed by Facebook and open-sourced in 2015.

GraphQL resides between the frontend and the backend, unlike SQL or other database languages, whereas other query languages exist between the databases and the backend to query records.

This means that GraphQL just queries your APIs and is not bound to any particular database.

If you are reading about GraphQL for the first time, I get that it could sound a little complex, but believe me, just keep reading this article and I'll simplify it for you!

What distinguishes GraphQL from a typical API request?

Technically speaking, there are two different sorts of queries in GraphQL, which is a noteworthy distinction to observe (also called types): 🤯  
  
How does GraphQL differ from a normal API request?  
  
There is an interesting distinction you can observe, Technically in GraphQL there are 2 types of requests(also called types).  
-   *Query*
-   *Mutation*
    

**Query** - Think of query in this way, let's say you are in the Frontend and want to make a request for some sort of data, so, you are going to make a query and all of the logic will stay inside this query. GraphQL query is the equivalent of a GET request in REST.

						        (OR)  

Queries are used to fetch data from a server. If you want to get data from your API, you call a query.

**Mutation**  - A mutation in a GraphQL operation that allows you to insert new data or modify the already existing data on the server-side. GraphQL mutations are the equivalent of POST, PUT, PATCH & DELETE requests in REST.

							(OR)

Mutations are used to modify or write server side data. If you want to update data in your API, you call a mutation.

  

With GraphQL you don’t need to specify what kind of HTTP request you are making from the frontend. You just have to specify if you are making a query or mutation and GraphQL will handle it. So it removes extra burden from your shoulders about what kind of requests or methods you are using.



### What differentiates a GraphQL API from a [REST API](https://aws.amazon.com/what-is/restful-api/)?

  
1.  ***One Endpoint*** -
Unlike REST API where we create multiple endpoints for different operations, in graphQL we will send query/mutation (requests) to a single endpoint.  

Imagine a social media platform like Facebook where a single request hits multiple endpoints of different APIs.Using REST API results in multiple Endpoints like -  

    /user - Endoint to fetch the information of a user.
    
    /followers - Endpoint to fetch the information of their followers.
    
    /posts - Endpoint to fetch their posts on social media.

Whereas in the case of GraphQL, there will only be 1 end point, i.e. - `/graphql`, where all *`query/mutations(requests)`* will be sent.

2.  ***Overfetching / Underfetching*** -

![](https://lh6.googleusercontent.com/eD7wWnIcC4jnPk76_D6beSbfraOvNgwfhAmBl-QfHctRzK_aU5URBHTOqvHfXj0F23hUlMKuX_B41hWPqGysaDpl0FfyUY4XZYqlty7otlRjLmqBsMuO09dfHbPJloc7EFQ6ANgS7MBSyEbFQaCf)![](https://lh3.googleusercontent.com/S8KgZmoTnL9zkS01gsDZn_GyAAemEklSP4vVn3mE4pO5F-gAbV2hzNehC-RBI4NP-FbtguzyVkCikaIIaCTTevw71F8jrS3mH5AztB8METxMAPEqFbMcd-jj57U0uqmRSNtgUXn9EWDIDrfTW7Fa)![](https://lh3.googleusercontent.com/xEhYD-QcLf6Fq6oRCxDZfeTHm6W0cArfo37--9bzIhJORv5bQgMAi3LQ3HPE0TIOmpMNAsrwQBlOfKL0XUGI37wi5sfHq3eiL0X5i59jbgH6LHAkjBfZR-rXEoo4id6Y-AQc-V_d0aJvu3RoXSS0)

In the REST structure, we either over fetch the data to show a particular set of information which we need to display on the frontend, or we just underfetch making multiple API calls and then display parts of data.  
Fetching the data from the backend and loading it on the frontend is 1 of the most expensive operations! so using GraphQL, we can overcome this issue. We will see this further in the blog.

3.  ***GraphQL can be faster***

This is a very subjective thing as many REST API’s are highly performant. But mostly when there is a scenario where we have to make multiple API calls and each endpoint has some delay associated with it (Asynchronous behaviour) to receive the data, in comparison to the [GraphQL](https://graphql.org/), where we need to send the query/mutation(request) to one single endpoint, here GraphQL supersedes REST.  
But now you would be thinking about the scenario,

where we have to make only 1 REST API call, what will happen then?  
In that case, depending on the request REST can be faster than GraphQL and vice versa.

### **Data Types in GraphQL**

1.  **Int**: A signed 32‐bit integer. 
2.  **Float**: A signed double-precision floating-point value.
3.  **String**: A UTF‐8 character sequence.
4.  **Boolean**: true or false.
    
5.  **ID**: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialised in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.

There are 5 kinds of [Data types](https://graphql.org/learn/schema/#gatsby-focus-wrapper) in GraphQL. But you can create custom data types as well using these.  
  
Imagine there is a user who has some properties associated with him, like his basic traits (name, age etc). He has many friends who are also users of a particular social media app and they share videos and each video has some metadata associated with it, like id, title and description.

You want to create these data types as well to store such values, how would you do that?

  

    type User {
    		id: ID,
    		name: String,
    		age: Int,
    		height: Float,
    		isMarried: Boolean,
    		friends: [User],
    		videoPosted: [Video]
    }

    type Video {
    		Id: ID,
    		title: String,
    		Description: String
    }

Generally we do not make every field required, but there are times when we make the field required. So to make any field value type required or a field value of a particular type, we use !(exclamation mark).

    type User {
    		id: ID!,
    		name: String!,
    		age: Int!,
    		height: Float!,
    		isMarried: Boolean!,
    		friends: [User!]!,
    		videoPosted: [Video!]
    }

In the above example we have made the type of the values required for different fields. Now let’s understand `friends: [User!]!,` this line.  
Here we are making the array type of friends User, required, if in case friends exist, also we are making the array required by adding [User]! Line.


Now you’re understanding the gist of how [GraphQL](https://graphql.org/learn/) works.

  
  

**Working with [GraphQL](https://graphql.org/learn/) APIs**

  

Every GraphQL API must have a schema and the schema isn’t as same as the Database schema, it’s just a schema which will define all the data that will exist inside the API.  
  
Every GraphQL schema will have a root type called query and inside of the query will have a list of all queries which you want to make from the frontend to request data from the API.

  

Eg - The below query will be requesting 2 things,  
***1. A list of users
2. Information about a specific user by id.***

```
    type Query {
    	users: [ User]
    	user(id:): User
    } 
  ```

  
So now you have got a basic idea regarding GraphQL API. Now we will understand how our GraphQL server interacts with our Client side application, where our client side application is a React.js App.

To create our Application, we will be using [Rick and Morty API](https://rickandmortyapi.com/graphql) open source GraphQL API.

We will be using React.js for developing our Client side application, to learn more about React.js, you can visit [official React docs](https://react.dev/).

### **Connecting a GraphQL server to a React.js Application**

To create a React.js app, a modern and recommended way is to use Vite/Parcel, but for learning purposes, we will be using CRA (Create React App).
To create a react app using CRA, open your terminal and write,  
  

    npx create-react-app rick-morty

After creating the basic React.js app, we will be connecting our [GraphQL](https://graphql.org/) Endpoint using [Apollo Client](https://www.apollographql.com/docs/react/). There are a lot of frameworks available which can be used in place of Apollo, but we will be using Apollo Client as by far it is most widely used.

Go to your terminal and copy paste this command to [setup Apollo client](https://www.apollographql.com/docs/react/get-started)

>  npm install @apollo/client graphql

Now our dependencies are set up, we can now initialize an ApolloClient instance. Remember this! The root of our react.js app directory is in the index.js file. So navigate to the index.js file and import the symbols we need from `@apollo/client.`
Copy paste this on the top of `index.js` file.

    import {
    	ApolloClient,
    	InMemoryCache,
    	ApolloProvider,
    	gql,
    } from "@apollo/client";

Now we’ll initialize the ApolloClient, by passing an object in its constructor, that is a configuration object to be precise!  
So now, navigate to the `index.js` file and add the following lines below, the line where all the import statements are done importing.

    const client = new  ApolloClient({
    		uri:  "https://rickandmortyapi.com/graphql",
    		cache:  new  InMemoryCache(),
    });

This is the client which is going to have, all the information about our GraphQL server. An awesome thing GraphQL does is [caching](https://graphql.org/learn/caching/). It means, if a request is sent before it will `cache/memoize` it and later when the same request is sent, instead of again sending request to the server, it’ll call the cached result and will return it.

Now we need to connect the Application to the GraphQL endpoint, we need ApolloProvider which we have already imported. We will wrap our App using this like shown below and will supply it with a prop called client.

    const  client = new  ApolloClient({
    		uri:  "https://rickandmortyapi.com/graphql",
    		cache:  new  InMemoryCache(),
    });

Here we are using rick and morty graphql api as an uri and InMemoryChache for caching purposes.
	
    const  root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    		<React.StrictMode>
    		<ApolloProvider  client={client}>
    		<App />
    		</ApolloProvider>
    		</React.StrictMode>
    );

The Client is telling us, this is the endpoint and thus we want to make query to this endpoint, and the ApolloProvider which is wrapping your App, is taking the client as props and making that interpretation.

### Writing our first GraphQL Query
 
![](https://lh6.googleusercontent.com/JC0NHZohwXNnuHHJiEzvXY-bVyUjY6Haqh55G99iHQXIpcmZJ3NSReR-WWdo6POCaSBuhlDkeOiIP8o-JBptu_P-B_OoxtmBx1PNzgqecuYW0kBgQkniCbPV_6rvZRauPdh_yRMaJzH-kuzPQdzeyg)

This is our query, where we are requesting characters or rick and morty, and it should return id, name, gender, image of the requested characters.

![](https://lh3.googleusercontent.com/cV8ZJFGiwd4cG_UhL6j1vYguhB3vFVWZNaegHVsVeVmNitmaSRa4hkT2Xnx5LdI_qjP0ozCni6lCAIge9YytRXpM_TtE36I6oIUbUP6NQFo7Mp-PYQR9VDSUCy2r4zQENplh6T9Wgs29Ma1OqjN-VQ)

This is the response returned by the graphql endpoint. Here you can observe that every record has only the requested parameters.

You can try writing this query on a [GraphQL Playground](https://rickandmortyapi.com/graphql) and observe the response for this API.
So now, we will be iterating over the response and appending it in each card. Now run your application by writing the below command on your terminal. 

    > npm start

Go to the folders structure and inside src directory, create another directory/folder with name pages. And inside that create a file named `CharactersList.js`

![](https://lh3.googleusercontent.com/zegKYwJ73Je0uB5zf-3lVBgVSX1hR-uC70LATNvFou5PRoheH6SB4zh4_pVGgDYWZY5MjHjUnkp1cLlxzNjsRD4LBjSekAkEzQYEK5MsXszji38LC17-x8ccF74OlfYSEcpZ0-XDQjXZziZRe0haVw)  

**Note - Remove all the boiler plate code from App.css and index.css. Apart from this, remove the header from App.js.**

![](https://lh4.googleusercontent.com/044meW0VPVamWvvnGW-W6v9t4Fh_ncZi3R6NdHn77yST46i7hLdvxjnvDgeP5yqRD95t9F7TlNatmAzG5FjKCztHUMUXPSbbPa6YCTsvJzvbpCghljbTGquC1EnxSjlyuxnfoNL388-zeytmDZy0Zg)

Now after the refresh, you will observe the empty screen in your react app.

### Querying the GraphQL API response in our React.js App.

We need the [useQuery](https://www.apollographql.com/tutorials/lift-off-part1/10-the-usequery-hook) hook in our React.js Application.

**Why do we need useQuery hook?**
The useQuery hook is a primary API which is required to execute our query in React Application. We run a query within a React component by calling [useQuery](https://www.apollographql.com/tutorials/lift-off-part1/10-the-usequery-hook) and passing it our GraphQL query string.

First, we need to `import useQuery` from the @apollo/client package (we're already importing gql):

> `import { useQuery, gql } from "@apollo/client";`

So after importing the statement, we will get something back from the useQuery hook, we’ll see it later. For now just imagine we are going to get something back.![](https://lh3.googleusercontent.com/viT1TAc_jctEPCU2JQUKonssSpnCgYh3Cc-wX9kDqFx0H46prmr3vyYKHBCudUxflLHTBBgnHy1O517TofA05mAZKGJDjydW0QBisVTRV8soR787HQag1gBDY_Y-0VhOafaib6kemgTSwwKW27KU9g)

The way we can add a GraphQL query is by utilising gql which we also get from “@apollo/client” as well.

So outside of a component, we give our [GraphQL query](https://graphql.org/learn/queries/) a name, and the naming convention is to name it in All uppercase letters in the string. Remember to pass the query which you need to execute in backticks ` `.

Now paste this query inside your `useQuery` Hook.

    // Naming our query  
    const  GET_CHARACTERS = gql`
    query {
    	characters {
    	   results {
	    	id
	    	name
	    	gender
	    	image
    	   }
    	}
    }`;

**Naming our query**

    // Naming our query
    const  GET_CHARACTERS = gql`
	    query {
		 characters {
		    results {
			id
			name
			gender
			image
	          }
	     }
    }`;

  **Passing our query as an argument**

     const  CharactersList = () => { 
     const  getSomething = useQuery(GET_CHARACTERS);

So after passing this query, now we will receive an object, In this object we get 3 main properties -

We are renaming ***getSomething*** to ***object***.

    const CharactersList = () => {
    const getSomething = useQuery(GET_CHARACTERS);
> To

    const  CharactersList = () => {
    const  object = useQuery(GET_CHARACTERS);

1.  **object.error** - If an error occurs it will be populated inside the object.error.
2.  **object.loading** - A boolean value, if our Application is loading or fetching the data, if it is true or not.
3.  **object.data** - This is our actual data which we will receive as a response.
   
    ***object.error;
    object.loading;
    object.data;***

So let’s destructure and console this to see their true values.

    const  CharactersList = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    console.log(error, loading, data);
    return  <></>;
    };

Before that go to your `App.js` file and import this component and later check the logs.

![](https://lh4.googleusercontent.com/Lk6O0soHJPuRtQ8kOGhFaf9XbtlfwqMBsGxpfSwp0XRGhCsqIu1eSe645fUBA3V1cyDvxL-rpFj97-ogyWXFLdlAIpoA5eQSWMoxaZ8Ixiv0GJsLyHWOf7Ys1BTSWZuBbfWVvylhkYNHGHXn2ILHzA)  
*App.js file*

![](https://lh4.googleusercontent.com/SWTJmuVdNPlrjEiFzG7k49TyHVJN-vUbdZEpb65lgwE56L8rExlpdEpLjwFhxZESJIDXSHXTf-qYfc55MCqrlPOTZ741vTrldEP-NMk82SygLbrDuSjsCHpFU1d7-D4O23z7Qs3B2HKLdunJvQST5w)
*Console View*

**Mapping data in our component**

    import  React  from  "react";
    import { useQuery, gql } from  "@apollo/client";
    
    // Naming our query
    const  GET_CHARACTERS = gql`
	    query {
		 characters {
			 results {
				id
				 name
				 gender
				 image
		     }
	     }
    }`;

  

*CharacterList.js File*

    const  CharactersList = () => {
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    console.log({ error, loading, data });
    	return (
    	<>
    		{data.characters.results.map((character) => {
    		return (
    			<div>
    			<img  src={character.image}  />
    			<h2>{character.name}</h2>
    			</div>
    		);
    		})}
	   </>
		); 
	};
	export  default  CharactersList;

**Appending Name and Image in our component**

![](https://lh3.googleusercontent.com/A6pR141AxC5PUcxwwdyXtmPusquqb58YKzWDefoqoEqAQ5ebvxmFkfnA1K6_SgIafHlnGKZRYi7bHm2cAqerWbdQ0GeybFIf8mRTXx2eq27YgB211rtyw-aOAeYuHlNBuRl_qIlDGer02ta-nTQAug)

*Yayy! We did it. Now we can see the names and images in our React.js Application*
Adding some basic styling results us with,![](https://lh6.googleusercontent.com/uNn_tnXICs5MNKXkorabJ-559U4u-39W7kL_lij3jZZYVxAdfDQfi2XpuEitEBCa5NyUVvKI9b3lDnrpwynl4dKAeoi6hongP0hshka0jsqggjz0tts3HFdSwugwYoTd3PbmxI-yn9ua8fsaKgcA2w)

So now, we have learnt how to query a GraphQL API in our React.js App and display the results on the browser.

### Creating a Query Hook

**What is a hook?**

-   At the end of the day hook is nothing more than a function which can be called anywhere possible.

**Why should we create custom hooks?**

-   Good developers implement but to be a better developer, you have to also understand how you should separate the excessive logic from the UI layer of the application. So creating custom hooks does exactly the same for us.

So, our custom hook looks like this.

    import { useQuery, gql } from  "@apollo/client";
    // Naming our query
    
    const  GET_CHARACTERS = gql`
	    query {
		  characters {
			  results {
			       id
			       name
			       gender
			       image
		    }
	    }
    }`;
 

    const  useCharacters = () => {
    const { error, loading, data } =useQuery(GET_CHARACTERS);
         return { error, loading, data };
        };
        
        export  default  useCharacters;


*Calling our custom hook in the Function*.
 Observe how clean the Component file looks now.

    import  React  from  "react";
    import  useCharacters  from  "../hooks/useCharacters";   
    import  "./CharacterList.css";
     
    const  CharactersList = () => { 
    const { error, loading, data } = useCharacters();
    
    return (
	    <div  className="CharacterList"> 
		    {data?.characters?.results?.map((character) => {
		    return (
		    <div>
		    <img src={character?.image} />
		    <h2>{character?.name}</h2>
		    </div>
		    );  
		  })}
	    </div>
     );
       };
       
    export  default  CharactersList;

**
### Query with variables

Now imagine if we want to get redirected to a new page when we click on a peculiar character and want more details about the character. So how would we do that?

![](https://lh3.googleusercontent.com/wbOXGIUzO5GTzJWwoZ_Qfckfr4AudwP0oCooZ5DI27fITNo0f2_T5QC0LkBPJ9d_AExZLs5UaN5QYEaD15PB3-0anAr53o68OZ2Pi1libZXNQE9H_6K_TMwZ4tjaxcqzMottyeIHh3mRZedQLLaHuQ)

So this is how you would [query](https://rickandmortyapi.com/graphql) for singular character information.

Let’s create the above mentioned functionality (when you click on a card, it redirects you to a new page).

Install [react-router-dom](https://reactrouter.com/en/main) and also wrap the application with <BrowserRouter> in the `index.js` file, as shown below.

    root.render(
    	<React.StrictMode>
    	<BrowserRouter>
    	<ApolloProvider  client={client}>
    	<App  />
    	</ApolloProvider>
    	</BrowserRouter>
    	</React.StrictMode>
    );

Now navigate to the App.js file and also check if react-router is installed or not. If not just open your terminal and write npm i react-router

We will create Routes using React-Router-Dom.Before creating routes, first of all import these 2 lines in your index.js at the top.

    import { BrowserRouter } from  "react-router-dom";
    import { Route, Routes } from  "react-router";

**Creating Routes using React Router 6**  

Now we want to create 2 routes,
1.  The home directory route, where our home page is present and it displays all the characters.
2.  Second will navigate us to a page about the character info, when we click on a particular character using its **“:id"**.

Go to the `index.js` and modify the code inside `render()` as shown below,

    root.render(
	    <React.StrictMode>
	    <BrowserRouter>
	    <ApolloProvider  client={client}>
	    <Routes>
	    <Route path="/"  element={<CharactersList  />}  />
	    <Route path="/:id"  element={<CharacterInfo  />}  />
	    </Routes>
	    </ApolloProvider>
	    </BrowserRouter>
	    </React.StrictMode>
    );

Now, let’s create an additional hook for **displaying info about a particular character** as we did before. The query for this particular query is as mentioned below.

![](https://lh3.googleusercontent.com/HwKmI8FUAMNkIYCHYdjGzIg77_wKmLCzwyB3aZJ7uwLcjp8VrR3_lEdJ-P2EOPRNAzpePGQ_Xxj2NdUKY3ceAxQtkLDYT6ATe11X9yKipNj00e5Z4aD1_eP8HopZSP-pGIAM8X4EKHgS-HPBeCFTAg)

Now you can see the response from the query as well.

To create a new **customHook** with name **useCharacterInfo**, go to the src/hooks folder and create a new file called,`useCharacterInfo.js`.

    import { useQuery, gql } from  "@apollo/client";
    
    // Naming our query
    const  GET_CHARACTER_INFO = gql`
    query  GetCharacterInfo($id: ID!) {
	    character(id: $id) {
		    name
		    id
		    image
			episode {
			     name
			     episode
		       }
		}
    }`;

  

    const  useCharacterInfo = (id) => {
    const { error, loading, data } = useQuery(GET_CHARACTER_INFO, {
    	variables: {
		    id,
	    	},
	    });
	return { error, loading, data };
    };

    export default  useCharacterInfo;

Here id is a variable entity, so to pass variables in the query. We have put the id inside the variables, which is justified.

Now import this hook in your CharacterInfo.js component and let’s try to render the info of any character when it gets redirected to this page.

To dynamically redirect to a character page modify the `CharacterList` component and replace div with **Link**. Do not forget to **import** the **Link** as well, as shown below.

    import  React  from  "react";
    import  useCharacters  from  "../hooks/useCharacters";
    import  "./CharacterList.css";
    import { Link } from  "react-router-dom";
    
    const  CharactersList = () => {
    const { error, loading, data } = useCharacters();
    return (
	    <div  className="CharacterList">
		    {data?.characters?.results?.map((character) => {
		    return (
			    <Link to={`/${character.id}`}  key={character.id}  className="Link">
			    <img src={character?.image}  />
			    <h2>{character?.name}</h2>
			    </Link>
		    	);
		    })}
	    </div>
	   );
    };    
    export  default  CharactersList;
    
 **Reading ID from the Endpoint**
 
Now use [useParams](https://reactrouter.com/en/main/hooks/use-params) hooks to read the *id parameter from the link/endpoint*.

    import  React  from  "react";
    import { useParams } from  "react-router";
    import useCharacterInfo  from  "../hooks/useCharacterInfo";
    import "./CharacterInfo.css";
    
    const CharacterInfo = () => {
    const { id } = useParams();
    const { data, loading, error } = useCharacterInfo(id);

Now complete the code as shown below for the `CharacterInfo.js` page and we will be fine to display the individual character page.

    import React from "react";
    import { useParams } from "react-router";
    import useCharacterInfo from  "../hooks/useCharacterInfo";
    import "./CharacterInfo.css";
    
    const CharacterInfo = () => {
    const { id } = useParams();
    const { data, loading, error } = useCharacterInfo(id);
    if (error) {
	    return  <div>Something went wrong.</div>;
    }
    if(loading) {
	    return  <div>Loading...</div>;
    }
    return (
	    <div className="CharacterInfo">
		    <img src={data?.character?.image} width={750}  height={750}  />
		    <div className="Character-content">
		    <h1>{data?.character?.name}</h1>
		    <p>{data?.character?.gender}</p>
		    <div  className="Character-episode">
		    {data?.character?.episode?.map((episode) => {
		    <div key={episode.episode}>
			    <h3>
			    {episode.name} - <b>{episode.episode}</b>
			    </h3>
	    	    </div>;
	    })}
	    	</div>
	  </div>
    </div>
	    );
    };
    
    export default CharacterInfo;


![](https://lh4.googleusercontent.com/febnx0p-Lwm8ukFTX6bugLB6gTCxPDG8LQXi0ao_3UAUnWSuBoi5ol09nAlpSNcQ4jgT2P2vFvJc4XudXPJmWR3M1zdLRF9BSdiBqEztMqA3Yci4nshzDqW1LBxrhhpUO5936LdghS7P6CcH1XMMRw)Yayy! We did it again together and now we can dynamically navigate to any character page.  
  

**So concluding this here, we learn what a query is and how to write a basic query, also the query with variables such as id. Now you are set to deep dive into the subject and also create something of your own as well.**

Just try to do what we have done till now and all your doubts will be cleared.  

I’m attaching the **[Github](https://github.com/akashbhadouria/rick-morty-graphql.git)** repository for your reference.

**References**
 - [Github Repository](https://github.com/akashbhadouria/rick-morty-graphql.git)
 - [GraphQl Docs](https://graphql.org/)
 - [UseQuery](https://www.apollographql.com/docs/react/data/queries/)
 - [React Router V6](https://reactrouter.com/en/main/start/overview)
 - [React Docs](https://react.dev/)


Thanks for being here with me, hope to see you soon again. Keep learning keep growing! Hasta La Vista! 😍💖🙋🏻‍♂️

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

