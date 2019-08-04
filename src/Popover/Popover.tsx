import React, { useState, useCallback, MouseEvent } from 'react'
import styled from 'styled-components'
import useDocumentClick from './useDocumentClick';
import { white, grey2 } from '../styles/style.constants';

const PopoverContent = styled.div`
    width: 200px;
    margin-left: -150px;
    background-color: ${white};
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    position: absolute;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
    border:  solid 1px ${grey2};
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
        border-bottom: 8px solid ${white};
    }

`


interface PopoverProps {
    triggerNode: React.ReactElement;
    children: any
}

const Popover: React.FunctionComponent<PopoverProps> = (props: PopoverProps) => {
    const [visible, setVisibility] = useState(false)
    const { triggerNode, children } = props

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

    const onToggle = (e: MouseEvent) => {
        e.stopPropagation();
        setVisibility(!visible)
    }

    return (
        <div>
            {triggerNode && React.cloneElement(triggerNode, {
                onClick: onToggle,
            })}


            {visible &&
                <PopoverContent>
                    {children}
                </PopoverContent>
            }
        </div>
    )
}


export default Popover