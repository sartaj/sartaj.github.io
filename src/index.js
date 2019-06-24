import model from '../data/index.js'
import view from './view'
import intent from './intent.js'
import style from './style'

intent()

const CONTAINER_ID = 'container'
const div = document.createElement('div')
div.setAttribute('id', CONTAINER_ID)
document.body.appendChild(div)
document.title = 'Sartaj'


const css = document.createElement('style')
css.innerHTML = style()
document.querySelector('head').appendChild(css)

const $container = document.getElementById(CONTAINER_ID)
$container.innerHTML = view(model)


// let style = document.createElement('link')
// style.rel = 'stylesheet'
// style.href = 'http://localhost:8080/index.css'

