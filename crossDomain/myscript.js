$.ajax({
    url:"http://test.truckmanager.g7s.chinawayltd.com/app.php?method=truck.auth.login&username=smart002&password=Smart002&code=1d857028bddcda70bcfd62c0950ec1cc&appkey=47a7ccefe0",
    dataTypr:"json",
    success: function (data) {
        if(data.code === 0) {
            var $p = $("<p/>");
            $p.html(data.data.token);

            $("body").prepend($p);
        }
        console.log(data.data);
    },
    error: function () {
        console.log("ss");
    }
});

