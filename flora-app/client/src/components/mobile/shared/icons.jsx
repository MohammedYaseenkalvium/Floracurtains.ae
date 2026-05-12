export default function Icon({
  name,
  className = '',
  style = {},
  fill = false,
  children,
}) {
  const content = name ?? children

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: fill
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        lineHeight: 1,
        userSelect: 'none',
        ...style,
      }}
    >
      {content}
    </span>
  )
}