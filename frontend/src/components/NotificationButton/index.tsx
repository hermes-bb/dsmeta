import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
};

function handleClic(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    toast.info("SMS Enviado com Sucesso!");
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClic(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
