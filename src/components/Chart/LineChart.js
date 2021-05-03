import DespesaService from '../../services/despesas'
import ReceitaService from '../../services/receita'
import moment from 'moment'
//import formatMoney from './FormatMoney'



export const planetChartData = {
  type: 'line',
  data: {
    labels: ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      { // one line graph
        label: 'Valor de Despesas',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
         
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Valor de Receita',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(71, 183,132,.5)',
          // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Receita Líquida',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255,255,0,.5)',
          // Green
        ],
        borderColor: [
          '#FFD700',
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }
          label += "R$" + tooltipItem.yLabel.toLocaleString();
          return label;
        }
      }
    },

    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 2,
        }
      }]
    }
  }
}



async function returnValorDespesa() {
  const result = await DespesaService.readDate(`${moment().format("YYYY")}-01-01`, `${moment().format("YYYY")}-12-31`)
  result.data.result.map(el => {
    planetChartData.data.datasets[0].data[parseInt(moment(el.data).format("MM")) - 1] = (el.valor + parseFloat(planetChartData.data.datasets[0].data[parseInt(moment(el.data).format("MM")) - 1]))
  })

}

function returnValorReceitaLiquida() {
  const arrDespesas = planetChartData.data.datasets[0].data;
  const arrReceita = planetChartData.data.datasets[1].data;
  arrDespesas.map((el, index) => {
    let valorLiquido = 0;
    valorLiquido = arrReceita[index] - el
    planetChartData.data.datasets[2].data[index] = valorLiquido
  })
}

async function returnValorReceita() {
  const result = await ReceitaService.readDate(`${moment().format("YYYY")}-01-01`, `${moment().format("YYYY")}-12-31`)
  result.data.result.map(el => {
    planetChartData.data.datasets[1].data[parseInt(moment(el.data).format("MM")) - 1] = (el.valor + parseFloat(planetChartData.data.datasets[1].data[parseInt(moment(el.data).format("MM")) - 1]))
  })

}
returnValorDespesa().then(() => {
  returnValorReceita().then(() => {
    returnValorReceitaLiquida();
  })
});


export default planetChartData;