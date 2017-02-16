<?php
header("Content-type:text/html;application/json;charset=utf-8");
	$code = $_GET['value'];
	$curl = curl_init();
    $url = "https://route.showapi.com/255-1?page=1&showapi_appid=31513&showapi_timestamp=20170206222359&title=&type=".$code."&showapi_sign=22abbbf7bc180f960204e3282a22aaef"
    curl_setopt($curl,CURLOPT_URL, $url);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
//    curl_setopt($curl,CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    $resp = curl_exec($curl);
    curl_close($curl);
	echo $resp;
?>
