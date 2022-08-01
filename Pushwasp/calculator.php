<?php

function swap_elem ( Array & $array, int $index1 , int $index2 ) {
    $tmp = $array[$index1];
    $array[$index1] = $array[$index2];
    $array[$index2] = $tmp;
}

function rotate_left ( Array & $array ) {

    $first_val = $array[0];
    $count = count($array);
    $array[$count] = $first_val;

    array_splice($array, 0,1);
    
}

function rotate_right ( Array & $array ) {
    
    array_unshift($array, array_pop($array));
    return $array;
}

$array = [15 , 8 , 42 , 4 , 16 , 23];




function Timer () {
    
    $startTime = microtime(true);
echo "Temps passé: ". (microtime(true) - $startTime) ." seconds" . "\n";

}

//swap_elem($array, 1, 3);
//rotate_right($array);
rotate_left($array);
print_r($array);
?>


