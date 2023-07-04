<?php

namespace App\Http\Controllers;

use App\Helpers\CommonHelper;
use App\Models\Country;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // all() : retourne toute la table sans condition
        // $products = Product::all();
        // dd($products);

        //
        $products = Product::orderBy('name', 'ASC')->get();
        // dd($products->toArray());

        $countries  = Country::all();

        return view('front/pages/home', compact(
            'products',
            'countries',
        ));

        // return view('front/pages/home')->with([
        //     'produits' => $products,
        //     'pays' => $countries
        // ]);
    }

    public function shop()
    {
        return view('front/pages/shop');
    }
}
