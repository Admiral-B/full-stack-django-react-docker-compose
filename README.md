# Compound Interest Calculator Full Stack demo (Django + React)

This project demonstrates a python django server backend API and a react typescript frontend, created using vite.

All compound interest calculations are performed on the backend, taking the prinicipal amount and interest rate from the frontend and returning a series of values for the interest amount.

![Demonstration GIF](demo.gif "Animated demonstration of Compound Interest Rate Calculator")

## Running the project with Docker
In order to run the project with Docker please ensure you have docker and docker-compose installed on your machine. Instructions on how to do this can be found [here](https://docs.docker.com/get-docker/)

Once docker and docker-compose are installed, in the root directory run the command:

    docker-compose up

This will build the backend and frontend images and run them in separate networked containers.

Once the docker-compose step is complete you will be able to view the frontend by navigating to [http://localhost:3000](http://localhost:3000)

## Running the project without Docker
In order to run the project without Docker you will need to ensure that you have both Python (to run the Django web framework) and NodeJS (to run the React frontend) installed on your machine. Instructions on how to so this can be found [here](https://www.python.org/downloads/) for Python and [here](https://nodejs.org/en/download/) for NodeJS.

Once both Python and NodeJS are installed, in the root directory run the command:

    yarn start-backend

Then open a new terminal window, in the same root directory, and run the command:

    yarn start-frontend

This will run the Django backend and the React frontend in separate terminal windows.

Once both the back and front end are running, you will be able to view the frontend by navigating to [http://localhost:3000](http://localhost:3000)

