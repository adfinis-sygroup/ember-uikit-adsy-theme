import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | uk adsy sidebar', function() {
  setupComponentTest('uk-adsy-sidebar', {
    integration: true
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-sidebar}}
    //     template content
    //   {{/uk-adsy-sidebar}}
    // `);

    this.render(hbs`{{uk-adsy-sidebar}}`)
    expect(this.$()).to.have.length(1)
  })
})
