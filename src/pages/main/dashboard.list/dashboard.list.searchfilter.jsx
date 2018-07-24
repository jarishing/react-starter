import React            from 'react';
import styled           from 'styled-components';

import { Divider, Input, Icon, Checkbox } from 'antd';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

export default( props ) => {
    let toDatepicker = null;

    let dateFrom = props.startDate;
    let dateTo  = props.endDate;
    let keyword = props.keyword;

    const range = { start: dateFrom, end: dateTo };
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
                                    selectedDays: [dateFrom, { dateFrom, dateTo },dateTo],
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
                                    selectedDays: [ dateFrom,{ dateFrom, dateTo }, dateTo],
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
            </div>
        </SearchFilter>
    )
};

const SearchFilter = styled.div`
    width: 290px;
    height: fit-content;
    background-color: white;
    position: fixed;
    top: 76px;
    padding: 14px;

    &> .header{
        color: #14171a;
        font-weight: bold;
    }

    &> .ant-divider-horizontal{
        margin: 8px 0;
    }

    &> .body{
        padding: 0 10px;

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



    }
    
`


// &> .DayPickerInput-OverlayWrapper{
//     &> .DayPickerInput-Overlay{
//         &> .DayPicker{
//             &> .DayPicker-wrapper{
//                 &> .DayPicker-Months{
//                     &> .DayPicker-Month{
//                         &> .DayPicker-Body{
//                             &> .DayPicker-Week{
//                                 &> .DayPicker-Day {
//                                     border-radius: 0 !important;
//                                 }

//                                 &> .DayPicker-Day--start {
//                                     border-top-left-radius: 50% !important;
//                                     border-bottom-left-radius: 50% !important;
//                                 }

//                                 &> .DayPicker-Day--end {
//                                     border-top-right-radius: 50% !important;
//                                     border-bottom-right-radius: 50% !important;
//                                 }
                                
//                                 &> .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
//                                     background-color: #f0f8ff !important;
//                                     color: #4a90e2;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// <div className="datepicker">
//                     <div className="datepickertile">From</div>
//                     <DayPickerInput 
//                         value           = {dateFrom}
//                         placeholder     =""
//                         format          ="LL"
//                         formatDate      ={formatDate}
//                         parseDate       ={parseDate}
//                         dayPickerProps  ={{
//                             selectedDays: [ dateFrom, {dateFrom, dateTo} ],
//                             disabledDays: { after: dateTo },
//                             toMonth: dateTo,
//                             modifiers,
//                             numberOfMonths: 1,
//                             onDayClick: () => toDatepicker.getInput().focus(),
//                         }}
//                         onDayChange={ props.handleFromChange } 
//                     />
//                     <div className="datepickertile">To</div>
//                     <DayPickerInput 
//                         ref={el => (toDatepicker = el)}
//                         value       = {dateTo}
//                         placeholder =""
//                         format="LL"
//                         formatDate={formatDate}
//                         parseDate={parseDate}
//                         dayPickerProps={{
//                             selectedDays: [ dateFrom, {dateFrom, dateTo} ],
//                             disabledDays: { before: dateFrom },
//                             modifiers,
//                             month: dateFrom,
//                             fromMonth: dateFrom,
//                             numberOfMonths: 1,
//                         }}
//                         onDayChange={ props.handleToChange } 
//                     />
//                 </div>