import React from 'react'
import Slider from "react-rangeslider"
import './Time.scss'

interface Props {
    timeValue: number
    onChangeTime: (value: number) => void
    resultRate: number
    activeMonth: any
}

const Time: React.FC<Props> = (props: Props) => {
    const {timeValue, onChangeTime, resultRate, activeMonth} = props

    return (
        <div className="calculator-investment-time">
            <div className="calculator-investment-range">
                <p className="calculator-text">Срок инвестиций ( Месяцев )</p>
                <Slider
                    min={1}
                    max={12}
                    step={1}
                    value={timeValue}
                    tooltip={false}
                    onChange={onChangeTime}
                />
                <div className="calculator-investment-label" ref={activeMonth}>
                    <label id="1">1</label>
                    <label id="2">2</label>
                    <label id="3">3</label>
                    <label id="4">4</label>
                    <label id="5">5</label>
                    <label id="6">6</label>
                    <label id="7">7</label>
                    <label id="8">8</label>
                    <label id="9">9</label>
                    <label id="10">10</label>
                    <label id="11">11</label>
                    <label id="12">12</label>
                </div>
            </div>
            <div className="calculator-investment-rate">
                <p>Процентная ставка</p>
                <b>{resultRate}% <span>в день</span></b>
            </div>
        </div>
    )
}

export default Time
