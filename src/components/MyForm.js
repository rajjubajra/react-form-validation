import React from 'react';
import Form from './StyleForm';
import Message from './StyleMessage';




class MyForm extends React.Component{
    state = {
      name: '',
      body: '',
      rememberMe: false,
      salutation: 'Ms'
    }

    handleChange = (event) => {
      console.log(event.target.value);
      const isCheckbox = event.target.type === 'checkbox';
      this.setState({
                      [event.target.name]: isCheckbox
                      ? event.target.checked
                      : event.target.value
                    });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }


    render(){
      return(
        <div>
          <Form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Message</label>
            <textarea
              cols="40" rows="3"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />

            <input
              type="checkbox"
              name="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.handleChange}
            />

            <select
              name="salutation"
              value={this.state.salutation}
              onChange={this.handleChange}
            >
              <option>Ms.</option>
              <option>Miss.</option>
              <option>Mr.</option>
              <option>Mrs.</option>
            </select>


            <button type="submit">Submit</button>

          </Form>


        </div>
      )
    }

}

export default MyForm;
