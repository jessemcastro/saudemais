import React from "react";
import { useState, useEffect } from 'react'
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";

import axios from 'axios'

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


const Calendar = () => {

    const [professors, setProfessors] = useState([])
      useEffect(() => {
          axios.get('https://reqres.in/api/users?page=2')
              .then(response => {
                  const { data } = response.data

                  setProfessors(data)
              })
      }, [])
    
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])


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
        
        <div >
          <FormControl  sx={{ m: 2, minWidth: 220 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Professor
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'professor',
                id: 'uncontrolled-native',
              }}
            >
              {professors.map((option) => (
                <option value={option.id}>{"Prof. " + option.first_name}</option>
              ))}
            </NativeSelect>
          </FormControl>
          




          <FormControl  sx={{ m: 2, minWidth: 220 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Aluno
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'aluno',
                id: 'uncontrolled-native',
              }}
            >
            {customers.map((option) => (
              <option value={option.id}>{option.first_name + ' ' + option.last_name}</option>
            ))}
            </NativeSelect>
          </FormControl>


          <FormControl  sx={{ m: 2, minWidth: 220 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Modalidade
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'modalidade',
                id: 'uncontrolled-native',
              }}
            >
              <option value={1}>Modalidade 1</option>
              <option value={2}>Modalidade 2</option>
              <option value={3}>Modalidade 3</option>
            </NativeSelect>
          </FormControl>
        </div>

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

export default Calendar;

