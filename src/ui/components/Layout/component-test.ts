import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: basic-app', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Layout />`);
    let text = this.containerElement.querySelector('.glimmer-text').textContent;
    let number = this.containerElement.querySelector('.number').textContent;
    assert.equal(text, 'Glimmer Redux 2');
    assert.equal(number, 'number 2');

    this.containerElement.querySelector('.glimmer-update').click();
    let done = assert.async();
    setTimeout(() => {
      text = this.containerElement.querySelector('.glimmer-text').textContent;
      number = this.containerElement.querySelector('.number').textContent;
      assert.equal(text, 'Glimmer Redux 5');
      assert.equal(number, 'number 5');
      done();
    }, 10);
  });
});
