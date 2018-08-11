import {MEDIA_URL} from "../settings";


export function mediaUrl(url) {
  if (url !== null && url !== undefined) {
    if (url.startsWith('/')) {
      url = MEDIA_URL + url;
    }
  }
  return url;
}

