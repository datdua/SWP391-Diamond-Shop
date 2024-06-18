import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
import { getAllDiamond, getPage, searchDiamondByColor } from "../../api/DiamondAPI";
import "./ProductPage.css";

Modal.setAppElement('#root'); // Ensure this matches your app's root element
=======

import { getAllDiamond, getPage, searchDiamond } from "../../api/DiamondAPI";

Modal.setAppElement('#root');
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
        zIndex: '1000', // Ensure the modal appears on top
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dim background
        zIndex: '1000', // Ensure the overlay appears on top
=======
        zIndex: '1000',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: '1000',
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
    },
};

function DiamondPage() {
    const [diamonds, setDiamonds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
    const [searchColor, setSearchColor] = useState('');
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const colors = ['All', 'E', 'J', 'F', 'D'];
=======
    const [filters, setFilters] = useState({});
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const colors = ['All', 'E', 'J', 'F', 'D'];
    const cuts = ['All', 'Excellent'];
    const clarities = ['All', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3'];
    const shapes = ['All', 'Radiant', 'Around', 'Pear'];
    const origins = ['All', 'GIA']

>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
    function openModal(item) {
        setSelectedItem(item);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedItem(null);
    }

    const fetchDiamonds = async (page) => {
        setLoading(true);
        try {
            const data = await getPage(page);
            setDiamonds(data.content);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDiamonds(currentPage);
    }, [currentPage]);

    const handlePageChange = async (pageNumber) => {
        setCurrentPage(pageNumber);
        setLoading(true);
        try {
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
          let data;
          if (searchColor === 'All') {
            data = await getAllDiamond();
          } else {
            data = await searchDiamondByColor(searchColor);
          }
          // Get the results for the new page
          const results = data.slice((pageNumber - 1) * resultsPerPage, pageNumber * resultsPerPage);
          setDiamonds(results);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
=======
            const data = filters.color === 'All' && filters.cut === 'All' && filters.shape === 'All' && filters.clarity === 'All' && filters.origin === 'All'
                ? await getAllDiamond()
                : await searchDiamond(filters);
            const results = data.slice((pageNumber - 1) * resultsPerPage, pageNumber * resultsPerPage);
            setDiamonds(results);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const results = params.get('results');
        if (results) {
            setSearchResults(JSON.parse(results));
        } else {
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
            setSearchResults([]); // Reset search results when no search is performed
        }
    }, [location]);
    const resultsPerPage = 9;
    const handleColorSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let data;
            if (searchColor === 'All') {
                data = await getAllDiamond();
            } else {
                data = await searchDiamondByColor(searchColor);
            }
            // Calculate the total number of pages
            const totalPages = Math.ceil(data.length / resultsPerPage);
            setTotalPages(totalPages);
            // Get the results for the current page
=======
            setSearchResults([]);
        }
    }, [location]);

    const resultsPerPage = 9;

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const filtersToUse = { ...filters };
            if (filters.cut === 'All') {
                delete filtersToUse.cut;
            }
            if (filters.color === 'All') {
                delete filtersToUse.color;
            }
            if (filters.clarity === 'All') {
                delete filtersToUse.clarity;
            }
            if (filters.shape === 'All') {
                delete filtersToUse.shape;
            }
            if (filters.origin === 'All') {
                delete filtersToUse.origin;
            }
            const data = await searchDiamond(filtersToUse);
            const totalPages = Math.ceil(data.length / resultsPerPage);
            setTotalPages(totalPages);
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
            const results = data.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);
            setDiamonds(results);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <div id="wrapper" className="wrapper">
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Products</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <main className="page-content">
                    <div className="tm-products-area tm-section tm-padding-section bg-white">
                        <div className="container">
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
                            <div className="row" style={{marginRight:"-308px"}}>
