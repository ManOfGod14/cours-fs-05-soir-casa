<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $json = File::get('database/data/products.json');
        $products = json_decode($json);

        foreach($products as $product) {
            DB::table('products')->insert([
                'name' => $product->name,
                'price' => $product->price,
                'snd_price' => $product->snd_price,
                'discounts' => $product->discount,
                'img' => $product->img,
                'note' => $product->note,
                'hasCartBtn' => $product->hasCartBtn,
                'hasSaleBadge' => $product->hasSaleBadge
            ]);
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
