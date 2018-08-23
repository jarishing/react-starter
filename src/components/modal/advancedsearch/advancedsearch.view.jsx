import React from 'react';
import styled           from 'styled-components';

import { Divider, Input, Icon, Checkbox } from 'antd';
import _                from 'lodash';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import SubSourceList    from './subsource/advancedsearch.subsource.entry';
import SubsourceTag     from '../../../constant/subsource';

export default( props ) => {
    let toDatepicker = null;

    let dateFrom = props.startDate;
    let dateTo  = props.endDate;
    let keyword = props.keyword;

    const range = { start: dateFrom, end: dateTo, after: dateFrom, before: dateTo };
    const suffix = keyword ? <Icon type="close-circle" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.setKeyword("")}/> : null;

    return (
        <Modal>
            <div className="background" onClick={() => props.onModelClose()}/>
            <div className="ModalWrapper">
                <div className="ModalContent">
                    <div className="header">
                        <Icon type="search" /><div className="title">ADVANCED SEARCH</div>
                    </div>
                    <Divider/>
                    <div className="keywordWrapper">
                        <div className="column">
                            <div className="titleContainer">
                                <div className="necessaryTitle">Keyword</div>
                                <span className="necessaryHints">NECESSARY</span>
                            </div>
                            <div className="titleDesc">
                                The main keyword of phrase for which your project will <b>collect data</b>.
                            </div>
                        </div>
                        <div className="column">
                            <div className="titleContainer">
                                <div className="title">Required Keyword</div>
                                <span className="hints">OPTION</span>
                            </div>
                            <div className="titleDesc">
                                Additional keywords - <b>Each of which must appear</b> in order for the mention to be collected.
                            </div>
                        </div>
                        <div className="column">
                            <div className="titleContainer">
                                <div className="title">Excluded Keyword</div>
                                <span className="hints">OPTION</span>
                            </div>
                            <div className="titleDesc">
                                Additional keywords - <b>None of which can appear</b> if the mention is to be collected.
                            </div>
                        </div>
                    </div>
                    <div className="searchSets">
                        <div className="column">
                            <div className="searchInputWrapper">
                                <Input 
                                    className="searchInput"
                                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={suffix}
                                    value={keyword}
                                    onChange={ event => props.setKeyword(event.target.value) }
                                />
                            </div>
                            <div className="searchSetsDesc">
                                Not case sensitive
                            </div>
                        </div>
                        <div className="column">
                            <div className="searchInputWrapper">
                                <Input className="searchInput"/>
                            </div>
                            <div className="searchSetsDesc">
                                separate keywords with a comma
                            </div>
                        </div>
                        <div className="column">
                            <div className="searchInputWrapper">
                                <Input className="searchInput"/>
                            </div>
                            <div className="searchSetsDesc">
                                separate keywords with a comma
                            </div>
                        </div>
                    </div>
                    <div className="dateSetsWrapper">
                        <div className="dateTitleWrapper">
                            <div className="dateTitle">Date</div>
                            <span className="hints">OPTION</span>
                        </div>
                        <div className="datapicker">
                            <div className="datapickeritem">
                                <DayPickerInput 
                                    value           = {dateFrom}
                                    placeholder     ="Start Date"
                                    format          ="LL"
                                    formatDate      ={formatDate}
                                    parseDate       ={parseDate}
                                    showDayPicker   = {true}
                                    dayPickerProps  ={{
                                        selectedDays: [{ from:dateFrom, to:dateTo }],
                                        disabledDays: { after: dateTo },
                                        toMonth: dateTo,
                                        modifiers: range,
                                        numberOfMonths: 1,
                                        onDayClick: () => toDatepicker.getInput().focus(),
                                    }}
                                    onDayChange={ props.handleFromChange }
                                />
                                {
                                    dateFrom?
                                    <Icon type="close" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.handleFromChange(undefined)}/> : null
                                }
                            </div>
                            <Icon type="arrow-right" />
                            <div className="datapickeritem">
                                <DayPickerInput 
                                    ref={el => (toDatepicker = el)}
                                    value       = {dateTo}
                                    placeholder ="End Date"
                                    format="LL"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                        selectedDays: [{ from:dateFrom, to:dateTo }],
                                        disabledDays: { before: dateFrom },
                                        modifiers: range,
                                        month: dateFrom,
                                        fromMonth: dateFrom,
                                        numberOfMonths: 1,
                                    }}
                                    onDayChange={ props.handleToChange } 
                                />
                                {
                                    dateTo?
                                    <Icon type="close" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.handleToChange(undefined)}/> : null
                                }
                            </div>
                        </div>
                        <div className="postCheckboxContainer">
                            <Checkbox/>
                            <div className="postCheckBoxTitleWrapper">
                                <div className="postCheckBoxTitle">Post Only</div>
                                <span className="hints">OPTION</span>
                            </div>
                        </div>
                    </div>
                    <div className="searchPlatfromTitleWrapper">
                        <div className="searchPlatfromTitle">Source</div>
                        <span className="hints">OPTION</span>
                    </div>
                    <div className="searchPlatfromWrapper">
                        {
                            props.source.length == 0 || _.isEqual( props.source, props.allSubsource )?
                            <div className="searchPlatfromColumnSelected" onClick={() => props.onAllCheck()}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="global" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    All
                                </div>
                            </div>:
                            <div className="searchPlatfromColumn" onClick={() => props.onAllCheck()}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="global" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    All
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('facebook')).length == 0?
                            <div className="searchPlatfromColumn" onClick={() => props.openModelSubsource( SubsourceTag.FACEBOOK)}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="facebook" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Facebook
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected" onClick={() => props.openModelSubsource( SubsourceTag.FACEBOOK)}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="facebook" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Facebook
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('instagram')).length == 0?
                            <div className="searchPlatfromColumn">
                                <div className="searchPlatfromIcon">
                                    <Icon type="instagram" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Instagram
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected">
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="instagram" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Instagram
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('lihkg')).length == 0?
                            <div className="searchPlatfromColumn" onClick={() => props.openModelSubsource( SubsourceTag.LIHKG)}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="smile-o" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Lihkg
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected" onClick={() => props.openModelSubsource( SubsourceTag.LIHKG)}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="smile-o" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Lihkg
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('hkgolden')).length == 0?
                            <div className="searchPlatfromColumn" onClick={() => props.openModelSubsource( SubsourceTag.HKGOLDEN)}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="twitter" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Hkgolden
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected" onClick={() => props.openModelSubsource( SubsourceTag.HKGOLDEN)}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="twitter" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Hkgolden
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('uwants')).length == 0?
                            <div className="searchPlatfromColumn" onClick={() => props.openModelSubsource( SubsourceTag.UWANTS)}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="message" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Uwants
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected" onClick={() => props.openModelSubsource( SubsourceTag.UWANTS)}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="message" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Uwants
                                </div>
                            </div>
                        }
                        <Divider type="vertical" />
                        {
                            props.source.filter( item => item.includes('discuss')).length == 0?
                            <div className="searchPlatfromColumn" onClick={() => props.openModelSubsource( SubsourceTag.HKDISCUSS)}>
                                <div className="searchPlatfromIcon">
                                    <Icon type="wechat" />
                                </div>
                                <div className="searchPlatfromTitle">
                                    Hkdiscuss
                                </div>
                            </div>:
                            <div className="searchPlatfromColumnSelected" onClick={() => props.openModelSubsource( SubsourceTag.HKDISCUSS)}>
                                <div className="searchPlatfromIconSelected">
                                    <Icon type="wechat" />
                                </div>
                                <div className="searchPlatfromTitleSelected">
                                    Hkdiscuss
                                </div>
                            </div>
                        }
                    </div>
                    <div className="subSourceListWrapper">
                        {
                            props.show ?
                            <SubSourceList/>:null
                        }
                    </div>
                    <div className="footer">
                        <button 
                            className = "btn btn-sm cancelBtn"
                            onClick={() => props.onModelClose()}
                        > 
                            Cancel
                        </button>
                        <button 
                            className = "btn btn-sm saveBtn"
                            // onClick   = { ()=> this.onSearch() }
                        > 
                            Save
                        </button>
                    </div>


                </div>
            </div>
        </Modal>
    )
};

