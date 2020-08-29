import React, { createContext, useReducer } from 'react';
import logger from 'use-reducer-logger';
import Reducer from './Reducer';
import Store from './Store'

// Context
export const GlobalContext = createContext(Store);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(process.env.NODE_ENV === 'development' ? logger(Reducer) : Reducer, Store);

// Actions
    const setCardData = (data) => {
        dispatch({
            type: 'SET_CARDS_DATA',
            payload: data,
        });
    }

    const setPieChartData = (data) => {
        dispatch({
            type: 'SET_PIE_CHART_DATA',
            payload: data
        });
    }

    const setDoughnutChartData = (data) => {
        dispatch({
            type: 'SET_DOUGHNUT_CHART_DATA',
            payload: data
        });
    }

    const setGridTableData = (data) => {
        dispatch({
            type: 'SET_GRID_TABLE_DATA',
            payload: data
        });
    }

    const setSelectedCountry = (data) => {
        dispatch({
            type: 'SET_SELECTED_COUNTRY',
            payload: data
        });
    }

    const setGlobalData = (data) => {
        dispatch({
            type: 'SET_GLOBAL_DATA',
            payload: data
        });
    }

    const setLineChartData = (data) => {
        dispatch({
            type: 'SET_LINE_CHART_DATA',
            payload: data
        });
    }


    const calculatePercentage = (newStat, totalStat) => (((newStat / totalStat) * 100).toFixed(2));

    const setData = (data) => {
        let { TotalConfirmed, NewConfirmed, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths } = data;

        let ActiveTotal = TotalConfirmed - TotalRecovered - TotalDeaths;
        let NewActive = NewConfirmed - NewRecovered - NewDeaths;

        let newData = state.cardData;
        newData[0].totalCount = TotalConfirmed;
        newData[0].newCount = NewConfirmed;
        newData[0].trendPercentage = calculatePercentage(NewConfirmed, TotalConfirmed);

        newData[1].totalCount = Math.abs(ActiveTotal);
        newData[1].newCount = Math.abs(NewActive);
        newData[1].trendPercentage = Math.abs(calculatePercentage(NewActive, ActiveTotal));

        newData[2].totalCount = TotalRecovered;
        newData[2].newCount = NewRecovered;
        newData[2].trendPercentage = calculatePercentage(NewRecovered, TotalRecovered);

        newData[3].totalCount = TotalDeaths;
        newData[3].newCount = NewDeaths;
        newData[3].trendPercentage = calculatePercentage(NewDeaths, TotalDeaths);

        setCardData(newData)

        let chartData = [ActiveTotal, TotalRecovered, TotalDeaths];
        setPieChartData(chartData)
    }

    return (<GlobalContext.Provider
        value={{
            cardData: state.cardData,
            pieChartData: state.pieChartData,
            doughnutChartData: state.doughnutChartData,
            gridTableData: state.gridTableData,
            selectedCountry: state.selectedCountry,
            isLoading: state.isLoading,
            globalData: state.globalData,
            lineChartData: state.lineChartData,
            setCardData,
            setDoughnutChartData,
            setPieChartData,
            setGridTableData,
            setSelectedCountry,
            setData,
            setGlobalData,
            setLineChartData,
        }}>
        {children}
    </GlobalContext.Provider>)
}