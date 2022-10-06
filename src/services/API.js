import axios from "axios";

let headers = {
  "content-Type": "application/json",
  Accept: `application/vnd.iman.v1+json, application/json, text/plain, */*`,
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  pragma: "no-cache"
}

const filterOptions = ({ method , ...rest }) => {
  return rest;
};

const fetch = async (url, options = {}) => {
  try {
    const instance = axios.create({
      baseURL: `https://Logistica.alcridios96.repl.co/api/v1`
    });

    //INTERCEPTOR REQUEST
    instance.interceptors.request.use(
      (conf) => {
        //console.log('1 Interceptor request conf: ', conf);
        return conf;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //INTERCEPTOR RESPONSE
    instance.interceptors.response.use(
      (response) => {
        //console.log('Interceptor response: ', response);
        return response;
      },
      (error) => {
        //console.log('Interceptor response error: ', error);
        return Promise.reject(error);
      }
    );

    const { data } = await instance.request({
      url,
      method: options["method"],
      data: options["data"],
      params: options["params"],
      heades: { ...headers, ...options["headers"] },
      cancelToken: options["cancelFn"] ?
        new axios.CancelToken(options["cancelFn"]) : null
    })

    return data;

  } catch (err) {
    if (axios.isCancel(err)) {
      throw new Error("request-cancelled");
    } else {
      throw err;
    }
  }
}

//get
const get = async (url, options = {}) => {
  return await fetch(url, {
    method: "GET",
    ...filterOptions(options)
  });
}

//save
const save = async (url, options = {}) => {
  return await fetch(url, {
    method: "POST",
    ...filterOptions(options)
  });
}

//update
const update = async (url, options = {}) => {
  return await fetch(url, {
    method: "PUT",
    ...filterOptions(options)
  });
}

//delete
const remove = async (url, options = {}) => {
  return await fetch(url, {
    method: "DELETE",
    ...filterOptions(options)
  });
}

export default { get, save, update, remove };