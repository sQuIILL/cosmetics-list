import React from 'react'

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
      {TYPES.map(cat => (
        <div key={cat.name} style={{position:"relative"}}>
          <div style={{ display: 'flex', justifyContent: "center" }}>
            <input key={cat.name} type="radio" name="categories"
              onClick={(e) => serveTypesAndCategory(e, null)} />
            {cat.name}
          </div>
          {noCategories.includes(cat.name) ?
            <></> :
            <>
              <input id="check" type="checkbox" for="check" className='checkboxForDropdown' />
              <ul style={{ listStyle: "none" }} className="test">
                {cat.subCategories.map(subCat => (
                  <li
                    key={subCat}
                    style={{ display: 'flex', justifyContent: "flex-start" }}
                  >
                    <input key={cat.name} type="radio" name="categories"
                      onClick={(e) => serveTypesAndCategory(e, cat)} />
                    {subCat}
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
