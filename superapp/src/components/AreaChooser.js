import React from 'react';
import {getAreaName} from '../helpers'


class AreaChooser extends React.Component{
    render(){
        return(
            <div>
                <form className="area-choosers">
                    <h2>Please enter an area name</h2>
                    <input type="text" required placeholder="Area Name" defaultValue={getAreaName()}/>
                    <button type="submit">Choose Area</button>
                </form>
            </div>
        );
    }
}

export default AreaChooser