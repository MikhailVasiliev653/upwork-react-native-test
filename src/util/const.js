export const SORT_TYPES = {
  none: 'none',
  asc: 'asc',
  desc: 'desc',
};

export const ENTRY_FIELD_NAMES = {
  FIRSTNAME: 'Name',
  LASTNAME: 'Lastname',
  DATE_OF_BIRTH: 'Birth',
  PHONE_NUMBER: 'Phone',
};

export const TABLE_COLUMN_NAMES = [
  { human: 'First name', name: ENTRY_FIELD_NAMES.FIRSTNAME },
  { human: 'Last name', name: ENTRY_FIELD_NAMES.LASTNAME },
  { human: 'Date of birth', name: ENTRY_FIELD_NAMES.DATE_OF_BIRTH },
  { human: 'Phone number', name: ENTRY_FIELD_NAMES.PHONE_NUMBER },
];

export const FORM_NAMES = {
  ADD_ENTRY: 'ADD_ENTRY',
  EDIT_ENTRY: 'EDIT_ENTRY',
};

export const SCENE_NAMES = {
  HOME: 'home',
  ADD_ENTRY: 'addEntry',
  EDIT_ENTRY: 'editEntry',
  PHONEBOOK: 'phonebook',
};
