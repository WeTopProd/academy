import React, { useState } from 'react';
import MultipleDatePicker from 'react-multiple-datepicker';
import DatePicker from 'react-multi-date-picker';
import styles2 from './calendar.module.scss';
// import 'react-multi-date-picker/styles/colors/yellow.css';

const Block3Step2 = () => {
  const [selectedDates, setSelectedDates] = useState([]); // Assuming you're managing selected dates in state

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const handleDayRender = (date, props) => {
    if (props.isSelected) {
      props.className += ` ${styles2['gold-circle']}`;
    }
  };

  return (
    <div>
      Block3Step2
      <MultipleDatePicker multiple={true} minDate={new Date()} sort={true} />
      <DatePicker
        multiple={true}
        minDate={new Date()}
        sort={true}
        onChange={handleDateChange}
        className="yellow"
      />
    </div>
  );
};

export default Block3Step2;
