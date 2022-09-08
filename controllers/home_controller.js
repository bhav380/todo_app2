module.exports.home = function(req, res) {
    return res.render('home', {
        Title: "Home"
    });
}