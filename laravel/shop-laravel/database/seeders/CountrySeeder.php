<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        Country::truncate();

        Country::create([
            'name' => 'Afghanistan',
            'nationality' => 'Afghanistane',
            'iso_code2' => 'AF',
            'iso_code3' => 'AFG',
            'call_prefix' => 93
        ]);

        Country::create([
            'name' => 'Maroc',
            'nationality' => 'Marocaine',
            'iso_code2' => 'MA',
            'iso_code3' => 'MAR',
            'call_prefix' => 212
        ]);

        Country::create([
            'name' => 'Togo',
            'nationality' => 'Tog',
            'iso_code2' => 'TG',
            'iso_code3' => 'TGO',
            'call_prefix' => 228
        ]);

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
