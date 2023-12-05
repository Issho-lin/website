import cx from 'classnames'

type TP = {
  name: string
  size?: number
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  color?: string
  title?: string
}

const Icon: React.FC<TP> = ({ name, size = 14, onClick, className, color, title }) => {
  return (
    <i
      className={cx('iconfont', `icon-${name}`, className)}
      style={{ fontSize: size, color }}
      onClick={onClick}
      title={title}
    />
  )
}
export default Icon