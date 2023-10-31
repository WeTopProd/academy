import React, { useState } from 'react'
import styles from '../styles.module.scss'
import UserInfo_Logout from './UserInfo_Logout'
import { Calendar } from 'react-multi-date-picker';

const TeacherClassSchedule = () => {
    const [date,setDate] = useState('')
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ];
      const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];


      const handler = {
        date:(e)=>{
            setDate(`${e.year}-${e.month.number}-${e.day}`);
            

        }
      }
  return (
    <div className={styles.TeacherClassScheduleWrapper}>
        <h1>Расписание занятий</h1>
        <UserInfo_Logout />

<div className={styles.ClassSchedule}>
    <div className={styles.ClassScheduleBlock1}>
        <h2>{date}</h2>

<div>

        {date && <>
            <h3>13:00-14:00 &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	<span className={styles.busy}>занято</span></h3>
            <h3>14:00-15:00 &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	<span className={styles.free}>свободно</span></h3>
        </>
            }
            </div>
        
    </div>
    <div><Calendar
          multiple={false}
        //   minDate={new Date()}
          sort={true}
          onChange={handler.date}
          className="yellow"
          months={months}
          weekDays={weekdays}
          
        /></div>
</div>
        
    </div>
  )
}

export default TeacherClassSchedule