export default function GridItems (props) {
  const { itemsForGrid, toPage } = props

  return (
    <div className='widget_list_movies'>
      <ul className='post-lst rw rcl2 rcl4a'>
        <PostItem itemsForGrid={itemsForGrid} toPage={toPage} />
      </ul>
    </div>
  )
}

const PostItem = props => {
  const itemsForGrid = [{
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-25-at-00.26.23-1.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-12-at-22.51.26-1.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-25-at-00.26.24.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-12-at-22.51.26-1.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-25-at-00.26.24.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-12-at-22.51.26-1.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-25-at-00.26.24.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-12-at-22.51.26-1.jpeg'
  },
  {
    img: 'https://psdflyerbr.net/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-25-at-00.26.24.jpeg'
  }]
  return itemsForGrid.map((item, index) => (
    <li className="movies" key={'a' + index}>
        <article className="post dfx fcl movies">
          <div className="post-thumbnail or-1">
            <figure>
              <img loading="lazy"
                src={item.img}
                alt="aa" />
            </figure>
          </div>
        </article>
      </li>
  ))
}
