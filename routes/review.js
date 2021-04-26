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
            url = "https://api.themoviedb.org/3/movie/" + id + "/reviews" + api_key + "&language=en-US&page=1";
        } else {
            url = "https://api.themoviedb.org/3/tv/" + id + "/reviews" + api_key + "&language=en-US&page=1";
        }
        axios.get(url)
            .then(response => {
                let result = [];
                let data = response.data.results;
                // console.log(data);
                for (var i = 0; i < Math.min(data.length, 10); i++) {
                    let single_review = {};
                    single_review.author = data[i].author;
                    let detail = data[i].author_details;
                    if (detail.rating == null) {
                        single_review.rating = 0;
                    } else {
                        single_review.rating = detail.rating;
                    }
                    if (detail.avatar_path == null) {
                        single_review.avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                    } else {
                        if (detail.avatar_path.indexOf('https') != -1) {
                            single_review.avatar_path = detail.avatar_path.substring(1);
                        } else {
                            single_review.avatar_path = 'https://image.tmdb.org/t/p/original' + detail.avatar_path;
                        }
                    }
                    single_review.content = data[i].content;
                    if (data[i].created_at != null) {
                        let str = '',
                            time = data[i].created_at;

                        // get which day in a week
                        let whole_date = time.substring(0, 10);
                        let _date = new Date(whole_date);
                        let week_day = map_day.get(_date.getDay());
                        

                        let year = time.substring(0, 4),
                            month = time.substring(5, 7),
                            day = time.substring(8, 10);

                        // if (day.substring(0, 1) == '0') {
                        //     day = day.substring(1, 2);
                        // }
                        str = str + week_day + ", " + map_month.get(month) + ' ' + day + ' ' + year;
                        single_review.created_at = str;
                    } else {
                        single_review.created_at = data[i].created_at;
                    }
                    single_review.url = data[i].url;
                    result.push(single_review);
                }
                res.json(result);
            })
            .catch(error => {
                console.log(error);
            });
    })

map_month = new Map([
    ['01', 'January'],
    ['02', 'February'],
    ['03', 'March'],
    ['04', 'April'],
    ['05', 'May'],
    ['06', 'June'],
    ['07', 'July'],
    ['08', 'August'],
    ['09', 'September'],
    ['10', 'October'],
    ['11', 'November'],
    ['12', 'December']
]);

map_day = new Map([
    [0, 'Sun'],
    [1, 'Mon'],
    [2, 'Tue'],
    [3, 'Wed'],
    [4, 'Thu'],
    [5, 'Fri'],
    [6, 'Sat']
]);

module.exports = router