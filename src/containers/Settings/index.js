import { connect } from 'react-redux';

import { toggleSettingsOpen, updateSettingsField } from '../../actions/chat';

import Settings from '../../components/Settings';

const mapStateToProps = (state) => ({
  open: state.settingsOpen,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    dispatch(toggleSettingsOpen());
  },
  updateSettingsField: (identifier, newValue) => {
    const action = updateSettingsField(identifier, newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);