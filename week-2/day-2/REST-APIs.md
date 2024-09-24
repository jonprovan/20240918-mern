# REST APIs
- API = Application Programming Interface
- REST = REpresentational State Transfer
- we want data to be reliably represented throughout our process
- the state of our record/object/item/etc. will take on different representations, depending on the DB/backend API/frontend server/browser, etc.
- DB -> SQL, NoSQL, HANA, Document-Based, Graph, Blockchain
- Backend -> Java, .NET, JS, etc.
- we need to be careful about coupling -- loose coupling preferable to tight coupling
- loose coupling enables systems to act independently, not dependent on any one particular other system
- we want our backend API to have a set of communication rules/principles so anyone can talk to it, and it can talk to anyone

# REST API PRINCIPLES
- these are universal for all REST APIs
- REST is NOT a protocol, just a set of guidelines

1. Layered Systems
- a backend may or may not be a single server
- the client has no idea what system(s) is/are involved in responding to a request
- the server has no idea where it lives in the chain

2. Client/Server Decoupling
- neither client nor server knows what's going on inside the other
- neither one manipulates the internals of the other
- all each knows is that it's sending/receiving a request and responding to it
- each just needs to know either where to send the request or what to do
- note -- this necessarily means that we have separate frontend/backend servers

3. Statelessness
- an API should not retain ANY state about records/object in the database/system
- it should also not retain ANY information about users/requests
- state of objects WILL pass through it as part of request handling, but it doesn't hold onto any of it
- ALL information needed to process a request MUST be included in the request
- the "state" of a session, i.e., a user returning for an additional request is still maintained client-side
- we can use basic auth, JWT tokens, OAuth, etc. to hold onto the state in the browser/frontend app, etc.

4. Uniform Interface
- interface here refers to URL/URI -- the location of an object/resource
- no matter where you're accessing a resource from, the location should be the same
- it also shouldn't change over time
- a resource should only be available at ONE location
- locations should generally be based on some non-changing property

5. Cacheability
- this is largely optional
- we should specify which resources are allowed to be cached
- the intention is to speed up access to common resources
- we're not gonna focus on this one too much

6. Code On Demand
- optional in general
- most of the time (and basically all the time for us) the resources are "static"
- however, sometimes, we can serve up runnable code
- REST APIs can be allowed to serve up code/apps and specific that they're allowed to be run as such
