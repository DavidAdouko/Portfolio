<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes(['verify' => true]);

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
});

/*Ads Route*/
Route::get('/home/index',[App\Http\Controllers\AdController::class,'index'])->name('index');
Route::get('/home', [App\Http\Controllers\AdController::class,'create'])->name('create');
Route::post('home/create', [App\Http\Controllers\AdController::class,'store'])->name('store');
Route::post('search', [App\Http\Controllers\AdController::class,'search'])->name('search');
Route::get('delete-ad/{id}', [App\Http\Controllers\AdController::class, 'destroy'])->name('destroy');
