<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$id=$_GET['id'];
$teacherid=$data['teacherid'];
$fname=$data['fname'];
$lname=$data['lname'];
$email=$data['email'];
$phone=$data['phone'];








$query=mysqli_query($con, "UPDATE `teacher` SET `teachid`='$teacherid',`fname`='$fname',`lname`='$lname',`email`='$email',`phone`='$phone' WHERE `id`='{$id}'");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 