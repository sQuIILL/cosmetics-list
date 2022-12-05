import React from 'react'

import { TYPES } from '../../constant/types';

export default function TypesFilter({ onSelect }) {

  function serveTypesAndCategory(e, cat) {
    const value = e.target.innerText;
    onSelect(cat===null?null:cat.name, value);
  }

  return (
    <>
      {TYPES.map(cat => (
        <div key={cat.name} className="my-4">
          <h4 onClick={(e) => serveTypesAndCategory(e, null)}>{cat.name}</h4>
          <ul className="ml-4 space-y-2">
            {cat.subCategories.map(subCat => (
              <li
                key={subCat}
                onClick={(e) => serveTypesAndCategory(e, cat)}
              >
                {subCat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
