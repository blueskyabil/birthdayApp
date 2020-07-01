import React from 'react';
// import CardPage from './screens/CardPage';
// import Home from './screens/Home'
import AppScreens from './routes/index';
import storage from './redux/store/index';
import {Provider} from 'react-redux'



export default ()=>(
    <Provider store={storage}>
        <AppScreens />
    </Provider>

)





