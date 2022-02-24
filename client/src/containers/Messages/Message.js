import { connect } from "react-redux";

import Message from "../../components/Messages/Message";

const mapStateToProps = (state, ownProps) => ({
  nickname: state.nickname,
  isOwn: state.nickname === ownProps.username,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
