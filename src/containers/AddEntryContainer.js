import { connect } from 'react-redux';
import moment from 'moment';
import AddEntry from '../components/AddEntry';
import { add } from '../actions/entry';

const mapStateToProps = () => ({
  initialValues: {
    dateOfBirth: moment().subtract({ years: 2 }).format('YYYY-MM-DD'),
    createdAt: new Date(),
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: entry => dispatch(add(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);
