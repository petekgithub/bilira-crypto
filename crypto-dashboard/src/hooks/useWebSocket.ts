// frontend/src/hooks/useWebSocket.ts

import { useState, useEffect } from "react";

export const useWebSocket = (url: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return data;
};
