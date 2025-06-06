import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BookedData, editBookingDetail } from "@/features/itemSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
interface MyBookingProps {
  data: BookedData;
  setStatus: (status: string) => void;
}

function AlertDialogUtils({ data, setStatus }: MyBookingProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleCancel = () => {
    dispatch(
      editBookingDetail({ data: data, status: "cancelled", id: data._id })
    );
    setStatus("cancelled");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex justify-center cursor-pointer items-center gap-2 w-45 py-1 rounded-lg  bg-red-600 text-gray-50"
          variant="outline"
        >
          cancel booking
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleCancel}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default AlertDialogUtils;
