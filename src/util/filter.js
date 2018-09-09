
module.exports = {
  shortenText: (text) => {
    if(text.length > 160){
      return `${text.slice(0, 160)}...`
    }
    return text;
  }
};
