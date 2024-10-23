import s from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({ loadMore }) => {
    return (
        <button onClick={loadMore} className={s.button}>Load more</button>
    )
}

export default LoadMoreBtn