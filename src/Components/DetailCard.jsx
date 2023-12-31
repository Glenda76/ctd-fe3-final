import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentist(data);
      });
  }, [id]);

  return (
    <>
    
      {dentist ? (
        <section className="dentist-Information">
       
          <h1>
            <strong> {dentist?.name}{" "}</strong>
          </h1>
            <ul>
              <li>
                <strong>ID:</strong> {dentist.id}
              </li>
              <li>
                <strong>Phone:</strong> {dentist.phone}
              </li>
              <li>
                <strong>Website:</strong> {dentist.website}
              </li>
              <li>
                <strong>Email:</strong> {dentist.email}
              </li>
            </ul>
      
        </section>
      ) : null}
    </>
  );
};

export default DetailCard;