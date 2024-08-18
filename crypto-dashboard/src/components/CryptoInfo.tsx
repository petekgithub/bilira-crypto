import React, { Component } from "react";

interface CryptoInfoProps {
  name: string;
  iconUrl: string;
}

class CryptoInfo extends Component<CryptoInfoProps> {
  // Varsayılan ikon URL'si
  private defaultIconUrl = "https://example.com/default-icon.png";

  render() {
    const { name, iconUrl } = this.props;
    // Kripto para biriminin sembolünü ve tam adını ayırmak için string işleme
    const symbol = name.slice(0, 3).toUpperCase(); // İlk 3 karakteri sembol olarak alıyoruz
    const fullName = name.slice(3); // Geri kalan kısmı tam ad olarak alıyoruz

    return (
      <div className="flex items-center space-x-2">
        <img
          src={iconUrl || this.defaultIconUrl} // Varsayılan ikon kullanımı
          alt={`${symbol} logo`}
          className="w-6 h-6"
          onError={(e) => (e.currentTarget.src = this.defaultIconUrl)} // İkon yüklenemezse varsayılan ikona geçiş
        />
        <div>
          <div className="text-sm font-medium">
            {symbol}/USDT
          </div>
          <div className="text-xs text-gray-500">
            {fullName || "Unknown Name"}
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoInfo;
