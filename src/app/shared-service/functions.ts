export function generateFileBlob(bStr: string, type: string): any {
  const byteCharacters = atob(bStr);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], {type: type});
}

/**
 * Method is from https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 * @param a
 * @param b
 */
export function formatBytes(a,b = 2): string {
  if (0 === a)
    return"0 Bytes";
  const c = 0 > b ? 0: b, d = Math.floor(Math.log(a) / Math.log(1024));
  return parseFloat((a / Math.pow(1024,d)).toFixed(c)) + " " + ["Bytes","kB","MB","GB","TB","PB","EB","ZB","YB"][d];
}

/**
 * Method is from https://stackoverflow.com
 * @param str
 */
export function decodeBase(str: string) {
  return decodeURIComponent(atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
