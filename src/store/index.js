
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import ticketsReducer from './tickets-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tickets: ticketsReducer,
    }
});

export default store;