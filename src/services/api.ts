import { API, graphqlOperation } from 'aws-amplify'
import { listSiteInfos } from '@/graphql/queries'

export let getSiteInfo =async () => {
    const results = await API.graphql(graphqlOperation(listSiteInfos));
    return results;
}
