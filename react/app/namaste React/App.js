

<div id="parent">

<div></div>
<h2></h2>
</div>

const parent=React.createElement("div",
{id :"parent"},
    React.createElement("h1",{},"i'am the heading tag"

    )
);
console.log(parent);

const heading=React.createElement(
    "h1",
    {id:"heading", xyz:"abc" },
        "Hello world from  react!"
    );

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
      // render method is used to take the heading in div element

