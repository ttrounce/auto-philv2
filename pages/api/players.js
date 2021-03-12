import axios from 'axios'

const spreadsheet =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrbbVmNIfQjI8Ic2H7_KbQnGWH3jEa0FvXt2D_1TdgVa2654tzs7TpITGGyrSaUDcCQjfCghVJ_JLx/pub?gid=0&single=true&output=csv'

export default async (req, res) => {
    if (req.method === 'GET') {
        axios.get(spreadsheet).then((response) => {
            var v = response.data.split('\r\n')
            v.shift()

            var construct = []
            for (var index in v) {
                let line = v[index]
                var tokens = line.split(',')
                construct.push({
                    name: tokens[0],
                    active: true,
                    tank: [tokens[1], tokens[4].indexOf('t') >= 0],
                    dps: [tokens[2], tokens[4].indexOf('d') >= 0],
                    supp: [tokens[3], tokens[4].indexOf('s') >= 0]
                })
            }
            res.status(200).json(construct)
        })
    } else {
        res.status(404)
    }
}
