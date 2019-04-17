import React, {Component} from 'react';
import { Tabs } from '@yazanaabed/react-tabs';

import SearchHotels from './components/Hotels';

class Search extends Component {
  render() {
    return (
      <div>
    <Tabs
      activeTab={{
        id: "hotels"
      }}
    >
      <Tabs.Tab id="hotels" title="Hotels">
        <div style={{ padding: 10 }}>
          <SearchHotels />
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="homes" title="Homes">
        <div style={{ padding: 10 }}>
          Homes
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="flights" title="Flights">
        <div style={{ padding: 10 }}>
          Flights
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="cars" title="Cars">
        <div style={{ padding: 10 }}>
          Cars
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="experiences" title="Experiences">
        <div style={{ padding: 10 }}>
          Experiences
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>

    );
  }
}
export default Search;