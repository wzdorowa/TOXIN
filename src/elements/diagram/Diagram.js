class Diagram {
  constructor(element) {
    this.diagram = element;

    this._findElement();
    this._bindEventListeners();
  }

  _findElement() {
    this.diagramItems = this.diagram.querySelectorAll('.js-diagram__item');

    this.segments = this.diagram.querySelectorAll('.js-diagram__image-circle');
    this.votesValue = this.diagram.querySelector('.js-diagram__number');
  }

  _handleSegmentMouseOver = (segment) => {
    const { votes } = segment.dataset;
    segment.setAttribute('stroke-width', '7');
    this.votesValue.innerHTML = votes;
  }

  _handleSegmentMouseOut = (segment) => {
    const { total } = segment.dataset;
    segment.setAttribute('stroke-width', '4');
    this.votesValue.innerHTML = total;
  }

  _bindEventListeners() {
    this.diagramItems.forEach((item) => {
      const { impression } = item.dataset;
      let segment;
      this.segments.forEach(element => {
        const impressionSegment = element.dataset.impression;
        if (impressionSegment === impression) {
          segment = element;
        }
        return null;
      });
  
      if (segment !== undefined) {
        item.addEventListener('mouseover', this._handleSegmentMouseOver.bind(this, segment));
        item.addEventListener('mouseout', this._handleSegmentMouseOut.bind(this, segment));
      }
    });
  }
}

const diagrams = document.querySelectorAll('.js-diagram');

diagrams.forEach((diagram) => {
  new Diagram(diagram);
});
