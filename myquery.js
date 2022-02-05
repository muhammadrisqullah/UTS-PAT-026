function getall() {
    const respon = axios.get("https://muslimsalat.p.rapidapi.com/jogjakarta/weekly/01-01-2022/true/5.json", {
        headers: {
            'x-rapidapi-host': 'muslimsalat.p.rapidapi.com',
            'x-rapidapi-key': 'b855f9a2famshde5e329ee060c55p1848dcjsn7bb6f9fde15e'
        }
    });
    const dr = respon.then(resp => resp.data)

    return dr
}

$("mytable").ready(function () {
    var data = document.getElementById("mytable")

    getall().then(obj => {

        for (var i = 0; i < obj.items.length; i++) {
            const tr = data.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();
            const td6 = tr.insertCell();
            console.log(obj.items[i])
            td1.innerHTML = obj.items[i].date_for
            td2.innerHTML = obj.items[i].shurooq
            td3.innerHTML = obj.items[i].dhuhr
            td4.innerHTML = obj.items[i].asr
            td5.innerHTML = obj.items[i].maghrib
            td6.innerHTML = obj.items[i].isha

        }
    })
})

