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

              if(!this.state.signinName){
                  signinNameErr = 'Please enter name';
              }
              if(!this.state.signinEmail){
                  signinEmailErr = 'Please eneter email';
              }
              if (!this.state.signinEmail.includes('@')) {
                  signinEmailErr =  'Please enter valid email';
              }
              if(!this.state.signinPassword){
                signinPasswordErr =  'Please enter Password';
              }

             console.log(signinNameErr);
             console.log(signinEmailErr);
             console.log(signinPasswordErr);

             if(signinNameErr || signinEmailErr || signinPasswordErr){
               console.log('uncomplete form submission');
               this.setState({signinNameErr, signinEmailErr, signinPasswordErr});
               return false;
             }

             //if every thing is okay
             console.log('proceed action');
             this.setState({signinNameErr: '', signinEmailErr: '', signinPasswordErr: ''});
             return true;
        }

        handleSubmit = event => {
            event.preventDefault();
            const isValid = this.validate();
            console.log('check validation : ',isValid);
            if(!isValid){
              console.log('Error: uncomplete form submission');
              return false;
            }
            console.log("Action : ",this.state);
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
