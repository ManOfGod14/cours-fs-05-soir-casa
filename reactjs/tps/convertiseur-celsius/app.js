/**
 * TP 2
 */

// les unitiés
const unityNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

// (100 °F − 32) × 5/9 = 37,778 °C
function convertToCelsius(valeurFahrenheit) { 
    return (valeurFahrenheit - 32) * 5 / 9
}

// (100 °C × 9/5) + 32 = 212 °F
function convertToFahrenheit(valeurCelsius) { 
    return (valeurCelsius * 9 / 5) + 32
}

function tryConvert(temp, convertFn) {
    const val = parseFloat(temp)
    if(Number.isNaN(val)) {
        return ''
    }
    return (Math.round(convertFn(val) * 100) / 100).toString()
}

// affiche un message si l'eau bout ou pas
function AlertMessage({celsius}) {
    if(celsius >= 100) {
        return <div className="alert alert-success">L'eau bout !</div>
    }
    return <div className="alert alert-danger">L'eau ne bout pas !</div>
}

// pour afficher les input des températures
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const name = "unity_"+ this.props.unity
        const unityName = unityNames[this.props.unity]

        const {temperature} = this.props

        return <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">
                Saisissez la température (en {unityName})
            </label>
            <input type="text" className="form-control" 
                name={name}
                value={temperature}
                onChange={this.handleChange}
            />
        </div>
    }
}

// pour éffectuer des calcul
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            unity: 'c'
        }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        this.setState({
            temperature,
            unity: 'c'
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            temperature,
            unity: 'f'
        })
    }

    render() {
        const {temperature, unity} = this.state

        // conversion 
        // const celsiusVal = (unity === 'c') ? temperature : convertToCelsius(temperature)
        // const fahrenheitVal = (unity === 'f') ? temperature : convertToFahrenheit(temperature)
        
        const celsiusVal = (unity === 'c') ? temperature : tryConvert(temperature, convertToCelsius)
        const fahrenheitVal = (unity === 'f') ? temperature : tryConvert(temperature, convertToFahrenheit)

        return <React.Fragment>
            <TemperatureInput 
                unity="c"
                temperature={celsiusVal}
                onTemperatureChange={this.handleCelsiusChange}
            />

            <TemperatureInput 
                unity="f"
                temperature={fahrenheitVal}
                onTemperatureChange={this.handleFahrenheitChange}
            />

            <hr />

            <AlertMessage celsius={parseFloat(celsiusVal)} />
        </React.Fragment>
    }
}

// rendu 
function MonConvertisseur() {
    return <React.Fragment>
        <div className="container py-4">
            <h1 className="text-center">TP : Convertisseur Celsius & Fahrenheit</h1>
            
            <hr />
            
            <Calculator />
        </div>
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<MonConvertisseur />)