import React from 'react';
import S from './Popup.module.css'

const Popup = () => {

    return (
        <div className={S.Popup}>
            <div >
                Repeat
            </div>
            <div className={S.PopupItem}>
                Daily
            </div >
            <div className={S.PopupItem}>
                Monthly
            </div>
            <div className={S.PopupItem}>
               Set repeating
            </div>
        </div>
    );
};

export default Popup;