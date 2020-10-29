import React from 'react';
import { Provider } from 'react-redux';

import People from './components/people';

// import reduxStore from './store-redux/';
import rtkStore from './store-rtk/'

export default props => {
    return (
        <Provider store={rtkStore}>
            <People />
        </Provider>
    )
}
