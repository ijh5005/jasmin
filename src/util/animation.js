module.exports = {
  transitionGoldSmall: () => {
    document.getElementById("leftSide").classList.remove("smallLeft");
    document.getElementById("leftSide").classList.add("small");
  },
  transitionGoldSmallLeft: () => {
    document.getElementById("leftSide").classList.remove("small");
    document.getElementById("leftSide").classList.add("smallLeft");
  },
  landingPageAnimation: () => {
    setTimeout(() => {
      document.getElementById('landingName').classList.add('slideIn');
      document.getElementById('landingName2').classList.add('slideIn');
      setTimeout(() => {
        document.getElementById('landingName').classList.remove('slideIn');
        document.getElementById('landingName2').classList.remove('slideIn');
        document.getElementById('landingName').classList.add('slideOut');
        document.getElementById('landingName2').classList.add('slideOut');
        setTimeout(() => {
          document.getElementById('landingPage').classList.add('fadeOut');
          document.getElementById('landingPage').style.zIndex = -1;
          setTimeout(() => {
            document.getElementById('leftSide').classList.add('slideIn');
          }, 500)
        }, 500)
      }, 2000)
    }, 1000);
  },
  moveHomePageImg: () => {
    setInterval(() => {
      const a = document.getElementById('homeImgBox');
      document.getElementById('homeImgBox').classList.add('rotateLeft');
      setTimeout(() => {
        document.getElementById('homeImgBox').classList.remove('rotateLeft');
        document.getElementById('homeImgBox').classList.add('rotateRight');
        setTimeout(() => {
          document.getElementById('homeImgBox').classList.remove('rotateRight');
          document.getElementById('homeImgBox').classList.add('bigImg');
          setTimeout(() => {
            document.getElementById('homeImgBox').classList.remove('bigImg');
          }, 200)
        }, 200)
      }, 200)
    }, 6000)
  }
}
