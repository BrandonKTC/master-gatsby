import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grid';
import useLatestsData from '../utils/useLatestData';

function CurrentlySlicing({ slicecemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicecemasters && <LoadingGrid count={4} />}
      {!slicecemasters && !slicecemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicecemasters?.length && <ItemGrid items={slicecemasters} />}
    </div>
  );
}
function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">HotSlices!</span>
      </h2>
      <p>Come on by, Buy the slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {!hotSlices && !hotSlices?.length && <p>Nothin' in the Case!</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}
const HomePage = () => {
  const { Slicesmasters, hotSlices } = useLatestsData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 18h30 to 23h Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicecemasters={Slicesmasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
};

export default HomePage;
