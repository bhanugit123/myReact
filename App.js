



const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am Bhanu Tag"),
React.createElement("h2",{},"I am h2Tag")]
)
)

const heading=React.createElement("h1",{
    id:'heading'
},"Hello World frm React!");

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);