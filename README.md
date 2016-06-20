# restez-example-bookstore
A quick example of how the RestEZ server can be used

Install dependencies

    > npm install
Navigate to source folder

    > cd \src\
Install typings

    > typings install
Compile Typescript

    > tsc --outDir ..\release
Set CONNECTION_STRING environment variable

In command prompt:

    > set CONNECTION_STRING="mongodb://user:password@yourmongohost/yourmongodb"
In PowerShell:

    > $env:CONNECTION_STRING="mongodb://user:password@yourmongohost/yourmongodb"
Start the RestEZ Server

    > node ..\release\main.js
    
To see the server in action, point your favourite REST client (e.g. Postman) at http://localhost:3000/api/book
