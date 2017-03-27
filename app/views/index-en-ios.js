/* jshint devel:true */
(function () {
try {
    // return
    var mainList = [
        // "c360lite",
        "bestie",
        "mix",
        "april",
        "poker",
        "oopsfoto",
        // "idcamera",
        // "camera360",
    ]
    var defaultList = [
        // "c360lite",
        "selfportrait",
        // "oopsfoto",
        // "poker",
        // "camera360",
        // "bestie",
        // "mix",
        // "april",
        "hdr",
        "funy",
        "bw",
        "koreanstyle",
        "hollywood",
        "sketch",
        "lightcolor",
        "magicskin",
        "enhance",
        "wonderland",
        "filmflex",
        "yummy",
        "endwar",
        "starringnight",
        "magicsky",
        "magiccolor",
        "storm",
        "strom",
        "lights",
        "loft",
        "lomo"
    ];

    if (document.readyState == "Uninitialized") {
        $("body").append('<div style="color: red">Uninitialized</div>');
    }

    $(".block").css({
        height: $(window).width()*14/25
    })

    var advData = {"list":[{"id":"000000000000000000000003","title":"Poker","desc":"Art photo editor with free art filters","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/8d0c931cb70bea52f921df675e46d513.jpg","link":"http:\/\/app.appsflyer.com\/id1144037034?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000003&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"1","appName":"poker","platform":"ios"},{"id":"586f04634b58d57b63f4f1bf","title":"OopsFoto","desc":"Share with Live Photos","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/318a8c392a99739c0cb0c7e13a331a68.jpg","link":"http:\/\/app.appsflyer.com\/id1186154824?pid={adnetwork_int}&clickid={device_id}&af_ad_id=586f04634b58d57b63f4f1bf&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"1","appName":"Oppsfoto","platform":"ios"},{"id":"580720e5ce1cddc65d3496f3","title":"Camera360","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/33623366c91006ca392cdf8e027e3dc2.jpg","link":"http:\/\/app.appsflyer.com\/id443354861?pid={adnetwork_int}&clickid={device_id}&af_ad_id=580720e5ce1cddc65d3496f3&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"4","isNew":"0","appName":"camera360","platform":"ios"},{"id":"580720e5ce1cddc65d3496f6","title":"Bestie","desc":"the best of selfie camera apps of the year","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/941caf698eda8deec4033a157087799c.jpg","link":"https:\/\/at.umeng.com\/aa8HzC","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"bestie","platform":"ios"},{"id":"583eb9585b5f460b8f8b4567","title":"MIX","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/cbd1469ba0ca3d6463d1febc7e0a553a.jpg","link":"https:\/\/at.umeng.com\/1L5bym","actionText":"Free","pkgName":"","rating":"4","isNew":"0","appName":"mix","platform":"ios"},{"id":"583eb9fe5b5f464f918b4567","title":"April","desc":"young and beautiful collage app with layouts and poster templates","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/9e93bd1070a1c3b7cc8612f8368ce754.jpg","link":"https:\/\/itunes.apple.com\/app\/apple-store\/id1121943475","actionText":"Free","pkgName":"","rating":"4","isNew":"0","appName":"april","platform":"ios"},{"id":"000000000000000000000011","title":"B&W","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/2f3333282567a1b1148dba656c57d356.jpg","link":"http:\/\/app.appsflyer.com\/id1147961231?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000011&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"1","appName":"bw","platform":"ios"},{"id":"000000000000000000000015","title":"Endwar","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/77a2d1b60377713554c54ff7679184dd.jpg","link":"http:\/\/app.appsflyer.com\/id1144764075?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000015&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"endwar","platform":"ios"},{"id":"000000000000000000000023","title":"Film Flex","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/5e1bb16b947dec4b3e2866db6bcd011e.jpg","link":"http:\/\/app.appsflyer.com\/id1146380116?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000023&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"filmflex","platform":"ios"},{"id":"000000000000000000000027","title":"Funy","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/4a18c4fe33bd90aca81d3786874921e8.jpg","link":"http:\/\/app.appsflyer.com\/id1147961253?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000027&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"funy","platform":"ios"},{"id":"000000000000000000000031","title":"HDR","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/025bd0a283c8def3dafd9bc466b5dbc2.jpg","link":"http:\/\/app.appsflyer.com\/id1144861360?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000031&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"hdr","platform":"ios"},{"id":"000000000000000000000035","title":"Hollywood","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/c0e3ee1058744aa6c22e56d723ac222b.jpg","link":"http:\/\/app.appsflyer.com\/id1146735302?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000035&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"hollywood","platform":"ios"},{"id":"000000000000000000000039","title":"Korean Style","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/1449d7ae2b2d28957ab996043c7ce821.jpg","link":"http:\/\/app.appsflyer.com\/id1146736904?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000039&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"koreanstyle","platform":"ios"},{"id":"000000000000000000000043","title":"Light Color","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/33a67ea45eeb04e0d6e2cb68525b16ac.jpg","link":"http:\/\/app.appsflyer.com\/id1147961248?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000043&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"lightcolor","platform":"ios"},{"id":"000000000000000000000047","title":"Lights","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/5306af46d88f8364fa553425d16c7b7a.jpg","link":"http:\/\/app.appsflyer.com\/id1146736910?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000047&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"lights","platform":"ios"},{"id":"000000000000000000000051","title":"LOFT","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/ae82cbadd91719b8c41550e60ba2a820.jpg","link":"http:\/\/app.appsflyer.com\/id1144764278?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000051&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"loft","platform":"ios"},{"id":"000000000000000000000055","title":"Lomo","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/7c50642d89db4a191326aab4ba1e8c2c.jpg","link":"http:\/\/app.appsflyer.com\/id1146380513?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000055&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"lomo","platform":"ios"},{"id":"000000000000000000000059","title":"Magic Color","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/db9151242ad460e6259bbe550b37e2d9.jpg","link":"http:\/\/app.appsflyer.com\/id1144861583?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000059&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"magiccolor","platform":"ios"},{"id":"000000000000000000000063","title":"Magic Skin","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/f2a2316e443a6248ae7de198ce142725.jpg","link":"http:\/\/app.appsflyer.com\/id1144861476?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000063&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"magicskin","platform":"ios"},{"id":"000000000000000000000067","title":"Magic Sky","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/4ebf0be9098d152a3776337914f24768.jpg","link":"http:\/\/app.appsflyer.com\/id1144764323?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000067&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"4","isNew":"0","appName":"magicsky","platform":"ios"},{"id":"000000000000000000000071","title":"Sketch","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/3a42c81ef0051cf162ec081d61659a66.jpg","link":"http:\/\/app.appsflyer.com\/id1146380606?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000071&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"sketch","platform":"ios"},{"id":"000000000000000000000075","title":"Starring Night","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/09f4ff71151063e57608d601bdaea071.jpg","link":"http:\/\/app.appsflyer.com\/id1146381149?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000075&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"starringnight","platform":"ios"},{"id":"000000000000000000000079","title":"Strom","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/36e8a1e085909a98297434cdff65691c.jpg","link":"http:\/\/app.appsflyer.com\/id1144763946?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000079&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"storm","platform":"ios"},{"id":"000000000000000000000083","title":"Wonderland","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/d85404d3d0a34c8de15b41ee1b56acba.jpg","link":"http:\/\/app.appsflyer.com\/id1146735835?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000083&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"wonderland","platform":"ios"},{"id":"000000000000000000000087","title":"Foodie","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/7b5909742ad3e6a52554b940bb52f2bd.jpg","link":"http:\/\/app.appsflyer.com\/id1144764188?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000087&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"yummy","platform":"ios"},{"id":"000000000000000000000007","title":"Self Portrait","desc":"Photo effects for selfies pics and portrait","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/e7c9fe3ae35efe54cabc21a1d2c02770.jpg","link":"http:\/\/app.appsflyer.com\/id1151311867?pid={adnetwork_int}&clickid={device_id}&af_ad_id=000000000000000000000007&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"1","appName":"selfportrait","platform":"ios"},{"id":"587f546fd36e5403330041a7","title":"Cam Bird","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/07bc6f5ffa5b5b1ed9500d86554603a1.jpg","link":"http:\/\/app.appsflyer.com\/id1168990182?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f546fd36e5403330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"bird","platform":"ios"},{"id":"587f5474d36e5417330041a7","title":"Cam Alien","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/d750c7ed1bdb4761cd22ee052c658767.jpg","link":"http:\/\/app.appsflyer.com\/id1172756096?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5474d36e5417330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"camAlien","platform":"ios"},{"id":"587f5478d36e5420330041a7","title":"Castle","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/6ec70cdb8b3ba31dd2c97605d68ecaf4.jpg","link":"http:\/\/app.appsflyer.com\/id1172757645?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5478d36e5420330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"castle","platform":"ios"},{"id":"587f547cd36e542e330041a7","title":"Cam Clouds","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/53ae75c66b02f00b5dcef8252efe01aa.jpg","link":"http:\/\/app.appsflyer.com\/id1168987277?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f547cd36e542e330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"clouds","platform":"ios"},{"id":"587f5480d36e543c330041a7","title":"Flare","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/eafcf850144a0ea38c02cc8b17542063.jpg","link":"http:\/\/app.appsflyer.com\/id1168988376?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5480d36e543c330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"flare","platform":"ios"},{"id":"587f5484d36e5447330041a7","title":"Fly Path","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/91d13c1ecdce94ee93a09a75f0832900.jpg","link":"http:\/\/app.appsflyer.com\/id1172156259?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5484d36e5447330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"flyPath","platform":"ios"},{"id":"587f5489d36e5453330041a7","title":"Fun Clouds","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/85d3007357cf6ec39ceb814248eaa432.jpg","link":"http:\/\/app.appsflyer.com\/id1168988352?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5489d36e5453330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"funClouds","platform":"ios"},{"id":"587f548dd36e545b330041a7","title":"Galaxy","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/58e62c1b5a55192df4ad1f49469733d9.jpg","link":"http:\/\/app.appsflyer.com\/id1168991256?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f548dd36e545b330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"galaxy","platform":"ios"},{"id":"587f5491d36e546f330041a7","title":"Sunset Glow","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/b1c310d79a1effc03aa57ac33e983abc.jpg","link":"http:\/\/app.appsflyer.com\/id1168991238?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5491d36e546f330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"glow","platform":"ios"},{"id":"587f5495d36e5478330041a7","title":"Gospel","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/801c88a54d67b9610b4114617956d6c9.jpg","link":"http:\/\/app.appsflyer.com\/id1172760007?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5495d36e5478330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"gospel","platform":"ios"},{"id":"587f5499d36e5483330041a7","title":"Cam Kite","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/0d91d2001eeadd696afdfa129c6dfa00.jpg","link":"http:\/\/app.appsflyer.com\/id1168988356?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f5499d36e5483330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"kite","platform":"ios"},{"id":"587f549dd36e548f330041a7","title":"Magic Fish","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/4c0fdc9fcae1adc97741a8ee3255cdac.jpg","link":"http:\/\/app.appsflyer.com\/id1172760234?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f549dd36e548f330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"magicFish","platform":"ios"},{"id":"587f54a2d36e549e330041a7","title":"Meteor","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/88d7cfc127fa3eebed09ab6094531a63.jpg","link":"http:\/\/app.appsflyer.com\/id1172760239?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54a2d36e549e330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"meteor","platform":"ios"},{"id":"587f54a6d36e54ac330041a7","title":"Mirage","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/4be8ea570475d2d127fcc4a3cdc4cd6b.jpg","link":"http:\/\/app.appsflyer.com\/id1172760250?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54a6d36e54ac330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"mirage","platform":"ios"},{"id":"587f54aad36e54b4330041a7","title":"Planet","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/ec06a3018d753cea433eb1d301338df0.jpg","link":"http:\/\/app.appsflyer.com\/id1172761145?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54aad36e54b4330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"planet","platform":"ios"},{"id":"587f54aed36e54c7330041a7","title":"Rainbow","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/d10ce42e30de447004103e8fc5f8bb8f.jpg","link":"http:\/\/app.appsflyer.com\/id1168991931?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54aed36e54c7330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"rainbow","platform":"ios"},{"id":"587f54b2d36e54d1330041a7","title":"SnowCap","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/a882fce338aefa5b3ad2584a8bf56ef0.jpg","link":"http:\/\/app.appsflyer.com\/id1172761514?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54b2d36e54d1330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"snowCap","platform":"ios"},{"id":"587f54b7d36e54db330041a7","title":"Star Trek","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/0faad7c58f6019f276ad6b8c652a7ed3.jpg","link":"http:\/\/app.appsflyer.com\/id1172761527?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54b7d36e54db330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"starTrek","platform":"ios"},{"id":"587f54bbd36e54ec330041a7","title":"Sunset","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/ae6db61cd8c130892ea9336de3a693fb.jpg","link":"http:\/\/app.appsflyer.com\/id1168990191?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54bbd36e54ec330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"sunset","platform":"ios"},{"id":"587f54bfd36e54fd330041a7","title":"Thunder","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/6b4a8907c63954ba7c16b61f8a2dc6cf.jpg","link":"http:\/\/app.appsflyer.com\/id1168990200?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54bfd36e54fd330041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"thunder","platform":"ios"},{"id":"587f54c3d36e540f340041a7","title":"Tornado","desc":"","icon":"","image":"http:\/\/dispatcher-bsy.c360dn.com\/970e1acc2096794b12f1360c8857d6f4.jpg","link":"http:\/\/app.appsflyer.com\/id1172761540?pid={adnetwork_int}&clickid={device_id}&af_ad_id=587f54c3d36e540f340041a7&af_sub1={af_sub1}&idfa={idfa}&grayScheme=test0311","actionText":"Free","pkgName":"","rating":"5","isNew":"0","appName":"tornado","platform":"ios"}],"title":"FEATURED","product":"camera360","platform":"ios","lang":"en_us","plan":"test0311","stat":{"display":"app_adv_display","click":"app_adv_click"}};

    var deviceId,
        app_name,
        deviceIdfa,
        android_id,
        advertising_id,
        imei;
    // $("body").append('<div class="debugBlock">debug状态</div>');
    var gray_scheme = advData.plan;
    var statisticsId = "family_" + gray_scheme;
    function isPC() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return false;
        } else {
            return true;
        }
    }

    if (isPC()) {
        advData.platform = 'pc'
    }
    var JsToNative = {
        init: function () {
            if (advData.platform == "ios") {
                app_name = getAppName();
                _hmt.push(['_trackEvent', "item_ios", 'PV', 'PV']);
                statistics({type: "PV_ios", id: statisticsId});
            } else if (advData.platform == "android") {
                app_name = advFamilyJs.getAppName();
                deviceId = deviceId = advFamilyJs.getDeviceId();
                _hmt.push(['_trackEvent', "item_android", 'PV', 'PV']);
                statistics({type: "PV_android", id: statisticsId});
            } else {
                app_name = advData.product;
            }
            if (this.isDebug()) {
                $("body").append('<div class="debugBlock">debug状态</div>');
            }
        },
        isDebug: function () {
            if (advData.platform == "ios") {
                return isDebug();
            } else if (advData.platform == "android") {
                return advFamilyJs.isDebug();
            } else {
                return true;
            }
        },
        changeLinkUrl: function (item, index) {
            var link = item.link || '';
            link = link.replace("{af_sub1}", index);
            link = link.replace("{adnetwork_int}", app_name);
            if (advData.platform == "ios") {
                deviceId = getDeviceId();
                app_name = getAppName();
                deviceIdfa = getDeviceIdfa();
                if (deviceId != undefined && deviceId != "") {
                    link = link.replace("{device_id}", deviceId);
                } else {
                    link = link.replace("{device_id}", "");
                }
                if (deviceIdfa != undefined && deviceIdfa != "") {
                    link = link.replace("{idfa}", deviceIdfa);
                } else {
                    link = link.replace("{idfa}", "");
                }
                if (this.isDebug()) {
                    $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
                }
            } else if (advData.platform == "android") {
                android_id = advFamilyJs.getAndroidId();
                advertising_id = advFamilyJs.getGoogleAdvertisingId();
                imei = advFamilyJs.getIMEI();
                if (imei != undefined && imei != "") {
                    link = link.replace("{device_id}", imei);
                } else {
                    link = link.replace("{device_id}", "");
                }
                if (android_id != undefined && android_id != "") {
                    link = link.replace("{android_id}", android_id);
                } else {
                    link = link.replace("{android_id}", "");
                }
                if (advertising_id != undefined && advertising_id != "") {
                    link = link.replace("{advertising_id}", advertising_id);
                } else {
                    link = link.replace("{advertising_id}", "");
                }
                if (imei != undefined && imei != "") {
                    link = link.replace("{imei}", imei);
                } else {
                    link = link.replace("{imei}", "");
                }
                if (this.isDebug()) {
                    $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
                }
            } else {
                $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
            }
            return link;
        },
        getBtnText: function (item, index) {
            var link = this.changeLinkUrl(item, index);
            if (advData.platform == "ios") {
                var btnText = '<a class="btnDoneText btn' + index + '" style="text-decoration: none;" href="' + link + '">' + item.actionText + '</a>';
                return btnText;
            } else if (advData.platform == "android") {
                var btnText = '<a class="btnDoneText btn' + index + '" style="text-decoration: none;" href="javascript:void(0)">' + item.actionText + '</a>';
                return btnText;
            } else {
                var btnText = '<a class="btnDoneText btn' + index + '" style="text-decoration: none;" href="javascript:void(0)">' + item.actionText + '</a>';
                return btnText;
            }
        },
        uploadBigData: function (item, index, dataType) {
            console.log(item)
            var staticId = "app_name="+app_name+",ad_id="+item.id+",position=family_"+index+",gray_scheme="+gray_scheme;
            if (advData.platform == "ios") {
                uploadBigData(dataType, staticId);
                _hmt.push(['_trackEvent', "item_ios", dataType, item.appName]);
                statistics({type: dataType + "_ios_" + item.appName, id: statisticsId});
            } else if (advData.platform == "android") {
                advFamilyJs.ReportBD(dataType, staticId);
                _hmt.push(['_trackEvent', "item_android", dataType, item.appName]);
                statistics({type: dataType + "_android_" + item.appName, id: statisticsId});
            }
            if (this.isDebug()) {
                // console.log(dataType + ": " + staticId)
                $(".debugBlock").append('<div style="color:#333;margin-top:5px;">' + "event:" + dataType + "\nstaticId:" + staticId + '</div>');
            }
        },
        linkTo: function (item, index) {
            var link = this.changeLinkUrl(item, index);
            if (advData.platform == "ios") {
                if (this.isDebug()) {
                    $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
                }
                window.location.href = link;
                // window.location.href = "http://www.baidu.com";
            } else if (advData.platform == "android") {
                if (this.isDebug()) {
                    $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
                }
                advFamilyJs.toInteraction(link);
            } else {
                $(".debugBlock").append('<div style="color:green;margin-top:5px;">link: ' + link + '</div>');
            }
        }
    };

    var statistics = function (data) {
        var baseUrl = "https://activity.camera360.com";
        var basePath = location.host;
        //这是开发环境
        if (JsToNative.isDebug() || basePath.indexOf("ktv") > -1) {
            baseUrl = "https://activity-test.camera360.com";
        }
        $.ajax({
            url: baseUrl + '/common/statistic/index',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            data: data ? data : {},
            success: function (res) {
                // console.log(res)
            },
            fail: function () {

            },
            complete: function () {

            }
        })
    }
    JsToNative.init();
    var mainDataList = [];
    var filterAppName = function (a, product) {
        var resultList = [];
        var sortList = [];
        var unsortList = [];
        var _b = [], _c = [], _mainDataList = [];
        for (var j in a) {
            for (var i in mainList) {
                if (mainList[i] == a[j].appName) {
                    _c.push(j);
                }
            }
        }
        for (var i=_c.length-1;i>=0;i--) {
            var c = a.splice(_c[i], 1);
            _mainDataList.push(c[0]);
        }

        for (var i in mainList) {
            for (var j in _mainDataList) {
                if (mainList[i] == _mainDataList[j].appName) {
                    mainDataList.push(_mainDataList[j]);
                }
            }
        }
        for (var i in defaultList) {
            for (var j in a) {
                if (defaultList[i] == a[j].appName) {
                    sortList.push(a[j]);
                    _b.push(j);
                }
            }
        }
        for (var i in a) {
            var _bHas = false;
            for (var j in _b) {
                if (_b[j] == i) {
                    _bHas = true;
                }
            }
            if (!_bHas) {
                unsortList.push(a[i]);
            }
        }
        list = sortList.concat(unsortList);
        var _product = product.toLowerCase();
        if (list instanceof Array) {
            var list = list;
            var b = [];
            for(var i in list){
                if (list[i].appName.toLowerCase() == _product) {
                    b.push(parseInt(i));
                }
            }
            for(var i = (b.length-1);i>=0;i--){
                list.splice(b[i],1);
            }
            return list;
        } else {
            return false;
        }
    }

    document.title = advData.title?advData.title:'';

    var list = filterAppName(advData.list, app_name);

    for (var index in list) {
        var item = list[index];
        if (typeof(item) == 'function') {
            continue;
        }

        var btnText = '<a class="btnDoneText btn' + index +
                        '" style="text-decoration: none;" href="javascript:void(0)">' +
                        item.actionText + '</a>';

        $("body").append(
            '<div class="block block' + index + '">' +
                '<div class="adSymbol">AD</div>' +
                '<img data-original="' + item.image + '" alt="" class="img bgPic lazy">' +
                '<div class="descrip">' +
                    '<div class="name">' + item.title + '</div>' +
                    '<div class="des">' + item.desc + '</div>' +
                    btnText +
                '</div>' +
            '</div>');

        (function(item, i) {
            $(".block" + index).click(function () {
                JsToNative.uploadBigData(item, i, advData.stat.click);
                JsToNative.linkTo(item, i);
            })
        })(item, index);
    }

    $("img.lazy").lazyload({
        threshold : 500,
        effect : "fadeIn"
    });

    $(".mainBlock").each(function (i, item) {
        $(item).click(function () {
            JsToNative.uploadBigData(mainDataList[i], i, advData.stat.click);
            JsToNative.linkTo(mainDataList[i], i);
        })
    });

    $(".block").css({
        height: $(window).width()*14/25
    })

    $(".mainBlock").css({
        height: $(window).width()*254/316
    })

    var debugBlockHeight = $(".debugBlock").height() || 0;
    var mainWrapperHeight = $(".mainWrapper").height() || 0;
    var blockHeight = $(window).width()*14/25;
    var initShowHeight = $(window).height();
    var mainHasLoged = [], hasLoged = [];
    var mainHeightList = $(".bestieMain").height();
    var logDisplay = function (showHeight) {
        var mainShowedNum = Math.round(showHeight / mainHeightList);
        var showedNum = Math.round((showHeight - debugBlockHeight - mainWrapperHeight) / blockHeight);
        for (var i=0;i<mainShowedNum;i++) {
            var mainIsLoged = false;
            for (var index in mainHasLoged) {
                if (mainHasLoged[index] == i) {
                    mainIsLoged = true;
                }
            }
            if (!mainIsLoged) {
                mainHasLoged.push(i);
                if (mainDataList[i]) {
                    JsToNative.uploadBigData(mainDataList[i], i, advData.stat.display);
                }
            }
        }
        for (var i=0;i<showedNum;i++) {
            var isLoged = false;
            for (var index in hasLoged) {
                if (hasLoged[index] == i) {
                    isLoged = true;
                }
            }
            if (!isLoged) {
                hasLoged.push(i);
                if (list[i]) {
                    JsToNative.uploadBigData(list[i], i, advData.stat.display);
                }
            }
        }
    }
    logDisplay(initShowHeight);
    $(window).scroll(function () {
        logDisplay($(window).scrollTop() + initShowHeight);
    })
}catch(e){
    console.log(e)
    // $(".debugBlock").append('<div style="color:red;margin-top:5px;">error: ' + e + '</div>');
}
})()