class DownloadInterface {
  constructor(service) {
    this.service = service
    this.media = null
  }

  downloadData() {
    if(!this.media) {
      this.media =  {}
      return  console.log("fetching " + this.service +  " from the internet")
    }
    console.log("downloading all " + this.service + " from cache")
  }
  
}

class CachedDownloadImages extends DownloadInterface {
  constructor() {
    super("images");
  }
  getImages() {
    this.downloadData()
  } 
}

class CachedDownloadVideos extends DownloadInterface {
  constructor() {
    super("videos");
  }
  getVideos() {
    this.downloadData()
  } 
}


var imagesDownloadService = new CachedDownloadImages()
var videoDownloadService = new CachedDownloadVideos()

console.log("*****proxy images \n")
imagesDownloadService.getImages()
imagesDownloadService.getImages()

console.log("*****proxy videos \n")
videoDownloadService.getVideos()
videoDownloadService.getVideos()

