import React from 'react'
import cx from 'classnames'

interface IProps {
  name: string
  size?: number
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  color?: string
  title?: string
}

const Icon: React.FC<IProps> = React.memo(({ name, size = 14, onClick, className, color, title }) => {
  return (
    <i
      className={cx('iconfont', `icon-${name}`, className)}
      style={{ fontSize: size, color }}
      onClick={onClick}
      title={title}
    />
  )
})
export default Icon