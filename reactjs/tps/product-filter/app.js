/**
 * TP
 */
const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// affichage d'une ligne de catégorie de produit
function ProductCategoryRow({category}) {
    return <tr className="table-primary text-center">
        <th colSpan="2">{category}</th>
    </tr>
}

// affichage d'une ligne d'un produit
function ProductRow({product}) {
    let productName = product.name
    let productPrice = product.price
    if(!product.stocked) {
        productName = <span className="text-danger">{product.name}</span>
        productPrice = <span className="text-danger">{product.price}</span>
    }

    return <tr>
        <td>{productName}</td>
        <td>{productPrice}</td>
    </tr>
}

// composant pour lister les produits
function ProductTableList({products, filterText, inStock}) {
    const tabs = []
    let lastCategory = null

    products.forEach((productItem, productIndex) => {
        // filtre
        if(inStock && !productItem.stocked) {
            return
        }

        if(productItem.name.indexOf(filterText) === -1) {
            return
        }

        if(productItem.category !== lastCategory) {
            lastCategory = productItem.category
            tabs.push(<ProductCategoryRow 
                key={'cat_'+productIndex}
                category={productItem.category} 
            />)
        }

        tabs.push(<ProductRow 
            key={'prod_'+productIndex}
            product={productItem}
        />)
    })

    return <React.Fragment>
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nom du produit</th>
                        <th>Prix Unitaire</th>
                    </tr>
                </thead>
                <tbody>
                    {tabs}
                </tbody>
            </table>
        </div>
    </React.Fragment>
}

// barre de filtre/recherche
class FilterBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleFilterTextChange2 = this.handleFilterTextChange2.bind(this)
        this.handleInStockChange2 = this.handleInStockChange2.bind(this)
    }

    handleFilterTextChange2(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange2(e) {
        this.props.onInStockChange(e.target.checked)
    }

    render() {
        // déstructuration 
        const {filterText, inStock} = this.props

        return <React.Fragment>
            <div className="py-3">
                <div className="form-group mb-3">
                    <input type="text" name="filterId" id="filterId" placeholder="Filtrer ..."
                        className="form-control"
                        value={filterText}
                        onChange={this.handleFilterTextChange2}
                    />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" name="stockId" id="stockId"
                        className="form-check-input"
                        checked={inStock}
                        onChange={this.handleInStockChange2}
                    />
                    <label htmlFor="stockId" className="form-check-label">
                        Produit en stock uniquement !
                    </label>
                </div>
            </div>
        </React.Fragment>
    }
}

// composant de filtre
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            inStock: false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText
        })
    }

    handleInStockChange(inStock) {
        this.setState({
            inStock
        })
    }

    render() {
        return <React.Fragment>
            {/* {JSON.stringify(this.state)} */}

            <FilterBar 
                filterText={this.state.filterText}
                inStock={this.state.inStock}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
            />

            <ProductTableList 
                products={this.props.products}
                filterText={this.state.filterText}
                inStock={this.state.inStock}
            />
        </React.Fragment>
    }
}

// affichage
function ViewPage({products}) {
    // console.log(products)

    return <React.Fragment>
        <div className="container py-5">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title text-center">
                        TP : Liste des produits & Filtre
                    </h1>
                </div>
                <div className="card-body">
                    <FilterableProductTable products={products} />
                </div>
            </div>
        </div>
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<ViewPage products={PRODUCTS} />)