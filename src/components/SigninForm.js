import React from 'react';
import Form from './StyleForm';
import Message from './StyleMessage';



const initialState = {
  signinName: '',
  signinEmail: '',
  signinPassword: '',
  signinNameErr: '',
  signinEmailErr: '',
  signinPasswordErr: ''
}

class SigninForm extends React.Component{

        state = initialState;

        handleChange = event => {
          this.setState({[event.target.name]: event.target.value})
          console.log(event.target.name);
        }

        validate = () => {
              let signinNameErr = '';
              let signinEmailErr = '';
              let signinPasswordErr = '';

              this.state.signinName === ''
              ? this.setState({signinNameErr: 'Please enter Name'})
              : this.setState({signinNameErr: ''});

              if(this.state.signinEmail === ''){
                this.setState({signinEmailErr: 'Please eneter email'})
              }else if (!this.state.signinEmail.includes('@')) {
                this.setState({signinEmailErr: 'Please enter valid email'})
              }else{
                this.setState({signinEmailErr: ''});
              }

              this.state.signinPassword === ''
              ? this.setState({signinPasswordErr: 'Please enter Password'})
              : this.setState({signinPasswordErr: ''});

        }

        handleSubmit = event => {
            event.preventDefault();
            const isValid = this.validate();
            if(isValid){
              console.log(this.state);
            }
       }


        render(){
          return(
            <Form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="signinName"
                value={this.state.signinName}
                onChange={this.handleChange}
              />
              <Message>{this.state.signinNameErr}</Message>
              <label>Email</label>
              <input
                type="text"
                name="signinEmail"
                value={this.state.signinEmail}
                onChange={this.handleChange}
              />
              <Message>{this.state.signinEmailErr}</Message>
              <label>Password</label>
              <input
                type="password"
                name="signinPassword"
                value={this.state.signinPassword}
                onChange={this.handleChange}
              />
              <Message>{this.state.signinPasswordErr}</Message>
              <button type="submit">Submit</button>
            </Form>
          )
        }


}

export default SigninForm;
