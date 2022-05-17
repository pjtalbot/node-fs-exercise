const fs = require('fs');
const process = require('process');
const axios = require('axios')

let path = process.argv[2]
// process.argv[] the number represents the index of the arguments passed into node
// [0] being "node"
// [1] being "step2.js"
// [2] being the argument passed in after

// command line: node step2.js <path or URL

function isURL(path) {
    let str = path
    try {
        url = new URL(str);
    } catch (err) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
}


const cat = function (path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(2);
        } else {
            console.log(data)
        }
    }) 
}


const webCat = async function(url) {
    try{
        let res = await axios.get(url)
        console.log(res.data)
    } catch (err)  {
        console.log(`Error: ${url}: ${err}`)
    }

}

if (isURL(path)) {
    webCat(path)
} else {
    cat(path)
}





