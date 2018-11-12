import { connect } from 'react-redux';
import { changeSort } from '../actions/entry';
import Headers from '../components/Headers';

const mapStateToProps = ({ entry: { sort } }) => ({
  sort,
});

const mapDispatchToProps = dispatch => ({
  changeSort: column => () => dispatch(changeSort(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
