@extends('front.layouts.master')

@section('title', "My shop home page")

@section('custom_css')
{{--  les fichiers css personnalisés --}}
@endsection

@section('content')
<!-- start headerv-->
<header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
    </div>
</header>
<!-- end headerv-->

<!-- start sectionv-->
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <?php
            // echo "<pre>";
            //     print_r($pays);
            // echo "<pre>";
        ?>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            @foreach ($products as $key => $product)
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Sale badge-->
                        @if($product->hasSaleBadge == 1)
                        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                        @endif

                        <!-- Product image-->
                        <img class="card-img-top" src="{{ $product->img }}" alt="..." />
                        
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">
                                    {{ $product->name }}
                                </h5>
                                <!-- Product reviews-->
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    {{ CommonHelper::getProductNotes($product->note) }}
                                </div>
                                <!-- Product price-->
                                
                                {{-- @if($product->snd_price) --}}
                                @if(!is_null($product->snd_price))
                                <span class="text-muted text-decoration-line-through">
                                    {{ "$".number_format($product->snd_price, 2, '.') }}
                                </span>
                                @endif

                                {{ "$".number_format($product->price, 2, '.') }}
                            </div>
                        </div>

                        <!-- Product actions-->
                        @if($product->hasCartBtn == 1)
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                        </div>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endsection

@section('custom_js')
{{--  les fichiers js personnalisés --}}
@endsection

