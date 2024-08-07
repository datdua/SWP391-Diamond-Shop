import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import Modal from "react-modal";
import { getPage, filterJewelryByGender } from "../../api/JewelryAPI"; // Import the functions

// Set the app element for accessibility
Modal.setAppElement("#root"); // Ensure this matches your app's root element

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000", // Ensure the modal appears on top
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Dim background
    zIndex: "1000", // Ensure the overlay appears on top
  },
};

function ProductPage() {
  const location = useLocation();
  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [jewelryPage, setJewelryPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get("search");

    if (productName) {
      // If a product name is provided in the search query, fetch only the products with that name
      axios
        .get(
          `https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io//api/jewelry/searchName?name=${encodeURIComponent(
            productName
          )}`
        )
        .then((response) => {
          setJewelry(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      // Fetch all products if no specific product name is provided in the search query
      axios
        .get(
          "https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io/api/jewelry"
        )
        .then((response) => {
          setJewelry(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [location.search]);

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedItem(null);
  }

  const handlePriceFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(parseInt(value));
    } else if (name === "maxPrice") {
      setMaxPrice(parseInt(value));
    }
  };

  const handleFilterConfirm = () => {
    // Call API with filtered price range
    axios
      .get(
        `https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io//api/jewelry/search/filter?maxjewelryEntryPrice=${maxPrice}&minjewelryEntryPrice=${minPrice}`
      )
      .then((response) => {
        setJewelry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const fetchJewelryPage = async () => {
      try {
        const pageData = await getPage(currentPage);
        setJewelryPage(pageData);
      } catch (error) {
        console.error("Error fetching jewelry page:", error);
      }
    };

    fetchJewelryPage();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenderFilter = (gender) => {
    setLoading(true); // Set loading state while fetching data
    axios
      .get(
        `https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io/api/jewelry/search/filter?gender=${gender}`
      )
      .then((response) => {
        setJewelry(response.data);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Set loading state to false in case of error
      });
  };
  const handleSizeFilter = () => {
    if (size) {
      setLoading(true);
      axios
        .get(
          `https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io/api/jewelry/search/filter?size=${size}`
        )
        .then((response) => {
          setJewelry(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleSizeInputChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <div id="wrapper" className="wrapper">
        <div
          className="tm-breadcrumb-area tm-padding-section bg-grey"
          style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}
        >
          <div className="container">
            <div className="tm-breadcrumb">
              <h2>Products</h2>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
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
                      <button
                        data-view="grid"
                        className="active"
                        aria-label="Grid View"
                      >
                        <i className="ion-android-apps"></i>
                      </button>
                      <button data-view="list" aria-label="List View">
                        <i className="ion-android-menu"></i>
                      </button>
                    </div>
                    <p className="tm-shop-countview">
                      Showing 1 to 9 of {jewelry.length}{" "}
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
                      ) : (
                        jewelry.map((item) => (
                          <div
                            key={item.jewelryID}
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50"
                          >
                            <div className="tm-product">
                              <div className="tm-product-topside">
                                <div className="tm-product-images">
                                  <img
                                    src={item.jewelryImage}
                                    alt={item.jewelryName}
                                  />
                                </div>
                                <ul className="tm-product-actions">
                                  <li>
                                    <a href="#">
                                      <i className="ion-android-cart"></i> Add
                                      to cart
                                    </a>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => openModal(item)}
                                      aria-label="Product Quickview"
                                    >
                                      <i className="ion-eye"></i>
                                    </button>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ion-heart"></i>
                                    </a>
                                  </li>
                                </ul>
                                <div className="tm-product-badges">
                                  <span className="tm-product-badges-new">
                                    New
                                  </span>
                                  <span className="tm-product-badges-sale">
                                    Sale
                                  </span>
                                </div>
                              </div>
                              <div className="tm-product-bottomside">
                                <h6 className="tm-product-title">
                                  <Link
                                    to={`/product-detail/${item.jewelryID}`}
                                  >
                                    {item.jewelryName}
                                  </Link>
                                </h6>
                                <div className="tm-ratingbox">
                                  <span className="is-active">
                                    <i className="ion-android-star-outline"></i>
                                  </span>
                                  <span className="is-active">
                                    <i className="ion-android-star-outline"></i>
                                  </span>
                                  <span className="is-active">
                                    <i className="ion-android-star-outline"></i>
                                  </span>
                                  <span className="is-active">
                                    <i className="ion-android-star-outline"></i>
                                  </span>
                                  <span>
                                    <i className="ion-android-star-outline"></i>
                                  </span>
                                </div>
                                <span className="tm-product-price">
                                  {item.jewelryEntryPrice.toLocaleString()} VND
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    {selectedItem && (
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customModalStyles}
                        contentLabel="Product Quickview"
                      >
                        <div className="modal-content">
                          <div className="img-container">
                            <img
                              src={selectedItem.jewelryImage}
                              alt={selectedItem.jewelryName}
                            />
                          </div>
                          <button className="close-button" onClick={closeModal}>
                            Close
                          </button>
                          <div className="content-container">
                            <h2>{selectedItem.jewelryName}</h2>
                            <p>{selectedItem.jewelryDescription}</p>
                            <p>Diamond ID: {selectedItem.diamondID}</p>
                            <p>Size: {selectedItem.size}</p>
                            <p>Gender: {selectedItem.gender}</p>
                            <span>
                              {selectedItem.jewelryEntryPrice.toLocaleString()}{" "}
                              VND
                            </span>
                          </div>
                        </div>
                      </Modal>
                    )}

                    <div className="tm-pagination mt-50">
                      {jewelryPage &&
                        jewelryPage.totalPages &&
                        Array.from(
                          { length: jewelryPage.totalPages },
                          (_, index) => (
                            <button
                              key={index}
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          )
                        )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-12">
                  <div className="widgets">
                    <div className="single-widget widget-categories">
                      <h6 className="widget-title">Categories</h6>
                      <ul>
                        <li>
                          <Link to="/product">Jewelry</Link>
                        </li>
                        <li>
                          <Link to="/product">Diamond</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="single-widget widget-categories">
                      <h6 className="widget-title">Gender</h6>
                      <ul>
                        <li>
                          <button onClick={() => handleGenderFilter("male")}>
                            Male
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleGenderFilter("female")}>
                            Female
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="single-widget widget-pricefilter">
                      <h6 className="widget-title">Filter by Price</h6>
                      <div className="widget-pricefilter-inner">
                        <div>
                          <label htmlFor="minPrice">Min Price:</label>
                          <input
                            type="number"
                            id="minPrice"
                            name="minPrice"
                            value={minPrice}
                            onChange={handlePriceFilterChange}
                          />
                          <label htmlFor="maxPrice">Max Price:</label>
                          <input
                            type="number"
                            id="maxPrice"
                            name="maxPrice"
                            value={maxPrice}
                            onChange={handlePriceFilterChange}
                          />
                        </div>
                        <button onClick={handleFilterConfirm}>
                          Apply Filter
                        </button>
                      </div>
                    </div>
                    <div className="single-widget widget-sizes">
                      <h6 className="widget-title">Filter by Size</h6>
                      <div className="widget-sizes-inner">
                        <label htmlFor="sizeInput">Size:</label>
                        <input
                          type="text"
                          id="sizeInput"
                          name="sizeInput"
                          value={size}
                          onChange={handleSizeInputChange}
                        />
                        <button onClick={handleSizeFilter}>Apply Filter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div id="tm-product-quickview">
          {" "}
          {/* Ensure this div is outside the main content */}
          {/* Modal content goes here */}
        </div>
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default ProductPage;
