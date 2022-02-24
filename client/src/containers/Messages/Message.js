import { connect } from 'react-redux';

import Message from '../../components/Messages/Message';

const mapStateToProps = (state) => ({
  nickname: state.nickname,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);