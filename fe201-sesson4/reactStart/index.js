let root=document.getElementById('root');
let btn=React.createElement("button", {id:'button', class:'btn'}, "Click Me")
let para=React.createElement("p", {}, "I am a paragraph");
let div=React.createElement("div", {}, btn, para)
let rootElement=ReactDOM.createRoot(root);
rootElement.render(div);
