import React, {Fragment} from 'react';
import Planet from './planet';

const Planets = () => {
    return(
        <Fragment>
            <h3>Planets List</h3>
            <hr/>
            <Planet name="Mercúrio"
                    description = "Aute mollit dolore eu excepteur. Excepteur minim culpa mollit sit fugiat voluptate sint elit est velit esse deserunt. Ut velit nulla deserunt aute commodo anim enim. Ullamco occaecat enim dolor labore amet nulla quis nisi magna nisi. Ad irure laborum duis reprehenderit dolore non mollit excepteur in Lorem. Anim officia qui voluptate quis exercitation commodo irure laboris ut ipsum ut eiusmod ullamco reprehenderit. Exercitation irure tempor eiusmod commodo laboris."
                    link = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
            />
            <Planet name="Plutão"
                    description="Do anim culpa ipsum quis cupidatat sunt ullamco ad. Tempor reprehenderit mollit culpa occaecat mollit non pariatur quis aliquip quis voluptate ex ea elit. Laboris do velit aliquip laborum et veniam exercitation in commodo dolor quis nulla pariatur laboris."
                    link = "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg"
            />
        </Fragment>
    );
}

export default Planets;