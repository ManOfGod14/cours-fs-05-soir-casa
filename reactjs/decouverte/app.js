/**
 * les composants
 */

// liste des pays
const COUNTRIES = [
    {id: 1, name: "Togo", phoneCode: "228"},
    {id: 2, name: "Maroc", phoneCode: "212"},
    {id: 3, name: "France", phoneCode: "33"},
    {id: 4, name: "Canada", phoneCode: "1"},
    {id: 5, name: "USA", phoneCode: "1"}
]

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
        hasBtn: false
    }

    constructor(props) {
        super(props)
        this.state = {
            valeur: props.debut,
            compteur: null
        }

        this.btnToggle = this.btnToggle.bind(this)
        this.btnReset = this.btnReset.bind(this)
    }

    componentDidMount() {
        this.btnStart()
    }

    componentWillUnmount() {
        window.clearInterval(this.state.compteur)
    }

    incrementer() {
        this.setState((state, props) => {
            return { valeur: state.valeur + props.pas }
        })
    }

    btnStart() {
        window.clearInterval(this.state.compteur)
        this.setState({
            compteur: window.setInterval(this.incrementer.bind(this), 1000)
        })
    }

    btnStop() {
        window.clearInterval(this.state.compteur)
        this.setState({
            compteur: null
        })
    }

    btnToggle() {
        return this.state.compteur ? this.btnStop() : this.btnStart()
    }

    btnLabel() {
        return this.state.compteur ? <span>Stop</span> : <span>Start</span>
    }

    btnReset() {
        this.setState((state, props) => {
            return {valeur: props.debut}
        })
    }

    btnBgColor() {
        return this.state.compteur ? "btn btn-danger" : "btn btn-success"
    }

    render() {
        return <div>
            <span>Incrementation : {this.state.valeur}</span>
            {
                (this.props.hasBtn)
                ?
                <React.Fragment>
                    <span> </span>
                    <button className={this.btnBgColor()} onClick={this.btnToggle}>
                        {this.btnLabel()}
                    </button>
                    <button className={"btn btn-warning ms-2"} onClick={this.btnReset}>
                        Reset
                    </button>
                </React.Fragment>
                :
                ''
            }
        </div>
    }
}

/**
 * les formulaires avec react
 */
// formulaire controlé par React
class FormulaireTest1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "Maliki",
            lastname: "",
            email: "",
            country: "",
            message: "",
            cgu: false,
        }

        this.handleSingleChange = this.handleSingleChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // méthode permettant de modifier un seul champ
    handleSingleChange(e) {
        // console.log(e)
        this.setState({firstname: e.target.value})
    }

    // méthode permettant de modifier tous les champs d'une manière dynamique
    handleChange(e) {
        const fieldName = e.target.name
        const fieldType = e.target.type

        this.setState({
            [fieldName]: (fieldType === 'checkbox') ? e.target.checked : e.target.value
        })

    }

    render() {
        return <React.Fragment>
            <form>
                <div className={"form-group mb-3"}>
                    <label htmlFor="firstname" className="form-label">Prénom :</label>
                    <input type="text" name="firstname" id="firstname" 
                        className="form-control"
                        // defaultValue="Maliki" : je veux le controler mais par défaut je veux une valeur
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                </div>

                <div className={"form-group mb-3"}>
                    <label htmlFor="lastname" className="form-label">Nom de famille :</label>
                    <input type="text" name="lastname" id="lastname" 
                        className="form-control"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                </div>

                <div className={"form-group mb-3"}>
                    <label htmlFor="email" className="form-label">Adresse e-mail :</label>
                    <input type="email" name="email" id="email" 
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>

                <div className={"form-group mb-3"}>
                    <label htmlFor="country" className="form-label">Votre pays :</label>
                    <select name="country" id="country" 
                        className="form-select"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Sélectionnez le pays --</option>
                        <option value="1">Togo</option>
                        <option value="2">Maroc</option>
                        <option value="3">France</option>
                        <option value="4">Canada</option>
                        <option value="5">USA</option>
                    </select>
                </div>

                <div className={"form-group mb-3"}>
                    <label htmlFor="message" className="form-label">Message :</label>
                    <textarea name="message" id="message" 
                        className="form-control"
                        value={this.state.message}
                        onChange={this.handleChange}
                    ></textarea>
                </div>

                <div className={"form-check mb-3"}>
                    <input type="checkbox" name="cgu" id="cgu" 
                        className="form-check-input"
                        checked={this.state.cgu}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="cgu" className="form-check-label">
                        Condition générale d'utilisation
                    </label>
                </div>


                <div className="mb-3">
                    {JSON.stringify(this.state)}
                </div>
            </form>
        </React.Fragment>
    }
}

// composant fonctionnel d'un champ input
function InputField({name, type, value, onChange, children}) {
    return <div className={"form-group mb-3"}>
        <label htmlFor={name} className="form-label">
            {children}
        </label>
        <input type={type} name={name} id={name} 
            className="form-control"
            value={value}
            onChange={onChange}
        />
    </div>
}

// composant de classe d'un champ input
class InputField2 extends React.Component {
    render() {
        const {name, type, value, onChange, label} = this.props
        
        return <div className={"form-group mb-3"}>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input type={type} name={name} id={name} 
                className="form-control"
                value={value}
                onChange={onChange}
            />
        </div>
    }
}

// composant fonctionnel d'un champ checkbox
function CheckboxField({name, checked, onChange, label}) {
    return <div className={"form-check mb-3"}>
        <input type="checkbox" name={name} id={name} 
            className="form-check-input"
            checked={checked}
            onChange={onChange}
        />
        <label htmlFor={name} className="form-check-label">
            {label}
        </label>
    </div>
}

