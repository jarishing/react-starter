import React            from 'react';
import styled           from 'styled-components';
import { Icon } from 'antd';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import './style.css';

export default( props ) => {
    let toDatepicker = null;

    let dateFrom = props.startDate;
    let dateTo  = props.endDate;
    let keyword = props.keyword;

    const range = { start: dateFrom, end: dateTo, after: dateFrom, before: dateTo };

    return (
        <DatePicker>
               <div className="analysis-Filter-DatePicker-Item">
                    <div className="analysis-Filter-DatePicker-Title">
                        From
                    </div>
                    <div className="analysis-Filter-DatePicker-Input-Wrapper">
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
               <div className="analysis-Filter-DatePicker-Item">
                    <div className="analysis-Filter-DatePicker-Title">
                        To
                    </div>
                    <div className="analysis-Filter-DatePicker-Input-Wrapper">
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
            </DatePicker>
    )
};

const DatePicker = styled.div`
    align-self: center;
    display: flex;

    &> .analysis-Filter-DatePicker-Item{
        &> .analysis-Filter-DatePicker-Input-Wrapper{
            &> .DayPickerInput {
                width:150px;

                &> input{
                    border: 0;
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

        }
    }
`