import model from '../data/index.js'
import view from './view'
import intent from './intent.js'
import '../style/index.css'

intent()

const CONTAINER_ID = 'container'

const div = document.createElement('div')
div.setAttribute('id', CONTAINER_ID)
document.body.appendChild(div)
document.title = 'Sartaj'

const $container = document.getElementById(CONTAINER_ID)
$container.innerHTML = view(model)