//
function SelectField({name, onChange, label, defaultOption, dataOptions}) {
    const htmlDefaultOption = (defaultOption) ? 
    <option value="">{defaultOption}</option> : ''

    return <div className={"form-group mb-3"}>
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <select name={name} id={name} 
            className="form-select"
            onChange={onChange}
        >
            {htmlDefaultOption}

            {
                dataOptions.map((item, index) => {
                    return <option key={"opt_"+index} value={item.id}>{item.name + " (+" +item.phoneCode+ ")"}</option>
                })
            }
        </select>
    </div>
}

class FormulaireTest2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            message: "",
            cgu: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handleChange(e) {
        const fieldName = e.target.name
        const fieldType = e.target.type

        this.setState({
            [fieldName]: (fieldType === 'checkbox') ? e.target.checked : e.target.value
        })
    }

    handelSubmit(e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            message: "",
            cgu: false,
        })
        console.log(data)
    }

    render() {
        return <React.Fragment>
            <form onSubmit={this.handelSubmit}>
                <InputField name={"firstname"}
                    value={this.state.firstname}
                    onChange={this.handleChange}
                >Prénom :</InputField>

                <InputField2 name={"lastname"}
                    type={"text"}
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    label={"Nom de famille :"}
                />

                <InputField2 name={"email"}
                    value={this.state.email}
                    onChange={this.handleChange}
                    label={"Adresse e-mail :"}
                />

                <SelectField name={"country"}
                    label={"Votre pays :"}
                    onChange={this.handleChange}
                    defaultOption={"-- Sélectionnez un pays --"}
                    dataOptions={COUNTRIES}
                />

                <CheckboxField name="cgu"
                    checked={this.state.cgu}
                    label={"Condition générale d'utilisation"}
                    onChange={this.handleChange}
                />
                
                <div className="mb-3">
                    {/* <button className="btn btn-primary">
                        Envoyer
                    </button> */}

                    <ColumnTwoRow
                        left={<Button type={"primary"} size={"sm"}>Envoyer</Button>}
                        right={<Button type={"danger"} size={"sm"}>Supprimer</Button>}
                    />
                </div>

                <div className="mb-3">
                    {JSON.stringify(this.state)}
                </div>
            </form>
        </React.Fragment>
    }
}

/***
 * la composition des composant vs Héritage des composant
 */
function Button({type, size, children}) {
    const typeClass = (type) ? " btn-"+ type : "btn-secondary"
    const sizeClass = (size) ? "btn-"+ size : "btn-md"
    const className = "btn "+ typeClass +" "+ sizeClass

    return <button className={className}>{children}</button>
}

function WarningButton({children}) {
    return <Button type="warning">{children}</Button>
}

function ColumnTwoRow({left, right}) {
    return <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            {left}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            {right}
        </div>
    </div>
}

/**
 * Les composants pur
 */

// composant pur fonctionnelle
function ComposantFn1() {
    return <div>
        <h3>Composant pur fonctionnelle</h3>
    </div>
}
const PureComposantFn1 = React.memo(ComposantFn1)

// composant pur de classe
class PureComponsantClass extends React.PureComponent {
    render() {
        return <div>
            <h3>Composant pur de classe</h3>
        </div>
    }
}

/**
 * Les refs et DOM
 * On utilise les refs qu'en deux cas de situations :
 * 1 - Lorsqu'on est en face des champs non controlés
 * 2 - Lorsqu'on a besoin d'utiliser les éléments externes à React (ex: librairie jQuery)
 */
class ComposantRef extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        // this.inputElt = null;
        this.inputElt = React.createRef();
    }

    handleClick(e) {
        // console.log(this.inputElt)
        console.log(this.inputElt.current.value)
    }

    render() {
        return <React.Fragment>
            {/* <div className="form-group mb-3">
                <label htmlFor="test">Champ test</label>
                <input type="text" id="test"
                    className="form-control" 
                    // ref={(elt) => this.inputElt = elt}
                    ref={this.inputElt}
                />
            </div> */}

            {/* montage du composant FieldRef1 */}
            {/* <FieldRef1 label={"Champ test"} ref={this.inputElt} /> */}

            <FieldRef2Forwrad forwardRef={this.inputElt} label="Champ test2" />

            <button className="btn btn-primary btn-sm" 
                onClick={this.handleClick}
            >
                Get field value
            </button>
        </React.Fragment>
    }
}

// composant fonctionnelle qui doit recevoir une ref
const FieldRef1 = React.forwardRef(function(props, ref) {
    return <div className="form-group mb-3">
        <label htmlFor="test">{props.label}</label>
        <input type="text" id="test"
            className="form-control" 
            ref={ref}
        />
    </div>
});

// composant de class qui doit recevoir une ref
class FieldRef2 extends React.Component {
    render() {
        return <div className="form-group mb-3">
            <label htmlFor="test">{this.props.label}</label>
            <input type="text" id="test"
                className="form-control" 
                ref={this.props.forwardRef}
            />
        </div>
    }
}
const FieldRef2Forwrad = React.forwardRef((props, ref) => {
    return <FieldRef2 forwardRef={ref} {...props} />
})

// composant assembleur : montange
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
            <br />
            <IncrementationToggleBtn debut={10000} pas={1000} hasBtn={true} />

            <br />
            <h3>Gestion des formulaires avec react</h3>
            {/* <FormulaireTest1 /> */}
            <FormulaireTest2 />

            <br />
            <h3>Les composants pur</h3>
            <PureComposantFn1 />
            <PureComponsantClass />

            <br />
            <h3>Les refs et DOM</h3>
            <ComposantRef />
        </div>
    </React.Fragment>
}

// le document final (DOM)
const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<MyHomePage />)

// ReactDOM.render(
//     <MyHomePage />,
//     document.querySelector("#app")
// )