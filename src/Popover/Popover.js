import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import useDocumentClick from './useDocumentClick';

const PopoverContent = styled.div`
    width: 200px;
    margin-left: -150px;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    position: absolute;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
    border:  solid 1px #e4e4e4;
    border-radius: 5px;
    outline: 0;
    ::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        right: 15px;
        top: -8px;
        margin-left: 1px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
    }

`

const Popover = (props) => {
    const [visible, setVisibility] = useState(false)

    const handler = useCallback(
        () => {
            onClose();
        },
        []
    );

    useDocumentClick(handler)


    const onClose = () => {
        setVisibility(false)
    }

    const onToggle = (e) => {
        e.stopPropagation();
        setVisibility(!visible)
    }

    return (
        <div>
            {props.triggerNode && React.cloneElement(props.triggerNode, {
                onClick: onToggle,
            })}


            {visible &&
                <PopoverContent>
                    {props.children}
                </PopoverContent>
            }
        </div>
    )
}


export default Popover