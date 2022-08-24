import { gql } from "@apollo/client";

const GET_CURRENCIES = gql`
  query getCurencies {
    currencies {
      label
      symbol
    }
  }
`;

const Get_CATEGORY = gql`
  query getCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
`;

const GET_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

export { GET_CURRENCIES, Get_CATEGORY, GET_CATEGORIES, GET_PRODUCT };
