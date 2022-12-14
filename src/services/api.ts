import { API, graphqlOperation } from "aws-amplify";
import { listSiteInfos, listProducts } from "@/graphql/queries";
import { createContact, createCart } from "@/graphql/mutations";
interface CartItem {
  name: string;
  info: string;
  price: number;
  imgUrl: string;
  id: string;
  number: number;
}
export const getSiteInfo = async () => {
  const results = await API.graphql(graphqlOperation(listSiteInfos));
  return results;
};
export const getProducts = async () => {
  const results = await API.graphql(graphqlOperation(listProducts));
  return results;
};
export const createContacts = async (
  email: string,
  message: string,
  name: string
) => {
  const results = await API.graphql(
    graphqlOperation(createContact, {
      input: {
        email,
        message,
        name,
      },
    })
  );
  return results;
};

export const createOrder = async (obj: CartItem) => {
  const results = await API.graphql(
    graphqlOperation(createCart, {
      input: obj,
    })
  );
  return results;
};
