import { useState, useEffect } from "react";
import DemoCounter from "./DemoCounter";
import CryptoDashboard from "./CryptoDashboard";

export default function ShowcaseContent() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection for active section
  useEffect(() => {
    const sections = ["whisky", "crypto", "counter"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { id: 1, name: "Premium Whisky", price: 75, img: "/images/islay-smoke.avif" },
    { id: 2, name: "Single Malt", price: 120, img: "/images/highland-reserve.avif" },
    { id: 3, name: "Limited Edition Gin", price: 95, img: "/images/speyside-gold.avif" },
  ];

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setToastVisible(true);a
    setTimeout(() => setToastVisible(false), 2000);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-12">

      {/* Whisky Shop */}
      <div id="whisky" className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 relative">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Whisky Shop Simulation</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {products.map((p) => (
            <div key={p.id} className={`border rounded p-4 flex flex-col justify-between border-gray-300 dark:border-gray-600 ${activeSection === "whisky" ? "shadow-lg" : ""}`}>
              <img src={p.img} alt={p.name} className="w-full h-32 object-cover rounded mb-2" />
              <h5 className="font-semibold">{p.name}</h5>
              <p>£{p.price}</p>
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Floating Cart */}
        <div
          className="fixed top-24 right-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded shadow-lg cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        >
          Cart ({cartItems.length})
          {showCart && (
            <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              {cartItems.length === 0 ? <p>No items in cart</p> : (
                <>
                  <ul className="space-y-1">
                    {cartItems.map((item, idx) => (
                      <li key={idx}>{item.name} - £{item.price}</li>
                    ))}
                  </ul>
                  <p className="mt-2 font-semibold">Total: £{total}</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Toast Notification */}
        {toastVisible && (
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-bounce">
            Item added to cart!
          </div>
        )}
      </div>

    </section>
  );
}
