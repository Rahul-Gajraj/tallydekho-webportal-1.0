import React, { useMemo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import toast from "react-hot-toast";

import EMIDetailDrawer from "./Drawer/EMIDetailDrawer";

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
      // return { ...event, title: `${event.emi} - ${event.loan}` };
      return { ...event, title: event.loan };
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
    const viewType = eventInfo.view.type;
    const { title, textColor } = eventInfo.event;
    const { status, bgColor } = eventInfo.event.extendedProps;

    return {
      html: `<div style="background-color: ${
        viewType === "listMonth" ? "" : bgColor
      }; padding: ${viewType === "listMonth" ? "0px" : "1px 6px"};" class="event-box">
            <span class="event-title">${title}</span>
        </div>`,
    };
  };

  const handleEventDidMount = (info) => {
    const viewType = info.view.type;
    const { title, textColor } = info.event;
    const { status, bgColor } = info.event.extendedProps;

    if (viewType === "listMonth") {
      const dot = info.el.querySelector(".fc-list-event-dot");

      if (dot) {
        dot.classList.add("custom-list-dot");
        dot.style.border =
          `5px solid ${textColor}` || "5px solid #3788d8";
      }
    }
  };

  const handleDayClick = (dateStr) => {
    const eventsForDay = EVENTS.filter((ev) => ev.date === dateStr);

    if (eventsForDay.length > 0) {
      setSelectedEvent({ date: eventsForDay[0].date, emis: eventsForDay });
    } else {
      setSelectedEvent(null);
      // toast.error('No events on this date')
    }
  };

  const calendarOptions = {
    events: CALENDER_DATA,
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      bootstrap5Plugin,
    ],
    initialView: "dayGridMonth",
    headerToolbar: {
      start: "prev,next, title",
      // end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      end: "dayGridMonth,listMonth",
    },
    views: {
      week: {
        titleFormat: { year: "numeric", month: "long", day: "numeric" },
      },
    },
    height: "auto",
    editable: true,
    eventResizableFromStart: true,
    dragScroll: true,
    dayMaxEvents: 2,
    navLinks: true,
    // eventClassNames({ event: calendarEvent }) {
    //   const colorName = calendarEvent._def.extendedProps.bgColor;
    //   return [
    //     `bg-[${colorName}]`,
    //   ];
    // },
    // eventClick({ event: clickedEvent }) {
    //   dispatch(handleSelectEvent(clickedEvent))
    //   handleAddEventSidebarToggle()
    // },
    // customButtons: {
    //   sidebarToggle: {
    //     icon: 'bi bi-list',
    //     click() {
    //       handleLeftSidebarToggle()
    //     }
    //   }
    // },
    // dateClick(info) {
    //   const ev = { ...blankEvent }
    //   ev.start = info.date
    //   ev.end = info.date
    //   ev.allDay = true

    //   // @ts-ignore
    //   dispatch(handleSelectEvent(ev))
    //   handleAddEventSidebarToggle()
    // },
    // eventDrop({ event: droppedEvent }) {
    //   dispatch(updateEvent(droppedEvent))
    // },
    // eventResize({ event: resizedEvent }) {
    //   dispatch(updateEvent(resizedEvent))
    // },
    // ref: calendarRef,

    // Get direction from app state (store)
    // direction
  };

  return (
    <>
      <section className="mt-5">
        <FullCalendar
          {...calendarOptions}
          eventContent={renderEventContent}
          eventDidMount={handleEventDidMount}
        />
      </section>
    </>
  );
};

export default EMICalendar;
