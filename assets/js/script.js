const clientID = `521322355544283`;
const redirectURI = `https://richoha.github.io/bakeHa/`;

const token = 'IGQVJYS0hCaHZABU0U5MzB4RF9sdkhRTlp2Wl84SlNmMWZAnN2tNZADBfelpZARTNhTkluTWZA2c0lqSGxRQ3BYZAThzVWdtaFJoVGFZAMjdUNG5xU0pZAYTh5TlQzUUoza0YzaDVBckxwWG1OZAEZA1ejdoT0hybgZDZD'
getPics()


function getPics() {
    var requestUrl = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token};`
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var img1 = document.getElementById("img1");
        img1.src = data.data[0].media_url;

        var img2 = document.getElementById("img2");
        img2.src = data.data[1].media_url;
        var img3 = document.getElementById("img3");
        img3.src = data.data[2].media_url;
        var img4 = document.getElementById("img4");
        img4.src = data.data[3].media_url;
        var img5 = document.getElementById("img5");
        img5.src = data.data[4].media_url;
        var img6 = document.getElementById("img6");
        img6.src = data.data[5].media_url;
    })
}
