const express = require("express");
const axios = require("axios");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        let type = req.query.type;
        const url = "https://api.themoviedb.org/3/" + type + "/top_rated" + api_key + "&language=en-US&page=1";
        axios.get(url)
            .then(response => {
                let result = {},
                    res_array = [];
                    index = 0;
                    new_array = [] = response.data.results;
                for (var i = 0; i < new_array.length; i++) {
                    if(new_array[i].poster_path != null) {
                        if(type == 'movie') {
                            res_array.push({
                                id: new_array[i].id,
                                title: new_array[i].title,
                                poster_path: new_array[i].poster_path
                            });
                        } else {
                            res_array.push({
                                id: new_array[i].id,
                                title: new_array[i].name,
                                poster_path: new_array[i].poster_path
                            });
                        }
                        index++;
                    }
                }
                result['res_array'] = res_array;
                result['count'] = index;
                res.json(result);
            })
            .catch(error => {
                console.log(error);
            });
    })

module.exports = router