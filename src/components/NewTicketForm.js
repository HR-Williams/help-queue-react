import { v4 } from 'uuid';
import React from "react";
import ReuseableForm from './ReusableForm';
import PropTypes from "prop-types";

function NewTicketForm(props){
  const newTicketFormStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingLeft: '50px'
  }
  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!"/>
    </React.Fragment>
  );
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;