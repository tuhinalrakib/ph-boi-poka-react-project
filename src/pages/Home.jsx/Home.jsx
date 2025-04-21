import React from 'react';
import Banner from '../../components/Banner.jsx/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;