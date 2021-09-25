class NewController {

    // [GET] /new/new-child
    Slug(req,res){
        res.send('Show New Slug')
    }
    // [GET] /new
    newFunc(req,res){
        res.render('new')
    }
  
}

module.exports = new NewController 