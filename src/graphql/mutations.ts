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
export const createCarts = /* GraphQL */ `
  mutation CreateCarts(
    $input: CreateCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    createCarts(input: $input, condition: $condition) {
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
export const updateCarts = /* GraphQL */ `
  mutation UpdateCarts(
    $input: UpdateCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    updateCarts(input: $input, condition: $condition) {
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
export const deleteCarts = /* GraphQL */ `
  mutation DeleteCarts(
    $input: DeleteCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    deleteCarts(input: $input, condition: $condition) {
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
