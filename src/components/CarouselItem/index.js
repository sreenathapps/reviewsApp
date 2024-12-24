import './index.css'

const CarouselItem = props => {
  const {each} = props
  const {username, imgUrl, companyName, description} = each

  return (
    <li className="carousel-item">
      <img className="icon" src={imgUrl} alt={username} />
      <p className="user-name">{username}</p>
      <p className="company">{companyName}</p>
      <p className="description">{description}</p>
    </li>
  )
}

export default CarouselItem
