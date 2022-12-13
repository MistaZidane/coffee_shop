import { API, graphqlOperation } from "aws-amplify";
import { listSiteInfos, listProducts } from "@/graphql/queries";
import { createContact } from "@/graphql/mutations";

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
