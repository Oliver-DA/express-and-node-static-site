const notFoundError = (req, res, next) => {
    const err = new Error("Sorry, looks like this is not the page you're looking for.");
    err.status = 404;
    next(err)
};

const globalError = (err, req, res, next) => {
    if (err.status === 404 && err.message) {
        res.status(err.status).render("not-found", { err });

    }else {
        err.message = "Something went wrong with the server"
        err.status = 500;
        res.status(err.status).render("error", { err })
    }
};

module.exports = { notFoundError, globalError }