class Diagram {
  constructor(element) {
    this.item = element;

    this._findElement();
    this._bindEventListeners();
  }

  _findElement() {
    this.segments = document.querySelectorAll('.js-diagram__image-circle');
    this.votesValue = document.querySelector('.js-diagram__number');
  }

  _bindEventListeners() {
    const { impression } = this.item.dataset;
    let segment;
    this.segments.forEach(element => {
      const impressionSegment = element.dataset.impression;
      if (impressionSegment === impression) {
        segment = element;
      }
      return null;
    });

    if (segment !== undefined) {
      this.item.addEventListener('mouseover', () => {
        const { votes } = segment.dataset;
        segment.setAttribute('stroke-width', '7');
        this.votesValue.innerHTML = votes;
      });
      this.item.addEventListener('mouseout', () => {
        const { total } = segment.dataset;
        segment.setAttribute('stroke-width', '4');
        this.votesValue.innerHTML = total;
      });
    }
  }
}

const diagram = document.querySelector('.js-diagram');
if (diagram !== null) {
  const items = diagram.querySelectorAll('.js-diagram__item');
  items.forEach(item => {
    new Diagram(item);
  });
}
