import axios from "axios";

const instance = axios.create({
  baseURL: `https://logistica.alcridios96.repl.co/`
});

//get
const get = async(url) => {
  return instance.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

//save
const save = async(url, body = null, queryParams = null) => {
  return instance.post(url, body, { params: queryParams })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

//update
const update = async(url, body = null, queryParams = null) => {
  return instance.put(url, body, { params: queryParams })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

//delete
const remove = async(url) => {
  return instance.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

export default { get, save, update, remove};