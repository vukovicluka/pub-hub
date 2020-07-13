import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderContainer } from './LoaderStyle';

const DotsLoader = () => {
    return (
        <LoaderContainer>
            <Loader type="ThreeDots" color="#c59613" width={80} height={80} />
        </LoaderContainer>
    );
}

export default DotsLoader;