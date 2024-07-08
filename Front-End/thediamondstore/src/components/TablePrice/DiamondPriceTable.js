import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { getDiamondPriceByCaratSize } from '../../api/DiamondPriceAPI';
import './TablePrice.css';

const caratSizes = [0.43, 0.5, 0.6, 1.6, 2.0, 2.3, 3.6, 3.9, 4.1, 4.5, 5.3, 10.2 ]; 

const DiamondPriceTable = () => {
    const [diamondPrices, setDiamondPrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            const prices = {};
            for (let size of caratSizes) {
                const data = await getDiamondPriceByCaratSize(size);
                prices[size] = data;
            }
            setDiamondPrices(prices);
        };
        fetchPrices();
    }, []);

    const clarityLevels = ["IF", "VVS1", "VVS2", "VS1", "VS2"];
    const colours = ["D", "F", "J", "E"];

    if (Object.keys(diamondPrices).length === 0) return <div>Loading...</div>;

    return (
        <div className="tablePriceWrapper">
            <Typography variant="h4" component="div" className="mainTitle">
                Bảng Giá Kim Cương
            </Typography>
            <Typography variant="body1" component="div" className="description">
                Chào mừng quý khách đến với bảng giá kim cương của chúng tôi. Dưới đây là thông tin chi tiết về giá kim cương theo từng kích thước carat, màu sắc và độ trong. Chúng tôi hy vọng quý khách sẽ tìm thấy những viên kim cương ưng ý.
            </Typography>
            {caratSizes.map(caratSize => (
                <TableContainer component={Paper} className="tablePriceContainer" key={caratSize}>
                    <Typography variant="h6" component="div" className="tablePriceTypography">
                        Giá Kim Cương với {caratSize} ly
                    </Typography>
                    <Table aria-label="diamond prices table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className="headerPriceCell">{caratSize}</TableCell>
                                {clarityLevels.map(clarity => (
                                    <TableCell key={clarity} align="center" className="headerPriceCell">{clarity}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {colours.map(color => (
                                <TableRow key={color}>
                                    <TableCell component="th" scope="row" align="center" className="bodyPriceCell">{color}</TableCell>
                                    {clarityLevels.map(clarity => (
                                        <TableCell key={clarity} align="center" className="bodyPriceCell">
                                            {diamondPrices[caratSize] && diamondPrices[caratSize][color] && diamondPrices[caratSize][color][clarity]
                                                ? diamondPrices[caratSize][color][clarity].toLocaleString()
                                                : '-'}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </div>
    );
};

export default DiamondPriceTable;
