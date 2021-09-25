// import ThisCourse from "../models/course"
const Product = require('../models/Product')

class SiteController {

    // [GET] /new/new-child
    Slug(req,res){
        res.send('Show New Slug')
    }
    // [GET] /
    async homeFunc(req,res,next){
        // res.render('home')
        // Course.find({}, (err,data) =>{ // .find() gửi request cho Model , Model chọc vào DB lấy data và đưa vào funtion(... [data]) 
        //     if(!err){
        //         res.json(data) // nếu ko có lỗi thì response về 1 json là data nhận đc từ trên, response về cho client(Browser)
        //     } 
        //     else{
        //         res.status(400).json({ error: 'ERROR!!!'}) // nếu có lỗi thì response 
        //     }
        // })

        // Model.find({}) // tìm tất cả trong Model DB
        await Product.find({}).lean() // render view 'home' truyền thêm 1 object chứa data để render something vào 'home'
            .then(data => {
                // data = data.map(item => item.toObject()) // ĐÂY LÀ XỬ LÝ NGOẠI LỆ CHO "HANDLEBARS" KHI RENDER MONGOOSE RA VIEW: gán lại giá trị cho data là 1 Object mới bằng chính nó và map qua từng item //
                res.render('LogForm',{ product: data})
            })
            .catch(next);
    }

    HomeClient(req, res,next){
        res.render('client/home_body.hbs')
        next()
    }
    // [POST] /search
    searchFunc(req,res){
        res.render('search')
    }

}

module.exports = new SiteController 