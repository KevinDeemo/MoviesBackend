const express = require("express");
const axios = require("axios");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        let type = req.query.type;
        let id = req.query.id;
        let url = null;
        if (type == 'movie') {
            url = "https://api.themoviedb.org/3/movie/" + id + "/credits" + api_key + "&language=en-US&page=1";
        } else {
            url = "https://api.themoviedb.org/3/tv/" + id + "/credits" + api_key + "&language=en-US&page=1";
        }
        axios.get(url)
            .then(response => {
                let result = [], new_array = [];
                console.log(response.data);
                new_array = response.data.cast;
                let length = new_array.length;
                for (var i = 0; i < length; i++) {
                    if (!new_array[i].hasOwnProperty('profile_path') || new_array[i].profile_path == null) {
                        continue;
                    }
                    let single_cast = {
                        // id: val_str(new_array[i].id),
                        // name: val_str(new_array[i].name),
                        // character: val_str(new_array[i].character)

                        id : new_array[i].id,
                        name : new_array[i].name,
                        character : new_array[i].character,
                        profile_path : new_array[i].profile_path
                    };
                    result.push(single_cast);
                }
                res.json(result);
            })
            .catch(error => {
                console.log(error);
            });
    })

// function val_str(data) {
//     return data == null ? 'NA' : data;
// }


module.exports = router