module.exports = {
    getProperties: (req, res) => {
        const database = req.app.get('db')

        database.houses().then(houses =>
            res.status(200).send(houses)
        )
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    }



}