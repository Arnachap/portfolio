import EasyPieChart from '../../node_modules/easy-pie-chart/dist/easypiechart.min.js';

const elements = document.querySelectorAll('.chart');
const colors = ['#e54d26', '#3d8fc6', '#f0db4f', '#6181b6'];

for (var i = 0; i < elements.length; i++) {
    new EasyPieChart(elements[i], {
        barColor: colors[i],
        scaleColor: false,
        lineWidth: 10,
        size: 220,
        animate: {
            duration: 3000,
            enabled: true
        }
    });
}