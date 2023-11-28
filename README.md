# [<span><img width="35px" src="./public/favicon.svg" /></span> Weather app](https://hydrobee3000.github.io/weather/)

This is a simple weather forecast app that allows users to view current weather conditions and add their favorite places to track the weather.

The application is hosted on ***https://hydrobee3000.github.io/weather/***

---

### **Contents:**
- [Features](#Features)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Project Structure](#ProjectStructure)

---

# Features <a name="Features"></a>

> - Access real-time weather updates for a chosen location.
> 
> - Utilize ***local storage*** for convenient management of favorite locations, allowing effortless addition and removal.
> 
> - ***Switch*** between light and dark ***themes*** to customize your visual experience.
> 
> - ***Installable Application***: The application is installable on devices for convenient access.
> 
> - ***Responsive Design***: The application is designed with responsiveness in mind, ensuring proper display on various devices.


# Technologies Used <a name="TechnologiesUsed"></a>

- `Typescript`
- `React`
- `react-router-dom`
- `Redux`
- `redux-thunk`
- `Ant Design`
- `Axios`
- `SCSS`
- `localStorage`


# Installation <a name="Installation"></a>

> Clone the repository
>    ```sh
>    git clone https://github.com/Hydrobee3000/weather.git
>    ```
>    
> Install npm packages
>    ```sh
>    npm install
>    ```
>    
> Run the project
>    ```sh
>    npm start
>    ```


# Project Structure <a name="ProjectStructure"></a>

- `public`: Holds public resources, including the favicon, that can be directly used in HTML.
- `src`
   - `src/components` - Contains reusable React components.
   - `src/pages` - Contains components representing individual pages of the application.
   - `src/redux` - Holds Redux-related files, including the store, actions, and reducers.
   - `src/utils` - Hosts utility functions that can be used across different parts of the application.
   - `src/api` - Contains files related to API interaction, such as functions for server requests.
   - `src/hooks` - Contains custom hooks that provide reusable logic for components.
