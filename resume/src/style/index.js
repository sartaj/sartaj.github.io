import reset from './reset'
import grid from './grid'
import structure from './structure'
import typography from './typography'
import skin from './skin'

import page from './components/page'
import topSection from './components/top-section'
import cover from './components/cover'
import points from './components/points'
import professional from './components/professional'
import personal from './components/personal'

const fonts = `
@import 'https://fonts.googleapis.com/css?family=Bitter|Playfair+Display:400,700|Roboto:300,400,400i,700';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
`

const style = () => `
${fonts}

${reset}

${grid}

${structure}

${typography}

${skin}

${page}

${topSection}

${cover}

${points}

${professional}

${personal}

`

export default style
