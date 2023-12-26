const parent = React.createElement("div" , {id : "parent"},[
    React.createElement("div" , {id : "child1"},[ //putting 2 children in an array 
        React.createElement("h1", {}, "im a h1 tag"),
        React.createElement("h2" , {} , "im a h2 tag"),
    ]),
    React.createElement("div" , {id : "child2"},[
        React.createElement("h1", {}, "im a h1 tag"),
        React.createElement("h2" , {} , "im a h2 tag"),
    ]),
    ]);
    console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);