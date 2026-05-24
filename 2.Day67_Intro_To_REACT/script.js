// // // // function hero(){
// // // //     console.log("Hello , I am Aman");
// // // //     return 10;
// // // // }

// // // // // hero();
// // // // // console.log(hero());// consolelog statement + undefined since function ko return nahi kiya tha

// // // // var a = hero()

// // // // console.log(a);


// // // function add(a,b){
// // //    return (a+b);
// // // }

// // // console.log(add(10,20));




// // import hero from './app.js'

// // // console.log(hero);
// // // hero(); // call krne pe function k log value aati h 

// // import pariksha from './test.js'

// // // console.log(pariksha); // log karne pe full log and return value ati h
// // pariksha(); // call oe return value nahi aati just log value aati h
// // console.log(pariksha());
 



// // gsap.to('#box',{
// //     x:1000,
// //     duration :2,
// //     delay:1
// // })


// // console.log(React);
// // console.log(ReactDOM);



// var h1 = React.createElement('div',{id:'Hero'},'This is DIV!')
// var h2 = React.createElement('div',{id:'parent',class:'heroine'},'This is H2')
// // var container = document.querySelector('#container')
// // var root = ReactDOM.createRoot(container)

// var div = React.createElement('div',null,[h1,h2])


// // or 
// var root = ReactDOM.createRoot(document.querySelector('#container'))

// root.render(div)
// // root.render(h1)  // you cannot pass 2nd argument in root.render()
// // console.log(h1);




// function h1(){
//     return React.createElement('h1',null,'Hello from h1')
// }

// import box from './app.js'

// const root = ReactionDOM.createRoot(document.querySelector('#container'))

// root.render(box())


import parent from './parent.js'

const root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(parent())


