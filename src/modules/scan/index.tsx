/* eslint-disable @next/next/no-img-element */
import { Camera, type CameraType } from "react-camera-pro";
import React, { useState, useRef, useEffect, useMemo } from "react";

import { ScanLineIcon, RotateCcwIcon, ArrowBigLeftIcon } from "lucide-react";
import Scanner from "./Scanner";

const Scan = () => {
  const [showScanner, setShowScanner] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== undefined)
      void navigator.mediaDevices.enumerateDevices();
  }, []);

  if (showScanner) {
    return (
      <Scanner
        image={image}
        setImage={setImage}
        setShowScanner={setShowScanner}
      />
    );
  }
  return;
};

export default Scan;
