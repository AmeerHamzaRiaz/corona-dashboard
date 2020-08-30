import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Header from '../components/Header';
import StatCardList from '../components/StatCardList';
import PieChart from '../components/PieChart';
import Grid from '@material-ui/core/Grid';
import GridTable from '../components/GridTable';
import MenuBar from '../components/MenuBar';
import Container from '@material-ui/core/Container';
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import Footer from '../components/Footer';

const MainPage = () => {
    const { cardData, selectedCountry, gridTableData, pieChartData, setDoughnutChartData, doughnutChartData, setGridTableData, setData, setGlobalData } = useContext(GlobalContext);

    const fetchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.covid19api.com/summary", requestOptions)
            .then(response => response.json())
            .then(result => {
                setGlobalData(result.Global)
                setData(result.Global);
                setGridTableData(result.Countries)
                let countries = result.Countries;
                countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
                setDoughnutChartData(countries.slice(0, 10));
            })
            .catch(error => console.error('error', error));
    }

    useEffect(fetchData, []);

    return (
        <div>
            <MenuBar gridTableData={gridTableData} />
            <Container fixed>
                <Header countryName={selectedCountry} />
                <StatCardList cardData={cardData} />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Grid item xs={12} md={12}>
                        <PieChart dataSet={pieChartData} />
                        </Grid>
                        {
                            !selectedCountry &&
                            <Grid item xs={12} md={12} style={{ paddingTop: '20px' }}>
                                <DoughnutChart dataSet={doughnutChartData} />
                            </Grid>
                        }

                    </Grid>

                    <Grid item xs={12} md={6}>
                        {
                            selectedCountry ? <LineChart countryName={selectedCountry} /> : <GridTable gridTableData={gridTableData} />

                        }
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default MainPage;
