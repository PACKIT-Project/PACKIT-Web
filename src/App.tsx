import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '@store';
import GlobalStyle from '@styles/global';
import Router from '@router';
import { requestPermission } from './application/firebase/firebase-messaging-sw';

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
