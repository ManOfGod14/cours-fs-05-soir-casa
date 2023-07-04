<!-- start navigation-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#">
            Start Laravel
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{{ route('front.home') }}">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        About
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="{{ route('front.shop.all.products') }}">
                                All Products
                            </a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="{{ route('front.shop.popular.items') }}">
                                Popular Items
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('front.shop.new.arrivals') }}">
                                New Arrivals
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('front.contact.form') }}">
                        Contactez-nous
                    </a>
                </li>
            </ul>

            <div class="d-flex">
                @if (Auth::guard('web')->user())
                    <a href="{{ route('front.user.profile') }}" class="btn btn-secondary btn-sm me-2">
                       {{ Auth::guard('web')->user()->name }}
                    </a>

                    <a href="{{ route('front.auth.logout') }}" class="btn btn-danger btn-sm me-2">
                        Déconnexion
                    </a>
                @else
                    <a href="{{ route('front.auth.login.form') }}" class="btn btn-success btn-sm me-2">
                        Connexion
                    </a>

                    <a href="{{ route('front.auth.signup.form') }}" class="btn btn-primary btn-sm me-2">
                        Inscription
                    </a>
                @endif

                <form>
                    <button class="btn btn-outline-primary" type="submit">
                        <i class="bi-cart-fill me-1"></i> Mon panier
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</nav>
<!-- end navigation -->