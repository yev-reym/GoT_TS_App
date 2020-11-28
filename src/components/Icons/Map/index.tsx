import React, { SVGAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'

export default (): SVGAttributes<SVGSVGElement> & JSX.Element => {
  return (
    <FontAwesomeIcon
      icon={faMap}
    />
  )
}
