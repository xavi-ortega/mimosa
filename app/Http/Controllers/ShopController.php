<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Lunar\Models\Collection;
use Lunar\Models\Product;

class ShopController extends Controller
{
    public function home()
    {
        $collections = Collection::all(['id', 'name', 'slug']);
        $products = Product::with('defaultImage')
            ->latest()
            ->limit(6)
            ->get(['id', 'name', 'slug', 'thumbnail', 'base_price']);

        return Inertia::render('home', [
            'collections' => $collections,
            'products' => $products,
        ]);
    }
}
