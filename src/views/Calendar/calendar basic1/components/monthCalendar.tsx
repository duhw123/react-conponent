import { CalendarProps } from "../../calendar";
import cs from "classnames";
import dayjs, { Dayjs } from "dayjs";

interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
}

// 获取所有的渲染天数
function getAllDays(date: Dayjs) {
  console.log(date, "1233");

  const startDate = date.startOf("month");
  const day = startDate.day();

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
}
// 准备渲染数据
function renderDays(
  days: Array<{ date: Dayjs; currentMonth: boolean }>,
  dateRender: MonthCalendarProps["dateRender"],
  dateInnerContent: MonthCalendarProps["dateInnerContent"],
  value: Dayjs,
  selectHandler: MonthCalendarProps["selectHandler"]
) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          onClick={() => selectHandler?.(item.date)}
          className={cs(
            "calendar-month-body-cell",
            value.format("YYYY-MM-DD") === item.date.format("YYYY-MM-DD")
              ? "calendar-month-body-cell-date-selected"
              : ""
          )}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div className="calendar-month-body-cell-date-value">
                {item.date.date()}
              </div>
              <div className="calendar-month-body-cell-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}

function MonthCalendar(props: MonthCalendarProps) {
  const {
    value = dayjs("2023-11-08"),
    dateRender,
    dateInnerContent,
    selectHandler,
  } = props;
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  // 获取所有数据
  const allDays = getAllDays(value);
  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {week}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          allDays,
          dateRender,
          dateInnerContent,
          value,
          selectHandler
        )}
      </div>
    </div>
  );
}

export default MonthCalendar;
