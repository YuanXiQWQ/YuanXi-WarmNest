function display() {
    let parsedData = JSON.parse(asdf);
    let str = "<table>";
    for (let i = 0; i < parsedData.length; i++) {
        let item = parsedData[i];
        str += `<tr><td>${item["title"]}</td>
        <td>${item["lat"]}</td>
        <td>${item["lng"]}</td>
        <td>${item["description"]}</td></tr>`;
    }
    str += "</table>";
    str += `<a href='https://youtu.be/dQw4w9WgXcQ'>Hi Arron</a>`;
    document
        .getElementById("marker-data")
        .insertAdjacentHTML("afterend", str);
}