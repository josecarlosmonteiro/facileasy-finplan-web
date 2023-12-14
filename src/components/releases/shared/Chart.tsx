'use client';

import { useEffect, useRef } from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { ChartData } from "chart.js";
// import { ChartDataSet } from "chart.js";

type Props = {
  labels?: string[];
  data: ChartData;
}

export function Chart({ labels, data }: Props) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = "w-full h-full";

    new ChartJS(canvas, {
      type: 'bar',
      data,
    });

    chartRef.current?.appendChild(canvas);
    return () => chartRef.current?.removeChild(chartRef.current.children[0]);
  }, []);

  return (
    <div ref={chartRef} className="w-full h-full"></div>
  )
}