import React from 'react';
import useLatestsData from '../utils/useLatestData';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}
function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}
const HomePage = () => {
  const { Slicesmasters, hotSlices } = useLatestsData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 18h30 to 23h Every Single Day</p>
      <div>
        <CurrentlySlicing slicecemasters={Slicesmasters} />
        <HotSlices hotSlices={hotSlices} />
      </div>
    </div>
  );
};

export default HomePage;
