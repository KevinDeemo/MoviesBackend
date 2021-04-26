const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        let id = req.query.id;
        let url = "https://api.themoviedb.org/3/person/" + id + api_key + "&language=en-US&page=1"
        axios.get(url)
            .then(response => {
                let result = {};
                let data = response.data;
                let detail = {};

                // detail.birthday = val_str(data.birthday);
                // detail.name = val_str(data.name);
                // detail.homepage = val_str(data.homepage);

                detail.birthday = data.birthday;
                detail.name = data.name;
                detail.homepage = data.homepage;

                detail.gender = data.gender == 0 ? 'undefined' : data.gender == 1 ? 'female' : 'male';
                let knowns = '', length = data.also_known_as.length;
                for (var i = 0; i < length; i++) {
                    if(i== length - 1) {
                        knowns += data.also_known_as[i];
                    } else {
                        knowns = knowns + data.also_known_as[i] + ', ';
                    }
                }
                detail.also_known_as = knowns;
                detail.known_for_department = data.known_for_department;
                detail.biography = data.biography;
                detail.place_of_birth = data.place_of_birth;
                detail.profile_path = data.profile_path;
                result.detail = detail;
                
                url = "https://api.themoviedb.org/3/person/" + id + "/external_ids" + api_key + "&language=en-US&page=1";
                axios.get(url)
                    .then(response => {
                        let external_data = response.data, cast_external = {};
                        // cast_external.imdb_id = val_str(external_data.imdb_id);
                        // cast_external.facebook_id = val_str(external_data.facebook_id);
                        // cast_external.instagram_id = val_str(external_data.instagram_id);
                        // cast_external.twitter_id = val_str(external_data.twitter_id);

                        if(external_data.imdb_id != null) {
                            cast_external.imdb_id = "imdb.com/name/" + external_data.imdb_id;
                        }
                        if(external_data.facebook_id != null) {
                            cast_external.facebook_id = "facebook.com/" + external_data.facebook_id;
                        }
                        if(external_data.instagram_id != null) {
                            cast_external.instagram_id = "instagram.com/" + external_data.instagram_id;
                        }
                        if(external_data.twitter_id != null) {
                            cast_external.twitter_id = "twitter.com/" + external_data.twitter_id;
                        }
                        result.external = cast_external;
                        res.json(result);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    })

// function val_str(data) {
//     return data == null ? 'NA' : data;
// }

// function val_array(data) {
//     return data == null ? ["NA"] : data;
// }

module.exports = router