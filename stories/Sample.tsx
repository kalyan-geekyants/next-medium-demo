import React from 'react';

type Props = {
    message: string;
}

const Sample = ({message}: Props) => {
  return (
    <div>{message}</div>
  )
}

export default Sample;