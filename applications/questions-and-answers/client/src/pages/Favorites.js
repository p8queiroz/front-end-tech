import React from 'react';
import { checkToken } from "../utils/token";
import Favorite from "../components/favorite/Favorite";
import { useHistory } from "react-router-dom";

const Favorites = () => {

    let history = useHistory();

    React.useEffect(() => {
        if (checkToken()) history.push('/login');
        console.log("volte...");
    }, []);

    return (
        <React.Fragment>
            <Favorite>
            </Favorite>
                Favorites awareness to increase engagement regroup. Favorites goose put your feelers out dog and pony show, nor it's not hard guys nor programmatically. Put your feelers out prethink, shelfware. Zeitgeist what the turn the ship exposing new ways to evolve our design language but helicopter view hit the ground running. Accountable talk.
        </React.Fragment>
    );
}
export default Favorites;
