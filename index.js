function play() {
    // 0 ～ 4 の範囲のランダムな値を得る
    var no = Math.floor(Math.random() * 5);

    // ランダム値に応じて表示する画像を変える
    var image_name;
    if (no == 0) {
        image_name = "messi.jpg";
    } else if (no == 1) {
        image_name = "ronaldo.jpg";
    } else if (no == 2) {
        image_name = "deBruyne.jpg";
    } else if (no == 3) {
        image_name = "lewi.jpg";
    } else {
        image_name = "mbappe.jpg";
    }

    alert("さて結果は？ ");
    // 画像と文字列の差し替え
    document.getElementById("omikuji").src = "images/" + image_name;
    document.getElementById("playBtn").innerHTML = " Try again";
}