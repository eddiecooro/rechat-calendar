import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';
import EventsList from './Panel/EventsList';
import { EventFilterTab } from './types';

const styles = {
  fullHeight: {
    height: '100%'
  }
};

type TabPanelsType = {
  filters: EventFilterTab[];
  filterIndex: number;
  handleChangeFilterIndex: (newIndex: number) => void;
};

const TabPanels: React.FC<TabPanelsType> = ({
  filters,
  filterIndex,
  handleChangeFilterIndex
}) => {
  return (
    <SwipeableViews
      axis="x"
      resistance={true}
      style={styles.fullHeight}
      containerStyle={styles.fullHeight}
      index={filterIndex}
      onChangeIndex={handleChangeFilterIndex}>
      {filters.map((filter, i) => (
        <TabPanel key={i} index={i} value={filterIndex}>
          {i === 0 && <EventsList key={i} filter={filter} />}
        </TabPanel>
      ))}
    </SwipeableViews>
  );
};

export default TabPanels;
