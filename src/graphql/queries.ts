/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      info
      price
      imgUrl
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        info
        price
        imgUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCarts = /* GraphQL */ `
  query GetCarts($id: ID!) {
    getCarts(id: $id) {
      id
      name
      info
      price
      imgUrl
      number
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        info
        price
        imgUrl
        number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSiteInfo = /* GraphQL */ `
  query GetSiteInfo($id: ID!) {
    getSiteInfo(id: $id) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
export const listSiteInfos = /* GraphQL */ `
  query ListSiteInfos(
    $filter: ModelSiteInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSiteInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
