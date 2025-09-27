import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { Signup } from './Signup'

export function Dashboard() { 

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <Sidebar/>
      <div>
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">  
          <CreateContentModal open={openModal} onClose={() => {setOpenModal(false)}} />  
            <div className='flex justify-end gap-4'>
              <Button onClick={() => (setOpenModal(true))} variant='primary' text="Add Content" size='md' startIcon={<PlusIcon/>} />
              <Button variant='secondary' text="Share Brain" size='md' startIcon={<ShareIcon/>}/>
            </div>

          <div className="flex gap-4">
            <Card type='youtube' link='https://www.youtube.com/watch?v=POSqmsH4ZnU' title='First Video'/>
            <Card type='twitter' link='https://x.com/Cristiano/status/1966450460321030538' title='First Tweet'/>
          </div>
        </div>
    </div>
  </div>
  )
}
 

