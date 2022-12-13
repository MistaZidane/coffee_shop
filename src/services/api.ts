import { API, graphqlOperation } from "aws-amplify";
import { listSiteInfos, listProducts } from "@/graphql/queries";
import { createProduct } from "@/graphql/mutations";

export const getSiteInfo = async () => {
  const results = await API.graphql(graphqlOperation(listSiteInfos));
  return results;
};
export const getProducts = async () => {
  const results = await API.graphql(graphqlOperation(listProducts));
  return results;
};
export const createContact = async (email:string, message:string, name:string) => {
    const results = await API.graphql(graphqlOperation(createProduct, {
        input: {
          email,
          message,
          name
        }
      }))
      return results;
};
