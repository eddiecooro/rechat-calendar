import { useLocation } from 'react-router';

const useLocationHash = () => {
  const hash = useLocation().hash;
  return hash ? hash.slice(1) : '';
};

export default useLocationHash;
