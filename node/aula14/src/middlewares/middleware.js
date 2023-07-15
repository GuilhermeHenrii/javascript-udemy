module.exports = (req, res, next) => {
    if(req.body.tec){
        console.log();
        console.log('Passei no middleware GLOBAL pegando o post');
        console.log();
    }
    next();
}