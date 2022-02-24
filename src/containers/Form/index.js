import { connect } from 'react-redux';

import Form from '../../components/Form';

const mapStateToProps = (state) => ({
  value: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);