import React, { useMemo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import EMIDetailDrawer from "./Drawer/EMIDetailDrawer";
import toast from "react-hot-toast";

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);

const prevMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() - 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() - 1, 1);

const EVENTS = [
  {
    date: "2025-12-05",
    status: "Overdue",
    textColor: "#f46a6c",
    bgColor: "#fdebea",
    loan: "Vehicle Loan",
    emi: "₹48,500",
  },
  {
    date: "2025-12-10",
    status: "Due",
    textColor: "#f46a6c",
    bgColor: "#fdebea",
    loan: "Home Loan - Office",
    emi: "₹2,10,000",
  },
  {
    date: "2025-12-10",
    status: "Upcoming",
    textColor: "#108f6f",
    bgColor: "#eaf8f4",
    loan: "Machinery Loan",
    emi: "₹1,40,000",
  },
  {
    date: "2025-12-12",
    status: "Paid",
    textColor: "#108f6f",
    bgColor: "#eaf8f4",
    loan: "Home Loan - Office",
    emi: "₹2,10,000",
  },
  {
    date: "2025-12-15",
    status: "Due",
    textColor: "#f46a6c",
    bgColor: "#fdebea",
    loan: "Machinery Loan",
    emi: "₹1,40,000",
  },
  {
    date: "2025-12-15",
    status: "Upcoming",
    textColor: "#108f6f",
    bgColor: "#eaf8f4",
    loan: "Home Loan - Office",
    emi: "₹2,10,000",
  },
  {
    date: "2025-12-18",
    status: "Upcoming",
    textColor: "#108f6f",
    bgColor: "#eaf8f4",
    loan: "Home Loan - Office",
    emi: "₹2,10,000",
  },
  {
    date: "2025-12-18",
    status: "Due Today",
    textColor: "#f46a6c",
    bgColor: "#fdebea",
    loan: "Machinery Loan",
    emi: "₹1,40,000",
  },
  {
    date: "2025-12-18",
    status: "Overdue",
    textColor: "#f46a6c",
    bgColor: "#fdebea",
    loan: "Vehicle Loan",
    emi: "₹48,000",
  },
];

const EMICalendar = ({ setSelectedEvent }) => {
  const CALENDER_DATA = useMemo(() => {
    return EVENTS.map((event) => {
      return { ...event, title: `${event.emi} - ${event.loan}` };
    });
  }, []);

  const renderDayCell = (arg) => {
    const isToday = arg.isToday;

    return {
      html: `
        <div class="flex">
          <span class="${
            isToday
              ? "flex items-center justify-center h-[32px] w-[32px] bg-[#2a8f6f] rounded rounded-xl text-white"
              : ""
          }">
            ${arg.date.getDate()}
          </span>
        </div>
      `,
    };
  };

  const renderEventContent = (eventInfo) => {
    const { title, textColor } = eventInfo.event;
    const { status, bgColor } = eventInfo.event.extendedProps;

    return {
      html: `<div style="background-color: ${bgColor}; border: 1px solid ${textColor};" class="event-box">
            <span class="event-title">${title}</span>
            <span class="event-status">${status}</span>
        </div>`,
    };
  };

  const handleDayClick = (dateStr) => {
    // console.log({ dateStr });
    const eventsForDay = EVENTS.filter((ev) => ev.date === dateStr);

    if (eventsForDay.length > 0) {
      setSelectedEvent({ date: eventsForDay[0].date, emis: eventsForDay });
      // console.log(eventsForDay);
    } else {
      setSelectedEvent(null)
      // toast.error('No events on this date')
    }
  };

  return (
    <>
      <section className="mt-5">
        <FullCalendar
          // plugins={[
          //   dayGridPlugin,
          //   timeGridPlugin,
          //   listPlugin,
          //   interactionPlugin,
          //   bootstrap5Plugin,
          // ]}
          plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
          initialView="dayGridMonth"
          // initialView="listWeek"
          // themeSystem="bootstrap5"
          editable={true}
          selectable={true}
          dayMaxEvents={2}
          // dayMaxEventRows={2}
          moreLinkContent={(args) => `+${args.num} more`}
          eventContent={renderEventContent}
          dayCellContent={renderDayCell}
          events={
            //     [
            //   {
            //     id: 1,
            //     url: "",
            //     title: "Design Review",
            //     start: date,
            //     end: date,
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Business",
            //     },
            //     backgroundColor: "green",
            //     borderColor: "green",
            //   },
            //   {
            //     id: 2,
            //     url: "",
            //     title: "Meeting With Client",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Business",
            //     },
            //   },
            //   {
            //     id: 3,
            //     url: "",
            //     title: "Family Trip",
            //     allDay: true,
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -9),
            //     extendedProps: {
            //       calendar: "Holiday",
            //     },
            //   },
            //   {
            //     id: 4,
            //     url: "",
            //     title: "Doctor's Appointment",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Personal",
            //     },
            //   },
            //   {
            //     id: 5,
            //     url: "",
            //     title: "Dart Game?",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "ETC",
            //     },
            //   },
            //   {
            //     id: 6,
            //     url: "",
            //     title: "Meditation",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Personal",
            //     },
            //   },
            //   {
            //     id: 7,
            //     url: "",
            //     title: "Dinner",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Family",
            //       status: "done",
            //     },
            //   },
            //   {
            //     id: 8,
            //     url: "",
            //     title: "Product Review",
            //     start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
            //     end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Business",
            //     },
            //   },
            //   {
            //     id: 9,
            //     url: "",
            //     title: "Monthly Meeting",
            //     start: nextMonth,
            //     end: nextMonth,
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Business",
            //     },
            //   },
            //   {
            //     id: 10,
            //     url: "",
            //     title: "Monthly Checkup",
            //     start: prevMonth,
            //     end: prevMonth,
            //     allDay: true,
            //     extendedProps: {
            //       calendar: "Personal",
            //     },
            //   },
            // ]
            CALENDER_DATA
          }
          dateClick={(info) => handleDayClick(info.dateStr)}
          eventClick={(info) => {
            const date = info.event.startStr.split("T")[0];
            handleDayClick(date);
          }}
          dayCellDidMount={(arg) => {
            arg.el.addEventListener("click", () => {
              const dateStr = arg.date.toISOString().split("T")[0];
              handleDayClick(dateStr);
            });
          }}
          height="auto"
          headerToolbar={{
            start: "prev,title,next, today",
            //   center: "title",
            right: "",
          }}
          showNonCurrentDates={false}
        />
      </section>
    </>
  );
};

export default EMICalendar;
