;(function() {
  function vendorModule() {
    'use strict'

    return {
      default: self['UIkit'],
      __esModule: true
    }
  }

  define('UIkit', [], vendorModule)
})()
