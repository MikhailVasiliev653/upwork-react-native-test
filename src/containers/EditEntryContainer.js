import { connect } from 'react-redux';
import { update } from '../actions/entry';
import EditEntry from '../components/EditEntry';

const mapStateToProps = ({ entry: { current } }) => ({
  initialValues: current,
  current,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (oldEntry, newEntry) => dispatch(update(oldEntry, newEntry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
