<?php
Route::get('/{any}', 'MediumController@index')->where('any', '.*');