<?php

use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ShopController::class, 'home'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
