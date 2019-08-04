import React from 'react'
import styled from 'styled-components'
import { LinkProps } from '../TopNav/TopNav';
import { white, grey, grey2, listActive, listHover, orange, fontSizeExtraSmall, fontBold, fontSizeRegular } from '../styles/style.constants';


const Badge = styled.div`
    font-size: ${fontSizeExtraSmall};
    border-radius: 10px;
    color: ${white};
    background: ${orange};
    height: 16px;
    width: 16px;
    font-weight: ${fontBold};
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    padding: 1px;
`

const ListItem = styled.li`
                    list-style: none;
                    padding: 0.75rem 1.25rem;
                    font-size: ${fontSizeRegular};
                    font-weight: 400;
                    color: ${grey};
                    cursor: pointer;
                    :hover {
                        font-weight: ${fontBold};
                        background: ${listHover};
                    };
                    :active {
                        background: ${listActive};
                    }
                          `

const Divider = styled.div`
                    border-bottom: 1px solid ${grey2};
                    margin: 0 20px;
                    border-top: 0;
                `

const List = styled.ul`
                padding: 0;
                `
const MenuWrapper = styled.div`
            width : 200px;
            `

interface MenuProps {
    onSelect: (value: string) => void;
    menuItems: LinkProps[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ onSelect, menuItems }: MenuProps) => {

    return <MenuWrapper>
        <List>
            {menuItems.map(({ value, label, count }, index) => {
                return <>
                    <ListItem
                        key={index}
                        onClick={() => {
                            // e.stopPropagation();
                            onSelect(value)
                        }}>
                        {label}

                        {count !== undefined &&
                            <Badge> {count}</Badge>
                        }

                    </ListItem>

                    {index < menuItems.length - 1 &&
                        <Divider />
                    }
                </>
            })}
        </List>
    </MenuWrapper>
}

export default Menu