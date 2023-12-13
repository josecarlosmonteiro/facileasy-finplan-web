'use client';

import { useEffect, useRef } from "react";
import { Chart as ChartJS } from 'chart.js/auto';

export function Chart() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = "!w-full !h-full";

    new ChartJS(canvas, {
      type: 'bar',
      data: {
        labels: ['moradia', 'alimentação', 'lazer', 'pets'],
        datasets: [{
          label: 'Despesas gerais',
          data: [1230, 800, 500, 200],
        }],
      },
      options: {
        responsive: true,
        layout: {
          autoPadding: true
        },
      },
    });

    chartRef.current?.appendChild(canvas);

    return () => chartRef.current?.removeChild(chartRef.current.children[0]);
  }, []);

  return (
    <div ref={chartRef} className="w-full h-full"></div>
  )
}