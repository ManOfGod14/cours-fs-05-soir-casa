// données des produits
const products = [
    {
        id: 1,
        name: "Fancy Product",
        price: "$40.00 - $80.00",
        discount: "",
        img: "//unsplash.it/451/301",
        note: 0,
        hasCartBtn: false,
        hasSaleBadge: false
    },
    {
        id: 2,
        name: "Special Item",
        price: "$18.00",
        discount: "$20.00",
        img: "//unsplash.it/452/302",
        note: 5,
        hasCartBtn: true,
        hasSaleBadge: true
    },
    {
        id: 3,
        name: "Sale Item",
        price: "$25.00",
        discount: "$50.00",
        img: "//unsplash.it/453/303",
        note: 0,
        hasCartBtn: true,
        hasSaleBadge: true
    },
    {
        id: 4,
        name: "Popular Item",
        price: "$40.00",
        discount: "",
        img: "//unsplash.it/454/304",
        note: 5,
        hasCartBtn: true,
        hasSaleBadge: false
    },
    {
        id: 5,
        name: "Sale Item 2",
        price: "$50.00 $25.00",
        discount: "",
        img: "//unsplash.it/455/305",
        note: 0,
        hasCartBtn: true,
        hasSaleBadge: true
    },
    {
        id: 6,
        name: "Fancy Product 2",
        price: "$120.00 - $280.00",
        discount: "",
        img: "//unsplash.it/456/306",
        note: 0,
        hasCartBtn: true,
        hasSaleBadge: false
    },
    {
        id: 7,
        name: "Special Item 2",
        price: "$18.00",
        discount: "$20.00",
        img: "//unsplash.it/457/307",
        note: 3,
        hasCartBtn: true,
        hasSaleBadge: true
    },
    {
        id: 8,
        name: "Popular Item 2",
        price: "$45.00",
        discount: "",
        img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        note: 4,
        hasCartBtn: true,
        hasSaleBadge: false
    }
]

// composant fonctionnelle pour afficher le navbar menu
function NavMenu() {
    return <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#">
                    Logo Shop
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        All Products
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Popular Items
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        New Arrivals
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex">
                        <button className="btn btn-outline-primary" type="submit">
                            <i className="bi-cart-fill me-1"></i> Mon panier
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </React.Fragment>
}

// composant fonctionnelle pour afficher le header
function Header() {
    return <React.Fragment>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">
                        With this shop hompeage template
                    </p>
                </div>
            </div>
        </header>
    </React.Fragment>
}

// note comprise entre 0 et 5
function ProductStart({note, productId}) {
    const startTab = [...Array(note)]
    return startTab.map((elt, i) => {
        return <div className="bi-star-fill" key={i}></div>
    })
}

// composant de classe pour afficher un seul produit
class ProductView extends React.Component {
    render() {
        return <React.Fragment>
            <div className="col mb-5">
                <div className="card h-100">
                    {/** Sale badge */}
                    {
                        this.props.product.hasSaleBadge ?
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>
                            Sale
                        </div>
                        :
                        ''
                    }

                    {/** product image */}
                    <img className="card-img-top" src={ this.props.product.img } alt="..." />
                    
                    {/** Product details */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">
                                { this.props.product.name }
                            </h5>

                            <div className="d-flex justify-content-center small text-warning mb-2" id={"productStartId"+this.props.product.id}>
                                <ProductStart note={this.props.product.note} productId={this.props.product.id} />
                            </div>

                            <span className="text-muted text-decoration-line-through">
                                { this.props.product.discount }
                            </span>
                            { this.props.product.price }
                        </div>
                    </div>

                    {/** Product actions */}
                    {
                        this.props.product.hasCartBtn ?
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <a className="btn btn-outline-dark mt-auto" href="#">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </React.Fragment>
    }
}

// composant de classe pour lister tous les produits
class ProductList extends React.Component {
    render() {
        // console.log(products)
        return <React.Fragment>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        products.map((item, index) => {
                            return <ProductView
                                key={index}
                                product={item}
                            />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    }
}

// composant fonctionnelle pour afficher le header
function Footer() {
    const date = new Date()
    return <React.Fragment>
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website {date.getFullYear()}</p>
            </div>
        </footer>
    </React.Fragment>
}

// composant assembleur
function MyShop() {
    return <React.Fragment>
        <NavMenu />

        <Header />

        <ProductList />

        <Footer />
    </React.Fragment>
}

// le rendu DOM (nouvelle version supporter par react > 17)
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<MyShop />);

// ancienne version
// ReactDOM.render(
//     <MyShop />,
//     document.querySelector("#app")
// );
