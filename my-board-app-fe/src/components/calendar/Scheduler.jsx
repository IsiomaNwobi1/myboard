import { Calendar } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Scheduler() {
    
    const [tasks, setTasks] = useState([]);
    const userId = localStorage.getItem('userId');


  
    useEffect(() => {
      const accessToken = localStorage.getItem('token');
      const fetchTasks = async () => {
          try {
              const response = await axios.get(`http://localhost:8080/api/v1/task/all-tasks/${userId}`, {
                  headers: { Authorization: `Bearer ${accessToken}` }
              });
              
              setTasks(response.data);  
              console.log('Fetched tasks:', response.data);
          } catch (error) {
              console.error('Error fetching tasks:', error);
          }
      };

      fetchTasks();
  }, [userId]); 

    const getColorByStatus = (status) => {
      switch (status) {
          case 'PENDING':
              return '#932F19'; 
          case 'IN_PROGRESS':
              return '#FFA500'; 
          case 'COMPLETED':
              return '#027A48'; 
          default:
              return '#000000'; 
      }
  };

  const formattedTasks = tasks.map(task => ({
    id: task.id,
    title: task.title,
    start: task.deadline, 
    description: task.description, 
    priorityLevel: task.priorityLevel, 
    color: getColorByStatus(task.status) 
    
    
}));

  return (
    <div className='w-[84.4%] z-[-1]absolute top-0 right-0 mt-[10rem]'>
        <FullCalendar
        plugins={[dayGridPlugin,  interactionPlugin]}
        initialView="dayGridMonth" 
        headerToolbar={{
          start: 'prev', 
          center: 'title',
          end: 'next',
        }}
        height={'618px'}
        events={formattedTasks}
        eventDisplay="block" 
        
      />
    </div>
  )
}
export default Scheduler