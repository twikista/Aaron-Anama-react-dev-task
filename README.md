# Frontend Implementation of GraphQL E-commerce server

This project is a frontend implentation of a GraphQL based e-commerce server. The application's UI is implemented with React. Apollo Client is used to make remote calls to server and manage general UI state. Redux is used to manage cart state. Local Storage is used to persist Redux state.

## Table of contents

- [Features](#implemented-features)
- [Tecnology used](#technology-used)
- [Tools](#tools)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgment](#acknowledgement)

## Implemented Features

- A particular item can be added to cart only once. Subsequent click of the 'add to cart' button increase the amount of the item in cart
- Decreasing cart item amount below 1 removes the item from cart
- items can be added to cart only when attributes are selected (except where item does not have any attribute)
- Total amount of items in cart are dynamcally displayed on cart badge
- Minicart overlay can be closed on click outside the minicart
- Items that are out of stock are not clickable

## Technology Used

- React
- Apollo Client
- Redux
- React Router
- Styled Compnents

## 3rd Party Libraries

- uniqid
- html-react-parser

## Tools

- create-react-app
- git & github

## Setup

To run this application locally:

1. Get the GraphQL endpoint and the instruction to launch it from [end point](https://github.com/scandiweb/junior-react-endpoint)

2. Clone this repo

```bash
$ git clone https://github.com/twikista/aaron-anama-react-dev-task.git
```

3. Go the root of the cloned repo and install dependencies

```bash
$ cd aaron-anama-react-dev-task && npm install
```

## Usage

To start the application, run ` npm start` to start the development server at http://localhost:3000/

## Acknowledgement

- [Scandiweb](https://fonts.google.com)
