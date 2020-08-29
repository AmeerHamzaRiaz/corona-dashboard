// Store
const initialState = {
  cardData: [{
    title: "Total Infections",
    totalCount: "",
    newCount: "",
    trendPercentage: ""
  },
  {
    title: "Active Infections",
    totalCount: "",
    newCount: "",
    trendPercentage: ""
  },
  {
    title: "Recovered",
    totalCount: "",
    newCount: "",
    trendPercentage: ""
  },
  {
    title: "Deaths",
    totalCount: "",
    newCount: "",
    trendPercentage: ""
  }],

  doughnutChartData: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#009688', '#4CAF50', '#FFEB3B', '#FF9800' ],
        hoverBackgroundColor: ['#ef5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#26A69A', '#66BB6A', '#FFEE58', '#FFA726']
      }
    ]
  },

  pieChartData: {
    labels: ['Active Infections', 'Recovered', 'Deaths'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#ffc107', '#00e676', '#f44336'],
        hoverBackgroundColor: ['#ffc107', '#00e676', '#f44336']
      }
    ]
  },

  lineChartData: {
    labels: [],
    datasets: [
      {
        label: 'Active',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(255, 193, 7, 0.4)',
        borderColor: 'rgb(255, 193, 7, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(255, 193, 7, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(255, 193, 7, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Confirmed',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(33, 150, 243, 0.4)',
        borderColor: 'rgb(33, 150, 243)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(33, 150, 243)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(33, 150, 243)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Deaths',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(244, 67, 54,0.4)',
        borderColor: 'rgb(244, 67, 54)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(244, 67, 54)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(244, 67, 54)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Recovered',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(0, 230, 118,0.4)',
        borderColor: 'rgb(0, 230, 118)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(0, 230, 118)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 230, 118)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }
    ]
  },

  // countries
  gridTableData: [],

  globalData: {},

  selectedCountry: '',

  isLoading: true,
}

export default initialState;