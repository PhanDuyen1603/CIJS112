import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { Select, Tooltip } from 'antd';
import { Store } from '../../store';
import { useContext } from 'react';
import translate from '../../store/dicts';

const Lang = () => {
    const store = useContext(Store);
    console.log(store);
    const langItems = [
        {
            value: 'EN',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='US' /><span>US. English</span></div>
        },
        {
            value: 'VI',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='VN' /><span>VN. Vietnamese</span></div>
        },

    ]
    return (
        <div className='changeLanguage float-right'>
            <Tooltip title={translate[store.lang.value]['A11']}>
                {/* {translate[store.lang.value]['A11']} */}
                <Select
                    defaultValue={'EN'}
                    value={'EN'}
                    onChange={(value) => {
                        store.lang.handle(value);
                    }}
                    options={langItems}
                />
            </Tooltip>
        </div>
    )
}

export default Lang;