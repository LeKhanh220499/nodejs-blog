
class SiteController{

    // [GET] /news
    index(req, res){
        res.render('home');
    }
    

    show(req, res){
        res.send("NEWS DETAIL!");
    }

    // [GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;