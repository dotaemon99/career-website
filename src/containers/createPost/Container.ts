/**
 * Connects create post page with the redux store and actions
 */
import { connect } from 'react-redux'
import CreatePostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { createPost } from './Action'
import selector from './selector'
import { logout, authenticate } from '../../actions/Authentication'
import { searchLocation } from '../../actions/Post'

/**
 * Connects props from selector and actions to be used in create post page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    createPost,
    logout,
    authenticate,
    searchLocation,
  }, dispatch),
)(CreatePostLayout as any)