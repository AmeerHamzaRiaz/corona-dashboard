export default (state, action) => {

    switch (action.type) {

        case 'SET_GRID_TABLE_DATA': {
            return {
                ...state,
                gridTableData: [...action.payload]
            }
        }

        case 'SET_PIE_CHART_DATA': {
            let newChartData = state.pieChartData;
            newChartData.datasets[0].data = [...action.payload];

            return {
                ...state,
                chartData: newChartData
            }
        }

        case 'SET_DOUGHNUT_CHART_DATA': {
            let newDoughnutChartData = state.doughnutChartData;
            let data = [...action.payload];
            let labels = [];
            let values = [];

            for (let i = 0; i < data.length; i++) {
                labels.push(data[i].Country)
                values.push(data[i].TotalConfirmed)
            }

            newDoughnutChartData.labels = [...labels];
            newDoughnutChartData.datasets[0].data = [...values];

            return {
                ...state,
                doughnutChartData: newDoughnutChartData
            }
        }

        case 'SET_CARDS_DATA':
            return {
                ...state,
                cardData: [...action.payload],
                isLoading: false,
            }

        case 'SET_SELECTED_COUNTRY':
            return {
                ...state,
                selectedCountry: action.payload
            }

        case 'SET_LINE_CHART_DATA': {

            let newLineChartData = state.lineChartData;
            let data = [...action.payload];

            let Active = [];
            let Confirmed = [];
            let Deaths = [];
            let Recovered = [];
            let Dates = [];

            for (let i = 0; i < data.length; i++) {
                Active.push(data[i].Active)
                Confirmed.push(data[i].Confirmed)
                Deaths.push(data[i].Deaths)
                Recovered.push(data[i].Recovered)
                Dates.push(new Date(data[i].Date).toLocaleDateString())
            }

            newLineChartData.labels = [...Dates]
            newLineChartData.datasets[0].data = [...Active]
            newLineChartData.datasets[1].data = [...Confirmed]
            newLineChartData.datasets[2].data = [...Deaths]
            newLineChartData.datasets[3].data = [...Recovered]

            return {
                ...state,
                lineChartData: newLineChartData
            }
        }


        case 'SET_GLOBAL_DATA':
            return {
                ...state,
                globalData: action.payload
            }

        default:
            return state;
    }
}