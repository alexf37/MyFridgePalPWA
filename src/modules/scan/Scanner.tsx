/* eslint-disable @next/next/no-img-element */
import { Camera, type CameraType } from "react-camera-pro";
import React, {
  useState,
  useRef,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";

import {
  ScanLineIcon,
  RotateCcwIcon,
  ArrowBigLeftIcon,
  CheckIcon,
} from "lucide-react";

const Scanner = ({
  image,
  setImage,
  setShowScanner,
}: {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
  setShowScanner: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const camera = useRef<CameraType>(null);
  useEffect(() => {
    void navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
  }, []);
  return (
    <div className="fixed inset-0 z-50 h-full w-full">
      {showImage && (
        <img
          className="z-50"
          src={image?.toString() ?? ""}
          alt="scanned image"
        />
      )}
      <div className="fixed inset-0 z-50 h-screen w-screen">
        <Camera
          aspectRatio="cover"
          facingMode="environment"
          ref={camera}
          errorMessages={{
            noCameraAccessible:
              "No camera device accessible. Please connect your camera or try a different browser.",
            permissionDenied:
              "Permission denied. Please refresh and give camera permission.",
            switchCamera:
              "It is not possible to switch camera to different one because there is only one video device accessible.",
            canvas: "Canvas is not supported.",
          }}
        />
      </div>

      <button
        className="absolute bottom-14 left-1/4 z-50 flex h-12 w-12 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-white p-2 text-slate-700 shadow-lg"
        onClick={() => {
          if (!showImage) {
            setShowScanner(false);
          } else {
            setShowImage(!showImage);
          }
        }}
      >
        {!showImage ? (
          <ArrowBigLeftIcon className="h-8 w-8" />
        ) : (
          <RotateCcwIcon className="h-6 w-6" />
        )}
      </button>
      <button
        className="absolute bottom-8 left-1/2 z-50 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-white p-2 text-slate-700 shadow-lg"
        onClick={() => {
          if (camera.current) {
            const photo = camera.current.takePhoto();
            console.log(photo);
            setImage(photo);
            if (showImage) {
              setShowScanner(false);
            } else {
              setShowImage(!showImage);
            }
          }
        }}
      >
        {!showImage ? (
          <ScanLineIcon className="h-10 w-10" />
        ) : (
          <CheckIcon className="h-10 w-10" />
        )}
      </button>
    </div>
  );
};

export default Scanner;
