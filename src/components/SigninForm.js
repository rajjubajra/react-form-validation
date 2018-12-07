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

          //validate name empty filed
          if(!this.state.signinName){
            signinNameErr = 'Please enter Name';
          }
         //Validate email
          if(!this.state.signinEmail.includes('@')){
              signinEmailErr = 'Please enter valid email';
          }
          //validate password
          if(!this.state.signinPassword){
            signinPasswordErr = 'Please enter Password';
          }
          if(signinEmailErr || signinNameErr || signinPasswordErr){
            this.setState({signinEmailErr, signinNameErr, signinPasswordErr});
            return false;
          }
          //if every thing ti fine rerun to ture
          return true;
        }

        handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
          console.log(this.state);
          //clear Form
            this.setState(initialState);
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
