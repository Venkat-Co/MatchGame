import './index.css'

const ImageItem = props => {
  const {imageDetails, clickImageItem} = props
  const {thumbnailUrl} = imageDetails

  const onClickImageItem = () => {
    clickImageItem(thumbnailUrl)
  }

  return (
    <li className="image-list-item-container">
      <button className="img-btn" type="button" onClick={onClickImageItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="item-img" />
      </button>
    </li>
  )
}
export default ImageItem
