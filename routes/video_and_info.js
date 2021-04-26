const express = require("express");
const axios = require("axios");
const {
    response
} = require("express");
let router = express.Router();
const api_key = '?api_key=cc855157b930b179e15c2e23e62dff0d';

router.route('')
    .get((req, res) => {
        let type = req.query.type;
        let id = req.query.id;
        // console.log(req);
        let url = null;
        let hasVideo = true;
        if (type == 'movie') {
            url = "https://api.themoviedb.org/3/movie/" + id + "/videos" + api_key + "&language=en-US&page=1";
        } else {
            url = "https://api.themoviedb.org/3/tv/" + id + "/videos" + api_key + "&language=en-US&page=1";
        }
        axios.get(url)
            .then(response => {
                let result = {};
                let new_array = response.data.results;
                let video = {};
                if (new_array.length > 0) {
                    video = {
                        // site: val_str(new_array[0].site),
                        // type: val_str(new_array[0].type),
                        // name: val_str(new_array[0].name),

                        site: new_array[0].site,
                        type: new_array[0].type,
                        name: new_array[0].name
                    };
                }
                if (new_array.length == 0 || new_array[0].key == null || new_array[0].key == "") {
                    hasVideo = false;
                    video.key = "";
                } else {
                    video.key = new_array[0].key;
                }
                result.video = video;
                if (type == 'movie') {
                    url = "https://api.themoviedb.org/3/movie/" + id + api_key + "&language=en-US&page=1";
                } else {
                    url = "https://api.themoviedb.org/3/tv/" + id + api_key + "&language=en-US&page=1";
                }
                axios.get(url)
                    .then(response => {
                        let video_info = response.data;
                        // console.log(video_info);
                        let detail = {
                            // title: val_str(video_info.title),
                            // overview: val_str(video_info.overview),
                            // vote_average: val_str(video_info.vote_average),
                            // tagline: val_str(video_info.tagline),

                            // title : video_info.title,
                            overview: video_info.overview,
                            vote_average: video_info.vote_average,
                            tagline: video_info.tagline,

                            // spoken_languages: val_array(video_info.spoken_languages);
                        };
                        if(video_info.poster_path!=null) {
                            detail.poster_path = "https://image.tmdb.org/t/p/original" + video_info.poster_path;
                        }
                        if(!hasVideo) {
                            detail.backdrop_path = video_info.backdrop_path;
                            detail.hasVideo = false;
                        } else {
                            detail.backdrop_path = "";
                            detail.hasVideo = true;
                        }
                        if (video_info.genres != null) {
                            let genres = video_info.genres,
                                length = genres.length,
                                str = '';
                            for (var i = 0; i < length; i++) {
                                if (i == length - 1) {
                                    str += genres[i].name;
                                } else {
                                    str = str + genres[i].name + ", ";
                                }
                            }
                            detail.genres = str;
                        }
                        if (video_info.spoken_languages != null) {
                            let languages = video_info.spoken_languages,
                                length = languages.length,
                                str = '';
                            for (var i = 0; i < length; i++) {
                                if (i == length - 1) {
                                    str += languages[i].english_name;
                                } else {
                                    str = str + languages[i].english_name + ", ";
                                }
                            }
                            detail.spoken_languages = str;
                        }
                        if (type == 'movie') {
                            detail.title = video_info.title;
                            detail.date = video_info.release_date == null ? '' : video_info.release_date.substr(0, 4);
                            if (video_info.runtime != null && video_info.runtime != 0) {
                                let min_time = parseInt(video_info.runtime);
                                detail.time = parseInt(min_time / 60) + 'hrs  ' + min_time % 60 + 'mins';
                            }
                        } else {
                            detail.title = video_info.name;
                            detail.date = video_info.first_air_date == null ? '' : video_info.first_air_date.substr(0, 4);
                            if (video_info.episode_run_time != null && video_info.episode_run_time.length > 0) {
                                if(video_info.episode_run_time.length == 1) {
                                    detail.time = video_info.episode_run_time[0] + 'mins'
                                } else {
                                    detail.time = video_info.episode_run_time[0] + 'mins  ' + video_info.episode_run_time[1] + 'secs';
                                }
                            }
                        }
                        result.detail = detail;
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