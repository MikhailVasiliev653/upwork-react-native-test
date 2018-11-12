import React from 'react';
import { reduxForm } from 'redux-form';
import EntryForm from './EntryForm';
import { FORM_NAMES } from '../util/const';

const EditEntry = ({ handleSubmit, onSubmit, current }) => (
  <EntryForm
    handleSubmit={handleSubmit(values => onSubmit(current, values))}
    submitButtonName="Update"
  />
);

export default reduxForm({
  form: FORM_NAMES.EDIT_ENTRY,
})(EditEntry);

