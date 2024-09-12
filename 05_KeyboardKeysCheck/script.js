const insert = document.querySelector(".insert")

window.addEventListener('keydown', function(event) {
    insert.innerHTML = `
    <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>${event.key == " " ? 'Space Bar' : event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    </table>
    `
});