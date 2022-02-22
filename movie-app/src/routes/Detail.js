import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json.data.movie);
        setLoading(false);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(id);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>{detail.title_long}</h1>
                    <img src={detail.medium_cover_image} />
                    <h3>
                        {detail.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </h3>
                    <h3>{`${detail.runtime} minutes`}</h3>
                    <p>{detail.description_full}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;
