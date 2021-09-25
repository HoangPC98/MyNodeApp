// import ThisCourse from "../models/course"
const Course = require('../models/course')

class CourseController {
    // [GET]
    Slug(req,res,next){
        // tìm ra 1 cái Document  Model.findOne( { key : value })
        Course.findOne({ slug : req.params.slug}).lean() // return a promise( resolve(course) , reject(err) )
            .then(data => {
                res.render('courses/show.hbs', {data})  // render ra views : courses/show , dữ liệu render là 1 object : data
            })
            .catch(next)

        // res.send('this is -' + slug)
    }   

    // [GET]
    Create(req, res, next){
        console.log('=========Log: Create')
        res.render('courses/create')
    }

    // [POST] courses/store
    store(req, res, next){
        const formData = req.body
        const storeData = new Course(formData) 
        storeData.save()

        res.send('Saved to Database ')
        // res.json(req.body)  // response về 1 json có req.body là tất cả những gì nhận đc từ Form Data của POST method
    }

    Management(req, res, next){
        Course.find({}).lean()
            .then(data => {
                res.render('courses/management.hbs' ,{data})
            })
            .catch(next)
    }

    Edit(req, res, next){
        Course.findById(req.params.id).lean()
            .then(data => {
                res.render('courses/edit.hbs',{data})

            })
            .catch(next)
    }

    EditUpdated(req, res, next){
       // req.params.id = require từ client(POST) có params là /:id // req.body: formData của POST Method chứa các thông tin POST lên khi ấn nút Submit Form
        Course.updateOne({_id: req.params.id}, req.body)  // Course.UpdateOne([condition : Update item trong DB mà có _id  = req.params.id],[object chứa thông tin cần UpDate])
            .then(() => {
                console.log('body: '+req.body)
                res.redirect('/courses/management')

            })  // response chuyển hướng sang [path] , redirect : thêm key: location vào req và POST lên
            .catch(next)
    }

    Delete(req, res, next){
        // req.params.id = require từ client(POST) có params là /:id // req.body: formData của POST Method chứa các thông tin POST lên khi ấn nút Submit Form
         Course.delete({_id: req.params.id})  // Course.UpdateOne([condition : Update item trong DB mà có _id  = req.params.id],[object chứa thông tin cần UpDate])
             .then(() => res.redirect('/courses/recyclebin'))  // response chuyển hướng sang [path] , redirect : thêm key: location vào req và POST lên
             .catch(next)
    }

    RecycleBin(req, res, next){
        Course.findDeleted({}).lean()
            .then( data => {
                res.render('courses/recyclebin',{data})
            })
            .catch(next)
    }

    Restore(req, res, next){
        
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    DeleteForce(req, res, next){
        console.log('okokok')
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    
}

module.exports = new CourseController 
