import React from "react";
import axios from "axios";

class CompleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allList: [] };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/todo/completed",
    }).then((response) => {
      const data = response.data.getByStatusToDos;
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

  render() {
    const list = this.state.allList.map((item) => {
      return (
        <div key={item._id}>
          <li  className="list-group-item">
            <p>{item.new_to_do}</p>
            <p>
              <span className="text-secondary">{item.status}</span>
            </p>
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
        <ul>{list}</ul>
      </div>
    );
  }
}

export default CompleteTask;
