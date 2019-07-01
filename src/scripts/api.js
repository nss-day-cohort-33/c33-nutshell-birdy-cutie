const API = {
  getData(entity, id) {
    if (id) {
      return fetch(`http://localhost:8088/${entity}/${id}`)
      .then(response =>response.json())
    }
    return fetch(`http://localhost:8088/${entity}`)
    .then(response => response.json())
  },
  addData(entity, object) {
    return fetch(`http://localhost:8088/${entity}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    });
  },
    deleteData(entity, id) {
    return fetch(`http://localhost:8088/${entity}/${id}`, {
      method: "Delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });
  }
};

//?_expand=user use when trying to epand any entity and get the user info.
//example API.getData("events", "?_expand=user")

export { API };
