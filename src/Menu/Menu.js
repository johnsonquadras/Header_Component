import React from 'react'
import styled from 'styled-components'

const Badge = styled.div`
    font-size: 10px;
    border-radius: 8px;
    color: white;
    background: #f26620;
    height: 16px;
    width: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
`

const ListItem = styled.li`
                    list-style: none;
                    padding: 12px 20px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #4A4A4A;
                    cursor: pointer;
                    :hover {
                        font-weight: 700;
                        background: #D3D3D3;
                    };
                    :active {
                        background: #A9A9A9;
                    }
                          `

const Divider = styled.div`
                    border-bottom: 1px solid #E4E4E4;
                    margin: 0 20px;
                    border-top: 0;
                `

const List = styled.ul`
                padding: 0;
                `
const MenuWrapper = styled.div`
            width : 200px;
            `


const Menu = ({ onSelect, menuItems }) => {

    return <MenuWrapper>
        <List>
            {menuItems.map(({ value, label, meta }, index) => {
                return <>
                    <ListItem
                        key={index}
                        onClick={(e) => {
                            // e.stopPropagation();
                            onSelect(value)
                        }}>
                        {label}

                        {meta !== undefined &&
                            <Badge> {meta}</Badge>
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