import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import { getAllProduct, getProductPage } from "../../api/ProductAPI"; // Ensure this API call is correct

Modal.setAppElement('#root'); // Ensure this matches your app's root element

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: '1000',
    },
};

function ProductPage() {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchProductPage = async () => {
            try {
                const response = await getProductPage(currentPage, itemsPerPage);
                console.log('API Response:', response);  // Log the entire response object

                if (!response || (!response.diamonds && !response.jewelry)) {
                    throw new Error('Invalid API response: Missing or invalid data');
                }

                const combinedProducts = [...response.diamonds, ...response.jewelry].map(item => ({
                    id: item.jewelryID || item.diamondID,
                    name: item.jewelryName || item.diamondName,
                    imageUrl: item.jewelryImage || item.diamondImage,
                    price: item.jewelryPrice || item.diamondPrice,
                    type: item.jewelryID ? 'jewelry' : 'diamond'
                }));

                setProducts(combinedProducts);
                setTotalPages(Math.ceil((response.diamondsTotalElements + response.jewelryTotalElements) / itemsPerPage));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProductPage();
    }, [currentPage]);



    function openModal(item) {
        setSelectedItem(item);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedItem(null);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div id="wrapper" className="wrapper">
                <div className="tm-breadcrumb-area tm-padding-section bg-grey">
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
                                        </div><p className="tm-shop-countview">
                                            Showing {((currentPage - 1) * itemsPerPage * 2) + 1} to {Math.min(currentPage * itemsPerPage * 2 )} of {products.length} products
                                        </p>
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
                                            ) : products.length === 0 ? (
                                                <div>No products available</div>
                                            ) : (
                                                products.map((item) => (
                                                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                                        <div className="tm-product">
                                                            <div className="tm-product-topside">
                                                                <div className="tm-product-images">
                                                                    <img src={item.imageUrl} alt={item.name} />
                                                                </div>
                                                                <ul className="tm-product-actions">
                                                                    <li><button onClick={() => openModal(item)} aria-label="Product Quickview"><i className="ion-eye"></i></button></li>
                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                </ul>
                                                                <div className="tm-product-badges">
                                                                    <span className="tm-product-badges-new">New</span>
                                                                    <span className="tm-product-badges-sale">Sale</span>
                                                                </div>
                                                            </div>
                                                            <div className="tm-product-bottomside">
                                                                <h6 className="tm-product-title"><Link to={`/product-detail/${item.id}`}>{item.name}</Link></h6>
                                                                <div className="tm-ratingbox">
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                                    <span><i className="ion-android-star-outline"></i></span>
                                                                </div>
                                                                <span className="tm-product-price">{item.price ? item.price.toLocaleString() : 'N/A'} VND</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        {/* Pagination */}
                                        <div className="tm-pagination mt-50">
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                                    {index + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-12">
                                    {/* Sidebar Widgets */}
                                    <div className="widgets">
                                        <div className="single-widget widget-categories">
                                            <h6 className="widget-title">Categories</h6>
                                            <ul>
                                                <li><Link to="/product">Jewelry</Link></li>
                                                <li><Link to="/product">Diamond</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* Modal for Product Quickview */}
                <div id="tm-product-quickview">
                    {selectedItem && (
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customModalStyles}
                            contentLabel="Product Quickview"
                        >
                            <div className="modal-content">
                                <div className="img-container">
                                    <img src={selectedItem.imageUrl} alt={selectedItem.name} />
                                </div>
                                <button className="close-button" onClick={closeModal}>Close</button>
                                <div className="content-container">
                                    <h2>{selectedItem.name}</h2>
                                    <p>{selectedItem.description}</p>
                                    <p>Product ID: {selectedItem.id}</p>
                                    {/* Assuming selectedItem has category and price */}
                                    <p>Category: {selectedItem.category}</p>
                                    <span>{selectedItem.price.toLocaleString()} VND</span>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
