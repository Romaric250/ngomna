import { Button } from '@/components/ui/button';
import Sidebar from '../_components/sidebar';
import TabsComponents from '../_components/tabs';
import Welcome from '../_components/welcome';

const VroumDashboard = async () => {
  return (
    <>
      <Welcome />
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Button size="lg" className="w-full">
          Renew License
        </Button>
        <Button size="lg" variant="outline" className="w-full">
          Update Profile
        </Button>
        <Button size="lg" variant="outline" className="w-full">
          Contact Support
        </Button>
      </div>
      <TabsComponents />
    </>
  );
};

export default VroumDashboard;
