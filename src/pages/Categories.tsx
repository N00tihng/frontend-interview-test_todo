/* VENDOR */
import { useSelector } from "react-redux"

/* APPLICATION */
import { ListItem } from "../components/ListItem"
import { getAllCategories } from "../features/categoriesSlice"
import NothingFound from "../components/NothingFound"

export const Categories = () => {
    const categories = useSelector(getAllCategories)

    return (
        <ul className="max-w-[1440px] mx-auto bg-white flex flex-col gap-[30px] mt-[60px]">
            {categories.map((category) => (
                <ListItem key={category.id} item={category} />
            ))}
            {categories.length === 0 && (
                <NothingFound text="Нет ни одной категории? Создайте!" />
            )}
        </ul>
    )
}
