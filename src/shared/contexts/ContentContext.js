import React from 'react';

const ContentContext = React.createContext(null);

export const ContentProvider = ContentContext.Provider;
export const ContentConsumer = ContentContext.Consumer;
export default ContentContext;
