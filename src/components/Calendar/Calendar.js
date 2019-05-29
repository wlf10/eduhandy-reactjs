import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from "moment";

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


import Button from '@material-ui/core/Button';
import FlatButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

require("react-big-calendar/lib/css/react-big-calendar.css");
import './Calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: "",
      start: "",
      end: "",
      desc: "",
      openSlot: false,
      openEvent: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidMount(){
  //     this.getCachedEvents();
  // }

  // getCachedEvents(){
  //   const cachedEvents = localStorage.getItem("cachedEvents");
  //   console.log("Cached Events", JSON.parse(cachedEvents));
  //   if(cachedEvents){
  //       this.setState({events: JSON.parse(cachedEvents)})
  //   }
  //   return;
  // }

  //closes modals
  handleClose() {
    this.setState({ openEvent: false, openSlot: false });
  }

  //  Allows user to click on calendar slot and handles if appointment exists
  handleSlotSelected(slotInfo) {
    console.log("Real slotInfo", slotInfo);
    this.setState({
      title: "",
      desc: "",
      start: slotInfo.start,
      end: slotInfo.end,
      openSlot: true
    });
  }

  handleEventSelected(event) {
    console.log("event", event);
    this.setState({
      openEvent: true,
      clickedEvent: event,
      start: event.start,
      end: event.end,
      title: event.title,
      desc: event.desc
    });
  }

  setTitle(e) {
    this.setState({ title: e });
  }

  setDescription(e) {
    this.setState({ desc: e });
  }

  handleStartTime = (event, date) => {
    this.setState({ start: date });
  };

  handleEndTime = (event, date) => {
    this.setState({ end: date });
  };

  // Onclick callback function that pushes new appointment into events array.
  setNewAppointment() {
    const { start, end, title, desc } = this.state;
    let appointment = { title, start, end, desc };
    let events = this.state.events.slice();
    events.push(appointment);
    // localStorage.setItem("cachedEvents", JSON.stringify(events));
    this.setState({ events });
  }

  //  Updates Existing Appointments Title and/or Description
  updateEvent() {
    const { title, desc, start, end, events, clickedEvent } = this.state;
    const index = events.findIndex(event => event === clickedEvent);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
    // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvent));
    this.setState({
      events: updatedEvent
    });
  }

  //  filters out specific event that is to be deleted and set that variable to state
  deleteEvent() {
    let updatedEvents = this.state.events.filter(
      event => event["start"] !== this.state.start
    );
    // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvents));
    this.setState({ events: updatedEvents });
  }

  render() {

    return (
      <div id="Calendar">
        {/* react-big-calendar library utilized to render calendar*/}
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          views={["month", "week", "day", "agenda"]}
          timeslots={2}
          defaultView="week"
          defaultDate={new Date()}
          selectable={true}
          onSelectEvent={event => this.handleEventSelected(event)}
          onSelectSlot={slotInfo => this.handleSlotSelected(slotInfo)}
        />

        {/* Material-ui Modal for booking new appointment */}
        <Dialog
          modal={false}
          open={this.state.openSlot}
          onRequestClose={this.handleClose}
        >
          <DialogTitle id="simple-dialog-title">
            {`Book an appointment on ${moment(this.state.start).format("MMMM Do YYYY")}`}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={e => {
                this.setTitle(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="descr"
              label="Description"
              type="text"
              fullWidth
              onChange={e => {
                this.setDescription(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="start"
              defaultValue="08:30"
              label="Start"
              type="time"
              onChange={e => {
                this.setDescription(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="finish"
              defaultValue="10:20"
              label="Finish"
              type="time"
              
              onChange={e => {
                this.setDescription(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
              this.setNewAppointment(), this.handleClose();
              }} color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

        {/* Material-ui Modal for Existing Event */}
        <Dialog
          modal={false}
          open={this.state.openEvent}
          onRequestClose={this.handleClose}
        >
          <DialogTitle id="simple-dialog-title">
            {`View/Edit Appointment of ${moment(this.state.start).format("MMMM Do YYYY")}`}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              multiLine={true}
              fullWidth
              defaultValue={this.state.title}
              onChange={e => {
                this.setTitle(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="descr"
              label="Description"
              type="text"
              multiLine={true}
              fullWidth
              defaultValue={this.state.desc}
              onChange={e => {
                this.setDescription(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              secondary={true}
              keyboardFocused={true}
              onClick={() => {
                this.deleteEvent(), this.handleClose();
              }}
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                this.updateEvent(), this.handleClose();
              }}
              color="primary"
            >
              Confirm
            </Button>
          </DialogActions>
          {/*
          <TimePicker
            format="ampm"
            floatingLabelText="Start Time"
            minutesStep={5}
            value={this.state.start}
            onChange={this.handleStartTime}
          />
          <TimePicker
            format="ampm"
            floatingLabelText="End Time"
            minutesStep={5}
            value={this.state.end}
            onChange={this.handleEndTime}
          />
          */}
        </Dialog>
      </div>
    );
  }
}

export default Calendar;