import './Offer.css'
import boy from '../../assets/image/boy.png'
import boy2 from '../../assets/image/boy2.png'
const Offer = () => {
    return(
        <div className="main-Offer">
    <img src={boy} className="main-banner" alt="main-banner"/>
    <img src={boy2} className="main-banner2" alt="main-banner2"/>
    <p1 className="main-text">Get 50%  Off on <br/>Selected categories</p1>
        </div>
    )
}
export default Offer