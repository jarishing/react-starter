import React            from 'react';
import styled           from 'styled-components';

import {Icon, Divider}  from 'antd';

import SubSourceList    from './subsource/filter.subsource.entry';
import SubsourceTag       from '../../../constant/subsource';

import Lihkg from '../../../assets/image/lihkg-filter.png';

export default( props ) => {
    return (
        <FilterSideBar>
            <div className="filterSidebarContainer">
                <div className="filterSidebarItem">
                    <div className="filterSiderbarIcon">
                        <Icon type="global" />
                    </div>
                    <div className="filterSidebarTitle">
                        All
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.FACEBOOK, true)}>
                    <div className="filterSiderbarIcon">
                        <Icon type="facebook" />
                    </div>
                    <div className="filterSidebarTitle">
                        Facebook
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem">
                    <div className="filterSiderbarIcon">
                        <Icon type="instagram" />
                    </div>
                    <div className="filterSidebarTitle">
                        Instagram
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.LIHKG, true)}>
                    <div className="filterSiderbarIcon">
                        <Icon type="smile-o" />
                    </div>
                    <div className="filterSidebarTitle">
                        Lihkg
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.HKGOLDEN, true)}>
                    <div className="filterSiderbarIcon">
                        <Icon type="twitter" />
                    </div>
                    <div className="filterSidebarTitle">
                        Hkgolden
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.UWANTS, true)}>
                    <div className="filterSiderbarIcon">
                        <Icon type="message" />
                    </div>
                    <div className="filterSidebarTitle">
                        Uwants
                    </div>
                </div>
                <Divider />
                <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.HKDISCUSS, true)}>
                    <div className="filterSiderbarIcon">
                        <Icon type="wechat" />
                    </div>
                    <div className="filterSidebarTitle">
                        Hkdiscuss
                    </div>
                </div>
            </div>
            <SubSourceList/>
            
        </FilterSideBar>
    )
};

const FilterSideBar = styled.div`
    display: flex;

    &> .filterSidebarContainer{
        padding: 10px;
        background-color: white;
        position: fixed;
        top: 15vh;

        &> .filterSidebarItem{
            width: 64px;
            height: 60px;
            margin: 5px 0;
            box-sizing: border-box;

            &> .filterSiderbarIcon{
                padding: 5px 0 0;
                width: 62px;
                text-align: center;
                margin: 0 auto;

                &> .anticon{
                    font-size: 30px;
                }
            }

            &> .filterSidebarTitle{
                width: 62px;
                text-align: center;
                font-size: 13px;
                padding-bottom: 5px;
                margin: 0 auto;
            }
        }

        &> .ant-divider-horizontal{
            margin: 3px 0;
        }

    }

    &> .filterSidebarIabel{
        position: fixed;
        top: 25vh;
        left: 84px;

        &> .filterSidebarIabelContainer{
            width: 50px;
            height: 50px;
            background-color: #158FD8;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &> .anticon-filter{
                font-size: 30px;
                color: white;
            }
        }
    }
`