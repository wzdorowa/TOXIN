class Diagram {
  constructor(element, index) {
    this.item = element;
    this.indexDiagram = index;

    this._findElement();
    this._bindEventListeners();
  }

  _findElement() {
    this.diagrams = document.querySelectorAll('.js-diagram');

    this.segments = this.diagrams[this.indexDiagram].querySelectorAll('.js-diagram__image-circle');
    this.votesValue = this.diagrams[this.indexDiagram].querySelector('.js-diagram__number');
  }

  _handleSegmentMouseover = (segment) => {
    const { votes } = segment.dataset;
    segment.setAttribute('stroke-width', '7');
    this.votesValue.innerHTML = votes;
  }

  _handleSegmentMouseoute = (segment) => {
    const { total } = segment.dataset;
    segment.setAttribute('stroke-width', '4');
    this.votesValue.innerHTML = total;
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
      this.item.addEventListener('mouseover', this._handleSegmentMouseover.bind(this, segment));
      this.item.addEventListener('mouseout', this._handleSegmentMouseoute.bind(this, segment));
    }
  }
}

const diagrams = document.querySelectorAll('.js-diagram');

diagrams.forEach((diagram, index) => {
  if (diagram !== null) {
    const items = diagrams[index].querySelectorAll('.js-diagram__item');
    items.forEach((item) => {
      new Diagram(item, index);
    });
  }
});
