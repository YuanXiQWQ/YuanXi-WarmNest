function display() {
  ajaxGET("/markers", function (data) {
    let parsedData = JSON.parse(data);
    let str = "<table>";
    for (let i = 0; i < parsedData.length; i++) {
      let item = parsedData[i];
      str += `<tr><td>${item["title"]}</td>
      <td>${item["lat"]}</td>
      <td>${item["lng"]}</td>
      <td>${item["description"]}</td></tr>`; 
    }
    str += "</table>";
    document
    .getElementById("marker-data")
    .insertAdjacentHTML("afterend", str);
  });
}