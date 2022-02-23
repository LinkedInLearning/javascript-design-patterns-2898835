class DownloadInterface {
  constructor(service) {
    this.service = service
    this.media = null
  }

  downloadData() {
    if(!this.media) {
      this.media =  {}
      return  console.log("fetching" + this.service +  " from the internet")
    }
    console.log("fetching all " + this.service + " from cache")
  }
  
}


var repo = new Repository().init()

class CachedDownloadImages extends DownloadInterface {
  constructor() {
    super("images");
  }
  getImages() {
      // code here
  } 
}


