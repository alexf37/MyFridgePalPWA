/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useRef, useState } from "react";
import type { GlobalState, PantryItem } from "~/types/global";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoIcon, LeafIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DatePicker } from "~/components/DatePicker";

function FoodListItem({
  name,
  daysLeft,
  src,
  type,
}: {
  name: string;
  daysLeft: number;
  src: string;
  type: "Leftover" | "Ingredient";
}) {
  return (
    <li className="mx-4 flex h-24 items-center justify-start gap-4 rounded-3xl bg-white px-6 py-4 shadow-[0rem_0rem_0.9rem_0.3rem_rgb(0,0,0,0.05)]">
      <img src={src} alt="" className="h-16 w-16 rounded-2xl" />
      <div className="flex flex-col">
        <h5 className="-mb-1 text-xs font-semibold text-gray-500">{type}</h5>
        <h6 className="text-xl font-semibold">{name}</h6>
      </div>
      <div className="ml-auto text-center">
        <h6 className="text-2xl font-bold">{daysLeft}</h6>
        <h5 className="-mb-1 text-xs font-semibold text-gray-500">Days</h5>
      </div>
    </li>
  );
}

const Home = ({
  appState,
  setAppState,
}: {
  appState: GlobalState;
  setAppState: () => void;
}) => {
  const formFile = useRef<HTMLInputElement>();
  const formLabel = useRef<HTMLInputElement>();
  const formDate = useRef<HTMLInputElement>();

  return (
    <>
      <ScrollArea className="h-full w-full overflow-visible">
        <ul className="space-y-4 overflow-visible py-8">
          {appState.myPantry.map((item) => (
            <FoodListItem
              key={item.id}
              name={item.name}
              daysLeft={item.daysLeft}
              src={item.img}
              type={item.type}
            />
          ))}
        </ul>
      </ScrollArea>
      <Dialog>
        <DialogTrigger>
          <Button
            asChild
            variant={"outline"}
            className="relative bottom-5 z-20 ml-auto mr-5 flex h-20 w-20 items-center justify-center rounded-full border bg-white p-8 text-center text-2xl font-bold leading-none text-slate-700 shadow-md"
          >
            <div>+</div>
          </Button>
        </DialogTrigger>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formLabel.current.value);
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add to Fridge</DialogTitle>
              <DialogDescription>
                Add some new food to your fridge. Click "Add" when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Label
                </Label>
                <Input
                  id="name"
                  placeholder="Bok Choy"
                  className="col-span-3"
                  ref={formLabel}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="expdate" className="text-right">
                  Exp. Date
                </Label>
                <DatePicker className="col-span-3 flex w-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="img" className="text-right">
                  Exp. Date
                </Label>
                <Input
                  id="name"
                  placeholder="Bok Choy"
                  className="col-span-3"
                  type="file"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default Home;
