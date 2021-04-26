const express = require("express");
const axios = require("axios");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        const url = "https://api.themoviedb.org/3/movie/now_playing" + api_key + "&language=en-US&page=1";
        axios.get(url)
            .then(response => {
                let result = [],
                    new_array = [],
                    count = 0;
                new_array = response.data.results;
                for (var i = 0; i < new_array.length && count < 6; i++) {
                    if(new_array[i].backdrop_path != null) {
                        result.push({
                            id: new_array[i].id,
                            title: new_array[i].title,
                            poster_path: new_array[i].backdrop_path,
                            main_image: new_array[i].poster_path
                        });
                        count++;
                    }
                }
                res.json(result);
            })
            .catch(error => {
                console.log(error);
            });
    })

module.exports = router