import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGithubStatsForUser = async (username: string) => {
  const graphqlQuery = `
  {
    user(login: "${username}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              url
              stargazerCount
            }
          }
        }
      }
    }
  }
  `;
  const res = await fetch(`https://api.github.com/users/${username}`);
  const json = await res.json();

  const res2 = await fetch("https://api.github.com/graphql", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify({ query: graphqlQuery }),
  });
  const json2 = await res2.json();

  return {
    ...json,
    ...json2.data.user,
  };
};
