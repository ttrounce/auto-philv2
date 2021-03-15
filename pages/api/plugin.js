export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body
        console.log(data)
        res.send(200)
    } else {
        res.send(404)
    }
}
