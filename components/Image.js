import NextImage from 'next/future/image'
import { transformImageUrl } from '@kentico/kontent-delivery'

const getLoader = (src) => {
  return srcIsKontentAsset(src) ? kontentImageLoader : undefined
}

const srcIsKontentAsset = (src) => {
  try {
    const { hostname } = new URL(src)
    return hostname.endsWith('.kc-usercontent.com')
  } catch {
    return false
  }
}

const kontentImageLoader = ({ src, width, quality = 75 }) => {
  return new transformImageUrl(src)
    .withWidth(width)
    .withQuality(quality)
    .withCompression('lossless')
    .withAutomaticFormat()
    .getUrl()
}

export default function Image(props) {

  const loader = getLoader(props.src)

  return <NextImage {...props} loader={loader} />
}
