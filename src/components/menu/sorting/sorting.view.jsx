import React from 'react';
import styled           from 'styled-components';

import { Icon, Divider }         from 'antd';

import './style.css';
import SortingType      from '../../../constant/menu/menu.sorting';

export default( props ) => {
    return (
        <Menu>
            {
                props.sortingType === SortingType.DEFAULT?
                <div className="menuItemWrapperSelected" onClick={() => props.onItemSelection( SortingType.DEFAULT )}>
                    <Icon type="star-o" />
                    <div className="menuItemTitleSelected">
                        New
                    </div>
                </div>:
                <div className="menuItemWrapper" onClick={() => props.onItemSelection( SortingType.DEFAULT )}>
                    <Icon type="star-o" />
                    <div className="menuItemTitle">
                        New
                    </div>
                </div>
            }
            <Divider/>
            {
                props.sortingType === SortingType.POPULAR?
                <div className="menuItemWrapperSelected" onClick={() => props.onItemSelection( SortingType.POPULAR )}>
                    <Icon type="rocket" />
                    <div className="menuItemTitleSelected">
                        Popular
                    </div>
                </div>:
                <div className="menuItemWrapper" onClick={() => props.onItemSelection( SortingType.POPULAR )}>
                    <Icon type="rocket" />
                    <div className="menuItemTitle">
                        Popular
                    </div>
                </div>
            }
            <Divider/>
            {
                props.sortingType === SortingType.LIKED?
                <div className="menuItemWrapperSelected" onClick={() => props.onItemSelection( SortingType.LIKED )}>
                    <Icon type="like-o" />
                    <div className="menuItemTitleSelected">
                        Liked
                    </div>
                </div>:
                <div className="menuItemWrapper" onClick={() => props.onItemSelection( SortingType.LIKED )}>
                    <Icon type="like-o" />
                    <div className="menuItemTitle">
                        Liked
                    </div>
                </div>
            }
            <Divider/>{
                props.sortingType === SortingType.ENJOY?
                <div className="menuItemWrapperSelected" onClick={() => props.onItemSelection( SortingType.ENJOY )}>
                    <Icon type="smile-o" />
                    <div className="menuItemTitleSelected">
                        Enjoy
                    </div>
                </div>:
                <div className="menuItemWrapper" onClick={() => props.onItemSelection( SortingType.ENJOY )}>
                    <Icon type="smile-o" />
                    <div className="menuItemTitle">
                        Enjoy
                    </div>
                </div>
            }
        </Menu>
    )
};

// <Icon type="like-o" />
//             <Icon type="smile-o" />
//             <Icon type="rocket" />
//             <Icon type="star-o" />

const Menu = styled.div`

    position: absolute;
    width: 120px;
    background-color: white;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 48px;
    left: 51px;

    &> .menuItemWrapper{
        &> .anticon{
            align-self: center;
            font-size: 18px;
            color: rgb(124, 124, 124);
        }
    }

    &> .menuItemWrapper:hover{
        &> .anticon{
            color: #158FD8;
        }
    }

    &> .menuItemWrapperSelected{
        &> .anticon{
            align-self: center;
            font-size: 18px;
            color: #158FD8;
        }
    }

    &> .ant-divider-horizontal {
        margin: 0;
    }
`