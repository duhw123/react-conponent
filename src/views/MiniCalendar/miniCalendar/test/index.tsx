import React from "react";
import MiniCalendar from "../MiniCalendar/miniCalendar basic1";
import { CalendarRef } from "../MiniCalendar/miniCalendar basic1";

function Test() {
  const arr = [<div>666</div>, <div>777</div>];
  const calendarRef = React.useRef<CalendarRef>(null);
  const handleDate = () => {
    console.log(111);
    calendarRef?.current?.getDate();
    console.log(calendarRef?.current?.getDate(), "12");
    calendarRef?.current?.setDate(new Date(2024, 3, 1));
  };
  return (
    <>
      test
      <br />
      <MiniCalendar
        ref={calendarRef}
        value={new Date()}
        onChange={(date: Date) => {
          console.log(date, "23");
          alert(date.toDateString());
        }}
      />
      <br />
      <button onClick={() => handleDate()}>点击事件1</button>
      {arr}
      {/* <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 1024 1024">
        <path d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z"></path>
      </svg>
      <br />
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
      </svg> */}
    </>
  );
}
export default Test;
