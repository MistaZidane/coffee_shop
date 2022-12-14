/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactInput = {
  id?: string | null,
  name: string,
  email: string,
  message: string,
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  name: string,
  email: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  info: string,
  price: number,
  imgUrl: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  info?: ModelStringInput | null,
  price?: ModelIntInput | null,
  imgUrl?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  info: string,
  price: number,
  imgUrl: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  info?: string | null,
  price?: number | null,
  imgUrl?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCartsInput = {
  id?: string | null,
  name: string,
  info: string,
  price: number,
  imgUrl: string,
  number: number,
};

export type ModelCartsConditionInput = {
  name?: ModelStringInput | null,
  info?: ModelStringInput | null,
  price?: ModelIntInput | null,
  imgUrl?: ModelStringInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelCartsConditionInput | null > | null,
  or?: Array< ModelCartsConditionInput | null > | null,
  not?: ModelCartsConditionInput | null,
};

export type Carts = {
  __typename: "Carts",
  id: string,
  name: string,
  info: string,
  price: number,
  imgUrl: string,
  number: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCartsInput = {
  id: string,
  name?: string | null,
  info?: string | null,
  price?: number | null,
  imgUrl?: string | null,
  number?: number | null,
};

export type DeleteCartsInput = {
  id: string,
};

export type CreateSiteInfoInput = {
  id?: string | null,
  email: string,
  phone: string,
  location: string,
};

export type ModelSiteInfoConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelSiteInfoConditionInput | null > | null,
  or?: Array< ModelSiteInfoConditionInput | null > | null,
  not?: ModelSiteInfoConditionInput | null,
};

export type SiteInfo = {
  __typename: "SiteInfo",
  id: string,
  email: string,
  phone: string,
  location: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSiteInfoInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  location?: string | null,
};

export type DeleteSiteInfoInput = {
  id: string,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  info?: ModelStringInput | null,
  price?: ModelIntInput | null,
  imgUrl?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelCartsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  info?: ModelStringInput | null,
  price?: ModelIntInput | null,
  imgUrl?: ModelStringInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelCartsFilterInput | null > | null,
  or?: Array< ModelCartsFilterInput | null > | null,
  not?: ModelCartsFilterInput | null,
};

export type ModelCartsConnection = {
  __typename: "ModelCartsConnection",
  items:  Array<Carts | null >,
  nextToken?: string | null,
};

export type ModelSiteInfoFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelSiteInfoFilterInput | null > | null,
  or?: Array< ModelSiteInfoFilterInput | null > | null,
  not?: ModelSiteInfoFilterInput | null,
};

export type ModelSiteInfoConnection = {
  __typename: "ModelSiteInfoConnection",
  items:  Array<SiteInfo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  info?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  imgUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCartsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  info?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  imgUrl?: ModelSubscriptionStringInput | null,
  number?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCartsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartsFilterInput | null > | null,
};

export type ModelSubscriptionSiteInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSiteInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionSiteInfoFilterInput | null > | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartsMutationVariables = {
  input: CreateCartsInput,
  condition?: ModelCartsConditionInput | null,
};

export type CreateCartsMutation = {
  createCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartsMutationVariables = {
  input: UpdateCartsInput,
  condition?: ModelCartsConditionInput | null,
};

export type UpdateCartsMutation = {
  updateCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartsMutationVariables = {
  input: DeleteCartsInput,
  condition?: ModelCartsConditionInput | null,
};

export type DeleteCartsMutation = {
  deleteCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSiteInfoMutationVariables = {
  input: CreateSiteInfoInput,
  condition?: ModelSiteInfoConditionInput | null,
};

export type CreateSiteInfoMutation = {
  createSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSiteInfoMutationVariables = {
  input: UpdateSiteInfoInput,
  condition?: ModelSiteInfoConditionInput | null,
};

export type UpdateSiteInfoMutation = {
  updateSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSiteInfoMutationVariables = {
  input: DeleteSiteInfoInput,
  condition?: ModelSiteInfoConditionInput | null,
};

export type DeleteSiteInfoMutation = {
  deleteSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      name: string,
      email: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      info: string,
      price: number,
      imgUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartsQueryVariables = {
  id: string,
};

export type GetCartsQuery = {
  getCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartsConnection",
    items:  Array< {
      __typename: "Carts",
      id: string,
      name: string,
      info: string,
      price: number,
      imgUrl: string,
      number: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSiteInfoQueryVariables = {
  id: string,
};

export type GetSiteInfoQuery = {
  getSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSiteInfosQueryVariables = {
  filter?: ModelSiteInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSiteInfosQuery = {
  listSiteInfos?:  {
    __typename: "ModelSiteInfoConnection",
    items:  Array< {
      __typename: "SiteInfo",
      id: string,
      email: string,
      phone: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartsSubscriptionVariables = {
  filter?: ModelSubscriptionCartsFilterInput | null,
};

export type OnCreateCartsSubscription = {
  onCreateCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartsSubscriptionVariables = {
  filter?: ModelSubscriptionCartsFilterInput | null,
};

export type OnUpdateCartsSubscription = {
  onUpdateCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartsSubscriptionVariables = {
  filter?: ModelSubscriptionCartsFilterInput | null,
};

export type OnDeleteCartsSubscription = {
  onDeleteCarts?:  {
    __typename: "Carts",
    id: string,
    name: string,
    info: string,
    price: number,
    imgUrl: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSiteInfoSubscriptionVariables = {
  filter?: ModelSubscriptionSiteInfoFilterInput | null,
};

export type OnCreateSiteInfoSubscription = {
  onCreateSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSiteInfoSubscriptionVariables = {
  filter?: ModelSubscriptionSiteInfoFilterInput | null,
};

export type OnUpdateSiteInfoSubscription = {
  onUpdateSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSiteInfoSubscriptionVariables = {
  filter?: ModelSubscriptionSiteInfoFilterInput | null,
};

export type OnDeleteSiteInfoSubscription = {
  onDeleteSiteInfo?:  {
    __typename: "SiteInfo",
    id: string,
    email: string,
    phone: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
