import React            from 'react';
import styled           from 'styled-components';
import { Divider, Icon, Carousel }      from 'antd';

import LineOverview      from '../../../main.page.analysis.analyst.diagram/line.overview/line.overview';
import LineSubsource     from '../../../main.page.analysis.analyst.diagram/line.subsource/line.subsource';

import './style.css';

export default( props ) => {

    let carousel = null;

    return (
        <Analyst>
            <div className="analyst-datatype-wrapper">
                <div className="analyst-datatype-body">
                    <Carousel ref={ dom => carousel = dom }>
                        <div><LineOverview/></div>
                        <div><LineSubsource/></div>
                    </Carousel>
                </div>
                <div className="analyst-datatype-leftButton" onClick={()=> carousel.prev()}>
                    <Icon type="left" />
                </div>
                <div className="analyst-datatype-rightButton" onClick={()=> carousel.next()}>
                    <Icon type="right" />
                </div>
            </div>
        </Analyst>
    )
};

const Analyst = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }


    &> .analyst-datatype-wrapper .analyst-datatype-body .ant-carousel .slick-slider{
        height: 372px;
    }

    &> .analyst-datatype-wrapper .analyst-datatype-leftButton .anticon{
        font-size: 25px;
        color: lightgray;
    }

    &> .analyst-datatype-wrapper .analyst-datatype-leftButton:hover{
        &> .anticon{
            color: darkgray;
        }
    }

    &> .analyst-datatype-wrapper .analyst-datatype-rightButton .anticon{
        font-size: 25px;
        color: lightgray;
    }

    &> .analyst-datatype-wrapper .analyst-datatype-rightButton:hover{
        &>  .anticon{
            color: darkgray;
        }
    }

    &> .analyst-datatype-wrapper .analyst-datatype-body .ant-carousel .slick-dots li button{
        background: #158FD8;
    }

`