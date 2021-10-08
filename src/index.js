
// import các lib...
const express = require('express')  // import thư viện express chính là express
const app = express()  // gọi func express() trả lại 1 cái instance object vào app để run // app chinh
const path = require('path') // import path (lib của NodeJS)
const port = 3232
var methodOverride = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

// Connect to Database
const db = require('./config/db') // import db from
// connect to DB server
db.connect()

app.use(express.static(path.join(__dirname, 'public'))) // join thêm children path 'public' cho static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method')) // ghi đe phương thức http GET, POST , PUT ,PATCH, DELETE...
app.use(cookieParser())


// app.use(morgan('combined'))

// Template Engines
const exphandlebars  = require('express-handlebars')
app.engine('hbs', exphandlebars({extname: '.hbs'})); // sử dụng views engine đặt tên "handlebars" và call handlebars funtion()
app.set('view engine', 'hbs'); // cài đặt view engines là "handlebars" vừa đặt tên ở bên trên
app.set('views',path.join(__dirname, 'resources/views')) // config path cho đường dẫn directory: path.join(parent path của thư mục hiện tại , nối thêm children path kể từ __dirname) 

app.use(bodyParser.urlencoded({extended: false}))  // get data từ Form Body HTML , extended: true - cho phép body parser các object lồng nhau.....
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors')
app.use(cors())
app.options('*',cors())

const route = require('./routes') // import route from folder routes.js của chúng ta


// ĐÂY CHÍNH LÀ ĐOẠN MÃ KHỞI CHẠY TOÀN BỘ ỨNG DUNG EXPRESS : invoke route và đưa express app vào
route(app); // ĐÂY CHÍNH LÀ ĐOẠN MÃ KHỞI CHẠY TOÀN BỘ ỨNG DUNG EXPRESS : invoke route và đưa express app vào




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// $ node index.js
// install nodemon : npm i (-g) nodemon --save-dev 
// mở package.json -> "script" { "start": "nodemon 'tên file chạy' "}

// Install Template Engines: handlebars: $ npm i express handlebars
// Install Node sass: $ npm install node-sass (--save-dev)