import React from 'react'

import capitalLetter from '../../tools/firstCapitalLetter/capitalLetter';

import { TYPES } from '../../constant/types';

import "./typeFilter.css"
export default function TypesFilter({ onSelect }) {

  const noCategories = ['all', 'mascara', 'nail polish']
  function serveTypesAndCategory(e, cat) {
    const value = e.target.innerText;
    onSelect(cat === null ? null : cat.name, value);
  }

  return (
    <>
    <div style={{fontSize:'20px',fontWeight:"bold",margin:"10px 0 0"}}>
      TYPE AND <br/>CATEGORY FILTER
    </div>
      {TYPES.map((cat,i) => (
        <div key={cat.name} style={{ position: "relative",paddingLeft:"40px",margin:"10px 0" }}>
          <div style={{ display: 'flex', justifyContent: "flex-start" }}>
            <input key={cat.name} type="radio" name="categories"
              onClick={(e) => serveTypesAndCategory(e, null)} />
            {capitalLetter(cat.name)}
          </div>
          {noCategories.includes(cat.name) ?
            null :
            <>
              <input id="check" type="checkbox" className='checkboxForDropdown' />
              <ul style={{ listStyle: "none", margin: "0px 0" }} className={`test${i}`}>
                {cat.subCategories.map(subCat => (
                  <li
                    key={subCat}
                    style={{ display: 'flex', justifyContent: "flex-start",margin:"5px 0" }}
                  >
                    <input key={cat.name} type="radio" name="categories"
                      onClick={(e) => serveTypesAndCategory(e, cat)} />
                    {capitalLetter(subCat)}
                  </li>
                ))}
              </ul>
            </>
          }

        </div>
      ))}
    </>
  )
}
