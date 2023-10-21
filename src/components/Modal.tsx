import useMediaQuery from "@/hooks/use-media-query";
import { Dispatch, SetStateAction, useState } from "react";
import { Drawer } from "vaul";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  dialogOnly?: boolean;
  showModal?: boolean;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
};
export default function Modal({
  children,
  onClose,
  showModal,
  setShowModal,
  dialogOnly = false,
}: Props) {
  const { isMobile } = useMediaQuery();
  const [snap, setSnap] = useState<number | string | null>("148px");

  const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
    // if (preventDefaultClose && !dragged) {
    if (!dragged) {
      return;
    }
    // fire onClose event if provided
    onClose && onClose();

    // if setShowModal is defined, use it to close modal
    if (setShowModal) {
      setShowModal(false);
    }
    // else, this is intercepting route @modal
    // else {
    //   router.back();
    // }
  };

  console.log(isMobile);
  if (isMobile && !dialogOnly) {
    return (
      <Drawer.Root
        // snapPoints={["148px", "355px", 1]}
        // activeSnapPoint={snap}
        // setActiveSnapPoint={setSnap}
        open={setShowModal ? showModal : true}
        onOpenChange={(open) => {
          if (!open) {
            closeModal({ dragged: true });
          }
        }}
      >
        <Drawer.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Drawer.Portal>
          <Drawer.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-background max-h-[96%] p-4 "
              // className
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-1 h-1 w-12 rounded-full bg-gray-300 " />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        {/* <DialogTrigger>{trigger}</DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
