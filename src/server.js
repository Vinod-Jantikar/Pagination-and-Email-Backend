const app = require('./index')

const connect = require('./configs/db')

app.listen(4567, async () => {
    await connect()
    console.log("listening on port 4567");
})