import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getProviderTokens } from "../supabase/getProviderTokens";

export async function fetchGitHubData() {
  const { provider_token } = await getProviderTokens();
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${provider_token}`,
    },
  });
  const { data } = await client.query({
    query: gql`
      query {
        viewer {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history(first: 100) {
                        nodes {
                          committedDate
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data.viewer.pinnedItems.nodes;
}
