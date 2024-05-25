import { Dayjs } from "dayjs";
export interface HeaderProps {
  curMonth: Dayjs;
  preMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

function Header(props: HeaderProps) {
  const { curMonth, preMonthHandler, nextMonthHandler, todayHandler } = props;
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={preMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {curMonth.format("YYYY 年 MM 月")}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className="calendar-header-btn" onClick={todayHandler}>
          今天
        </button>
      </div>
    </div>
  );
}

export default Header;
