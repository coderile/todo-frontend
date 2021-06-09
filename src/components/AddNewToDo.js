import axios from "axios";
import React from "react";

class AddNewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoValue: "" };
  }
  handleChange = (event) => {
    this.setState({
      todoValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.todoValue);
    let constNewData = this.state.todoValue;
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/todo",
      data: { new_to_do: constNewData },
    });
    event.preventDefault();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon2"
            placeholder="Add to do..."
            value={this.state.todoValue}
            onChange={this.handleChange}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Add New ToDo
            </button>
          </div>
        </div>

        </form>
        {/* <label>
          <input
            type="text"
           
          />
        </label>
        <button type="submit">Add New </button> */}
      


      </div>
      
     
    );
  }
}

export default AddNewToDo;
