import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PersonIcon } from './person.svg'
import Popover from '../Popover'
import Menu from '../Menu';
import { headerBackground, grey, grey2, orange, fontFamily, fontBold, fontRegular} from '../styles/style.constants';

const NavWrapper = styled.div`
    background:  ${headerBackground};
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    height: 75px;
    font-family: ${fontFamily};
`;

const CompanyLogo = styled.div`
    color: ${grey};
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

interface ILinkProps {
    active?: boolean;
  }
const Link = styled.a<ILinkProps>`
    font-family: ${fontFamily};
    font-size: 14px;
    line-height: 17px;
    margin-left: 2rem;
    margin-right: 2rem;
    cursor: pointer;
    font-weight: ${props => (props.active ? fontBold : fontRegular)};
    color: ${props => (props.active ? orange : grey)};
    :hover: {
        color: #f8b28f;
    },
`
const AccountSettings = styled.div`
    flex-basis: 100px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-left: 1px solid ${grey2};
    cursor: pointer;
`


export interface LinkProps {
    value: string;
    label: string;
    count: number;
}

interface TopNavProps {
    companyLogo: any;
    tabs: LinkProps[];
    menuItems: LinkProps[];
    activeTab: string;
    onSelect: (value: string) => void
}


export const TopNav: React.FunctionComponent<TopNavProps> = ({ companyLogo, tabs, menuItems, activeTab, onSelect }: TopNavProps) => {

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
                <Menu menuItems={menuItems} onSelect={onSelect} />
            </Popover>
        </AccountSettings>

    </NavWrapper>
}

export default TopNav
