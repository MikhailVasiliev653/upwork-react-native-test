import { connect } from 'react-redux';
import { edit, searchComplete, searchStart } from '../actions/entry';
import Search from '../components/Search';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  edit: entry => dispatch(edit(entry)),
  start: query => dispatch(searchStart(query)),
  complete: (query, list) => dispatch(searchComplete(query, list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
