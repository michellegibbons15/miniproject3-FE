import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  isBefore,
  parseISO,
} from "date-fns";
import "../../Styles/Dashboard/Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventText, setEventText] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addOrEditEvent = () => {
    if (!eventText.trim() || !eventTime.trim()) return;

    // Ensure correct EST date formatting
    const selectedDateEST = format(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ),
      "yyyy-MM-dd"
    );

    if (editingEvent) {
      const updatedEvents = events.map((event) =>
        event === editingEvent
          ? { ...event, text: eventText, time: eventTime, date: selectedDateEST }
          : event
      );
      setEvents(updatedEvents);
      setEditingEvent(null);
    } else {
      const newEvent = {
        date: selectedDateEST,
        time: eventTime,
        text: eventText,
      };
      setEvents([...events, newEvent]);
    }

    setSelectedDate(null);
    setEventText("");
    setEventTime("");
  };

  const startEditing = (event) => {
    setEditingEvent(event);
    setEventText(event.text);
    setEventTime(event.time);
    setSelectedDate(parseISO(event.date)); // Parse stored date properly
  };

  const cancelEditing = () => {
    setEditingEvent(null);
    setEventText("");
    setEventTime("");
    setSelectedDate(null);
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
  };

  // Get current date in EST
  const nowEST = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const nowESTDate = new Date(nowEST);

  const upcomingEvents = events.filter((event) =>
    isBefore(nowESTDate, parseISO(event.date))
  );
  const pastEvents = events.filter((event) =>
    isBefore(parseISO(event.date), nowESTDate)
  );

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const firstDayIndex = startOfMonth(currentDate).getDay();
  const emptyDays = Array(firstDayIndex).fill(null);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
          ← Prev
        </button>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          Next →
        </button>
        <div className="calendar-days-header">
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div key={day} className="calendar-day-name">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days">
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} className="calendar-day"></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              className="calendar-days"
              key={day}
              onClick={() => setSelectedDate(day)}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>

        {/* Event Form */}
        {selectedDate && (
          <div className="event-form">
            <h4>{editingEvent ? `Edit Event` : `Add Event`} for {format(selectedDate, "PPP")}</h4>
            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Event description"
            />
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
            <button onClick={addOrEditEvent}>{editingEvent ? "Update" : "Add"}</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
        )}
      </div>

      {/* Events List */}
      <div className="events">
        <h3>Upcoming Events</h3>
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events</p>
        ) : (
          upcomingEvents.map((event, index) => (
            <div key={index} className="event-item">
              <strong>{format(parseISO(event.date), "PPP")}</strong>: {event.text} at {event.time}
              <button onClick={() => startEditing(event)}>Edit</button>
              <button onClick={() => deleteEvent(event)}>Delete</button>
            </div>
          ))
        )}

        <h3>Past Events</h3>
        {pastEvents.length === 0 ? (
          <p>No past events</p>
        ) : (
          pastEvents.map((event, index) => (
            <div key={index} className="event-item">
              <strong>{format(parseISO(event.date), "PPP")}</strong>: {event.text} at {event.time}
              <button onClick={() => startEditing(event)}>Edit</button>
              <button onClick={() => deleteEvent(event)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;