import React from 'react'
import { Button } from '../ui/button'
import { Plus, Trash } from 'lucide-react'
import { Separator } from '../ui/separator'

interface PageHeaderProps {
    title: string
    description?: string
    addButtonName?: string
    showAddButton?: boolean
    showDeleteButton?: boolean
    onAddClick?: ()=> void
    onDeleteClick?: ()=> void
    addLoading?: boolean
    deleteLoading?: boolean
    disabledAdd?: boolean
    disabledDelete?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    addButtonName = "Add New",
    showAddButton = true,
    showDeleteButton = false,
    onAddClick,
    onDeleteClick,
    addLoading = false,
    deleteLoading = false,
    disabledAdd = false,
    disabledDelete = false,
}) => {
    return (
        <div className='flex flex-1 flex-col space-y-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
                    <p className='text-sm text-muted-foreground'>{description}</p>
                </div>
                <div className='flex items-center gap-5'>
                    {showAddButton && (
                        <Button disabled={disabledAdd} loading={deleteLoading} onClick={onAddClick}>
                            <Plus className='mr-2 h-4 w-4' /> {addButtonName ?? "Add New"}
                        </Button>
                    )}
                    {showDeleteButton && (
                        <Button disabled={disabledDelete} loading={addLoading} onClick={onDeleteClick}>
                            <Trash className='mr-2 h-4 w-4' /> Delete
                        </Button>
                    )}
                </div>
            </div>
            <Separator />
        </div>
    )
}

export default PageHeader
