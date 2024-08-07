#### Batman Frontend Project

This repository contains the frontend application for the Batman project.

##### Goals of the project

This project was created entirely based on my own idea, where the main goal - in addition to expressing my admiration for perhaps the most well-known hero of DC Comics - was to present my current knowledge of React.js as much as possible. During the implementation, I tried not to use additional libraries or ready-made components, but rather tried to build everything from the ground up.

##### Technical details

Some of the information in the project comes from the API provided by [Comic Vine](https://comicvine.gamespot.com), but it should be noted that this API was not suitable to be automatically implemented in the project without further editing, filtering and modification. It happened that a data or data structure had to be requested in a more complicated way, because certain filters of the API did not yield results, even though the data was available - there were several forum posts about this on their website, but for now there is no prospect of a fix being made.

A significant part of the information comes from my own sources, collected data from movies and game software related to the character. In order for this data to be available to the application, I created a SQL database and uploaded the images related to the sources to my own storage.

Data from both sources - Comic Vine and my own - is served by the same server I created, from different endpoints. I have uploaded the source of this back-end code to GitHub, it is available [via this link](https://github.com/Pizzaboi87/batserver).

##### Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [License](#license)

##### Introduction

This project is a frontend application built using React, designed to interact with the BatServer backend API. It provides a user interface to browse and interact with data related to Batman movies, games, and ComicVine information.

##### Installation

Clone the repository and install the dependencies using npm:

```bash
git clone <repository-url>
cd batman
npm install
```

##### Usage

To start the development server:

```bash
npm run dev
```

This will start the development server using Vite, and you can view the application at `http://localhost:3000`.

##### Scripts

- `dev`: Starts the development server using Vite.
- `build`: Builds the production-ready application.
- `preview`: Serves the production build locally for preview.
- `host`: Starts the development server with a custom host configuration.

##### Dependencies

- **react**: JavaScript library for building user interfaces.
- **react-dom**: React package for working with the DOM.
- **react-query**: Data fetching and caching library for React.
- **react-router-dom**: DOM bindings for React Router.
- **react-transition-group**: An easy way to perform animations when a React component enters or leaves the DOM.
- **styled-components**: Library for styling React components.
- **xtypejs**: JavaScript library for validating data types.

##### DevDependencies

- **@types/react**: TypeScript type definitions for React.
- **@types/react-dom**: TypeScript type definitions for React DOM.
- **@vitejs/plugin-react**: Vite plugin for React support.
- **vite**: Fast, opinionated web dev build tool.

##### License

This project is licensed under the ISC License.

---

This README provides an overview of the Batman frontend project, including installation instructions, usage guidelines, available scripts, and a list of dependencies and devDependencies. Adjust the `<repository-url>` in the installation instructions with your actual repository URL.

Thank you for reading.

![Batman Logo](https://peterweiser.com/items/bat.png)
