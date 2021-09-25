
// đây là file route define ra các route khác


// import từ các router riêng
var siteRouter = require('./site')
var courseRouter = require('./courses')
var productRouter = require('./products')

function route(app){
    app.use('/courses', require('./courses'))
    app.use('/admin', require('./admin'))
    app.use('/account', require('./account'))
    app.use('/api', require('./api'))
    // app.get('/home', )
    app.use('/', require('./site'))

}


module.exports = route;