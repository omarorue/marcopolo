{
    let miForm = SEL('miFormulario')
    let claveValor = {}
    claveValor['codPais'] = 'chkCodPais'
    claveValor['inpNombre'] = 'chkNombre'
    claveValor['codCuit'] = 'chkCodCuit'

    SEL('inpNombre').setCustomValidity('Sin el required')
    SEL('codPais').setCustomValidity('Debe tener los tres caracteres')
    SEL('codCuit').setCustomValidity('Debe ingresar un cuit con el formato 99-99999999-9')
    miForm.addEventListener('submit', e => {
        e.preventDefault()
        //console.log("Es valido: " + SEL('inpNombre').checkValidity())
        //console.log("Es valido: " + SEL('codPais').checkValidity())
        miForm.checkValidity()
    })

    SEL('inpNombre').addEventListener('input', e => {
        if (e.target.value.length == 0) {
            SEL(claveValor['inpNombre']).className = 'iconito'
            e.target.setCustomValidity('Al menos un caracter ponele !!!')
        }
        else {
            SEL(claveValor['inpNombre']).className = 'noIconito'
            e.target.setCustomValidity('')
        }
    })

    SEL('codPais').addEventListener('input', e => {
        /* ALTERNATIVA
        SEL(claveValor.codPais).className =
            (e.target.value.length == 0) ? 'iconito' : 'noIconito'

        SEL(claveValor.codPais).className =
        (e.target.value.length != 3) ? 'iconito' : 'noIconito'
        */

        if (e.target.value.length == 3) {
            SEL(claveValor.codPais).className = 'noIconito'
            e.target.setCustomValidity('')
        }
        else {
            SEL(claveValor.codPais).className = 'iconito'
            e.target.setCustomValidity('EL LARGO DEL CODIGO DE PAIS DEBE SER 3 DIG')
        }
    })

    SEL('codCuit').addEventListener('input', e => {

        let validarCuit = cuitValidator(e.target.value)
        if (validarCuit) {
            SEL(claveValor['codCuit']).className = 'noIconito'
            e.target.setCustomValidity('')
        }
        else {
            SEL(claveValor['codCuit']).className = 'Iconito'
            e.target.setCustomValidity('Debe ingresar un cuit con el formato 99-99999999-9')
        }
    })


}

