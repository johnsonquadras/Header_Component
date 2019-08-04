import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PersonIcon } from './person.svg'
import Popover from '../Popover'
import Menu from '../Menu';

const NavWrapper = styled.div`
    background: #f3f3f3;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    height: 75px;
    font-family: 'Roboto', sans-serif;
`;

const CompanyLogo = styled.div`
    color: #4A4A4A;
    align-items: center;
    display: flex;
    padding-left: 1.5rem
`
const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 4;
    margin-right: 2rem;
`
const Link = styled.a`
    font-family: Roboto;
    font-size: 14px;
    line-height: 17px;
    margin-left: 2rem;
    margin-right: 2rem;
    cursor: pointer;
    font-weight: ${props => (props.active ? '700' : '400')};
    color: ${props => (props.active ? '#f26620' : '#4A4A4A')};
    :hover: {
        color: #f8b28f;
    },
`
const AccountSettings = styled.div`
    flex-basis: 100px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-left: 1px solid #E4E4E4;
    cursor: pointer;
`
export const TopNav = ({ companyLogo, tabs, menuItems, activeTab, onSelect }) => {

    return <NavWrapper >
        <CompanyLogo > {companyLogo} </CompanyLogo>

        <HeaderLinks >
            {tabs.map(({ value, label }, index) => {
                const isActive = value === activeTab
                return <Link key={index} active={isActive} onClick={() => onSelect(value)}> {label}</Link>
            })}
        </HeaderLinks>

        <AccountSettings >
            <Popover triggerNode={<PersonIcon />}>
                <Menu menuItems={menuItems} onSelect={onSelect}/>
            </Popover>
        </AccountSettings>

    </NavWrapper>
}

export default TopNav
