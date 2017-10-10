import React, { Component } from 'react'
import { FlatButton, ToolbarGroup, Toolbar, Popover, Menu, MenuItem } from 'material-ui'
import { PopoverAnimationVertical } from 'material-ui/Popover'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  isLoggedIn: boolean
  isAdmin: boolean
  logout?: (history: History) => void
}

interface State {
  open: boolean
  anchorEl: any
}

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null,
    }
  }

  handleTouchTap = (event: any) => {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const { history, isLoggedIn, logout, isAdmin } = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton
            label={isAdmin ? 'Career Website Admin Zone' : 'Career Website'}
            primary={!isAdmin}
            secondary={isAdmin}
            onClick={() => history.push('/')}
          />
        </ToolbarGroup>
        {isLoggedIn ?
          <ToolbarGroup lastChild={true}>
            <FlatButton label='Internships' onClick={() => history.push('/internships')} />
            <FlatButton
              onClick={this.handleTouchTap}
              label='Posts'
            />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={styles.anchorOrigin as any}
              targetOrigin={styles.targetOrigin as any}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                <MenuItem primaryText='Create Post' onClick={() => history.push('/createpost')} />
                <MenuItem primaryText='My Posts' onClick={() => history.push('/myposts')} />
              </Menu>
            </Popover>
            <FlatButton label='My Account' onClick={() => history.push('/myAccount')} />
            <FlatButton label='Logout' onClick={() => logout ? logout(history) : ''} />
          </ToolbarGroup> :
          <ToolbarGroup lastChild={true}>
            <FlatButton label='Internships' onClick={() => history.push('/internships')} />
            <FlatButton label='Signup' onClick={() => history.push('/signup')} />
            <FlatButton label='Login' onClick={() => history.push('/login')} />
          </ToolbarGroup>
        }
      </Toolbar>
    )
  }
}