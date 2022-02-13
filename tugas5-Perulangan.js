function kondisi1() {
    for (var i = 1; i <= 20; i++) {
        console.log("Perulangan Ke " + i)
    }
}

function kondisi2() {
    for (var i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
kondisi1();
kondisi2();