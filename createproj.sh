#!/bin/bash

_cwd="${PWD}";

mkdir backend;
cd backend;
## Create new sln aand projects (based on Clean Architecture - Uncle Bob)

dotnet new sln ;# create solution file by same name name as current directory

dotnet new classlib -n Domain;
dotnet new classlib -n Persistence;
dotnet new classlib -n Application;
dotnet new webapi -n WebAPI;

dotnet sln add Domain;
dotnet sln add Persistence;
dotnet sln add Application;
dotnet sln add WebAPI;
dotnet sln list;

dotnet add Application reference Domain/;
dotnet add Application reference Persistence/;

dotnet add WebAPI reference Application/;

dotnet add Persistence reference Domain/;

cd $_cwd

#mkdir frontend;
#cd frontend;
#npx create-react-app --template typescript client-app

git clone git@github.com:DHI/DhiUiTemplate.git frontend

cd $_cwd

echo "Done create projects."
