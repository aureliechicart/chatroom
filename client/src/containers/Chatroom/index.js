import { connect } from 'react-redux';

import { connectWebsocket } from '../../actions/chat';

import Chatroom from '../../components/Chatroom';

const mapStateToProps = (state) => ({
  nickname: state.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  initWebsocket: () => {
    dispatch(connectWebsocket());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);