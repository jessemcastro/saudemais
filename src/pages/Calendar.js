import React from "react";
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const Calendar = () => {

    const events = [
      {
        title: "Teste",
        bgColor: "#ff7f50",
        start: new Date(2021, 9, 25, 10, 0),
        end: new Date(2021, 9, 25, 15, 30),
        desc: "teste"
      },
      {
        title: "All Day Event very long title",
        bgColor: "#ff7f50",
        allDay: true,
        start: new Date(2021, 9, 0),
        end: new Date(2021, 9, 1)
      },
      {
        title: "Long Event",
        start: new Date(2021, 9, 7),
        end: new Date(2021, 9, 10)
      },

      {
        title: "DTS STARTS",
        bgColor: "#dc143c",
        start: new Date(2021, 9, 13, 0, 0, 0),
        end: new Date(2021, 9, 20, 0, 0, 0)
      },

      {
        title: "DTS ENDS",
        bgColor: "#ff8c00",
        start: new Date(2021, 9, 6, 0, 0, 0),
        end: new Date(2021, 9, 13, 0, 0, 0)
      },

      {
        title: "Some Event",
        bgColor: "#9932cc",
        start: new Date(2021, 9, 9, 0, 0, 0),
        end: new Date(2021, 9, 9, 0, 0, 0)
      },
      {
        title: "Conference",
        bgColor: "#e9967a",
        start: new Date(2021, 9, 11),
        end: new Date(2021, 9, 13),
        desc: "Big conference for important people"
      },
      {
        title: "Meeting",
        bgColor: "#8fbc8f",
        start: new Date(2021, 9, 12, 10, 30, 0, 0),
        end: new Date(2021, 9, 12, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting"
      },
      {
        title: "Lunch",
        bgColor: "#cd5c5c",
        start: new Date(2021, 9, 12, 12, 0, 0, 0),
        end: new Date(2021, 9, 12, 13, 0, 0, 0),
        desc: "Power lunch"
      },
      {
        title: "Happy Hour",
        start: new Date(2021, 9, 12, 12, 0, 0, 0),
        end: new Date(2021, 9, 12, 13, 0, 0, 0),
        desc: "Power lunch happy hour"
      },
      {
        title: "Meeting",
        bgColor: "#da70d6",
        start: new Date(2021, 9, 12, 14, 0, 0, 0),
        end: new Date(2021, 9, 12, 15, 0, 0, 0)
      },
      {
        title: "Happy Hour",
        bgColor: "#eee8aa",
        start: new Date(2021, 9, 17, 17, 0, 0, 0),
        end: new Date(2021, 9, 17, 17, 30, 0, 0),
        desc: "Most important meal of the day"
      },
      {
        title: "Dinner",
        bgColor: "#98fb98",
        start: new Date(2021, 9, 15, 20, 0, 0, 0),
        end: new Date(2021, 9, 15, 21, 0, 0, 0)
      },
      {
        title: "Birthday Party",
        bgColor: "#afeeee",
        start: new Date(2021, 9, 13, 7, 0, 0),
        end: new Date(2021, 9, 13, 10, 30, 0)
      },
      {
        title: "Birthday Party 2",
        bgColor: "#db7093",
        start: new Date(2021, 9, 13, 7, 0, 0),
        end: new Date(2021, 9, 13, 10, 45, 0)
      },
      {
        title: "Birthday Party 3",
        bgColor: "#cd853f",
        start: new Date(2021, 9, 13, 7, 0, 0),
        end: new Date(2021, 9, 13, 10, 30, 0)
      },
      {
        title: "Late Night Event",
        bgColor: "#b0e0e6",
        start: new Date(2021, 9, 17, 19, 30, 0),
        end: new Date(2021, 9, 18, 2, 0, 0)
      },
      {
        title: "Multi-day Event",
        start: new Date(2021, 9, 20, 19, 30, 0),
        end: new Date(2021, 9, 22, 2, 0, 0)
      }
    ];
    return (
      <div >
        <h3 className="callout">
          Click an event to see more info, or drag the mouse over the calendar
          to select a date/time range.
        </h3>
        <BigCalendar
          selectable
          events={events}
          defaultView="week"
          scrollToTime={new Date(2022, 10, 1)}
          defaultDate={new Date(2021, 9, 24)}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={(slotInfo) =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
        />
      </div>
    )

}

export default Calendar

