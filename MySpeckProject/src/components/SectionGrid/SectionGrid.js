import React from 'react';
import { SectionGridWrapper } from './SectionGridStyles';

const SectionGrid = (props) => {
    return <SectionGridWrapper>{props.children}</SectionGridWrapper>;
}

export default SectionGrid;