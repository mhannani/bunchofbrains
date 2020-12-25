import React from 'react';
import { func, string } from 'prop-types';

const Toggler = ({toggleTheme, checked})=>{
        return(
            <div className="theme-switch-wrapper mt-3 mx-3">
                <label className="theme-switch" htmlFor="checkbox">

                    <input type="checkbox" id="checkbox" onChange={toggleTheme} checked={checked}/>
                    <div className="slider round d-flex justify-content-center align-items-center">
                        <div className={'logoNightMode'}>
                                    <span role={'img'} aria-label={'moon'}>
                                        🌜
                                    </span>
                        </div>
                        <div className={'logoLightMode'}>
                                    <span role={'img'} aria-label={'sun'}>
                                        🌞
                                    </span>
                        </div>
                    </div>
                </label>
            </div>
        )
}

Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggler