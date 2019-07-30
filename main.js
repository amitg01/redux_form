var username = document.querySelector(".name");
var email = document.querySelector(".email");
var age = document.querySelector(".age");
var submit = document.querySelector("button")
var oName = document.querySelector(".oName")
var oEmail = document.querySelector(".oEmail")
var oAge = document.querySelector(".oAge")


let input = {
  username: "",
  email: "",
  age: ""
};

function reducer(state = input, action) {

  switch (action.type) {
    case "name":
      return  {...state,username:action.data.value};
    case "email":
      return {...state,email:action.data.value};
    case "age":
      return {...state,age:action.data.value};
  }
}


let store = Redux.createStore(reducer);

// store.subscribe(() => oName.innerText = store.getState().name);

function submitHandler(event){
    event.preventDefault()
    oName.innerText = store.getState().username
    oEmail.innerText = store.getState().email
    oAge.innerText = store.getState().age

}

username.addEventListener("keyup", event =>
    store.dispatch({ type: "name", data: event.target })
  );

email.addEventListener("keyup", event =>
  store.dispatch({ type: "email", data: event.target })
);

age.addEventListener("keyup", event =>
  store.dispatch({ type: "age", data: event.target })
);

submit.addEventListener("click",submitHandler)

