import { connect } from 'react-redux';
import Entry from '../components/Entry';
import { edit, remove } from '../actions/entry';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  remove: entry => () => dispatch(remove(entry)),
  edit: entry => () => dispatch(edit(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
