import React, {useEffect, useState} from 'react'
import './Calendar.scss'

interface Props {
    timeValue: number
}

const Calendar: React.FC<Props> = ({timeValue}) => {
    const [date, setDate] = useState<string>('')
    const [finalDate, setFinalDate] = useState<string>('')
    const [finalDateMin, setFinalDateMin] = useState<string>('')

    useEffect(() => currentDate(), [timeValue])

    const currentDate = ():void => {
        const newDate = new Date()
        let yearNow:number = newDate.getFullYear()
        let monthNow:string = String(newDate.getMonth() + 1)
        let dateNow:string = String(newDate.getDate())
        let yearLater:number = newDate.getFullYear()
        let monthLater:string = String(Number(monthNow) + timeValue)
        let monthLaterMin:string = String(Number(monthNow) + 1)

        // Добавляем 0 перед числом если оно состоит из одного символа
        if (monthNow.length === 1) monthNow = '0' + monthNow
        if (dateNow.length === 1) dateNow = '0' + dateNow
        if (monthLater.length === 1) monthLater = '0' + monthLater
        if (monthLaterMin.length === 1) monthLaterMin = '0' + monthLaterMin

        // Изменяем месяц и год если нынешний месяц + введенный месяц больше 12
        const quantityMonth:number = timeValue + Number(monthNow)
        if (quantityMonth > 12) {
            yearLater = yearLater + 1

            const arrayMonth = []
            for (let i = 1; i <= quantityMonth; i++) {
                if (i > 12) arrayMonth.push(i)
            }

            monthLater = '0' + arrayMonth.length
        }

        setDate(`${yearNow}-${monthNow}-${dateNow}`)
        setFinalDate(`${yearLater}-${monthLater}-${dateNow}`)
        setFinalDateMin(`${yearNow}-${monthLaterMin}-${dateNow}`)
    }

    return (
        <div className="calculator-investment-calendar">
            <div className="calendar-inner">
                <div className="calendar-margin">
                    <p className="calendar-title">Старт инвестиций</p>
                    <div className="calendar-child">
                        <label htmlFor="calendar" className="calendar-wrapper">
                            <input
                                type="date"
                                defaultValue={date}
                                id="calendar"
                                min={date}
                            />
                        </label>
                    </div>
                </div>
                <div className="calendar-margin">
                    <p className="calendar-title">Завершение инвестиций</p>
                    <div className="calendar-child">
                        <label htmlFor="calendar" className="calendar-wrapper">
                            <input
                                type="date"
                                defaultValue={finalDate}
                                id="calendar"
                                min={finalDateMin}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar
