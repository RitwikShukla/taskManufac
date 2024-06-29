import React, { useEffect, useState } from 'react';
import { Table, Container, Loader } from '@mantine/core';
import { fetchAgricultureData } from './services/dataService';

const App: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchAgricultureData();
            setData(fetchedData);
            setLoading(false);
        };

        getData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    const headers = Object.keys(data[0]);

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {headers.map((header) => (
                                <td key={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default App;
