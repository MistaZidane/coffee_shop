import { API, graphqlOperation } from "aws-amplify";
import { listSiteInfos,listProducts } from "@/graphql/queries";

export const getSiteInfo = async () => {
  const results = await API.graphql(graphqlOperation(listSiteInfos));
  return results;
};
export const getProducts = async () => {
  const results = await API.graphql(graphqlOperation(listProducts));
  return results;
};
