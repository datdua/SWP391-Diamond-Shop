import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { getAllClarity, getAllColor, getAllCaratSize, getDiamondPriceByCaratSize } from '../../api/DiamondPriceAPI';
import './TablePrice.css';

const DiamondPriceTable = () => {
    const [diamondPrices, setDiamondPrices] = useState({});
    const [caratSizes, setCaratSizes] = useState([]);
    const [clarityLevels, setClarityLevels] = useState([]);
    const [colours, setColours] = useState([]);

    useEffect(() => {
        const fetchStaticData = async () => {
            const clarityData = await getAllClarity();
            const colorData = await getAllColor();
            const caratSizeData = await getAllCaratSize();
            setClarityLevels(clarityData);
            setColours(colorData);
            setCaratSizes(caratSizeData.map(size => size.toString())); // Assuming the API returns BigDecimal, convert to string if necessary
        };

        fetchStaticData();
    }, []);

    useEffect(() => {
        const fetchPrices = async () => {
            const prices = {};
            for (let size of caratSizes) {
                const data = await getDiamondPriceByCaratSize(parseFloat(size)); // Convert back to number if necessary
                prices[size] = data;
            }
            setDiamondPrices(prices);
        };

        if (caratSizes.length > 0) {
            fetchPrices();
        }
    }, [caratSizes]);

    if (Object.keys(diamondPrices).length === 0 || caratSizes.length === 0 || clarityLevels.length === 0 || colours.length === 0) {
        return <div>Loading...</div>;
    }

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