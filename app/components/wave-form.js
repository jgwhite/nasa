import Component from '@glimmer/component';

export default class extends Component {
  get d() {
    const quality = 1000;
    const inc = 1 / quality;
    const extent = Math.PI * 3;
    const t = 0.5;
    const d = [`M 0,${t}`];
    const f = x => t + Math.sin(x * extent) * t * 0.95;
    
    for (let x = 0, y = t; x <= 1; x += inc, y = f(x)) {
      d.push(`L ${x},${y}`);
    }

    return d.join(' ');
  }
}