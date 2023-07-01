import { Link } from "react-router-dom";
import {
  setFavorite,
  isFav,
  removeFavorite,
} from "./utils/localStorage.service";


const Card = ({ name, username, id }) => {
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavorite({ name, username, id });
  }
    const deleteFav = () => {
      removeFavorite(id);
  };
    const fav = isFav(id);
  
    return (

      <div className={`card`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="imagenDoctor"
      />
      <div>
          <h6>{name}</h6>
          <p>User: {username}</p>
          <p>ID: {id}</p>
           <Link to={`/dentist/${id}`}>
               <button className="detalle">Ir al detalle</button>
            </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button className="favButton" onClick={fav ? deleteFav : addFav} >Add fav 💓 </button>
    </div>
    </div>
   
  );
};

export default Card;
