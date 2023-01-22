import { configureStore } from '@reduxjs/toolkit';
import { userTokenReducer } from './tokenRequest/tokenRequestReducer';
import { userAccountsReducer } from './accountsRequest/accountsRequestReducer';
import { userAccountInfoReducer } from
  './accountInfoRequest/accountInfoRequestReducer';

export const store = configureStore({
  reducer: {
    userToken: userTokenReducer,
    userAccounts: userAccountsReducer,
    userAccountInfo: userAccountInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
