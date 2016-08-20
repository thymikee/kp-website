const select = {
  root: '.js-rotator',
  item: '.js-rotator__item',
  final: '.js-rotator__final',
}

const defaultTimeout = 250;

class Rotator {
  constructor() {
    this.initRotator();
  }

  initRotator() {
    const rotator = document.querySelector(select.root);
    const rotatorItems = rotator.querySelectorAll(select.item);
    const rotatorFinal = rotator.querySelector(select.final);
    const [min, max] = [0, rotatorItems.length];
    let currentItemNo = 0;

    const autoPlay = setInterval(() => {
      if (currentItemNo - 1 >= min) {
        this.deactivate(rotatorItems[currentItemNo - 1]);
      }

      if (currentItemNo < max) {
        this.activate(rotatorItems[currentItemNo]);
      }

      if (currentItemNo === max) {
        clearInterval(autoPlay);
        this.activate(rotatorFinal);
      }

      currentItemNo++;
    }, defaultTimeout);
  }

  activate(node) {
    node.classList.add('is-active');
  }

  deactivate(node) {
    node.classList.remove('is-active');
  }
}

export default Rotator;
