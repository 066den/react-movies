import { useEffect, useState } from "react";

const Alert = (props) => {
  const { alert = "" } = props;
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlert = { text: alert, id: Math.floor(Math.random() * 100) };
    setAlerts([...alerts, newAlert]);
  }, [alert]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlerts([]);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [alerts]);

  return (
    <div className="toast-container">
      {alerts
        ? alerts.map((item) => {
            return (
              <div key={item.id} className="toast">
                {item.text}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Alert;
