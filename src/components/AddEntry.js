import React from 'react';
import { reduxForm } from 'redux-form';
import EntryForm from './EntryForm';
import { FORM_NAMES } from '../util/const';

const AddEntry = ({ handleSubmit }) => (
  <EntryForm
    handleSubmit={handleSubmit}
    submitButtonName="Add"
  />
);

export default reduxForm({
  form: FORM_NAMES.ADD_ENTRY,
})(AddEntry);

