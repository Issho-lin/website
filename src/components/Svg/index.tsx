import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import styles from './index.module.scss'

type TP = {
  width?: number
  height?: number
  name: string
  className?: string
  fill?: string
}

const Svg: React.FC<TP> = React.memo(
  ({ width = 24, height = 24, name, className }) => {
    return (
      // <svg
      //   className={cx(styles.svg, className)}
      //   aria-hidden="true"
      //   style={{ width, height }}
      //   fill={fill}
      // >
      //   <use xlinkHref={`#icon-${name}`} />
      // </svg>
      <span className={className} >
        <Image src={`/svg/${name}.svg`} width={width} height={height} alt=""/>
      </span>
    )
  },
)
export default Svg
