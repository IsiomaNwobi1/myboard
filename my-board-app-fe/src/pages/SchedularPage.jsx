import Scheduler from "../components/calendar/Scheduler";
import SchedulerHeader from "../components/calendar/SchedulerHeader";
import SideBar from "../components/default_dashboard/sideBar/SideBar";

const SchedularPage = () => {
  return (
    <>
      <div className="flex ">
        <SideBar />
        <SchedulerHeader />
      </div>
      <Scheduler />
    </>
  );
};

export default SchedularPage;
