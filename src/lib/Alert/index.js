import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";

const Alert = () => {
  const { alerts, clearAlerts } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      clearAlerts();
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line
  }, [alerts]);

  return (
    <div className="toast-container">
      {alerts.length
        ? alerts.map((item, index) => (
            <div key={index} className="toast">
              {item}
            </div>
          ))
        : ""}
    </div>
  );
};
export default Alert;
