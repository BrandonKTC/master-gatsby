import { useEffect, useState } from 'react';

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
        query: `query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                name
              }
              hotSlices {
                name
              }
            }
          }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicesmasters(res.data.StoreSettings.slicemaster);
      });
  }, []);

  return { hotSlices, Slicesmasters };
}
