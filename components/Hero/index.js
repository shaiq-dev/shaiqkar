import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

import Stage from './Stage';

export default function Hero({ secRef }) {
    return (
        <BaseHeroSection ref={secRef}>
            <Stage />
        </BaseHeroSection>
    );
}

Hero.propTypes = {
    secRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.instanceOf(typeof Element === 'undefined' ? function () {} : Element)
        })
    ])
};

const BaseHeroSection = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;
