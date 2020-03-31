import { useContext } from 'react';
import ContentContext from 'contexts/ContentContext';

const useContent = () => useContext(ContentContext);

export default useContent;