=======
                            <div className="row">
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
                                <div className="col-lg-9 col-12">
                                    <form action="#" className="tm-shop-header">
                                        <div className="tm-shop-productview">
                                            <span>View:</span>
                                            <button data-view="grid" className="active" aria-label="Grid View"><i className="ion-android-apps"></i></button>
                                            <button data-view="list" aria-label="List View"><i className="ion-android-menu"></i></button>
                                        </div>
                                        <p className="tm-shop-countview">Showing 1 to {diamonds.length} of {diamonds.length}</p>
                                        <label htmlFor="mySelect">My Select:</label>
                                        <select id="mySelect">
                                            <option value="default">Default Sorting</option>
                                            <option value="name">Name A-Z</option>
                                            <option value="date">Date</option>
                                            <option value="best">Best Sellers</option>
                                            <option value="trending">Trending</option>
                                        </select>
                                    </form>
                                    <div className="tm-shop-products">
                                        <div className="row mt-30-reverse">
                                            {loading ? (
                                                <div>Loading...</div>
                                            ) : error ? (
                                                <div>Error: {error}</div>
                                            ) : (
                                                diamonds.map((item) => (
                                                    <div key={item.diamondID} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                        <div className="tm-product">
                                                            <div className="tm-product-topside">
                                                                <div className="tm-product-images">
                                                                    <img src={item.diamondImage} alt={item.diamondName} />
                                                                </div>
                                                                <ul className="tm-product-actions">
                                                                    {showNotification && <p>Please log in to add items to the cart.</p>}
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
=======
                                                                    <li><Link to={`/product-detail/diamond/${item.diamondID}`}><i className="ion-android-cart"></i> Add to cart</Link></li>
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
                                                                    <li><button onClick={() => openModal(item)} aria-label="Product Quickview"><i className="ion-eye"></i></button></li>
                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                </ul>
                                                                <div className="tm-product-badges">
                                                                    <span className="tm-product-badges-new">New</span>
                                                                    <span className="tm-product-badges-sale">Sale</span>
                                                                </div>
                                                            </div>
                                                            <div className="tm-product-bottomside">
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
                                                                <h6 className="tm-product-title"><Link to={`/product-detail/${item.diamondID}`}>{item.diamondName}</Link></h6>
                                                                <div className="tm-ratingbox">
=======
                                                                <h6 className="tm-product-title"><Link to={`/product-detail/diamond/${item.diamondID}`}>{item.diamondName}</Link></h6>
                                                                <div className="tm-rating">
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span><i className="ion-android-star-outline"></i></span>
                                                                </div>
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
                                                                <span className="tm-product-price">{item.diamondPrice.toLocaleString()} VND</span>
=======
                                                                <span className="tm-product-price">{item.diamondEntryPrice ? item.diamondEntryPrice.toLocaleString() : 'N/A'} VND</span>
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                    <div className="tm-pagination mt-50">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="widgets">
                                    <div className="single-widget widget-categories">
                                        <h6 className="widget-title">Categories</h6>
                                        <ul>
                                            <li><Link to="/trangsuc">Trang Sức</Link></li>
                                            <li><Link to="/kimcuong">Kim Cương</Link></li>
                                        </ul>
                                    </div>
                                    <div className="single-widget widget-colorfilter">
                                        <h6 className="widget-title">Filter by Color</h6>
                                        <form onSubmit={handleColorSearch}>
                                            <select
                                                id="colorSearch"
                                                value={searchColor}
                                                onChange={(e) => setSearchColor(e.target.value)}
                                            >
                                                {colors.map((color) => (
                                                    <option key={color} value={color}>
                                                        {color}
                                                    </option>
                                                ))}
                                            </select>
=======
                                <div className="col-lg-3 col-12">
                                    <div className="widgets">
                                        <div className="single-widget widget-categories">
                                            <h6 className="widget-title">Categories</h6>
                                            <ul>
                                                <li><Link to="/trangsuc">Trang Sức</Link></li>
                                                <li><Link to="/kimcuong">Kim Cương</Link></li>
                                            </ul>
                                        </div>
                                        <form onSubmit={handleSearch}>
                                            <div className="single-widget widget-colorfilter">
                                                <h6 className="widget-title">Filter by Color
                                                </h6>
                                                <select
                                                    id="colorSearch"
                                                    value={filters.color || 'All'}
                                                    onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                                                >
                                                    {colors.map((color) => (
                                                        <option key={color} value={color}>
                                                            {color}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="single-widget widget-cutfilter">
                                                <h6 className="widget-title">Filter by Cut</h6>
                                                <select
                                                    id="cutSearch"
                                                    value={filters.cut || 'All'}
                                                    onChange={(e) => setFilters({ ...filters, cut: e.target.value })}
                                                >
                                                    {cuts.map((cut) => (
                                                        <option key={cut} value={cut}>
                                                            {cut}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="single-widget widget-pricefilter">
                                                <h6 className="widget-title">Filter by Price</h6>
                                                <div>
                                                    <label>Min Diamond Price:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.minDiamondPrice || ''}
                                                        onChange={(e) => setFilters({ ...filters, minDiamondPrice: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label>Max Diamond Price:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.maxDiamondPrice || ''}
                                                        onChange={(e) => setFilters({ ...filters, maxDiamondPrice: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="single-widget widget-caratsizefilter">
                                                <h6 className="widget-title">Filter by Carat Size</h6>
                                                <div>
                                                    <label>Min Carat Size:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.minCaratSize || ''}
                                                        onChange={(e) => setFilters({ ...filters, minCaratSize: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label>Max Carat Size:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.maxCaratSize || ''}
                                                        onChange={(e) => setFilters({ ...filters, maxCaratSize: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="single-widget widget-caratweightfilter">
                                                <h6 className="widget-title">Filter by Carat Weight</h6>
                                                <div>
                                                    <label>Min Carat Weight:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.minCaratWeight || ''}
                                                        onChange={(e) => setFilters({ ...filters, minCaratWeight: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label>Max Carat Weight:</label>
                                                    <input
                                                        type="number"
                                                        value={filters.maxCaratWeight || ''}
                                                        onChange={(e) => setFilters({ ...filters, maxCaratWeight: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="single-widget widget-clarityfilter">
                                                <h6 className="widget-title">Filter by Clarity</h6>
                                                <select
                                                    id="claritySearch"
                                                    value={filters.clarity || 'All'}
                                                    onChange={(e) => setFilters({ ...filters, clarity: e.target.value })}
                                                >
                                                    {clarities.map((clarity) => (
                                                        <option key={clarity} value={clarity}>
                                                            {clarity}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="single-widget widget-shapefilter">
                                                <h6 className="widget-title">Filter by Shape</h6>
                                                <select
                                                    id="shapeSearch"
                                                    value={filters.shape || 'All'}
                                                    onChange={(e) => setFilters({ ...filters, shape: e.target.value })}
                                                >
                                                    {shapes.map((shape) => (
                                                        <option key={shape} value={shape}>
                                                            {shape}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="single-widget widget-originfilter">
                                                <h6 className="widget-title">Filter by Origin</h6>
                                                <select
                                                    id="originSearch"
                                                    value={filters.origin || 'All'}
                                                    onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
                                                >
                                                    {origins.map((origin) => (
                                                        <option key={origin} value={origin}>
                                                            {origin}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
                                            <button type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customModalStyles}
                contentLabel="Product Modal"
            >
                {selectedItem && (
                    <div>
                        <h2>{selectedItem.diamondName}</h2>
                        <img src={selectedItem.diamondImage} alt={selectedItem.diamondName} />
                        <p>Price: {selectedItem.diamondPrice.toLocaleString()} VND</p>
                        <p>Carat Size: {selectedItem.carat_size}</p>
                        <p>Color: {selectedItem.color}</p>
                        <p>Cut: {selectedItem.cut}</p>
                        <p>Clarity: {selectedItem.clarity}</p>
                        <p>Shape: {selectedItem.shape}</p>
                        <p>Origin: {selectedItem.origin}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
=======
            <div id="tm-product-quickview">
                {selectedItem && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customModalStyles}
                        contentLabel="Product Modal"
                    >
                        <div className="modal-content">
                            <div className="img-container">
                                <img src={selectedItem.diamondImage} alt={selectedItem.diamondName} />
                            </div>
                            <button className="close-button" onClick={closeModal}>Close</button>
                            <div className="content-container">
                                <h2>{selectedItem.diamondName}</h2>
                                <p>Price: {selectedItem.diamondEntryPrice ? selectedItem.diamondEntryPrice.toLocaleString() : 'N/A'} VND</p>
                                <p>Carat Size: {selectedItem.carat_size}</p>
                                <p>Color: {selectedItem.color}</p>
                                <p>Cut: {selectedItem.cut}</p>
                                <p>Clarity: {selectedItem.clarity}</p>
                                <p>Shape: {selectedItem.shape}</p>
                                <p>Origin: {selectedItem.origin}</p>
                            </div>
                        </div>
                    </Modal>
                )}

            </div>
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
        </div>
    );
}

<<<<<<< HEAD:Front-End/thediamondstore-demo-firebase/src/pages/Product/DiamondPage.js

export default DiamondPage;
=======
export default DiamondPage;
>>>>>>> main:Front-End/thediamondstore/src/pages/Product/DiamondPage.js
