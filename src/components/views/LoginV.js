import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'

const LoginV = (props) => (
  <Card>
    <CardHeader
      title="Message Board"
      subtitle="A demo web-based application"
      />
    <CardText>
      <TextField
        hintText="E-mail"
        floatingLabelText="E-mail"
        type="text"
        onChange={(event, value) => props.updateRegistration(event, value)}
        id="username"
        errorText={props.errorTextUser}
        /><br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        onChange={(event, value) => props.updateRegistration(event, value)}
        id="password"
        errorText={props.errorTextPwd}
        />
    </CardText>
    <CardActions>
      <FlatButton
        onTouchTap={() => props.onLogin()}
        label="Login"
        />
      <FlatButton
        onTouchTap={() => props.onRegister()}
        label="Create an account"
        />
    </CardActions>
    <CardText>
      <IconButton iconClassName="fa fa-github" href="https://github.com/lin826/message-board" target="_blank" />
      <span>liniju@gapp.nthu.edu.tw</span>
    </CardText>
  </Card>
)

export default LoginV