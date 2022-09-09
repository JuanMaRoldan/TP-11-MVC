let mainController = {
    index: (req,res) => {
        return res.render('index')
    },
    about: (req,res) => {
        return res.render('about')
    }
}

module.exports= mainController;