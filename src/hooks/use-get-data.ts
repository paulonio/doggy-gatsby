import { graphql, useStaticQuery } from 'gatsby';

import { parseResponse } from '@/utils/api';

export const useGetData = () => {
  const response = useStaticQuery(graphql`
    query {
      allCustomApi {
        edges {
          node {
            barking
            image_link
            good_with_children
            energy
            max_life_expectancy
            name
            protectiveness
            trainability
          }
        }
      }
    }
  `);

  const dogs = response.allCustomApi.edges;
  const data = parseResponse(dogs);

  return { ...(data ?? {}) };
};
