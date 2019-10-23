import React from 'react';
import { Tab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TabProps } from '@material-ui/core/Tab';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const useTabClasses = makeStyles(theme =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 110,
      fontSize: theme.typography.body1.fontSize
    },
    wrapper: {
      flexDirection: 'row',
      '&& > *:first-child': {
        marginBottom: 'unset',
        marginRight: '2px'
      }
    },
    labelIcon: {
      minHeight: 'unset',
      paddingTop: '0.3em'
    }
  })
);

const EventTab: React.FC<
  Omit<TabProps, 'classes' | 'icon'> & {
    icon?: React.ComponentType<SvgIconProps>;
    iconProps?: SvgIconProps;
  }
> = props => {
  const tabClasses = useTabClasses();
  const { icon: Icon, iconProps, ...restProps } = props;
  const IconElement: any = Icon ? (
    <Icon fontSize="inherit" {...iconProps} />
  ) : null;
  return <Tab classes={tabClasses} icon={IconElement} {...restProps}></Tab>;
};

export default EventTab;
