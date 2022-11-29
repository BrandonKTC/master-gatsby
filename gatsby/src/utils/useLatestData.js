import { useEffect, useState } from 'react';

const gql = String.raw;

const deets = gql`
  
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
  
`;

export default function useLatestsData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [Slicesmasters, setSlicesmasters] = useState();
  // use a side effect to fetch data
  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicesmasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => console.log('SHHOOOTT', err));
  }, []);

  return { hotSlices, Slicesmasters };
}
