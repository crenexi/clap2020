import { useContext } from 'react';
import TwitterContext from '@contexts/TwitterContext';

const useTwitter = () => useContext(TwitterContext);

export default useTwitter;
