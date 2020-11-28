import React, { SVGAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default (): SVGAttributes<SVGSVGElement> & JSX.Element => {
  return (
    <FontAwesomeIcon
      icon={faBookOpen}
    />
  )
}
