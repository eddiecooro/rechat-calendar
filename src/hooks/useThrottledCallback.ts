import React from 'react';

type useCallbackParams = Parameters<typeof React.useCallback>;
const useThrottledCallback = <T extends (...args: any) => void>(
  callback: T,
  deps: useCallbackParams[1],
  timeout: number
) => {
  let timeoutID = 0;
  let a = React.useCallback(
    (...args: Parameters<T>) => {
      if (timeoutID) return;
      setTimeout(() => callback(...args), timeout);
    },
    deps ? deps.concat(timeout) : deps
  );
  return a;
};

export default useThrottledCallback;
