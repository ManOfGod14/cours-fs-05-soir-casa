/**
 * les composants
 */
// création d'un composant en utilisant une fonction
function ComposantFn({name, children}) {
    return <div>
        <h1>Création des composants simple avec React</h1>
        <h4>Bonjour {name}, {children}</h4>
    </div>
}

// ReactDOM.render(
//     <ComposantFn name="Maliki">comment allez-vous ?</ComposantFn>,
//     document.querySelector("#app")
// )

// création d'un composant en utilsant une classe
class ComposantClass extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }

    render() {
        // console.log(this.props)
        return <React.Fragment>
            <h1>Création des composants simple avec React</h1>
            <h4>Bonjour {this.props.name}</h4>
        </React.Fragment>
    }
}

// ReactDOM.render(
//     <ComposantClass name="Maliki" />,
//     document.querySelector("#app")
// )

/**
 * les états en reaact (state)
 * le cycle de vie d'un composant
 */
class Salutation extends React.Component {
    render() {
        return <h4>Bonjour {this.props.name}</h4>
    }
}

class Horloge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()} // etat actulle de la date
        this.timer = null // timer va permet de stocker le changement d'état
    }

    // componentDidMount: permet de déterminer quand un composant a été monté (montage d'un composant)
    componentDidMount() {
        // la méthode bind : créé une nouvelle fonction à chaque fois que le composant est monté/affiché
        this.timer = window.setInterval(this.changerEtat.bind(this), 1000)
    }

    // componentWillUnmount: permet de déterminer quand un composant a été démonté (supprimé)
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    // création d'une méthode permettant de changer l'état
    changerEtat() {
        // setState : permet de changer l'état
        this.setState({date: new Date()})
    }

    // render
    render() {
        // const date = new Date()
        return <div>
            <span>Date/Heure actuelle : </span>
            <span>{ this.state.date.toLocaleDateString() }</span>
            <span> </span>
            <span>{ this.state.date.toLocaleTimeString() }</span>
        </div>
    }
}

/**
 * exo : incrementer un nombre à partir d'une valeur intiale
 */
class Incrementation extends React.Component {
    static defaultProps = {
        debut: 0,
        pas: 1
    }

    constructor(props) {
        super(props)
        this.state = {cpt: props.debut}
        this.compteur = null
    }

    // montage du composant
    componentDidMount() {
        this.compteur = window.setInterval(this.incrementer.bind(this), 1000)
    }

    // démontage du composant
    componentWillUnmount() {
        window.clearInterval(this.compteur)
    }

    incrementer() {
        this.setState((state, props) => {
            return { cpt: state.cpt + props.pas }
        })
    }

    render() {
        return <div>Incrementation : {this.state.cpt}</div>
    }
}

/**
 * les évènements
 */
class IncrementationManuel extends React.Component {
    static defaultProps = {
        debut: 0,
        pas: 1,
        btnColor: "btn btn-primary"
    }

    constructor(props) {
        super(props)
        this.state = {cpt: props.debut}
    }

    incrementer() {
        this.setState((state, props) => {
            return { cpt: state.cpt + props.pas }
        })
    }

    render() {
        return <div>
            <span>Incrementation : {this.state.cpt}</span>
            <span> </span>
            <button className={this.props.btnColor} onClick={this.incrementer.bind(this)}>
                Incrémenter
            </button>
        </div>
    }
}

class IncrementationToggleBtn extends React.Component {
    static defaultProps = {
        debut: 0,
        pas: 1,
        btnColor: "btn btn-primary"
    }

    constructor(props) {
        super(props)
        this.state = {
            valeur: props.debut,
            compteur: null
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        window.clearInterval(this.state.compteur)
    }

    incrementer() {
        this.setState((state, props) => {
            return { valeur: state.valeur + props.pas }
        })
    }

    render() {
        return <div>
            <span>Incrementation : {this.state.valeur}</span>
            <button>Stop</button>
        </div>
    }
}

// composant assembleur
function MyHomePage() {
    return <React.Fragment>
        <div className={"container py-5"}>
            <h1>Création des composants simple avec React</h1>

            <Salutation name="Maliki" />
            <Salutation name="Youness" />
            <Salutation name="Nabil" />
            <Salutation name="Mohcine" />

            <br />
            <Horloge />

            <br />
            <Incrementation />
            <Incrementation debut={10} pas={2} />
            <Incrementation debut={100} pas={10} />

            <br />
            <h3>Gestion des évènements</h3>
            <IncrementationManuel debut={1000} pas={100} btnColor="btn btn-primary btn-sm" />
        </div>
    </React.Fragment>
}

// le document final (DOM)
ReactDOM.render(
    <MyHomePage />,
    document.querySelector("#app")
)