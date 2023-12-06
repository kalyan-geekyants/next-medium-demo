import React from 'react'

interface SampleProps {
    title: string;
    bgColor?: string;
    color?: string;
}

const Sample = ({title,bgColor, color, ...props }: SampleProps) => {
  return (
    <div style={{backgroundColor: `${bgColor}`,color:`${color}`, width: 'auto'}}>{title}</div>
  )
}

export default Sample;