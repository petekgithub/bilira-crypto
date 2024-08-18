# Asset Data Dashboard

## • API Integration:

- Connect to the Binance API (or any other market API is also acceptable, you can find all online) to fetch asset data.

## • Live Data Updates:

- Implement live updates for asset data.
- Highlight price changes with colors:
  - Red for a decrease in value (flashing for one second).
  - Green for an increase in value (flashing for one second).

## • Table Display:

- Create a table to display the asset data.
- Table headers should include:
  - Name
  - Price (live data, highlight on change)
  - Market Value (Market cap) (live data)
  - 24h change (live data) (if positive, green. if negative, red. Default color otherwise.)
  - 24h sparkline chart (if positive, green. if negative, red. Default color otherwise.)

## • Real-Time Data Updates:

- To ensure real-time data updates and display price changes in green/red, consider using a `useWebSocket` hook if available.
- If real-time updates from the API are not available, use `setInterval` to periodically fetch data.
- 24 saatlik fiyat değişimini gösteren bir sparkline grafiği oluşturmak için bir grafik kütüphanesi kullanabilirsiniz. react-sparkline veya chart.js gibi kütüphaneler işinize yarayabilir.

## Recharts ve React-Sparkline Kütüphanelerinin Karşılaştırılması

- Recharts:

Daha kapsamlı ve özelleştirilebilir grafikler sağlar.
Daha fazla grafik türü sunar (örneğin, çubuk grafik, çizgi grafik, vb.).
Daha fazla yapılandırma seçeneği sunar.

- React-Sparkline:

Daha basit ve hafif bir kütüphanedir.
Yalnızca küçük grafikler için uygundur (sparkline'lar).
Kullanımı ve entegrasyonu daha basit olabilir.

![Alt text](image link)