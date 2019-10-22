import { useHistory } from 'react-router';
import { useLocationHash } from 'hooks';

type SyncMap<T> = {
  [hash: string]: T;
};

const useSyncWithHash = <T extends any>(
  map: SyncMap<T>,
  defaultItem?: T
): [T, (item: T) => void] => {
  const hash = useLocationHash();
  const history = useHistory();
  const item = map[hash];

  const findHashNameForItem = (item: T) =>
    Object.entries(map).filter(
      ([hashName, currentItem]) => currentItem === item
    )[0][0];

  const setItem = (item: T) => {
    const hash = findHashNameForItem(item);
    history.replace({ ...history.location, hash: '#' + hash });
  };

  if (item === undefined && defaultItem !== undefined) {
    setItem(defaultItem);
    return [defaultItem, setItem];
  } else {
    return [item, setItem];
  }
};

export default useSyncWithHash;
