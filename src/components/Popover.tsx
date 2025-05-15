import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface menuProps{
  setShowOrder:(showOrder:boolean)=>void
}
function PopoverDemo({setShowOrder}:menuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" >Place Order</Button>
      </PopoverTrigger>
      <PopoverContent className="w-83 h-30 flex flex-col justify-between ">
        <h4 className="font-medium text-center leading-5">
          How would you like to receive your order ?
        </h4>

        <div className="flex justify-around">
          <Button className="border-2 border-gray-500 bg-white text-black" onClick={()=>setShowOrder(true)}>
            Dine In
          </Button>

          <Button>Take Away</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default PopoverDemo;
