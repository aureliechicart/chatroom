import { connect } from 'react-redux';

import { toggleSettingsOpen } from '../../actions/chat';

import Settings from '../../components/Settings';

const mapStateToProps = (state) => ({
  open: state.settingsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    dispatch(toggleSettingsOpen());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);