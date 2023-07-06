require('dotenv').config()
let express = require('express')

let app = express()

app.get('/', function(req,res){
    res.send(`
        <body style = 'margin: 0 ;'>
            <div style= 'border:1px solid black; height:10vh; background-color:white;'>
                <h2 style= 'text-align:center'> Hi from white page!</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// app.get('/teal', function(req,res){
//     res.send(`
//         <body style = 'margin: 0 ;'>
//             <div style= 'border:1px solid black; height:10vh; background-color:teal;'>
//                 <h2 style= 'text-align:center'> Hi from Teal page!</h2>
//             </div>
//             <h1 style='color:teal'>Teal Page</h1>
//         </body>
//     `)
// })

app.get('/:color',function(req,res){
    let myColor = req.params.color
    res.send(`
    <body style = 'margin: 0 ;'>
        <div style= 'border:1px solid black; height:10vh; background-color:${myColor};'>
            <h2 style= 'text-align:center'> Hi from ${myColor.charAt(0).toUpperCase() + myColor.slice(1)} page!</h2>
        </div>
        <h1 style='color:${myColor}'>${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
    </body>
        
    `)
})


//.charAt(0).toUpperCase() + myColor.slice(1) this makes the first letter of whatever color u enter convert to a capital
//so if u typed http://localhost:3000/pink it will automatically print Pink capital P in the areas where u told it to be

app.listen(process.env.PORT)  //try req.env.PORT