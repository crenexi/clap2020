import { useContext } from 'react';
import SnackContext from '@contexts/SnackContext';

const useSnack = () => useContext(SnackContext);

export default useSnack;
