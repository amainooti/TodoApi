// come back and refactor code


const notFound = async (err, req, res) => {

    res.status(404).send("<div> <h1> Page not found </h1> </div> ")
}



module.exports = notFound


