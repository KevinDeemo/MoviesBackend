const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
const e = require("express");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        let id = req.query.id;
        let type = req.query.type;
        let url;
        if (type == 'movie') {
            url = "https://api.themoviedb.org/3/movie/" + id + "/similar" + api_key + "&language=en-US&page=1";
        } else {
            url = "https://api.themoviedb.org/3/tv/" + id + "/similar" + api_key + "&language=en-US&page=1";
        }
        axios.get(url)
            .then(response => {
                let result = {},
                    res_array = [];
                index = 0;
                new_array = response.data.results;
                for (var i = 0; i < new_array.length; i++) {
                    if (new_array[i].poster_path != null) {
                        let rec = {};
                        rec.id = new_array[i].id;
                        if (type == 'movie') {
                            rec.title = new_array[i].title;
                        } else {
                            rec.title = new_array[i].name;
                        }
                        rec.poster_path = new_array[i].poster_path;
                        index++;
                        res_array.push(rec);
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