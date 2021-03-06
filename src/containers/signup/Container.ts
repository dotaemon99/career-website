/**
 * Connects Signup page with the redux store and actions
 */
import { connect } from 'react-redux'
import SignupLayout from './Layout'
import { signup } from './Action'
import { authenticateLoggedIn } from '../../actions/Authentication'
import { bindActionCreators } from 'redux'
import selector from './selector'

/**
 * Connects props from selector and actions to be used in Signup page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    signup,
    authenticateLoggedIn,
  }, dispatch),
)(SignupLayout as any)