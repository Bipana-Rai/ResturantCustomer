import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
interface menuProps {
  setShowOrder: (showOrder: boolean) => void;
  setShowTakeAwayOrder: (showTakeAwayOrder: boolean) => void;
}
function PopoverDemo({ setShowOrder, setShowTakeAwayOrder }: menuProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleDineIn = () => {
    setShowOrder(true);

    setIsPopoverOpen(false);
  }; // Close Popover
  const handleTakeAway = () => {
    setShowTakeAwayOrder(true);
    setIsPopoverOpen(false); // Close Popover
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button  variant={null}  className="cursor-pointer bg-green-600 focus:bg-green-500 text-gray-200">
          Place Order
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full h-30 flex flex-col justify-between ">
        <h4 className="font-medium text-center leading-5">
          How would you like to receive your order ?
        </h4>

        <div className="flex justify-around">
          <Button
           variant={null} 
            className="border-2 cursor-pointer  border-gray-500 bg-white text-black"
            onClick={handleDineIn}
          >
            Dine In
          </Button>

          <Button className="cursor-pointer" onClick={handleTakeAway}>Take Away</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default PopoverDemo;
