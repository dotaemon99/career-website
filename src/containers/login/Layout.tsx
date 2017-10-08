import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  login: (email: string, password: string, history: History) => any
  loginStatus: boolean
}

interface State {
  email: string
  password: string
}

export default class LoginLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    const { login, loginStatus, history } = this.props

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.loginContainer as any} zDepth={1}>
          <h1>Login</h1>
          <TextField
            floatingLabelText='Email'
            style={styles.textField}
            onChange={(email) => this.setState({ email: (email.target as HTMLTextAreaElement).value })}
            htmlFor='1'
            id='1'
          />
          <TextField
            floatingLabelText='Password'
            type='password'
            style={styles.textField}
            onChange={(password) => this.setState({ password: (password.target as HTMLTextAreaElement).value })}
            htmlFor='2'
            id='2'
          />
          <RaisedButton
            label={loginStatus ? 'Loading...' : 'Login'}
            primary={true}
            style={styles.submitBtn}
            onClick={() => login(this.state.email, this.state.password, this.props.history)}
          />
        </Paper>
      </div>
    )
  }
}