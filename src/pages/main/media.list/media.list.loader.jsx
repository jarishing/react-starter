import React            from 'react';
import styled           from 'styled-components';

export default( props ) => {
    return (
        <Loader>
            <div className="itemStateBar"/>
            <div className="itemMainBody">
                <div className="itemHeader">
                    <div className ="itemIconContainer">
                        <div className="itemUserIcon"/>
                        <div className="itemPlatform"/>
                    </div>
                    <div className="itemInformationcontainer">
                        <div className="itemInfromation">
                            <div className="itemSource"/>
                            <div className="itemAuthor"/>
                        </div>
                        <div className="itemTime"/>
                    </div>
                </div>
                <div className="itemContent">
                    <div className="emptyContent"/><div className="emptyContent"/>
                </div>
                <div className="itemFooter">
                    <div className="itemButtonContainer"/>
                    <div className="itemButtonContainer"/>
                </div>
            </div>
        </Loader>
    )
};

const Loader = styled.div`
    background-color:  white;
    width: 590px;
    height: fit-content;
    display: flex;
    margin: 20px 0;

    &> .itemStateBar{
        width: 20px;
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
                    height: 40px;
                    background-color: #e8e8e8;
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
                        width: 200px;
                        height: 18px;
                        background-color: #e8e8e8;
                        margin-bottom: 6px;
                    }

                    &> .itemAuthor{
                        width: 200px;
                        height: 18px;
                        background-color: #e8e8e8;
                    }
                }

                &> .itemTime{
                    width: 100px;
                    height: 18px;
                    background-color: #e8e8e8;
                }
            }
        }

        &> .itemContent{
            padding: 15px 0;
            font-size: 14px;
            line-height: 20px;
            color: #14171a;

            &> .emptyContent{
                width: 100%;
                height: 18px;
                margin-bottom: 6px;
                background-color: #e8e8e8;
            }
        }

        &> .itemFooter{
            display: flex;

            &> .itemButtonContainer{
                width: 75px;
                height: 18px;
                background-color: #e8e8e8;
                margin-right: 10px;
            }
        }
    }

`