const Modal = styled.div`
    display: flex;
    justify-content: center;

    &> .background{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 500;
        background-color: #000;
        opacity: 0.2;
    }

    &> .ModalWrapper{
        width: 1000px;
        height: auto;
        position: fixed;
        top: 8vh;
        z-index: 510;
        background-color: white;

        &> .ModalContent{
            padding: 20px;

            &> .header{
                display: flex;

                &> i{
                    font-size: 15px;
                    display: flex;
                    align-self: center;
                }

                &> .title{
                    padding-left: 10px;
                    font-size: 15px;
                    font-weight: bold;
                    color: black;
                }
            }

            &> .ant-divider-horizontal{
                margin: 10px 0;
            }

            &> .keywordWrapper{
                display: flex;
                padding: 10px 0;

                &> .column{
                    width: 33%;
                    padding-left: 21px;

                    &> .titleContainer{
                        display: flex;

                        &> .necessaryTitle{
                            font-size: 18px;
                            font-weight: 500;
                            color: #158FD8;
                        }
    
                        &> .hints{
                            font-size: 9px;
                            color: #aab4c0;
                            padding-left: 10px;
                            vertical-align: top;
                        }
    
                        &> .necessaryHints{
                            font-size: 9px;
                            padding-left: 10px;
                            color: #f30044;
                            font-weight: 400;
                            text-transfrom: uppercase;
                            vertical-align: top;
                        }
    
                        &> .title{
                            font-size: 19px;
                            font-weight: 300;
                        }
                    }

                    &> .titleDesc{
                        padding: 10px 20px 0px 0px;
                        color: #333333;
                        font-size: 12px;

                        &> b{
                            color: #158FD8;
                        }
                    }
                }
            }

            &> .searchSets{
                background-color: #F8F8FB;
                display: flex;

                &> .column{
                    width: 33%;
                    padding: 10px 20px;

                    &> .searchInputWrapper{
                        display: flex;
                        justify-content: flex-start;
                        
                    }

                    &> .searchSetsDesc{
                        display: flex;
                        justify-content: center;
                        font-size: 11px;
                        font-weight: 400;
                        color: #89919A;
                        padding-top: 4px;
                    }

                }
            }

            &> .dateSetsWrapper{
                padding: 20px 20px;
                display: flex;
                justify-content: flex-start;

                &> .dateTitleWrapper{
                    display: flex;
                    padding-right: 10px;

                    &> .dateTitle{
                        font-size: 19px;
                        font-weight: 300;
                    }

                    &> .hints{
                        font-size: 9px;
                        color: #aab4c0;
                        padding: 0px 10px;
                        vertical-align: top;
                    }
                }

                &> .datapicker{
                    width: 475px;
                    box-sizing: border-box;
                    padding: 4px 11px;
                    height: 32px;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    display: flex;

                    &> .datapickeritem{
                        display: flex;
                        width: 200px;

                        &> .DayPickerInput {
                            &> input{
                                width: 180px;
                                font-size: 14px;
                                line-height: 1.5;
                                color: rgba(0, 0, 0, 0.65);
                                border: 0;
                                text-align: center;
                            }

                            &> input:focus {
                                outline: none;
                                background-color: light-blue;
                            }

                            &> input::placeholder {
                                color: #aab4c0;
                            }

                            &> .DayPickerInput-OverlayWrapper{
                                &> .DayPickerInput-Overlay{
                                    &> .DayPicker{
                                        &> .DayPicker-wrapper{
                                            &> .DayPicker-Months{
                                                &> .DayPicker-Month{
                                                    &> .DayPicker-Body{
                                                        &> .DayPicker-Week{
                                                            
                                                            &> .DayPicker-Day {
                                                                border-radius: 0 !important;
                                                            }
                            
                                                            &> .DayPicker-Day--start {
                                                                border-top-left-radius: 50% !important;
                                                                border-bottom-left-radius: 50% !important;
                                                            }
                            
                                                            &> .DayPicker-Day--end {
                                                                border-top-right-radius: 50% !important;
                                                                border-bottom-right-radius: 50% !important;
                                                            }
    
                                                            &> .DayPicker-Day--range{
                                                                background-color: #f0f8ff !important;
                                                                color: #4a90e2;
                                                            }
    
                                                            &> .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                                                                background-color: #f0f8ff !important;
                                                                color: #4a90e2;
                                                              }
                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }

                        &> .anticon{
                            cursor: pointer;
                        }
                    }

                    & .anticon{
                        width: 50px;
                        font-size: 19px;
                        padding-top: 2px;
                        color:#aab4c0;
                    }
                }

                &> .postCheckboxContainer{
                    padding-left: 40px;
                    display: flex;
                    align-self: center;
                    width: 100%;
                    justify-content: center;

                    &> .ant-checkbox-wrapper{
                        padding-top: 3px;
                    }

                    &> .postCheckBoxTitleWrapper{
                        padding-left: 20px;
                        display: flex;

                        &> .postCheckBoxTitle{
                            font-size: 19px;
                            font-weight: 300;
                        }

                        &> .hints{
                            font-size: 9px;
                            color: #aab4c0;
                            padding: 0px 10px;
                            vertical-align: top;
                        }
                    }
                }

            }

            &> .searchPlatfromTitleWrapper{
                display: flex;
                padding: 10px 0;

                &> .searchPlatfromTitle{
                    font-size: 19px;
                    font-weight: 300;
                    padding-left: 20px;
                }

                &> .hints{
                    font-size: 9px;
                    color: #aab4c0;
                    padding: 0px 10px;
                    vertical-align: top;
                }
            }

            &> .searchPlatfromWrapper{
                padding: 20px 20px 0 20px;
                display: flex;
                
                &> .searchPlatfromColumn{
                    width: 123px;
                    height: 64px;
                    cursor: pointer;

                    &> .searchPlatfromIcon{
                        padding: 5px 0 0;
                        width: 123px;
                        height: 35px;
                        display: flex;
                        align-items:center;
                        justify-content: center;
        
                        &> .anticon{
                            font-size: 30px;
                        }
                    }
        
                    &> .searchPlatfromTitle{
                        width: 123px;
                        height: 29px;
                        font-size: 12px;
                        padding-top: 2px;
                        padding-bottom: 5px;
                        display: flex;
                        align-items:center;
                        justify-content: center;
                    }
                }

                &> .searchPlatfromColumn:hover{
                    color: #158FD8;
                }

                &> .searchPlatfromColumnSelected{
                    width: 123px;
                    height: 64px;
                    border: 1px solid #158FD8;
                    border-radius: 5px;
                    color: #158FD8;
                    cursor: pointer;

                    &> .searchPlatfromIconSelected{
                        padding: 3px 0 0;
                        width: 121px;
                        height: 35px;
                        display: flex;
                        align-items:center;
                        justify-content: center;
        
                        &> .anticon{
                            font-size: 30px;
                        }
                    }
        
                    &> .searchPlatfromTitleSelected{
                        width: 121px;
                        height: 28px;
                        font-size: 12px;
                        padding-top: 3px;
                        padding-bottom: 7px;
                        display: flex;
                        align-items:center;
                        justify-content: center;
                    }
                }

                &> .ant-divider-vertical{
                    margin: 2px 4px;
                    height: auto;
                }
            }

            &> .subSourceListWrapper{
                padding: 0 20px;
            }

            &> .footer{
                padding: 20px 0;
                display: flex;
                justify-content: flex-end;

                &> .btn{
                    margin: 0 20px;
                }

                &> .cancelBtn{
                    background-color: #D8D8D8;
                    color: white;
                }

                &> .saveBtn{
                    background-color: #158FD8;
                    color: white;
                }
            }


        }
    }

`