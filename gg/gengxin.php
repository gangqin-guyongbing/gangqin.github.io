<?php
	$link = mysqli_connect("localhost", "wudong", "wudong123", "localhost");
	mysqli_query($link, "set names utf8");
	$sql = "UPDATE user SET cishu=1 ";
	$result = mysqli_query($link, $sql);
	//执行语句
	echo "已发布！";
?>