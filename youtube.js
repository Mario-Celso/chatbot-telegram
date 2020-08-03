var YouTube = require('youtube-node');
const Config = require('./yt-conf.json')

var youTube = new YouTube();

youTube.setKey(Config.key);

function searchVideos(message, queryText){
  return new Promise((resolve, reject) => {
    youTube.search(`${queryText}`, 5, function(error, result) {
      if (error) {
        reject("Não consegui encontrar nada com esse termo")
      } else {
        const videoIds =
         result.items.map((item) => 
            item.id.videoId).filter(item => item)
        
            const links = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`)
        resolve(`${message} ${links.join(`- `)}`)
      }
    });
  });
}

module.exports.searchVideos = searchVideos