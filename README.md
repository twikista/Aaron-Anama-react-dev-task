# GraphQL-Based E-commerce Store

This project utilizes a graphql e-commerce API to implement the frontend of an e-commerce store. The store features a product listing page (which render products based on the selected category), a product page (which provide more information about a selected product, enable users to choose preferred product attributes, and add the product to cart), and a Cart page (which lists all products in the cart and provides a summary of the total quantity and total amount of products in cart).

## Table of contents

- [Features](#implemented-features)
- [Tecnology used](#technology-used)
- [Tools](#tools)
- [Setup](#setup)
- [Usage](#usage)
- [Motivation](#motivation)
- [Acknowledgment](#acknowledgement)

## Implemented Features

- The store can scale to render any number of categories
- Cart badge which dynamically displays the number of items in cart
- Switch store currency (currently 5 currencies but scalable to any number of currencies)
- Directly add products to cart from listing page (for products with no attributes)
- Items in cart are persisted between browsing sessions
- Indicate products that are not in stock (not addable to cart)
- Minicart which provides quick summary of items in cart

## Technology Used

- React
- Apollo Client
- Redux
- React Router
- Styled Compnents
- Localstorage

## 3rd Party Libraries

- uniqid
- html-react-parser

## Tools

- create-react-app
- git & github

## Setup

To run this application locally:

1. Get the GraphQL endpoint and follow the instruction to launch it from [HERE](https://github.com/scandiweb/junior-react-endpoint)

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

## Motivation

- [Scandiweb](https://careers.scandiweb.com)

## Acknowledgement

- [Scandiweb](https://careers.scandiweb.com)
