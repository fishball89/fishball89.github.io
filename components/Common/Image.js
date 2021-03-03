import { useAmp } from 'next/amp'

const Image = ({ className, src, width, height }) => (
  <div className={className}>
    {
      useAmp() ? (
        <amp-img
          src={src}
          width={width}
          height={height}
          layout="responsive"
        />
      ) : (
        <img
          src={src}
          width={width}
          height={height}
        >
        </img>
      )
    }
  </div>
)

export default Image
