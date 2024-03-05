// const parent =React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {id:"h1"},"hey this is h1 ..." )
//             )
// )


// to give sibilings [h1 , h2]



// const parent =React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{id:"h1"},"hey this is h1 ..." ), 
//         React.createElement("h1",{id:"h3"},"hey this is h3 ..." )])
                
// )

// -----
// this is were JSX comes into picture (cause of this tidious code above)
// ----




// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello world from react...");



console.log(parent) //React element which is end of the day is object - props , childern ... not creates actual h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent); // passing react element to root (it cinverts these object into heading tag..)
