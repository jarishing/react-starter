import React            from 'react';
import styled           from 'styled-components';

import {Icon, Divider}  from 'antd';
import _                from 'lodash';

import SubSourceList    from './subsource/filter.subsource.entry';
import SubsourceTag     from '../../../constant/subsource';

export default( props ) => {
    return (
        <FilterSideBar>
            <div className="filterSidebarContainer">
                {
                    props.source.length == 0 || _.isEqual( props.source, props.allSubsource )?
                    <div className="filterSidebarItemSelected" onClick={() => props.onAllCheck()}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="global" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            All
                        </div>
                    </div>:
                    <div className="filterSidebarItem" onClick={() => props.onAllCheck()}>
                        <div className="filterSiderbarIcon">
                            <Icon type="global" />
                        </div>
                        <div className="filterSidebarTitle">
                            All
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('facebook')).length == 0?
                    <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.FACEBOOK, true)}>
                        <div className="filterSiderbarIcon">
                            <Icon type="facebook" />
                        </div>
                        <div className="filterSidebarTitle">
                            Facebook
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected" onClick={()=> props.setSubsourceList(SubsourceTag.FACEBOOK, true)}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="facebook" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Facebook
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('instagram')).length == 0?
                    <div className="filterSidebarItem">
                        <div className="filterSiderbarIcon">
                            <Icon type="instagram" />
                        </div>
                        <div className="filterSidebarTitle">
                            Instagram
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected">
                        <div className="filterSiderbarIconSelected">
                            <Icon type="instagram" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Instagram
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('lihkg')).length == 0?
                    <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.LIHKG, true)}>
                        <div className="filterSiderbarIcon">
                            <Icon type="smile-o" />
                        </div>
                        <div className="filterSidebarTitle">
                            Lihkg
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected" onClick={()=> props.setSubsourceList(SubsourceTag.LIHKG, true)}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="smile-o" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Lihkg
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('hkgolden')).length == 0?
                    <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.HKGOLDEN, true)}>
                        <div className="filterSiderbarIcon">
                            <Icon type="twitter" />
                        </div>
                        <div className="filterSidebarTitle">
                            Hkgolden
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected" onClick={()=> props.setSubsourceList(SubsourceTag.HKGOLDEN, true)}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="twitter" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Hkgolden
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('uwants')).length == 0?
                    <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.UWANTS, true)}>
                        <div className="filterSiderbarIcon">
                            <Icon type="message" />
                        </div>
                        <div className="filterSidebarTitle">
                            Uwants
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected" onClick={()=> props.setSubsourceList(SubsourceTag.UWANTS, true)}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="message" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Uwants
                        </div>
                    </div>
                }
                <Divider />
                {
                    props.source.filter( item => item.includes('discuss')).length == 0?
                    <div className="filterSidebarItem" onClick={()=> props.setSubsourceList(SubsourceTag.HKDISCUSS, true)}>
                        <div className="filterSiderbarIcon">
                            <Icon type="wechat" />
                        </div>
                        <div className="filterSidebarTitle">
                            Hkdiscuss
                        </div>
                    </div>:
                    <div className="filterSidebarItemSelected" onClick={()=> props.setSubsourceList(SubsourceTag.HKDISCUSS, true)}>
                        <div className="filterSiderbarIconSelected">
                            <Icon type="wechat" />
                        </div>
                        <div className="filterSidebarTitleSelected">
                            Hkdiscuss
                        </div>
                    </div>
                }
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
            height: 64px;

            &> .filterSiderbarIcon{
                padding: 5px 0 0;
                width: 62px;
                height: 35px;
                display: flex;
                align-items:center;
                justify-content: center;

                &> .anticon{
                    font-size: 30px;
                }
            }

            &> .filterSidebarTitle{
                width: 62px;
                height: 29px;
                font-size: 12px;
                padding-top: 2px;
                padding-bottom: 5px;
                display: flex;
                align-items:center;
                justify-content: center;
            }
        }

        &> .filterSidebarItemSelected{
            width: 64px;
            height: 64px;
            border: 1px solid #158FD8;
            border-radius: 5px;
            color: #158FD8;

            &> .filterSiderbarIconSelected{
                padding: 3px 0 0;
                width: 60px;
                height: 35px;
                display: flex;
                align-items:center;
                justify-content: center;

                &> .anticon{
                    font-size: 30px;
                }
            }

            &> .filterSidebarTitleSelected{
                width: 60px;
                height: 28px;
                font-size: 12px;
                padding-top: 2px;
                padding-bottom: 7px;
                display: flex;
                align-items:center;
                justify-content: center;
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

    &> .
`