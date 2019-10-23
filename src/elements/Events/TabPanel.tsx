import React from 'react';
import { Box } from '@material-ui/core';
import { BoxProps } from '@material-ui/core/Box';

interface TabPanelProps extends BoxProps {
  index: number;
  value: number;
}
const TabPanel: React.FC<TabPanelProps> = ({
  value,
  index,
  children,
  ...rest
}) => {
  return (
    <Box
      hidden={Math.abs(index - value) > 1}
      pt={1}
      px={3}
      pb={0}
      width={1}
      height={1}
      {...rest}>
      {children}
    </Box>
  );
};

export default TabPanel;
