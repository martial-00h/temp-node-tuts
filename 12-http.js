

//http module

const http = require('http')
const {writeFile} = require('fs')


const server = http.createServer( (req, res)=>{
    //console.log(req)
    //res.end('Welcome to our homepage')
    if(req.url === '/'){
        //res.write('Welcome to our homepage')
        //res.end()
        //------or------
        res.end('Welcome to our homepage')
        return
    }
    if(req.url === '/about'){
        res.end('About page')
        return
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seen to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})


server.listen(4500)
