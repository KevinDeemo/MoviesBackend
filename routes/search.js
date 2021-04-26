const express = require("express");
const axios = require("axios");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d'

router.route("/:query")
    .get((req, res) => {
        const url = "https://api.themoviedb.org/3/search/multi" + api_key + "&language=en-US&query=" + req.params.query
        axios.get(url)
            .then(response => {
                let result = [], count = 0,
                    new_array = response.data.results;
                for (var i = 0; i < new_array.length && count < 20; i++) {
                    if(new_array[i].backdrop_path == null) {
                        continue;
                    }
                    let s_res = {};
                    s_res.id = new_array[i].id;
                    s_res.backdrop_path = new_array[i].backdrop_path;
                    s_res.rating = new_array[i].vote_average;
                    if (new_array[i].media_type == 'tv') {
                        s_res.media_type = 'tv';
                        s_res.name = new_array[i].name;
                        s_res.time = new_array[i].first_air_date;
                    } else if(new_array[i].media_type == 'movie'){
                        s_res.media_type = 'movie';
                        s_res.name = new_array[i].title;
                        s_res.time = new_array[i].release_date;
                    }
                    count++;
                    result.push(s_res);
                }
                res.json(result);
            })
            .catch(error => {
                console.log(error);
            });
    })

module.exports = router