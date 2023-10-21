import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const DesktopNavigationBar = () => {
  return (
    // Will be 3 columns, name at the left, search middle and icon and notification right
    <div className="flex bg-[#160F30] justify-between items-center px-6 py-3 rounded-lg">
      <div className="flex items-center w-3/4">
        <span className="text-lg">DevShare</span>
        <Input className="ml-40 w-1/2 bg-transparent border border-[#3d3d3d] focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <Avatar>
        <AvatarImage
          src="https://github.com/AmoabaKelvin.png"
          alt="AmoaKelvin"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default DesktopNavigationBar;
