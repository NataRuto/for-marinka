import image from "./flowers.jpg";

function Flower() {
    return(
        <div className="container">
          <img src={image} alt="flower" width="250px"/>
        </div>
    )
}

export default Flower;
