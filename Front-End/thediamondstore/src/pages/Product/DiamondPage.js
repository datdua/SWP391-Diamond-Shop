import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import { getAllDiamond, getPage } from "../../api/DiamondAPI";
import "./ProductPage.css";

Modal.setAppElement('#root'); // Ensure this matches your app's root element

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000', // Ensure the modal appears on top
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dim background
        zIndex: '1000', // Ensure the overlay appears on top
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
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);

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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const results = params.get('results');
        if (results) {
            setSearchResults(JSON.parse(decodeURIComponent(results)));
        } else {
            setSearchResults([]); // Reset search results when no search is performed
        }
    }, [location]);

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
                            <div className="row">
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
                                                                    <li><button onClick={() => openModal(item)} aria-label="Product Quickview"><i className="ion-eye"></i></button></li>
                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                </ul>
                                                                <div className="tm-product-badges">
                                                                    <span className="tm-product-badges-new">New</span>
                                                                    <span className="tm-product-badges-sale">Sale</span>
                                                                </div>
                                                            </div>
                                                            <div className="tm-product-bottomside">
                                                                <h6 className="tm-product-title"><Link to={`/product-detail/${item.diamondID}`}>{item.diamondName}</Link></h6>
                                                                <div className="tm-ratingbox">
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span><i className="ion-android-star-outline"></i></span>
                                                                </div>
                                                                <span className="tm-product-price">{item.diamondPrice.toLocaleString()} VND</span>
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
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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
        </div>
    );
}


export default DiamondPage;
