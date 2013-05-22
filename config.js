module.exports = function(passConfig){
    passConfig([
        "./app.main",
        "./app.auth",
        "./app.blog",
        "./app.helpers",
        "./db.mongoose",
        "./app.session",
        "./welder"
    ]);
};

process.env.MONGOLAB_URI = 
    process.env.MONGOLAB_URI ||
    "mongodb://heroku_app11001646:i1h37es0jri2havsjll1qtlbe1@ds047447.mongolab.com:47447/heroku_app11001646";