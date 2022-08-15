import "./Address.css"
import AddressForm from "../AddressForm/AddressForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import NeedHelp from "../../common/NeedHelp/NeedHelp";

function Address() {
    return(
        <div className="address">
<AddressForm/>
            <PaymentDetails/>
            <NeedHelp/>
        </div>
    )
}
export default Address