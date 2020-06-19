import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Apple } from '../styles/apple.svg';
import {ReactComponent as Menu } from '../styles/menu.svg';
import {ReactComponent as Bag } from '../styles/shopping-bag.svg';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
    align-items: center;
    padding: 18px;
`;

const AppleLogo = styled.div`
        margin: auto;
`

const Header = () => {

    return(
        <Wrapper>
            <Menu/>
            <AppleLogo>
                <Link to="/">
                    <Apple/>
                </Link>
            </AppleLogo>
            <Bag/>
        </Wrapper>
    )
};

export default Header;
