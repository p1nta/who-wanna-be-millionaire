function downloadAsJSON(json: string) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json);
  const fileName = `questions_${new Date().toUTCString()}.json`

  var link = document.createElement('a');
  link.download = fileName;
  link.href = dataStr;
  link.click();
}

export default downloadAsJSON;
