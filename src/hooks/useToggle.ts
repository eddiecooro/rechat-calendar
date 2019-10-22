import React from 'react';

const useToggle = (
  initialState: (() => boolean) | boolean
): [boolean, () => void] => {
  const [state, setState] = React.useState(initialState);
  const toggle = React.useCallback(() => {
    setState(s => !s);
  }, []);
  return [state, toggle];
};

export default useToggle;
