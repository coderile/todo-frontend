import React from "react";
import axios from "axios";

class AllToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allList: [], searchValue: "" , };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/todos",
    }).then((response) => {
      const data = response.data.allTodo;
      this.setState({ allList: data });
    });
  }
  deleteToDo(id, e) {
    axios({
      method: "delete",
      url: `http://localhost:8080/api/v1/todo/${id}`,
    });
    window.location.reload();
  }
  completed(id, e) {
    axios({
      method: "put",
      url: `http://localhost:8080/api/v1/todo/${id}`,
    });
    window.location.reload();
  }

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
    console.log(this.state.searchValue);
  };

  handleSearch = () => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/v1/todos/search/?todo=${this.state.searchValue}`,
    }).then((response) => {
      const data = response.data.data;

      this.setState({ allList: data });
    });
  };
  render() {
    if (this.state.allList <= 0) {
      return <p>No Data Available</p>;
    }
    const list = this.state.allList.map((item) => {
      return (
        <div key={item._id}>
          <li className="list-group-item">
            <p className="font-weight-bold  text-capitalize">{item.new_to_do}</p>
            <p>
              <span className="text-secondary">{item.status}</span>
            </p>

            <button
              button
              type="button"
              className="btn btn-outline-primary"
              onClick={(e) => {
                this.completed(item._id, e);
              }}
            >
              Completed
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={(e) => {
                this.deleteToDo(item._id, e);
              }}
            >
              Delete
            </button>
          </li>
        </div>
      );
    });
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon2"
            placeholder="search todo......"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
          required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.handleSearch}>
              Search
            </button>
          </div>
        </div>

       

        {console.log(list)}
        <ul className="list-group">{list}</ul>
      </div>
    );
  }
}

export default AllToDo;
