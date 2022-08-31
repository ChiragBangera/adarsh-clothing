import './cat-container.styles.scss'
import CategoryItem from '../category-item/category-item.component'




const CatContainer = ({cats}) => {
    return (
        <div className="categories-container">
            {cats.map((cat) => {
                return (
                    <CategoryItem key={cat.id} category={cat} />
                )
            })}
        </div>
    )
}

export default CatContainer