import * as _ from 'lodash'
require('./modulec')

import(/* webpackChunkName: 'subpagea' */ './subpagea').then(function () {
})

import(/* webpackChunkName: 'subpageb' */ './subpageb').then(function() {})

export default 'pagea'
