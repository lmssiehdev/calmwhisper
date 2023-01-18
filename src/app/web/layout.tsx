import { SoundProvider } from "@/context/soundContext";
import DynamicIsland from "@/app/web/components/DynamicIsland";

export default function WebPlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SoundProvider>
      <>
        <div className="pt-5 pb-20 px-2 mx-auto ">
          <div className="fixed left-0 right-0 mx-auto w-full max-w-[500px] px-2 z-10 ">
            <DynamicIsland />
          </div>
        </div>
        <div className="mx-auto max-w-[600px]">{children}</div>
      </>
    </SoundProvider>
  );
}
