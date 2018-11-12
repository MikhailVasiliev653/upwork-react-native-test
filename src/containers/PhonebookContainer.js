import { connect } from 'react-redux';
import Phonebook from '../components/Phonebook';

const mapStateToProps = ({ entry: { list } }) => ({
  list,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
