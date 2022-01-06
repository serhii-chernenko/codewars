// https://www.codewars.com/kata/581c06b95cfa838603000435/train/javascript

const cheerio = require('cheerio');
const request = require('request');
const URL = 'https://www.codewars.com/users/leaderboard';

class Leaders {
    constructor(html) {
        this.position = {};
        this.parseHtml(html);
    }

    parseHtml(html) {
        const $ = cheerio.load(html);
        const rows = $('.leaderboard > table tr[data-username]');

        this.parseUsers(rows);
    }

    parseUsers(rows) {
        for (let index = 0; index < rows.length; index++) {
            this.addUser(
                index,
                rows[index].attribs['data-username'],
                parseInt(rows[index].children[3].children[0].data.replace(/,/, '')),
                rows[index].children[2].children.length ? rows[index].children[2].children[0].data : ''
            );
        }
    }

    addUser(index, name, honor, clan) {
        this.position[index + 1] = {
            name,
            honor,
            clan
        };
    }
}

const solution = () => {
    return new Promise((resolve, reject) => {
        request(URL, (error, response, html) => {
            if (error || response.statusCode !== 200) {
                reject(error);
            }

            resolve(new Leaders(html));
        });
    });
};

solution()
    .then(data => data)
    .catch(error => error);
