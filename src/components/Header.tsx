/* eslint-disable react/no-unescaped-entities */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoIcon, LeafIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="pt-safe z-0 flex w-full shrink-0 overflow-visible">
        <div className="z-10 flex w-full items-center justify-between overflow-visible px-8 py-6 text-gray-700">
          <Dialog>
            <DialogTrigger>
              <Button
                asChild
                variant={"outline"}
                className="mb-2 h-11 w-11 rounded-full p-2.5 shadow-md"
              >
                <div>
                  <InfoIcon className="h-8 w-8" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-2">About This App</DialogTitle>
                <DialogDescription>
                  MyFridgePal is a free-to-use app and database for keeping
                  track of and notifying you about the food currently in your
                  fridge. It also helps you plan meals to minimise your amount
                  of food waste, or give unneeded extras to your community.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="text-center">
            <h6 className="mt-3 text-sm">Welcome back, Alexander</h6>
            <h5 className="gradient-text -mt-2 text-3xl font-bold leading-relaxed text-blue-400">
              MyFridgePal
            </h5>
          </div>

          <Dialog>
            <DialogTrigger>
              <Button
                asChild
                variant={"outline"}
                className="mb-2 h-11 w-11 rounded-full p-2.5 shadow-md"
              >
                <div>
                  <LeafIcon className="h-8 w-8" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className=" flex flex-col items-center justify-center">
                  <LeafIcon className="mb-2 h-10 w-10 text-green-500" />
                  <div className="text-2xl text-gray-600">Your Impact</div>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col items-center">
                    <h3 className="gradient-eco pb-4 text-5xl font-black leading-relaxed">
                      1.5kt CO
                      <sub className="gradient-eco pb-4 text-3xl font-black leading-relaxed">
                        2
                      </sub>
                    </h3>
                    <p>
                      Thank you for helping meet our goal of creating a
                      community of responsible, sustainable consumers at UVA.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Header;
