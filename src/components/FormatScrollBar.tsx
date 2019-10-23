import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyle = makeStyles(theme =>
  createStyles({
    formatScrollbar: {
      '&::-webkit-scrollbar': {
        width: '0.5em',
        height: '0.5em'
      },
      '&::-webkit-scrollbar-button': {
        width: 0,
        height: 0,
        display: 'none'
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey[600],
        borderRadius: '5px'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
      }
    }
  })
);

const FormatScrollBar: React.FC<{}> = ({ children }) => {
  const classes = useStyle();
  return (
    <Box className={classes.formatScrollbar} clone>
      {children}
    </Box>
  );
};

export default FormatScrollBar;
