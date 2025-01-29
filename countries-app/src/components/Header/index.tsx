import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContent, HeaderTitle, HeaderNav } from './styles.ts';

const Header = () => {
    return (
        <HeaderContent>
            <HeaderTitle>Countries App</HeaderTitle>
            <HeaderNav>
                <Link className='link' to="/">Home</Link>  <Link className='link' to="/continents">See for each continent</Link>
            </HeaderNav>
        </HeaderContent>
    )
};
export default Header;