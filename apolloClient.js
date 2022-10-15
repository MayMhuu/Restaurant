import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:"https://api-sa-east-1.hygraph.com/v2/cl7aeizmx2ujy01uj9oy53uas/master",
    cache: new InMemoryCache()

})

export default client