import { connect } from 'react-redux';

import { updateInputMessage, sendMessage } from '../../actions/chat';

import Form from '../../components/Form';

const mapStateToProps = (state) => ({
  value: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (newValue) => {
    const action = updateInputMessage(newValue);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(sendMessage());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);