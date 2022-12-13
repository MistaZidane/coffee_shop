/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createSiteInfo = /* GraphQL */ `
  mutation CreateSiteInfo(
    $input: CreateSiteInfoInput!
    $condition: ModelSiteInfoConditionInput
  ) {
    createSiteInfo(input: $input, condition: $condition) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
export const updateSiteInfo = /* GraphQL */ `
  mutation UpdateSiteInfo(
    $input: UpdateSiteInfoInput!
    $condition: ModelSiteInfoConditionInput
  ) {
    updateSiteInfo(input: $input, condition: $condition) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
export const deleteSiteInfo = /* GraphQL */ `
  mutation DeleteSiteInfo(
    $input: DeleteSiteInfoInput!
    $condition: ModelSiteInfoConditionInput
  ) {
    deleteSiteInfo(input: $input, condition: $condition) {
      id
      email
      phone
      location
      createdAt
      updatedAt
    }
  }
`;
