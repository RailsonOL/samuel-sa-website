export default function GridItems (props) {
  const { itemsForGrid, toPage } = props

  return (
    <div className='widget_list_movies'>
      <ul className='post-lst rw rcl1 rcl2a rcl3b rcl3c rcl4d rcl4e'>
        <PostItem itemsForGrid={itemsForGrid} toPage={toPage} />
      </ul>
    </div>
  )
}

const PostItem = props => {
  const itemsForGrid = [{
    img: '/flayers/1.png'
  },
  {
    img: '/flayers/1.png'
  },
  {
    img: '/flayers/1.png'
  },
  {
    img: '/flayers/1.png'
  },
  {
    img: '/flayers/2.png'
  },
  {
    img: '/flayers/2.png'
  },
  {
    img: '/flayers/2.png'
  },
  {
    img: '/flayers/2.png'
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
