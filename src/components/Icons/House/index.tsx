import React, { SVGAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default (): SVGAttributes<SVGSVGElement> & JSX.Element => {
  return (
    <FontAwesomeIcon
      icon={faHome}
    />
  )
}
