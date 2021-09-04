class Diagram {
  constructor(element) {
    this.item = element;

    this.findElement();
    this.bindEventListeners();
  }

  findElement() {
    this.segments = document.querySelectorAll('.room-details__donut-segment');
    this.votesValue = document.querySelector('.diagram__number');
  }

  bindEventListeners() {
    const { color } = this.item.dataset;
    let segment;
    this.segments.forEach(element => {
      const colorSegment = element.dataset.color;
      if (colorSegment === color) {
        segment = element;
      }
      return null;
    });

    if (segment !== undefined) {
      this.item.addEventListener('mouseover', () => {
        const { votes } = segment.dataset;
        segment.setAttribute('stroke-width', '2');
        this.votesValue.innerHTML = votes;
      });
      this.item.addEventListener('mouseout', () => {
        const { total } = segment.dataset;
        segment.setAttribute('stroke-width', '1');
        this.votesValue.innerHTML = total;
      });
    }
  }
}

const diagram = document.querySelector('.diagram');
const items = diagram.querySelectorAll('.bulleted-list__item');
items.forEach(item => {
  new Diagram(item);
});
