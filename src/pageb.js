import * as _ from 'lodash'
require('./modulec')

import(/* webpackChunkName: 'subpageb' */ './subpageb').then(function () { })
console.log(_.VERSION)

export default 'pageb'
