import { connect } from 'react-redux';

// importing presentational component
import Messages from '../../components/Messages';

// === mapStateToProps
// reading info from the state
const mapStateToProps = (state) => ({
  
  messages: state.messages,
});

// === mapDispatchToProps
// dispatching actions to the store (to commit state mutations)
const mapDispatchToProps = (dispatch) => ({
});

// creating assistant
export default connect(mapStateToProps, mapDispatchToProps)(Messages);