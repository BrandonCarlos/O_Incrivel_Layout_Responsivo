export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver);  
  })

  function onMouseOver(event) {
    console.log(event);
    const tooltipBox = criarTooltipBox(this);
    this.addEventListener('mouseleave', onMouseLeave);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
 
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 10}px`;
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  }
  
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
};