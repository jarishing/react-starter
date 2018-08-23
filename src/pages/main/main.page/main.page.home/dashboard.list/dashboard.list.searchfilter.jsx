import React            from 'react';
import styled           from 'styled-components';

import { Divider, Input, Icon, Checkbox, Select } from 'antd';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';


export default( props ) => {
    let toDatepicker = null;

    let dateFrom = props.startDate;
    let dateTo  = props.endDate;
    let keyword = props.keyword;

    const range = { start: dateFrom, end: dateTo, after: dateFrom, before: dateTo };
    const suffix = keyword ? <Icon type="close-circle" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.handleKeywordChange("")}/> : null;

    return (
        <SearchFilter>
            <div className="header">
                SEARCH
            </div>
            <Divider/>
            <div className="body">
                <div className="keywordInputWrapper">
                <form onSubmit={ event=> {
                    event.preventDefault();
                    props.searching();
                }}>
                    <Input
                        placeholder="Search"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={keyword}
                        onChange={ event => props.setKeyword(event.target.value) }
                    />
                </form>
                </div>
                <div className="datepicker">
                    <div className="datepickeritem">
                        <div className="datepickerTitle">From</div>
                        <div className="datepickerInputWrapper">
                            <DayPickerInput 
                                value           = {dateFrom}
                                placeholder     =""
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
                            <div>
                                {
                                    dateFrom?
                                    <Icon type="close" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.handleFromChange(undefined)}/> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="datepickeritem">
                        <div className="datepickerTitle">To</div>
                        <div className="datepickerInputWrapper">
                            <DayPickerInput 
                                ref={el => (toDatepicker = el)}
                                value       = {dateTo}
                                placeholder =""
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
                            <div>
                                {
                                    dateTo?
                                    <Icon type="close" style={{ color: 'rgba(0,0,0,.25)' }} onClick={() => props.handleToChange(undefined)}/> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkboxContainer">
                    <Checkbox onChange={ () => props.setPostFilter()}>Post Only</Checkbox>
                </div>
                {
                    props.filterExtend?
                    <div className="additionalBody">
                        <div className="additionalKeywordWrapper">
                            <div className="keywordtitle">Required keyword</div>
                            <div className="keywordInputWrapper">
                                <Select
                                    mode="tags"
                                    dropdownStyle={{display:'none'}}
                                    value={ props.requiredKeyword }
                                    onChange={ tokens => props.handleRequiredKeywordChange( tokens )}
                                />
                            </div>
                        </div>
                        <div className="additionalKeywordWrapper">
                            <div className="keywordtitle">Excluded keyword</div>
                            <div className="keywordInputWrapper">
                            <Select
                                    mode="tags"
                                    dropdownStyle={{display:'none'}}
                                    value={ props.excludedKeyword }
                                    onChange={ tokens => props.handleExcludedKeywordChange( tokens )}
                                />
                            </div>
                        </div>
                    </div>:null
                }
            </div>
            <Divider/>
            <div className="footer">
                <div className="functionButton">
                    <Icon type="save" />
                </div>
                {
                    props.filterExtend?
                    <div className="functionButton" onClick={ () => props.handleExtendFilter()}>
                        <Icon type="up" />
                    </div>:
                    <div className="functionButton" onClick={ () => props.handleExtendFilter()}>
                        <Icon type="down" />
                    </div>
                }
            </div>
        </SearchFilter>
    )
};

// <a onClick={() => props.setModal(modalTag.ADVANCEDSEARCH, true)}>More...</a>

// <div className="moreButtonWrapper">
//                     <div className="moreButton" onClick={ () => props.handleExtendFilter()}> Show additional filters</div>
//                 </div>
//                 <div className="savingButtonWrapper">
//                     <div className="savingButton"> Save current filters</div>
//                 </div>

const SearchFilter = styled.div`
    width: 290px;
    height: fit-content;
    background-color: white;
    position: fixed;
    top: 76px;
    padding: 14px;

    &> .header{
        color: #14171a;
    }

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .body{
        padding: 0 10px 1px 10px;

        &> .keywordInputWrapper{
            width: 100%;
            margin: 12px 0;

            &> .keywordInput{
                width: 100%;
            }
        }

        &> .datepicker{      
            &> .datepickeritem{
                margin: 12px 0;

                &> .datepickerTitle{
                    font-size: 12px;
                    height: 29px;
                }
                &> .datepickerInputWrapper{
                    display: flex;
                    border-bottom: 1px solid lightgrey;
                    &> .DayPickerInput {
                        width: 90%;
    
                        &> input{
                            border: 0;
                            width: 90%;
                            text-align: center;
                        }
    
                        &> input:focus {
                            outline: none;
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

                    &> div{
                        &> .anticon{
                            cursor: pointer;
                        }
                    }

                }
            }
        }

        &> .checkboxContainer{
            margin: 12px 0;

            &> .ant-checkbox-wrapper{
                &> span{
                    font-size: 12px;
                    font-weight: normal;
                }
            }
        }

        &> .additionalBody{
            &> .additionalKeywordWrapper{
                margin: 12px 0;
                &> .keywordtitle{
                    font-size: 12px;
                }
    
                &> .keywordInputWrapper{
                    &> .ant-select{
                        width: 100%;
                        
                        &> .ant-select-selection--multiple{
                            border: 0;
                            border-bottom: 1px solid lightgrey;
                            border-radius: 0px;
                            height: 30px;
                            min-height: 0px;
    
                            &> .ant-select-selection__rendered{
                                display: flex;
                                justify-content: center;
                            }
                        }
    
                        &> .ant-select-selection {
                            box-shadow: 0;
                        }
                    }
                }
            }
        }

    }
    
    &> .footer{
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;

        &> .functionButton{
            margin: 0px 10px;
            &> .anticon{
                font-size: 20px;
                color: darkgray;
            }
        }

        &> .moreButtonWrapper{
            display: flex;
            justify-content: center;
            padding-top: 12px;
            
            &> .moreButton{
                font-size: 12px;
                padding: 6px;
                border-radius: 4px;
                background-color: #158FD8;
                color: white;
                cursor: pointer;
                width: 100%;
                text-align: center;
            }
        }

        &> .savingButtonWrapper{
            display: flex;
            justify-content: center;
            padding: 12px 0px 0px 0px;
            
            &> .savingButton{
                font-size: 12px;
                padding: 6px;
                border-radius: 4px;
                border: 1px solid #158FD8;
                color: #158FD8;
                cursor: pointer;
                width: 100%;
                text-align: center;
            }
        }

        &> a{
            color: lightgray;
            font-size: 12px;
        }
    }
`