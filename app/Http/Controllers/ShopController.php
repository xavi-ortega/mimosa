<?php

namespace App\Http\Controllers;

use App\Http\Resources\CollectionResource;
use App\Http\Resources\ProductResource;
use Inertia\Inertia;
use Lunar\Models\Collection;
use Lunar\Models\Product;

class ShopController extends Controller
{
    public function home()
    {
        $collections = Collection::all();
        $products = Product::all();

        return Inertia::render('home', [
            'collections' => CollectionResource::collection($collections),
            'products' => ProductResource::collection($products),
        ]);
    }
}
