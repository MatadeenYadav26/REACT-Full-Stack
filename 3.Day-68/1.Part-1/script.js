import box from './app.js'


var h1 = React.createElement('h1',{id:"hero"},'Hey I am Aman')
var h2 = React.createElement('h2',{id:'heroa'},"Hey, This is H2")
var div = React.createElement('div',{id:'parent'},[h1,box(),h2])      
var root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(div)

