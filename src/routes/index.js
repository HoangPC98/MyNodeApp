
// đây là file route define ra các route khác


// import từ các router riêng
var siteRouter = require('./site')
var courseRouter = require('./courses')

function route(app){
    app.use('/courses', require('./courses'))
    app.use('/admin', require('./admin'))
    app.use('/account', require('./account'))
    app.use('/api', require('./api'))
    app.use('/', require('./site'))

}


module.exports = route;