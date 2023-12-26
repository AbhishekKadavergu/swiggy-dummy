
//const heading = React.createElement("h1", {},"Hello World From React!");
//const root = ReactDOM.createRoot(document.getElementById("root"));//this root is div root which we created in index1.html file
//root.render(heading);
const heading = React.createElement("h1", {id : "heading" , xyz : "abc"}, "hi world from React!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);