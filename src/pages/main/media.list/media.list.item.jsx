import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {Icon} from 'antd';

import Lihkg from '../../../assets/image/lihkg.png';
import Discuss from '../../../assets/image/hkdiscuss.png';
import Uwants from '../../../assets/image/uwants.png';
import Facebook from '../../../assets/image/facebook.png';
import Hkgolden from '../../../assets/image/hkgolden.png';

import User from '../../../assets/image/user.png';

let imageSet = {
    lihkg: Lihkg,
    discuss: Discuss,
    uwants: Uwants,
    facebook: Facebook,
    hkgolden: Hkgolden
}

export default( props ) => {

    let tag = props._source.tags[0];

    let preview = props._source.message;
    // preview = preview.replace( /\<img .+? \/>/g, "");
    preview = preview.toString().replace( /\<img.+?>/g, "");
    preview = preview.toString().replace( /\<br \/>/g, "");
    preview = preview.toString().replace( /\<br\/>/g, "");
    preview = preview.toString().replace( /\<a.+?>/g, "");
    preview = preview.toString().replace( /\<\/a>/g, "");
    preview = preview.toString().replace( /\&nbsp;/g, "");
    preview = preview.toString().replace( /\<blockquote\>/g, "");
    preview = preview.toString().replace( /\<\/blockquote\>/g, "");

    let splitted = props._source.source.split('_');
    let sourceName = splitted[1];

    return (
        <ListItem>
            <div className="itemStateBar"/>
            <div className="itemMainBody">
                <div className="itemHeader">
                    <div className ="itemIconContainer">
                        <div className="itemUserIcon">
                            <img src = { User }/>
                        </div>
                        <div className="itemPlatform">
                            <img src = { imageSet[tag] }/>
                        </div>
                    </div>
                    <div className="itemInformationcontainer">
                        <div className="itemInfromation">
                            <div className="itemSource">
                                { sourceName } 
                            </div>
                            <div className="itemAuthor">
                                { props._source.author_name }
                            </div>
                        </div>
                        <div className="itemTime">
                            {moment(props._source["@timestamp"]).fromNow()}
                        </div>
                    </div>
                </div>
                <div className="itemContent">
                    <p>{preview}</p>
                </div>
                <div className="itemFooter">
                    <div className="itemButtonContainer">
                        <Icon type="rollback" />
                        <div className="itemButtonTitle">
                            Engage
                        </div>
                    </div>
                    <div className="itemButtonContainer">
                        <span className="glyphicon glyphicon-bookmark" aria-hidden="true"/>
                        <div className="itemButtonTitle">
                            Group
                        </div>
                    </div>
                </div>
            </div>
        </ListItem>
    )
};

const ListItem = styled.div`
    background-color:  white;
    width: 590px;
    height: fit-content;
    display: flex;
    margin: 20px 0;

    &> .itemStateBar{
        width: 10px;
        background-color: #158FD8;
    }

    &> .itemMainBody{
        padding: 10px 20px;
        width: 100%;

        &> .itemHeader{
            height: 40px;
            display: flex;
            
            &> .itemIconContainer{
                display: flex;

                &> .itemUserIcon{
                    width: 40px;
                    
                    &> img{
                        width: 40px;
                    }
                }

                &> .itemPlatform{
                    width: 25px;
                    height: 25px;
                    position: relative;
                    top: 20px;
                    right: 15px;

                    &> img{
                        width: 25px;
                    }
                }
            }

            &> .itemInformationcontainer{
                width: 100%;
                display: flex;
                justify-content: space-between;

                &> .itemInfromation{
                    &> .itemSource{
                        font-size: 14px;
                        font-weight: bold;
                        color: #14171a;
                    }

                    &> .itemAuthor{
                        font-size: 12px;
                        color: #657786;
                        margin-top: 3px;
                    }
                }

                &> .itemTime{
                    font-size: 12px;
                    color: #657786;
                }
            }
        }

        &> .itemContent{
            padding-top: 15px;
            font-size: 14px;
            line-height: 20px;
            color: #14171a;

            &> p{
                max-height: 120px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        &> .itemFooter{
            display: flex;

            &> .itemButtonContainer{
                display: flex;
                padding-right: 10px;
                cursor: pointer;

                &> .anticon{
                    font-size: 18px;
                    line-height: 18px;
                    color: #657786;
                }

                &> .itemButtonTitle{
                    font-size: 12px;
                    font-weight: bold;
                    color: #657786;
                    margin-left: 5px;
                }
            }

            &> .itemButtonContainer:hover > .anticon{
                color: #158FD8;
            }

            &> .itemButtonContainer:hover > .itemButtonTitle{
                color: #158FD8;
            }

            &> .itemButtonContainer:hover > span{
                color: #158FD8;
            }
        }

    }

    &> .itemMainBody: hover{
        background-color: #F4F7F9;
    }
`;