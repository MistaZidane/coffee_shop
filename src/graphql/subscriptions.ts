/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
    onCreateContact(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
    onUpdateContact(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
    onDeleteContact(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
export const onCreateSiteInfo = /* GraphQL */ `
  subscription OnCreateSiteInfo($filter: ModelSubscriptionSiteInfoFilterInput) {
    onCreateSiteInfo(filter: $filter) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSiteInfo = /* GraphQL */ `
  subscription OnUpdateSiteInfo($filter: ModelSubscriptionSiteInfoFilterInput) {
    onUpdateSiteInfo(filter: $filter) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSiteInfo = /* GraphQL */ `
  subscription OnDeleteSiteInfo($filter: ModelSubscriptionSiteInfoFilterInput) {
    onDeleteSiteInfo(filter: $filter) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
