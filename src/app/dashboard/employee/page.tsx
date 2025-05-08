'use client'
import { useState } from 'react';
import PageContainer from '@/components/layout/page-container';
import { AlertModal } from '@/components/modal/AlertModal';
import PageHeader from '@/components/layout/PageHaeder';

const Page = () => {

  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        <PageHeader
          title='Employees'
          description='Manage employees'
          onDeleteClick={handleDelete}
          showDeleteButton={true}
        />
        <AlertModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={()=> {}}
          loading={false}
        />
      </div>
    </PageContainer>
  );
}

export default Page;
