import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CryptoDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCrypto() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
        );
        const json = await res.json();
        // Convert API data to {time, price} format
        const formatted = json.prices.map(item => ({
          time: new Date(item[0]).getHours() + ":00",
          price: item[1].toFixed(2)
        }));
        setData(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCrypto();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Bitcoin Price (Last 24h)</h4>
      {loading ? (
        <p className="mt-2 text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#8884d8" />
              <YAxis stroke="#8884d8" domain={['auto','auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
