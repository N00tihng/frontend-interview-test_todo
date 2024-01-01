/* VENDOR */
import React, { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

/* APPLICATION */
import { Input } from "../ui/Input"
import { Select } from "../ui/Select"
import { Textarea } from "../ui/Textarea"
import { createTask } from "../features/tasksSlice"
import { getCategoriesState } from "../features/categoriesSlice"

interface CreateTaskProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateTask: FC<CreateTaskProps> = ({ setModal }) => {
    const { categories } = useAppSelector(getCategoriesState)
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>("")
    const [category, setCategory] = useState<number>(0)
    const [description, setDescription] = useState<string>("")

    function clearForm() {
        setName("")
        setDescription("")
        setCategory(0)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === "") return
        dispatch(createTask({ name, description, category }))
        clearForm()
        setModal(false)
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setModal(false)
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
                <Input
                    value={name}
                    label={"Название"}
                    placeholder={"Введите название"}
                    setValue={setName}
                    required
                />
                <Select
                    options={categories}
                    value={category}
                    label={"Категории"}
                    placeholder={"Выберете категорию"}
                    setValue={setCategory}
                />
            </div>
            <Textarea
                value={description}
                label={"Описание"}
                placeholder={"Введите описание"}
                setValue={setDescription}
            />
            <div className="flex gap-[30px] h-[64px]">
                <button
                    className="button button-default"
                    onClick={handleCancel}
                    type="button"
                >
                    Отмена
                </button>
                <button className="button button-indigo" type="submit">
                    Подтвердить
                </button>
            </div>
        </form>
    )
}

export default CreateTask
