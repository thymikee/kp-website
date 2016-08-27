const classNames = {
  root: '.js-rotator',
  item: '.js-rotator__item',
  final: '.js-rotator__final',
}

const TIMEOUT = 400; //time in ms between each rotation

class Rotator {
  constructor() {
    this.rotator = document.querySelector(classNames.root);

    if (!this.rotator) { return; }

    this.rotatorItems = this.rotator.querySelectorAll(classNames.item);
    this.rotatorFinal = this.rotator.querySelector(classNames.final);
    this.initRotator();
  }

  initRotator() {
    const [min, max] = [0, this.rotatorItems.length];
    const initial = min;

    this.autoRotate(initial, min, max);
  }

  autoRotate(current, start, stop) {
    this.deactivate(this.rotatorItems[current - 1]);
    this.activate(this.rotatorItems[current]);

    if (current === stop) {
      this.activate(this.rotatorFinal);
      return;
    }

    setTimeout(this.autoRotate.bind(this, current + 1, start, stop), TIMEOUT);
  }

  activate(node) {
    node && node.classList.add('is-active');
  }

  deactivate(node) {
    node && node.classList.remove('is-active');
  }
}

export default Rotator;
